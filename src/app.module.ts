import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AppV1Module } from './v1/app.v1.module';

@Module({
  imports: [PrismaModule, AppV1Module],
})
export class AppModule {}
