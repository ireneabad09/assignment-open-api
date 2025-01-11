import { Controller, Get } from '@nestjs/common';
import { OmdbService } from '../omdb/omdb.service';  // Make sure the path is correct

@Controller('movies')
export class MoviesController {
  constructor(private readonly omdbService: OmdbService) {}

  @Get()
  async getMovies() {
    // Use OmdbService to search movies (replace with any search query you need)
    const data = await this.omdbService.searchMovies('Batman');
    return data;  // Send the OMDb API response back to the client
  }
}
