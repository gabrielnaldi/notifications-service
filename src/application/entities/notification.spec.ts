import { randomUUID } from 'crypto';
import { makeNotification } from '@test/factories/notification-factory';

describe('Notification', () => {
  it('should create notification', () => {
    const notification = makeNotification({
      recipientId: randomUUID(),
    });

    expect(notification).toBeTruthy();
  });
});
