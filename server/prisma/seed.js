import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

(async () => {
    await prisma.task.deleteMany();
    const task1 = await prisma.task.create({ data: { name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis', createdAt: new Date(), dueDate: new Date() } });
    const task2 = await prisma.task.create({
        data: {
            name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis',
            createdAt: new Date(),
            dueDate: new Date(),
        },
    });
})();
