import { Notification } from '@application/entities/notification';

export class NotificationViewModule {
  static toHttp(notification: Notification) {
    return {
      id: notification.id,
      recipientId: notification.recipientId,
      content: notification.content.value,
      readtAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }
}
