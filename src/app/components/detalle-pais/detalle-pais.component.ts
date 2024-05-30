import { Component, Input, SimpleChanges } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detalle-pais',
  standalone: true,
  imports: [NgIf],
  templateUrl: './detalle-pais.component.html',
  styleUrl: './detalle-pais.component.css'
})
export class DetallePaisComponent {
  @Input() pais: any;
  detallePais: any | undefined;

  constructor(private paisesService: PaisesService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pais'] && this.pais) {
      this.paisesService.getPais(this.pais).subscribe(data => {
        this.detallePais = data[0];
      });
    }
  }
}
