import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/services/prisma.service';
import { NotificationRepository } from 'src/application/repositories/notification-repository';
import { PrismaNotificationRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
