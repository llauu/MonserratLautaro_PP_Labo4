import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { tipoHeladoValidator } from '../../validators/tipoHelado.validator';

@Component({
  selector: 'app-crear-helado',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-helado.component.html',
  styleUrl: './crear-helado.component.css'
})
export class CrearHeladoComponent {
  @Output() heladoCreado = new EventEmitter<any>();
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      sabor: ['', [Validators.required]],
      tipo: ['agua', [Validators.required, tipoHeladoValidator()]],
      precio: [0, [Validators.required, Validators.min(0)]],
      peso: [250, [Validators.required, Validators.min(250), Validators.max(1000)]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.heladoCreado.emit(this.form.value);
      this.form.reset({ tipo: 'agua', precio: 0, peso: 250 });
    }
  }
}
