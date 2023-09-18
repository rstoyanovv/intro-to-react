import express from 'express';
import bodyParser from 'body-parser';
import todoRouter from './src/todoRouter.js';

const port = 3001;

const app = express();
app.use(bodyParser.json());

app.use('/api', todoRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});