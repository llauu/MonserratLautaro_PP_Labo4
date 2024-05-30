import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { CrearHeladoComponent } from '../crear-helado/crear-helado.component';
import { ModificarHeladoComponent } from '../modificar-helado/modificar-helado.component';
import { BorrarHeladoComponent } from '../borrar-helado/borrar-helado.component';

@Component({
  selector: 'app-helados',
  standalone: true,
  imports: [NgFor, CrearHeladoComponent, ModificarHeladoComponent, BorrarHeladoComponent],
  templateUrl: './helados.component.html',
  styleUrl: './helados.component.css'
})
export class HeladosComponent {
  helados: any[] = [];
  heladoSeleccionado: any | null = null;

  onSeleccionHelado(helado: any) {
    this.heladoSeleccionado = helado;
  }

  constructor(private firestore: Firestore) { }

  ngOnInit() {
    this.getHelados();
  }

  getHelados() {
    let col = collection(this.firestore, 'helados');

    const observable = collectionData(col);

    observable.subscribe((data) => {
      this.helados = data;
    });
  }
  
  seleccionarHelado(helado: any) {
    this.heladoSeleccionado = helado;
  }
  
  onHeladoCreado(formValue: any) {
    let col = collection(this.firestore, 'helados');

    addDoc(col, (formValue));
  }

  
  onHeladoBorrado(id: string) {
    this.helados = this.helados.filter(helado => helado.id !== id);
    this.heladoSeleccionado = null;
  }
}
