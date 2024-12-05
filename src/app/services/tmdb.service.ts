import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey = '1b4e812bfdd6674e251af8c2b8b83317'; // Reemplaza con tu API Key de TMDb
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  // Método para obtener películas populares, con paginación
  getPopularMovies(page: number = 1): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`);
  }

  // Método para obtener géneros
  getGenres(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`);
  }

  // Método para obtener actores populares
  getPopularActors(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/person/popular?api_key=${this.apiKey}`);
  }

  // Método para obtener películas por actor
  getMoviesByActor(actorId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}&with_cast=${actorId}`);
  }

  getMovieDetails(movieId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`);
  }

  // Buscar películas por nombre
  searchMovies(query: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`);
  }
  
}

