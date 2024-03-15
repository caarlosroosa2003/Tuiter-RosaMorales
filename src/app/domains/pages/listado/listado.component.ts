import { Component, signal } from '@angular/core';
import { TuitComponent } from '../../components/tuit/tuit.component';
import { CardTuit } from '../../model/card-tuit';
import { NuevoTuitComponent } from "../../components/nuevo-tuit/nuevo-tuit.component";
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-listado',
    standalone: true,
    templateUrl: './listado.component.html',
    styleUrl: './listado.component.css',
    imports: [TuitComponent, NuevoTuitComponent]
})
export class ListadoComponent {

  listadoTuits = signal<CardTuit[]>([
    {
      title: 'Nuevo Tuit',
      content: 'Hola'
    }
  ]);



}
