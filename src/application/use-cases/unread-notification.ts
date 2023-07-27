import { NotificationRepository } from '@application/repositories/notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';
import { Injectable } from '@nestjs/common';

interface UnreadNotificationRequest {
  notificationId: string;
}

@Injectable()
export class UnreadNotification {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}

  public async execute(request: UnreadNotificationRequest) {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) throw new NotificationNotFound();

    notification.unread();

    await this.notificationRepository.save(notification);
  }
}
