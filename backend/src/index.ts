import express from 'express';
import { Model } from 'objection';
import Knex from 'knex';
import cors from 'cors';
import bodyParser from 'body-parser';

import './env';
import knexConfig from '../knexfile';
import api from './api';

const knex = Knex(knexConfig);
knex.migrate.latest();
Model.knex(knex);

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', api);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
