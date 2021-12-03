import { Module } from '@nestjs/common';
import AttendeesService from './attendees.service';
import AttendeesResolver from './attendees.resolver';

@Module({
  providers: [AttendeesResolver, AttendeesService],
})
export default class AttendeesModule {}
