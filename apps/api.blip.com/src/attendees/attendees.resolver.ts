import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import AttendeesService from './attendees.service';
import Attendee from './entities/attendee.entity';
import CreateAttendeeInput from './dto/create-attendee.input';
import UpdateAttendeeInput from './dto/update-attendee.input';

@Resolver(() => Attendee)
export default class AttendeesResolver {
  constructor(private readonly attendeesService: AttendeesService) {}

  @Mutation(() => Attendee)
  createAttendee(
    @Args('createAttendeeInput') createAttendeeInput: CreateAttendeeInput,
  ) {
    return this.attendeesService.create(createAttendeeInput);
  }

  @Query(() => [Attendee], { name: 'attendees' })
  findAll() {
    return this.attendeesService.findAll();
  }

  @Query(() => Attendee, { name: 'attendee' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attendeesService.findOne(id);
  }

  @Mutation(() => Attendee)
  updateAttendee(
    @Args('updateAttendeeInput') updateAttendeeInput: UpdateAttendeeInput,
  ) {
    return this.attendeesService.update(
      updateAttendeeInput.id,
      updateAttendeeInput,
    );
  }

  @Mutation(() => Attendee)
  removeAttendee(@Args('id', { type: () => Int }) id: number) {
    return this.attendeesService.remove(id);
  }
}
