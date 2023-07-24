import { Notification } from '@application/entities/notification';
import { NotificationContent } from '@application/entities/notification-content';
import { CountRecipientNotification } from './count-recipient-notifications';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';

describe('Count Recipient Notification', () => {
  it('should be able to count notifications by recipient id', async () => {
    const notificationRepository = new InMemoryNotificationRepository();

    notificationRepository.create(
      new Notification({
        recipientId: 'recipient-1',
        category: 'social',
        content: new NotificationContent('novo conteudo'),
      }),
    );

    notificationRepository.create(
      new Notification({
        recipientId: 'recipient-1',
        category: 'social',
        content: new NotificationContent('novo conteudo'),
      }),
    );

    notificationRepository.create(
      new Notification({
        recipientId: 'recipient-2',
        category: 'social',
        content: new NotificationContent('novo conteudo'),
      }),
    );

    const countRecipientNotification = new CountRecipientNotification(
      notificationRepository,
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toBe(2);
  });
});
