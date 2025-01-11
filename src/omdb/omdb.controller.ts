import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { OmdbService } from './omdb.service';

@Controller('omdb')
export class OmdbController {
  constructor(private readonly omdbService: OmdbService) {}

  @Get()
  async searchMovies(@Query('query') query: string) {
    if (!query) {
      throw new BadRequestException('Query parameter is required'); // More specific exception
    }

    const data = await this.omdbService.searchMovies(query);
    return data;
  }
}
