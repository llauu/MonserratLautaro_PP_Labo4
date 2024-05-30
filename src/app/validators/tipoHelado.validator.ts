import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function tipoHeladoValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const tiposValidos = ['agua', 'crema'];

    if (control.value && !tiposValidos.includes(control.value)) {
      return { tipoInvalido: true };
    }
    return null;
  };
}
