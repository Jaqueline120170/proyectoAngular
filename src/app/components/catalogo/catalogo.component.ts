import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TmdbService } from '../../services/tmdb.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  movies: any[] = [];
  genres: any[] = [];
  actors: any[] = [];
  selectedGenre: string = '';
  selectedActor: string = '';
  currentPage: number = 1;
  totalPages: number = 1;
  searchQuery: string = '';

  @Output() filterApplied = new EventEmitter<string>();

  constructor(private tmdbService: TmdbService) {}

  ngOnInit(): void {
     // Obtener películas populares (por defecto en la página 1)
    this.loadMovies(this.currentPage);

     // Obtener los géneros
    this.tmdbService.getGenres().subscribe((data: any) => {
      this.genres = data.genres;
    });

    // Obtener actores populares
    this.tmdbService.getPopularActors().subscribe((data: any) => {
      this.actors = data.results;
    });
  }
  isLoading: boolean = true; // Indicador de carga

  // Método para cargar las películas según la página
  loadMovies(page: number): void {
    this.tmdbService.getPopularMovies(page).subscribe((data: any) => {
      this.movies = data.results;
      this.totalPages = data.total_pages;
      this.currentPage = page;
      this.isLoading = false; // Finaliza el estado de carga
    });
  }

  emitFilterEvent(filterType: string): void {
    this.filterApplied.emit(filterType);
  }
   // Método para filtrar las películas por género
  filterByGenre(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const genreId = selectElement.value;
    this.emitFilterEvent(`Género ID ${genreId}`);
    this.tmdbService.getPopularMovies(this.currentPage).subscribe((data: any) => {
      this.movies = data.results.filter((movie: any) =>
        movie.genre_ids.includes(Number(genreId))
      );
    });
  }
  // Método para filtrar las películas por actor
  filterByActor(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const actorId = selectElement.value;
    this.emitFilterEvent(`Actor ID ${actorId}`);
    this.tmdbService.getMoviesByActor(actorId).subscribe((data: any) => {
      this.movies = data.results;
    });
  }
   // Método para mostrar las películas más populares (sin filtro)
  filterPopularMovies(): void {
    this.emitFilterEvent('Películas populares');
    this.tmdbService.getPopularMovies(this.currentPage).subscribe((data: any) => {
      this.movies = data.results;// No filtramos, solo mostramos las más populares
    });
  }
  // Método para ir a la siguiente página
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.loadMovies(this.currentPage + 1);
    }
  }
  // Método para ir a la página anterior
  prevPage(): void {
    if (this.currentPage > 1) {
      this.loadMovies(this.currentPage - 1);
    }
  }

  // Método que maneja la búsqueda
  searchMovies(): void {
    if (this.searchQuery.trim() === '') {
      this.filterPopularMovies();// Si no hay texto, mostramos las películas populares
    } else {
      this.emitFilterEvent(`Búsqueda: ${this.searchQuery}`);
      this.tmdbService.searchMovies(this.searchQuery).subscribe((data: any) => {
        this.movies = data.results;
      });
    }
  }
}
