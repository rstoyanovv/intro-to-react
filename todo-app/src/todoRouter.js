import express from 'express';
import { pool } from '../dbConnection.js';

const router = express.Router();

router.get ('/todos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM todos');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});

router.post('/todos', async (req, res) => {
    const task = req.body.task;
    try {
        const result = await pool.query('INSERT INTO todos (task) VALUES ($1) RETURNING *', [task]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json ({ error: err });
    }
});

export default router;