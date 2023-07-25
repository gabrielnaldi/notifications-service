import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('Get Recipient Notifications', () => {
  it('should be able to find notifications by recipient id', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();

    notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );
    notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );
    notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-1' }),
        expect.objectContaining({ recipientId: 'recipient-1' }),
      ]),
    );
  });
});
