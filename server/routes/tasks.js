const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    try {
        res.json(await prisma.task.findMany());
    } catch (err) {
        res.status(500).json({ message: 'Error getting tasks' });
    }
});

router.post('/', async (req, res) => {
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
        res.status(500).json({ message: 'Error creating task' });
    }
});

router.delete('/:id', async (req, res) => {
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

module.exports = router;
