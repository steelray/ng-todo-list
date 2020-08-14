import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthMockService } from '../auth-mock.service';

@Injectable()
export class GuestGuardService implements CanActivate {
  constructor(private authService: AuthMockService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isAuthed()) {
      this.router.navigate(['/admin']);
      return false;
    }
    return true;
  }
}
