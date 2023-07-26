import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';
import { ReadNotification } from './read-notification';
import { makeNotification } from '@test/factories/notification-factory';

describe('Read notification', () => {
  it('should be able to read notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const readNotification = new ReadNotification(notificationRepository);

    const notification = makeNotification();

    await notificationRepository.create(notification);

    await readNotification.execute({ notificationId: notification.id });

    expect(notificationRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a non-existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const readNotification = new ReadNotification(notificationRepository);

    expect(() =>
      readNotification.execute({ notificationId: 'test-notification' }),
    ).rejects.toThrow();
  });
});
