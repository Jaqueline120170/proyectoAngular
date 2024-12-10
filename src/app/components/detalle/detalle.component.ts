import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';// Necesario para obtener parámetros de la URL
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule
import { TmdbService } from '../../services/tmdb.service'; // Servicio para interactuar con la API

@Component({
  selector: 'app-detalle',
  standalone: true, // Componente independiente
  imports: [CommonModule, RouterModule], // Necesitamos importar CommonModule
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  movieId: string | null = ''; // Almacena el ID de la película
  movie: any = null; // Almacena los detalles de la película
  isLoading: boolean = true; // Indicador de carga

  constructor(
    private route: ActivatedRoute, // Para manejar la navegación
    private tmdbService: TmdbService // Para llamar a la API de TMDB
  ) {}

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id'); // Obtener el id de la película de la URL
    if (this.movieId) {
      this.tmdbService.getMovieDetails(this.movieId).subscribe({
        next: (data: any) => {
          this.movie = data; // Guardar los detalles de la película
          this.isLoading = false; // Finalizar el estado de carga
        },
        error: (err) => {
          console.error('Error al obtener detalles de la película:', err);
          this.isLoading = false; // Finalizar el estado de carga aunque haya error
        },
      });
    }
  }
}
