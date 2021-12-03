import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export default class CreateUserInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
