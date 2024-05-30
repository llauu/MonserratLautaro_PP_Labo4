import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { DetallePaisComponent } from '../detalle-pais/detalle-pais.component';
import { DetalleRepartidorComponent } from '../detalle-repartidor/detalle-repartidor.component';

@Component({
  selector: 'app-listado-repartidores',
  standalone: true,
  imports: [NgFor, DetallePaisComponent, DetalleRepartidorComponent],
  templateUrl: './listado-repartidores.component.html',
  styleUrl: './listado-repartidores.component.css'
})
export class ListadoRepartidoresComponent {
  repartidores: any[] = [];
  repartidorSeleccionado: any | null = null;
  paisSeleccionado: string | null = null;

  onSeleccionRepartidor(repartidor: any) {
    this.repartidorSeleccionado = repartidor;
  }

  constructor(private firestore: Firestore) { }

  ngOnInit() {
    this.getRepartidores();
  }

  getRepartidores() {
    let col = collection(this.firestore, 'repartidores');

    const observable = collectionData(col);

    observable.subscribe((data) => {
      this.repartidores = data;
    });
  }
  
  seleccionarRepartidor(repartidor: any) {
    this.repartidorSeleccionado = repartidor;
    this.paisSeleccionado = repartidor.pais_origen;
  }
}
