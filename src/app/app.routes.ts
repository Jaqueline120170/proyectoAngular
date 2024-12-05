import { Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { DetalleComponent } from './components/detalle/detalle.component';

export const routes: Routes = [
  { path: '', component: CatalogoComponent }, // Ruta raíz para el catálogo
  { path: 'detalle/:id', component: DetalleComponent }, // Ruta para los detalles
];
