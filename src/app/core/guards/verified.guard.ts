import { CanActivateFn } from '@angular/router';

export const verifiedGuard: CanActivateFn = (route, state) => {
  return true;
};
