import express from 'express';
import { pool } from '../dbConnection.js';

const router = express.Router();

router.get ('/get-tasks', async (req, res) => {
    try {
        const result = await pool.query('SELECT title, task FROM todos WHERE status = \'CREATED\'');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});

router.post('/create-task', async (req, res) => {
    const title = req.body.title;
    const task = req.body.task;

    try {
        const result = await pool.query
        ('INSERT INTO todos (title, task, status, is_completed) VALUES ($1, $2, $3, $4)', 
        [title, task, 'CREATED', 'FALSE']);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json ({ error: err });
    }
});

export default router;