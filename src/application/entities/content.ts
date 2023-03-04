export class Content {
    private readonly content: string;

    constructor(content: string) {
        const isContentLengthValid = this.validateContent(content);

        if (!isContentLengthValid) throw new Error('Content length is invalid');

        this.content = content;
    }

    private validateContent(content: string): boolean {
        return content.length >= 5 && content.length <= 240;
    }

    private get value(): string {
        return this.content;
    }
}
