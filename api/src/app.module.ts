import { Module } from '@nestjs/common';
import { CommunityModule } from './community/community.module';

@Module({
  imports: [CommunityModule],
})
export class AppModule {}
