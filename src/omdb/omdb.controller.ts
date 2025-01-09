import { Controller, Get, Param } from '@nestjs/common';
import { OmdbService } from './omdb.service';

@Controller('omdb')
export class OmdbController {
  constructor(private readonly omdbService: OmdbService) {}

  @Get('movie/:id')
  getMovie(@Param('id') id: string) {
    return this.omdbService.getMovieById(id);
  }
}
