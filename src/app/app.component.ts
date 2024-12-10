import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Necesario para el enrutamiento en standalone
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { DetalleComponent } from './components/detalle/detalle.component';

@Component({
  selector: 'app-root',
  standalone: true, // Indicamos que el componente es standalone
  imports: [RouterModule, CatalogoComponent, DetalleComponent], // Asegúrate de importar el enrutador y los componentes
  template: `
    <router-outlet></router-outlet> <!-- Punto de entrada del enrutamiento -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
