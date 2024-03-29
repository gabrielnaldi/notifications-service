export class NotificationContent {
  private _content: string;

  private validateContentLength(content: string) {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content);

    if (!isContentLengthValid) {
      throw new Error('Content length error!');
    }

    this._content = content;
  }

  public get value(): string {
    return this._content;
  }
}
