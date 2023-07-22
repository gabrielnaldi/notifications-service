import { Replace } from 'src/helpers/Replace';
import { NotificationContent } from './notification-content';
import { randomUUID } from 'crypto';

interface NotificationProps {
  recipientId: string;
  category: string;
  content: NotificationContent;
  createdAt: Date;
  readAt?: Date | null;
}

export class Notification {
  private _props: NotificationProps;
  private _id: string;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this._props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public get recipientId() {
    return this._props.recipientId;
  }

  public set recipientId(recipientId: string) {
    this._props.recipientId = recipientId;
  }

  public get category() {
    return this._props.category;
  }

  public set category(category: string) {
    this._props.category = category;
  }

  public get content() {
    return this._props.content;
  }

  public set content(content: NotificationContent) {
    this._props.content = content;
  }

  public get createdAt() {
    return this._props.createdAt;
  }

  public set createdAt(createdAt: Date) {
    this._props.createdAt = createdAt;
  }

  public get readAt() {
    return this._props.readAt;
  }

  public set readAt(readAt: Date) {
    this._props.readAt = readAt;
  }
}
