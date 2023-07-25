import { CountRecipientNotification } from './count-recipient-notifications';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count Recipient Notification', () => {
  it('should be able to count notifications by recipient id', async () => {
    const notificationRepository = new InMemoryNotificationRepository();

    notificationRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    notificationRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    notificationRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
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
