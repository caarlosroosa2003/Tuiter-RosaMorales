import { Routes } from '@angular/router';
import { InicialComponent } from './domains/pages/inicial/inicial.component';
import { ListadoComponent } from './domains/pages/listado/listado.component';

export const routes: Routes = [
    { path: "", component: InicialComponent },
  { path: "inicio", component: InicialComponent },
  { path: "listado", component: ListadoComponent },
];
