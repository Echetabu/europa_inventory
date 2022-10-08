import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ToastrService } from "ngx-toastr";
import { catchError, exhaustMap, map, of, tap } from "rxjs";
import { NetworkLibService } from "src/app/shared/network-lib";
import { AuthDto } from "../../dto";
import { CreateAuthDto } from "../../dto/create-auth.dto";
import { AuthResponseType } from "../../types";
import { createAuthApiActions,authApiActions, createAccountActions, loginPageActions } from "../action/auth.action";



@Injectable()
export class AuthEffects {
    constructor(private readonly action$: Actions, private readonly networkLib: NetworkLibService, private readonly router: Router, private readonly toastr: ToastrService ) {}

    signupAction$ = createEffect(()=> this.action$.pipe(
        ofType(createAccountActions.createAccount),
        exhaustMap(({firstName,lastName,email, password}) => this.networkLib.post<CreateAuthDto, AuthResponseType>('authentication/sign-up', {firstName,lastName,email, password})
        .pipe(
            map(data => createAuthApiActions.signupSuccessful(data) ),
            catchError((error)=> of(createAuthApiActions.signupFailed(error)))
        ) 
        )
    ))

    loginAction$ = createEffect(()=> this.action$.pipe(
        ofType(loginPageActions.signIn),
        exhaustMap(({email, password}) => this.networkLib.post<AuthDto, AuthResponseType>('authentication/sign-in', {email, password})
        .pipe(
            map(data => authApiActions.loginSuccessful(data) ),
            tap(() => this.router.navigate(['/dashboard'])),
            catchError((error)=> of(authApiActions.loginFailed(error)).pipe(tap(()=> this.toastr.error('Unable to connect', 'Try again'))))
        ) 
        )
    ))
}