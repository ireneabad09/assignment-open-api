// omdb.module.ts

import { Module } from '@nestjs/common';
import { OmdbService } from './omdb.service';
import { HttpModule } from '@nestjs/axios';  // Import HttpModule for HTTP requests

@Module({
  imports: [HttpModule],  // Import HttpModule to allow HTTP requests
  providers: [OmdbService],  // Register OmdbService as a provider
  exports: [OmdbService],  // Export OmdbService so it can be used in other modules
})
export class OmdbModule {}
