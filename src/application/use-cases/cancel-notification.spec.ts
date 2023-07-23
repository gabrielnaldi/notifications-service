import { Notification } from '@application/entities/notification';
import { NotificationContent } from '@application/entities/notification-content';
import { randomUUID } from 'crypto';
import { CancelNotification } from './cancel-notification';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';

describe('Cancel notification', () => {
  it('should be able to cancel notification', async () => {
    const inMemoryNotificationRepository = new InMemoryNotificationRepository();

    const notification = new Notification({
      recipientId: randomUUID(),
      content: new NotificationContent('Teste de conteudo'),
      category: 'social',
    });

    await inMemoryNotificationRepository.create(notification);

    const cancelNotification = new CancelNotification(
      inMemoryNotificationRepository,
    );

    await cancelNotification.execute({ notificationId: notification.id });

    expect(inMemoryNotificationRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });
});
