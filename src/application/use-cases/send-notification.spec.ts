import { Notification } from '../entities/notification';
import { NotificationRepository } from '../repositories/notification-repository';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationRepository: NotificationRepository = {
  async create(notification) {
    notifications.push(notification);
  },
};

describe('SendNotification', () => {
  it('should be able to send notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

    await sendNotification.execute({
      recipientId: 'recipient-id-test',
      content: 'Send notification content',
      category: 'social',
    });

    expect(notifications).toHaveLength(1);
  });
});
