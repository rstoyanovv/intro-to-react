import express from 'express';
import bodyParser from 'body-parser';
import todoRouter from './src/todoRouter.js';

const port = 3000;
const path = __dirname + '/src/views/';

const app = express();
app.use(bodyParser.json());
app.use(express.static(path));

app.get('/', function (req, res) {
    res.sendFile(path + "index.html");
  });

app.use('/api', todoRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`);
});