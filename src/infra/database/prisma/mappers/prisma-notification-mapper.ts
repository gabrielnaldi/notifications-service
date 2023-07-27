import { Notification } from '@application/entities/notification';
import { NotificationContent } from '@application/entities/notification-content';
import { Notification as PrismaNotification } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      recipientId: notification.recipientId,
      content: notification.content.value,
      category: notification.category,
      createdAt: notification.createdAt,
      readAt: notification.readAt,
    };
  }

  static toDomain(prismaNotification: PrismaNotification) {
    return new Notification(
      {
        category: prismaNotification.category,
        content: new NotificationContent(prismaNotification.content),
        recipientId: prismaNotification.recipientId,
        canceledAt: prismaNotification.canceledAt,
        createdAt: prismaNotification.createdAt,
        readAt: prismaNotification.readAt,
      },
      prismaNotification.id,
    );
  }
}
