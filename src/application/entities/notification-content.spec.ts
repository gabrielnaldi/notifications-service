import { NotificationContent } from './notification-content';

describe('Notification Content', () => {
  it('should be able to create content', () => {
    const content = new NotificationContent(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum eu nibh vel fermentum.',
    );

    expect(content).toBeTruthy();
  });

  it('should not be able to create content', () => {
    expect(() => new NotificationContent('aaa')).toThrow();
  });

  it('should not be able to create content', () => {
    expect(() => new NotificationContent('a'.repeat(241))).toThrow();
  });
});
