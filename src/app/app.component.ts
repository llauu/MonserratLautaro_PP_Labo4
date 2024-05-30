import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'pp-labo4';
  user: string | null | undefined = '';
  isLoggedIn: boolean = false;
  showChatWindow: boolean = false;
  sub: Subscription | null = null;

  constructor(public authService: AuthService, private router: Router, private firestore: Firestore) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkAuthState();
      }
    });
  }
  
  checkAuthState() {
    this.authService.isAuthenticated()
      .then(res => {
        this.isLoggedIn = res;
        this.user = this.authService.getUser();
      })
      .catch(err => console.log(err));
  }

  logout() {
    this.authService.logout()
      .then(() => {
        this.isLoggedIn = false;
        this.router.navigate(['/login'])
      })
      .catch(err => console.log(err));
  }
}
