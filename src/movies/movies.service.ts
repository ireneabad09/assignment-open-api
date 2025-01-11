// movies.service.ts

import { Injectable } from '@nestjs/common';
import { OmdbService } from '../omdb/omdb.service';  // Correct the import path
import { Observable } from 'rxjs';

@Injectable()
export class MoviesService {
  constructor(private readonly omdbService: OmdbService) {}

  getMovies(query: string): Observable<any> {
    return this.omdbService.searchMovies(query);  // Use OmdbService to fetch movies
  }
}
