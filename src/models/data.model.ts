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
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  deviceId: string;


  constructor(data?: Partial<Data>) {
    super(data);
  }
}

export interface DataRelations {
  // describe navigational properties here
}

export type DataWithRelations = Data & DataRelations;
