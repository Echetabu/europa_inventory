import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { NetworkLibService } from "src/app/shared/network-lib";
import { AuthDto } from "../../dto";
import { AuthResponseType } from "../../types";
import { authApiActions, loginPageActions } from "../action/auth.action";



@Injectable()
export class AuthEffects {
    constructor(private readonly action$: Actions, private readonly networkLib: NetworkLibService ) {}

    loginAction$ = createEffect(()=> this.action$.pipe(
        ofType(loginPageActions.signIn),
        exhaustMap(({email, password}) => this.networkLib.post<AuthDto, AuthResponseType>('authentication/sign-in', {email, password})
        .pipe(
            map(data => authApiActions.loginSuccessful(data) ),
            catchError((error)=> of(authApiActions.loginFailed(error)))
        ) 
        )
    ))
}