import dotenv from 'dotenv';

dotenv.config();
const database = {
  host: `${process.env.HOST || `localhost`}`,
  port: Number.parseInt(`${process.env.DATABASE || `3301`}`, 10),
  user: `${process.env.DB_USER || `craftsman`}`,
  password: `${process.env.DB_PASSWORD || `password`}`,
  database: `${process.env.DB_NAME || `scenario`}`,
};
export { database };
