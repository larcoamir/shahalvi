import { Injectable } from '@nestjs/common';

@Injectable()
export class CommunityService {
  private items = [
    { id: 1, name: 'Shah Alvi Association', city: 'Aligarh' },
  ];

  findAll() {
    return this.items;
  }
}
