import Workshop from './entities/workshop.entity';

export default class WorkshopsMapper {
  public static toDTO(workshop: Workshop) {
    return {
      id: workshop.id,
      name: workshop.name,
      description: workshop.description,
      attendees: workshop.attendees,
      manager: workshop.manager,
    };
  }
}
