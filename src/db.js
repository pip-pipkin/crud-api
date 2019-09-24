import { Pool } from 'pg'
import config from './config/config'

const pool = new Pool({...config.db})

const query = (text, params) => pool.query(text, params);

module.exports = {
  query
}