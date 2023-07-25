import { NotificationRepository } from '@application/repositories/notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface ReadNotificationRequest {
  notificationId: string;
}

type ReadNotificationResponse = void;

export class ReadNotification {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}

  public async execute(
    request: ReadNotificationRequest,
  ): Promise<ReadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) throw new NotificationNotFound();

    notification.read();

    await this.notificationRepository.save(notification);
  }
}
