import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, map } from "rxjs";
import { DniRepartidorService } from "../services/dni-repartidor.service";


export function dniExisteAsyncValidator(service: DniRepartidorService): AsyncValidatorFn {
    return (control: AbstractControl) => {
        const dni = control.value;
        
        return service.TraerDniRepartidor(dni).pipe(
            map(res => {
                return res ? { dniExiste: 'El DNI ya esta registrado' } : null;
            }
        ));
    };
}