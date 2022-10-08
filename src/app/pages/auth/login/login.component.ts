import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginPageActions } from '../store/action/auth.action';
import { authReducer } from '../store/reducer/auth.reducer';
import { FormValidator } from '../util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading$: Observable<boolean>

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email ],],
    password: ['', [Validators.required, FormValidator.validatePassword()]]
  });

  constructor(private readonly store : Store, private readonly fb: FormBuilder) {
    this.isLoading$ = store.select(authReducer.selectIsLoginLoading)
  }
  ngOnInit(): void { }

  onSubmit() {
    if(this.loginForm.valid){
      this.store.dispatch(loginPageActions.signIn({
        email: this.loginForm.value.email!, 
        password: this.loginForm.value.password! 
      }));
    }
  }

}
