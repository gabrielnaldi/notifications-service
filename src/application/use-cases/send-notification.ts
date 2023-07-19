import { Notification } from '../entities/notification';
import { NotificationContent } from '../entities/notification-content';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  public async execute({
    recipientId,
    content,
    category,
  }: SendNotificationRequest): Promise<SendNotificationResponse> {
    const notification = new Notification({
      recipientId,
      category,
      content: new NotificationContent(content),
    });

    return {
      notification,
    };
  }
}
