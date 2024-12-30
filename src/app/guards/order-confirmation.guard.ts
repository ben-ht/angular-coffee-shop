import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const orderConfirmationGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const hasConfirmed = sessionStorage.getItem('orderConfirmed');
  if (hasConfirmed) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
