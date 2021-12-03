import { ObjectType, Field } from '@nestjs/graphql';
import { IsNotEmpty, Length } from 'class-validator';
import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import Base from '../../app/entities/base.entity';
import Attendee from '../../attendees/entities/attendee.entity';
import User from '../../users/entities/user.entity';

@Entity('workshop')
@ObjectType()
export default class Workshop extends Base {
  @Index()
  @IsNotEmpty({ message: 'an email is required' })
  @Column({ type: 'varchar2', length: 50, nullable: false, unique: true })
  @Field({ nullable: false })
  name: string;

  @Column({ type: 'text', length: 1000, nullable: true })
  @Field({ nullable: true })
  @Length(0, 1000)
  description?: string;

  @ManyToMany(() => Attendee, (attendee: Attendee) => attendee.workshops)
  @JoinTable()
  @Field(() => [Attendee], { defaultValue: [] })
  attendees: Attendee[];

  @ManyToOne(() => User, (user: User) => user.workshops)
  @Field(() => User)
  @IsNotEmpty({ message: 'manager must not be empty' })
  manager: User;
}
