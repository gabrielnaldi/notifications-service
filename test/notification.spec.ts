import { Content } from '../src/application/entities/content';
import { Notification } from '../src/application/entities/notification';

describe('Notification', () => {
    it('should be able to create notification', () => {
        const notification = new Notification({
            recipientId: '1234-5678-9012',
            category: 'social',
            content: new Content('You received a new notification'),
        });

        expect(notification).toBeTruthy();
    });
});
