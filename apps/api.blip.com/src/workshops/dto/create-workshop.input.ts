import { InputType, Field } from '@nestjs/graphql';

@InputType()
export default class CreateWorkshopInput {
  @Field(() => String!)
  name: string;

  @Field(() => String)
  description?: string;
}
