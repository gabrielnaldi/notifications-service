import { Notification } from '@application/entities/notification';
import { NotificationRepository } from '@application/repositories/notification-repository';
import { PrismaService } from '../services/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        recipientId: notification.recipientId,
        content: notification.content.value,
        category: notification.category,
        createdAt: notification.createdAt,
        readAt: notification.readAt,
      },
    });
  }
}
