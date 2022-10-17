import {Entity, model, property} from '@loopback/repository';

@model()
export class Data extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  weight: string;

  @property({
    type: 'string',
    required: true,
  })
  unitPrice: string;

  @property({
    type: 'string',
    required: true,
    id: true,
  })
  deviceId: number;


  constructor(data?: Partial<Data>) {
    super(data);
  }
}

export interface DataRelations {
  // describe navigational properties here
}

export type DataWithRelations = Data & DataRelations;
