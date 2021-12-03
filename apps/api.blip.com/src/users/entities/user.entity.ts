import { ObjectType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsPhoneNumber, Length } from 'class-validator';
import { Column, Entity, Index, OneToMany, PrimaryColumn } from 'typeorm';
import Base from '../../app/entities/base.entity';
import Workshop from '../../workshops/entities/workshop.entity';

@Entity('user')
@ObjectType()
export default class User extends Base {
  @PrimaryColumn({ nullable: false })
  @Field({ nullable: false })
  @IsNotEmpty({ message: 'a uid is required' })
  uid: string;

  @Length(6, 20, { message: 'must be 6-20 characters long' })
  @IsNotEmpty({ message: 'a display name is required' })
  @Column({ name: 'display_name', unique: true })
  @Field({ nullable: false })
  displayName: string;

  @Index()
  @IsEmail(undefined, { message: 'must be a valid email address' })
  @IsNotEmpty({ message: 'an email is required' })
  @Column({ length: 50, unique: true, nullable: false })
  @Field({ nullable: false })
  email: string;

  @IsPhoneNumber('IN', { message: 'must be a valid phone number' })
  @IsNotEmpty({ message: 'phone number is required' })
  @Column({ name: 'phone_number', length: 15, nullable: true, unique: false })
  @Field(() => String, { nullable: true })
  phoneNumber?: string;

  @OneToMany(() => Workshop, (workshop: Workshop) => workshop.manager)
  @Field(() => [Workshop])
  workshops: Workshop[];
}
