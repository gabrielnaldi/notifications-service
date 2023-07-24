import { NotificationRepository } from '@application/repositories/notification-repository';

interface CountRecipientNotificationRequest {
  recipientId?: string;
}

interface CountRecipientNotificationResponse {
  count: number;
}

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
