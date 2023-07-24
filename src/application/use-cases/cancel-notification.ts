import { NotificationRepository } from '@application/repositories/notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = Promise<void>;
export class CancelNotification {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}

  public async execute(
    request: CancelNotificationRequest,
  ): CancelNotificationResponse {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) throw new NotificationNotFound();

    notification.cancel();

    await this.notificationRepository.save(notification);
  }
}
