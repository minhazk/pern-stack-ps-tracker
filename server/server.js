require('dotenv').config();
const cors = require('cors');
const express = require('express');
const taskRouter = require('./routes/tasks');
const noteRouter = require('./routes/notes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRouter);
app.use('/notes', noteRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT);
