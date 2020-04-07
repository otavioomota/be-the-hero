import knex from 'knex';
import configuration from '../config/knexfile';

class Database {
  constructor(){
    this.connection = knex(configuration.development);
  }
}

export default new Database().connection;
