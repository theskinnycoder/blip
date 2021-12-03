import { ObjectType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsPhoneNumber, Length } from 'class-validator';
import { Column, Entity, Index, ManyToMany } from 'typeorm';
import Base from '../../app/entities/base.entity';
import Workshop from '../../workshops/entities/workshop.entity';

@Entity('attendee')
@ObjectType()
export default class Attendee extends Base {
  @Length(6, 20, { message: 'must be 6-20 characters long' })
  @IsNotEmpty({ message: 'a display name is required' })
  @Column({ name: 'display_name', unique: true })
  @Field({ nullable: false })
  displayName: string;

  @Index()
  @IsEmail(undefined, { message: 'must be a valid email address' })
  @IsNotEmpty({ message: 'an email is required' })
  @Column({ length: 50, nullable: false, unique: true })
  @Field({ nullable: false })
  email: string;

  @Index()
  @IsPhoneNumber('IN', { message: 'must be a valid phone number' })
  @IsNotEmpty({ message: 'an phone number is required' })
  @Column({ name: 'phone_number', length: 12, nullable: false, unique: false })
  @Field({ nullable: false })
  phoneNumber: string;

  @ManyToMany(() => Workshop, (workshop: Workshop) => workshop.attendees)
  @Field(() => [Workshop], { defaultValue: [] })
  workshops: Workshop[];
}
