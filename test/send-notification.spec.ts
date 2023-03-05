import { Content } from '../src/application/entities/content';
import { SendNotification } from '../src/application/use-cases/send-notification';
import { InMemoryNotificationsRepository } from './repositories/in-memory-notifications-repository';

describe('Send notification', () => {
    it('should be able to send notification', async () => {
        const inMemoryNotificationsRepository =
            new InMemoryNotificationsRepository();

        const sendNotification = new SendNotification(
            inMemoryNotificationsRepository,
        );

        const { notification } = await sendNotification.execute({
            category: 'social',
            content: new Content('you received a new notification'),
            recipientId: '1234-5678',
        });

        expect(inMemoryNotificationsRepository.notifications).toHaveLength(1);
        expect(inMemoryNotificationsRepository.notifications[0]).toEqual(
            notification,
        );
    });
});
