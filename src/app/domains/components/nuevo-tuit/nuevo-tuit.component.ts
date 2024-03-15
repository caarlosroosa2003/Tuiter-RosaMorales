import { Component, signal } from '@angular/core';
import { ListadoComponent } from '../../pages/listado/listado.component';
import { FormControl, Validators } from '@angular/forms';
import { CardTuit } from '../../model/card-tuit';

@Component({
  selector: 'app-nuevo-tuit',
  standalone: true,
  imports: [ListadoComponent],
  templateUrl: './nuevo-tuit.component.html',
  styleUrl: './nuevo-tuit.component.css'
})
export class NuevoTuitComponent {

  listadoTuits = signal<CardTuit[]>([
    {
      title: 'Nuevo Tuit',
      content: 'Hola'
    }
  ]);

  titleController = new FormControl('', {
    nonNullable: true, 
  });

  contentController = new FormControl('', {
    nonNullable: true, 
  });

  checkTarea() {
    if (this.titleController.valid && this.contentController.valid) {
      let titulo = this.titleController.value.trim();
      let content = this.contentController.value.trim();
      if (titulo !== "" && content !== "") {
        this.addNewTuit(this.titleController.value, this.contentController.value);
        this.titleController.reset();
      }
    }
  }

  addNewTuit(titulo: string, contenido: string) {
    let newTuit: CardTuit = {
      title: titulo,
      content: contenido
      }
      this.listadoTuits.update((listadoTuits) => [...listadoTuits, newTuit]);
    };

}
