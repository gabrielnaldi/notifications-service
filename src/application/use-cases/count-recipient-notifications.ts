import { NotificationRepository } from '@application/repositories/notification-repository';
import { Injectable } from '@nestjs/common';

interface CountRecipientNotificationRequest {
  recipientId?: string;
}

interface CountRecipientNotificationResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotification {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}

  public async execute(
    request: CountRecipientNotificationRequest,
  ): Promise<CountRecipientNotificationResponse> {
    const { recipientId } = request;

    const count = await this.notificationRepository.countManyByRecipientId(
      recipientId,
    );

    return {
      count,
    };
  }
}
