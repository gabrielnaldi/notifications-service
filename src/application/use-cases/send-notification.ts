import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationRepository } from '../repositories/notification-repository';

interface SendNotificationRequest {
    recipientId: string;
    content: Content;
    category: string;
}

interface SendNotificationResponse {
    notification: Notification;
}

export class SendNotification {
    constructor(private notificationRepository: NotificationRepository) {}

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

        await this.notificationRepository.create(notification);

        return { notification };
    }
}
