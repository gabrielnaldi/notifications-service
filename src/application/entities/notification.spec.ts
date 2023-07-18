import { randomUUID } from 'crypto';
import { Notification } from './notification';
import { NotificationContent } from './notification-content';

describe('Notification', () => {
  it('should create notification', () => {
    const notification = new Notification({
      recipientId: randomUUID(),
      category: 'avisos',
      content: new NotificationContent('teste de conteudo'),
    });

    expect(notification).toBeTruthy();
  });
});
