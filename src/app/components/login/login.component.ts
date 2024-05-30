import { Component } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { addDoc, collection } from 'firebase/firestore';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginsCollections: any[] = [];
  email: string = '';
  pass: string = '';
  errorMsg: string = '';

  constructor(private firestore: Firestore, private router: Router, private authService: AuthService) {

  }

  login() {
    this.authService.login(this.email, this.pass)
      .then(res => {
        if(res.user.email !== null) {
          // Registro login en la coleccion registros
          let col = collection(this.firestore, 'logins');
          addDoc(col, {'date': new Date(), 'user': this.email});

          // Ruteo a la pagina de bienvenida
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
            
          case 'auth/invalid-credential': 
            this.errorMsg = 'El correo electronico o contraseña son incorrectos.';
            break;
        }
      });
  }

  // loginWithGoogle() {
  //   this.authService.loginWithGoogle()
  //     .then(res => {
  //       if(res.user.email !== null) {
  //         // Registro login en la coleccion registros
  //         let col = collection(this.firestore, 'logins');
  //         addDoc(col, {'date': new Date(), 'user': res.user.email});

  //         // Ruteo a la pagina de bienvenida
  //         this.router.navigate(['/home']);
  //       }
  //     }
  //     )
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
  

  // fillInputs() {
  //   const emailInput = document.getElementById('email') as HTMLInputElement;
  //   if (emailInput) {
  //     emailInput.value = 'prueba@mail.com';
  //     this.email = 'prueba@mail.com';
  //   }
    
  //   const passInput = document.getElementById('pass') as HTMLInputElement;
  //   if (passInput) {
  //     passInput.value = '123456';
  //     this.pass = '123456';
  //   }
  // }

  // GetData() {
  //   let col = collection(this.firestore, 'logins');

  //   const observable = collectionData(col);

  //   observable.subscribe((respuesta) => {
  //     this.loginsCollections = respuesta;

  //     this.countLogins = this.loginsCollections.length;

  //     console.log(respuesta);
  //   })

  // }
}
