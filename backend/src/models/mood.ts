import { Model } from 'objection';

export default class Mood extends Model {
  id!: string;
  happiness!: number;
  description!: string;
  timestamp!: Date;

  static tableName = 'mood';
}
