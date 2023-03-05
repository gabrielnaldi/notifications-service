import { Notification } from '../../src/application/entities/notification';
import { NotificationRepository } from '../../src/application/repositories/notification-repository';

export class InMemoryNotificationsRepository implements NotificationRepository {
    notifications: Notification[] = [];

    async create(notification: Notification) {
        this.notifications.push(notification);
    }
}
