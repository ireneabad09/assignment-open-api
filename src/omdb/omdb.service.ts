import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class OmdbService {
  private readonly apiKey = '8ccfc672'; // Use your API key here

  constructor(private readonly httpService: HttpService) {}

  searchMovies(search: string) {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=${this.apiKey}`;
    return this.httpService.get(url).pipe(
      map((response: AxiosResponse) => response.data),
      catchError(() => of({ message: 'Error fetching movie data' }))
    );
  }

  getMovieById(id: string) {
    const url = `http://www.omdbapi.com/?i=${id}&apikey=${this.apiKey}`;
    return this.httpService.get(url).pipe(
      map((response: AxiosResponse) => response.data),
      catchError(() => of({ message: 'Error fetching movie details' }))
    );
  }
}
