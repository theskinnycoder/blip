import CreateAttendeeInput from './create-attendee.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export default class UpdateAttendeeInput extends PartialType(
  CreateAttendeeInput,
) {
  @Field(() => Int)
  id: number;
}
