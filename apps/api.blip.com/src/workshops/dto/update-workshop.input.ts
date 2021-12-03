import CreateWorkshopInput from './create-workshop.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export default class UpdateWorkshopInput extends PartialType(
  CreateWorkshopInput,
) {
  @Field(() => ID!, { nullable: false })
  id: string;
}
