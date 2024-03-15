import { Component, Input } from '@angular/core';
import { CardTuit } from '../../model/card-tuit';
import { TuitUserPipe } from "../../pipes/tuit-user.pipe";

@Component({
    selector: 'app-tuit',
    standalone: true,
    templateUrl: './tuit.component.html',
    styleUrl: './tuit.component.css',
    imports: [TuitUserPipe]
})
export class TuitComponent {

  @Input({ required: true }) tuit?: CardTuit;

}
