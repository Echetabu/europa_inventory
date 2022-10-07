import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { creatAuthReducer } from '../store/reducer/create-auth.reducer';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  constructor(private readonly store : Store) { this.isLoading$ = store.select(creatAuthReducer.selectIsSignupLoading) }

  ngOnInit(): void {
  }

}
