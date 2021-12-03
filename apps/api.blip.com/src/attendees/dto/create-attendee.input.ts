import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export default class CreateAttendeeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
