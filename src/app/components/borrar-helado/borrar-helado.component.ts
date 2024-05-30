
import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Firestore, doc, deleteDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-borrar-helado',
  standalone: true,
  imports: [NgIf],
  templateUrl: './borrar-helado.component.html',
  styleUrl: './borrar-helado.component.css'
})
export class BorrarHeladoComponent {
  @Input() helado: any | null = null;
  @Output() heladoBorrado = new EventEmitter<string>();

  constructor(private firestore: Firestore) {}

  borrarHelado() {
    if (this.helado) {
      const docRef = doc(this.firestore, `helados/${this.helado.id}`);
      
      deleteDoc(docRef).then(() => {
        this.heladoBorrado.emit(this.helado!.id!);
      });
    }
  }
}
