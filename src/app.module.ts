import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { OmdbService } from './omdb/omdb.service';
import { OmdbController } from './omdb/omdb.controller';

@Module({
  imports: [HttpModule],
  controllers: [OmdbController],
  providers: [OmdbService],
})
export class AppModule {}
