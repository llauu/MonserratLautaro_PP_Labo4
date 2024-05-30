import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { addDoc, collection } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  newEmail: string = '';
  newPass: string = '';
  newConfirmPass: string = '';

  errorMsg: string = '';

  constructor(private firestore: Firestore, private authService: AuthService, private router: Router) {}

  register() {
    if(this.newPass === this.newConfirmPass) {
      this.authService.register(this.newEmail, this.newPass)
      .then(res => {
        if(res.user.email !== null) {
          let col = collection(this.firestore, 'logins');
          addDoc(col, {'date': new Date(), 'user': this.newEmail});

          this.router.navigate(['/home']);
        }
      })
      .catch(err => {
        switch(err.code) {
          case 'auth/invalid-email': 
            this.errorMsg = 'El correo electronico no es valido.';
            break;

          case 'auth/missing-password': 
            this.errorMsg = 'La contraseña no es valida.';
            break;
            
          case 'auth/email-already-in-use': 
            this.errorMsg = 'El correo electronico ya esta en uso.';
            break;

          case 'auth/weak-password': 
            this.errorMsg = 'La contraseña debe tener al menos 6 caracteres.';
            break;
        }
      });
    }
    else {
      this.errorMsg = 'Las contraseñas no coinciden.';
    }
  }
}
