import { Content } from '../entities/content';
import { Notification } from '../entities/notification';

interface SendNotificationRequest {
    recipientId: string;
    content: Content;
    category: string;
}

interface SendNotificationResponse {
    notification: Notification;
}

export class SendNotification {
    public async execute({
        category,
        content,
        recipientId,
    }: SendNotificationRequest): Promise<SendNotificationResponse> {
        const notification = new Notification({
            category,
            content,
            recipientId,
        });

        return { notification };
    }
}
