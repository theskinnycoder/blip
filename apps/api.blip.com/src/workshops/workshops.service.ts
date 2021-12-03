import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateWorkshopInput from './dto/create-workshop.input';
import UpdateWorkshopInput from './dto/update-workshop.input';
import Workshop from './entities/workshop.entity';

@Injectable()
export default class WorkshopsService {
  constructor(
    @InjectRepository(Workshop)
    private workshopRepository: Repository<Workshop>,
  ) {}

  create(createWorkshopInput: CreateWorkshopInput) {
    return this.workshopRepository.create({ ...createWorkshopInput }).save();
  }

  findAll() {
    return this.workshopRepository.find();
  }

  findOne(id: string) {
    return this.workshopRepository.findOne(id);
  }

  async update(id: string, updateWorkshopInput: UpdateWorkshopInput) {
    const workshop = await this.workshopRepository.findOne(id);
    return this.workshopRepository.save({
      ...workshop,
      ...updateWorkshopInput,
    });
  }

  async remove(id: string) {
    await this.workshopRepository.delete(id);
  }
}
