
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

// Create connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '1234',
  database: process.env.DB_NAME || 'dbms',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
