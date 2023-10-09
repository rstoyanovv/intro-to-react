import express from 'express';
import { pool } from '../dbConnection.js';

const router = express.Router();

router.get('/get-tasks', async (req, res) => {
    try {
        const result = await pool.query('SELECT id, title, task FROM todos WHERE is_completed = false');
        const todaysTasks = await pool.query('SELECT title FROM todos WHERE date_of_creating = CURRENT_DATE AND is_completed = false');
        const response = {
            tasks: result.rows,
            todaysTasks: todaysTasks.rows
        }
        res.status(200).json(response);
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
        res.status(500).json({ error: err });
    }
});

router.put('/delete-task', async (req, res) => {
    const id = req.query.id;
    if (!id) {
        return res.status(400).json({ error: 'Missing id parameter' });
    }
    try {
        await pool.query('UPDATE todos SET is_completed = true WHERE id = $1', [id]);
        res.status(200).json({ message: 'Task marked as completed' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});


export default router;