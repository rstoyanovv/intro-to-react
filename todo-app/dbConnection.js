import pkg from 'pg';
const { Pool } = pkg;
import { dbConnection } from './environment.js';

const pool = new Pool({
    user: dbConnection.user,
    host: dbConnection.host,
    database: dbConnection.database,
    password: dbConnection.password,
    port: dbConnection.port,
});

export { pool };