import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from '../validators/create-notification-body';

@Controller('notifications')
export class AppController {
    constructor(private readonly prisma: PrismaService) {}

    @Get()
    async list() {
        const notificationList = await this.prisma.notification.findMany();

        return notificationList;
    }

    @Post()
    async create(@Body() body: CreateNotificationBody) {
        const { recipientId, category, content } = body;

        await this.prisma.notification.create({
            data: {
                id: randomUUID(),
                category,
                content,
                recipientId,
            },
        });
    }
}
