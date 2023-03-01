import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
    constructor(private readonly prisma: PrismaService) {}

    @Get()
    async list() {
        const notificationList = await this.prisma.notification.findMany();

        return notificationList;
    }

    @Post()
    async create() {
        await this.prisma.notification.create({
            data: {
                id: randomUUID(),
                category: 'Financeiro',
                content: 'Você recebeu uma nova notificação',
                recipientId: randomUUID(),
            },
        });
    }
}
