import { Content } from './content';

interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
}

export class Notification {
    private props: NotificationProps;

    constructor(props: NotificationProps) {
        this.props = props;
    }

    public get recipientId() {
        return this.props.recipientId;
    }

    public set recipientId(recipientId: string) {
        this.recipientId = recipientId;
    }

    public get content(): Content {
        return this.props.content;
    }

    public set content(content: Content) {
        this.content = content;
    }

    public get category() {
        return this.props.category;
    }

    public set category(category: string) {
        this.category = category;
    }

    public get readAt(): Date | null | undefined {
        return this.props.readAt;
    }

    public set readAt(readAt: Date | null | undefined) {
        this.readAt = readAt;
    }

    public get createdAt() {
        return this.props.createdAt;
    }
}
