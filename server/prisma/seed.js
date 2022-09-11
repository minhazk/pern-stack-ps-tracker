// import { PrismaClient } from '@prisma/client';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async () => {
    await prisma.task.deleteMany();
    await prisma.task.create({ data: { name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis', createdAt: new Date(), dueDate: new Date() } });
    await prisma.task.create({
        data: {
            name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis',
            createdAt: new Date(),
            dueDate: new Date(),
        },
    });
    await prisma.note.create({
        data: {
            title: 'note 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis',
        },
    });
    await prisma.note.create({
        data: {
            title: 'note 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis',
        },
    });
})();
