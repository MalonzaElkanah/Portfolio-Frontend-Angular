import { CanActivateFn } from '@angular/router';
import {inject} from '@angular/core';
import { Router } from '@angular/router';

import { TokenStorageService } from './token-storage.service';


export const authGuard: CanActivateFn = (route, state) => {
  const tokenStorageService = inject(TokenStorageService);
  const router = inject(Router);

  const token = tokenStorageService.getToken();

  console.log(token);
  if (token != null) {
    return true;
  }

  // Redirect to the login page
  return router.parseUrl('/auth/login');
};
