import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);

  if(auth.getUser()) {
    console.log("puede pasar");
    return true
  }

  console.log("no puede pasar");
  return  false;
};
