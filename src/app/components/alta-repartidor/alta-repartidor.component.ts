import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DniRepartidorService } from '../../services/dni-repartidor.service';
import { dniExisteAsyncValidator } from '../../validators/dni.validator';
import { addDoc, collection } from 'firebase/firestore';
import { ListadoPaisesComponent } from '../listado-paises/listado-paises.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-repartidor',
  standalone: true,
  imports: [ReactiveFormsModule, ListadoPaisesComponent],
  templateUrl: './alta-repartidor.component.html',
  styleUrl: './alta-repartidor.component.css'
})
export class AltaRepartidorComponent {
  form!: FormGroup;

  constructor(private firestore: Firestore, private fb: FormBuilder, private dniRepartidorService: DniRepartidorService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      nombre: ['', [Validators.required]],
      dni: ['', {
        validators: [Validators.required],
        asyncValidators: dniExisteAsyncValidator(this.dniRepartidorService),
        updateOn: 'blur'
      }],
      edad: ['', [Validators.required, Validators.min(0)]],
      cap_transporte: ['', [Validators.required, Validators.min(0)]],
      pais_origen: ['', [Validators.required]],
      unidad_propia: [false]
    });
  }

  actualizarPais(pais: string): void {
    this.form.patchValue({ pais_origen: pais });
  }

  get nombreControl() {
    return this.form.get('nombre');
  }

  get dniControl() {
    return this.form.get('dni');
  }

  get edadControl() {
    return this.form.get('edad');
  }

  get capTransporteControl() {
    return this.form.get('cap_transporte');
  }

  get paisOrigenControl() {
    return this.form.get('pais_origen');
  }

  get unidadPropiaControl() {
    return this.form.get('unidad_propia')?.value;
  }


  altaRepartidor() {
    this.form.markAllAsTouched();

    let col = collection(this.firestore, 'repartidores');

    addDoc(col, (this.form.value));

    this.form.reset();
    this.router.navigate(['/home']);
  }
}
