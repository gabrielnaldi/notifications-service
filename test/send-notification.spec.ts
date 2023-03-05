import { Notification } from 'src/application/entities/notification';
import { Content } from '../src/application/entities/content';
import { SendNotification } from '../src/application/use-cases/send-notification';

const notifications: Notification[] = [];

const notificationRepository = {
    async create(notification: Notification) {
        notifications.push(notification);
    },
};

describe('Send notification', () => {
    it('should be able to send notification', async () => {
        const sendNotification = new SendNotification(notificationRepository);

        await sendNotification.execute({
            category: 'social',
            content: new Content('you received a new notification'),
            recipientId: '1234-5678',
        });

        expect(notifications).toHaveLength(1);
    });
});
