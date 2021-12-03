import { Module } from '@nestjs/common';
import WorkshopsService from './workshops.service';
import WorkshopsResolver from './workshops.resolver';

@Module({
  providers: [WorkshopsResolver, WorkshopsService],
})
export default class WorkshopsModule {}
