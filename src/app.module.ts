import { Module } from '@nestjs/common';
import { AppController } from './infra/controllers/app.controller';
import { PrismaService } from './infra/services/prisma.service';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [PrismaService],
})
export class AppModule {}
