import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const userAuthGuard: CanActivateFn = (route, state) => {

  const austhService = inject(UserAuthService);
  const router = inject(Router);


if(austhService.isUserLogged){
  return true;
}
else{
  alert("you must log in first");
  router.navigate(['/login'])
  return false;
}
}
