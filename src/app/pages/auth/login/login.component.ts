import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginPageActions } from '../store/action/auth.action';
import { authReducer } from '../store/reducer/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading$: Observable<boolean>

  constructor(private readonly store : Store) {
      this.isLoading$ = store.select(authReducer.selectIsLoginLoading)
   }

  ngOnInit(): void {
    setTimeout(
      ()=> this.store.dispatch(loginPageActions.signIn({email: "etoka@gmail.com", password: "12345"}))
      ,9000
    )
  }

}
