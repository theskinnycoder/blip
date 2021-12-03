import { Injectable } from '@nestjs/common';
import CreateAttendeeInput from './dto/create-attendee.input';
import UpdateAttendeeInput from './dto/update-attendee.input';

@Injectable()
export default class AttendeesService {
  create(createAttendeeInput: CreateAttendeeInput) {
    return 'This action adds a new attendee';
  }

  findAll() {
    return `This action returns all attendees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attendee`;
  }

  update(id: number, updateAttendeeInput: UpdateAttendeeInput) {
    return `This action updates a #${id} attendee`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendee`;
  }
}
