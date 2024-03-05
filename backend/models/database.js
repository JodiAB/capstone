import mysql from 'mysql2';
import { config } from 'dotenv';

config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}).promise();

const getProducts = async () => {
    const [result] = await pool.query(`SELECT * FROM product`);
    return result;
}

const getProduct = async (id) => {
    const [result] = await pool.query(`SELECT * FROM product WHERE id = ?`, [id]);
    return result;
}

const addProduct = async (name, age) => {
    const [product] = await pool.query(`INSERT INTO product (name, age) VALUES (?, ?)`, [name, age]);
    return getProduct(product.insertid);
}

const upProduct = async (name, age, id) => {
    const [product] = await pool.query(`UPDATE product SET name = ?, age = ? WHERE id = ?`, [name, age, id]);
    return product;
}

export { getProducts, getProduct, addProduct, upProduct };
