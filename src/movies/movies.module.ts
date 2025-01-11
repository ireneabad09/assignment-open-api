// movies.module.ts

import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';
import { OmdbModule } from '../omdb/omdb.module';  // Import OmdbModule

@Module({
  imports: [OmdbModule],  // Import OmdbModule
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
