import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-firebase-jwt';
import { app, credential, auth, initializeApp } from 'firebase-admin';
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class FirebaseAuthStrategy extends PassportStrategy(
  Strategy,
  'firebase-auth',
) {
  private readonly adminApp: app.App;
  private readonly adminAuth: auth.Auth;

  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
    this.adminApp = initializeApp({
      credential: credential.cert({
        projectId: this.configService.get<string>('firebase.project_id'),
        clientEmail: this.configService.get<string>('firebase.client_email'),
        privateKey: this.configService.get<string>('firebase.private_key'),
      }),
    });
    this.adminAuth = auth(this.adminApp);
  }

  async validate(token: string) {
    try {
      const decodedToken = await this.adminAuth.verifyIdToken(token, true);
      if (!decodedToken) {
        throw new UnauthorizedException();
      }
      return decodedToken?.uid;
    } catch (error) {
      console.log(error);
      throw new UnauthorizedException(error, error.message);
    }
  }
}
