import { Model } from 'objection';

export default class Mood extends Model {
  id!: string;
  happiness!: number;
  description!: string;
  timestamp!: Date;
  sentiment!: number;

  static tableName = 'mood';
}
