import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';
import { NotificationContent } from '@application/entities/notification-content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: 'recipient-1',
    category: 'social',
    content: new NotificationContent('novo conteudo'),
    ...override,
  });
}
