import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { delay } from 'rxjs';

import { Store } from '@ngrx/store';
import { IAppState } from '../../state/app.state';
import { showSpinner, hideSpinner } from '../../state/actions/spinner.actions';

import { LoginService } from '../../core/api/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuider: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private store: Store<IAppState>
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    this.store.dispatch(showSpinner());
    this.loginService.login().pipe(delay(3000))
      .subscribe(login => {
        this.loginService.setToken(login);
        this.loginService.setRole(login);
        this.router.navigate(['detail']);
        this.store.dispatch(hideSpinner())
      })
  }

  private initForm(): void {
    this.loginForm = this.formBuider.group({
      user: ['', {
        validators: [Validators.required]
      }],
      password: ['', {
        validators: [Validators.required,Validators.minLength(6), Validators.pattern(/[A-Z]+/g)]
      }]
    });
  }

}
