import { Component, OnInit, ChangeDetectionStrategy, Self } from '@angular/core';
import { INPUT_TYPES } from '@core/enum/input-types.enum';
import { MAT_BUTTON_TYPE, MAT_BUTTON_COLOR } from '@core/enum/mat-button.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthMockService } from '@core/service/auth-mock.service';
import { NgOnDestroy } from '@core/service/destroy.service';
import { takeUntil } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgOnDestroy]
})
export class LoginComponent implements OnInit {
  inputTypes = INPUT_TYPES;
  buttonTypes = MAT_BUTTON_TYPE;
  buttonColors = MAT_BUTTON_COLOR;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthMockService,
    private snackbar: MatSnackBar,
    @Self() private destroy: NgOnDestroy) { }

  ngOnInit() {
    this.form = this.fb.group({
      login: ['',
        [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    const { login, password } = this.form.value;
    this.authService.login(login, password)
      .pipe(takeUntil(this.destroy))
      .subscribe(res => {
        if (res) {
          this.router.navigate(['admin']);
        } else {
          this.snackbar.open('Неверный логин или парль', 'Закрыть', {
            duration: 2000
          });
        }
      });
  }

}
