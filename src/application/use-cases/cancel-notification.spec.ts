import { CancelNotification } from './cancel-notification';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';
import { makeNotification } from '@test/factories/notification-factory';

describe('Cancel notification', () => {
  it('should be able to cancel notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();

    const notification = makeNotification();

    await notificationRepository.create(notification);

    const cancelNotification = new CancelNotification(notificationRepository);

    await cancelNotification.execute({ notificationId: notification.id });

    expect(notificationRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel notification when it does not exist', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
