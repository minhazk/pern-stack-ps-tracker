import dotenv from 'dotenv';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import express from 'express';
dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/tasks', async (req, res) => {
    try {
        res.json(await prisma.task.findMany());
    } catch (err) {
        res.status(500).json({ message: 'Error creating task' });
    }
});

app.post('/tasks', async (req, res) => {
    try {
        res.status(200).json(
            await prisma.task.create({
                data: {
                    name: req.body.name,
                    createdAt: req.body.createdAt,
                    dueDate: req.body.dueDate,
                },
            })
        );
    } catch (err) {
        res.status(500).json({ message: 'Error getting tasks' });
    }
});

app.delete('/tasks/:id', async (req, res) => {
    try {
        res.status(200).json(
            await prisma.task.delete({
                where: { id: req.params.id },
                select: { id: true },
            })
        );
    } catch (err) {
        res.status(500).json({ message: 'Error deleting task' });
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT);
