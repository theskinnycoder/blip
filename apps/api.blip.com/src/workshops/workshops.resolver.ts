import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import WorkshopsService from './workshops.service';
import Workshop from './entities/workshop.entity';
import CreateWorkshopInput from './dto/create-workshop.input';
import UpdateWorkshopInput from './dto/update-workshop.input';
import { UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from '../firebase/auth.guard';

@Resolver(() => Workshop)
@UseGuards(FirebaseAuthGuard)
export default class WorkshopsResolver {
  constructor(private readonly workshopsService: WorkshopsService) {}

  @Mutation(() => Workshop)
  createWorkshop(
    @Args('createWorkshopInput') createWorkshopInput: CreateWorkshopInput,
  ) {
    return this.workshopsService.create(createWorkshopInput);
  }

  @Query(() => [Workshop!]!, { name: 'workshops' })
  findAll() {
    return this.workshopsService.findAll();
  }

  @Query(() => Workshop!, { name: 'workshop' })
  findOne(@Args('id', { type: () => ID! }) id: string) {
    return this.workshopsService.findOne(id);
  }

  @Mutation(() => Workshop!)
  updateWorkshop(
    @Args('updateWorkshopInput') updateWorkshopInput: UpdateWorkshopInput,
  ) {
    return this.workshopsService.update(
      updateWorkshopInput.id,
      updateWorkshopInput,
    );
  }

  @Mutation(() => Workshop!)
  removeWorkshop(@Args('id', { type: () => ID! }) id: string) {
    this.workshopsService.remove(id);
  }
}
