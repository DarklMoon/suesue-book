
// import mysql from "mysql2/promise";

// export async function query({ query, values = [] }) {
//   const dbconnection = await mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     post: process.env.MYSQL_PORT,
//     database: process.env.MYSQL_DATABASE,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//   });

//   try {
//     const [results] = await dbconnection.execute(query, values);
//     dbconnection.end();
//     return results;
//   } catch (error) {
//     throw Error(error.message);
//     return { error };
//   }
// }
import mysql from 'mysql2/promise';

// import { ProductsProps } from './definitions'; // for types

type ProductsProps = {};

export async function callProducts(query: string, data: ProductsProps[]) {
  try {
    const db = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      // Ensure port is a number
      port: Number(process.env.MYSQL_PORT), // or use +process.env.MYSQL_PORT
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    });

    const [result] = await db.execute(query, data);
    await db.end();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}
