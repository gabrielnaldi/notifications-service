import { Notification } from '../entities/notification';
import { NotificationContent } from '../entities/notification-content';
import { NotificationRepository } from '../repositories/notification-repository';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}

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

    await this.notificationRepository.create(notification);

    return {
      notification,
    };
  }
}
