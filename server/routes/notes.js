const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.get('/', async (req, res) => {
    try {
        res.json(await prisma.note.findMany());
    } catch (err) {
        res.status(500).json({ message: 'Error getting notes' });
    }
});

router.post('/', async (req, res) => {
    try {
        res.status(200).json(
            await prisma.note.create({
                data: {
                    title: req.body.title,
                    description: req.body.description,
                    createdAt: req.body.createdAt,
                },
            })
        );
    } catch (err) {
        res.status(500).json({ message: 'Error creating note' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        res.status(200).json(
            await prisma.note.delete({
                where: { id: req.params.id },
                select: { id: true },
            })
        );
    } catch (err) {
        res.status(500).json({ message: 'Error deleting note' });
    }
});

module.exports = router;
