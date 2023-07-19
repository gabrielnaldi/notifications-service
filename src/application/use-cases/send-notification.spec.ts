import { SendNotification } from './send-notification';

describe('SendNotification', () => {
  it('should be able to send notification', async () => {
    const sendNotification = new SendNotification();

    const notification = await sendNotification.execute({
      recipientId: 'recipient-id-test',
      content: 'Send notification content',
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
