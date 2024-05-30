import { Component, EventEmitter, Output } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listado-paises',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listado-paises.component.html',
  styleUrl: './listado-paises.component.css'
})
export class ListadoPaisesComponent {
  paises: any[] = [];
  @Output() paisSeleccionado = new EventEmitter<string>();

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.paisesService.getPaises().subscribe(data => {
      console.log('trayendo')

      this.paises = data.filter(pais => 
        pais.region === 'Africa' || pais.region === 'Europe'
      ).slice(0, 3);
    });
  }
  
  seleccionarPais(pais: string): void {
    this.paisSeleccionado.emit(pais);
  }
}
