import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthResponseType } from "../../types";
import { authApiActions, loginPageActions } from "../action/auth.action";


export interface AuthState {
    isLoginLoading: boolean,
    isLoginSuccess: AuthResponseType | null,
    loginFailure: string,
}

export const authInitialState: AuthState = {
    isLoginLoading: false,
    isLoginSuccess: null,
    loginFailure: ""
}

export const authReducer = createFeature({
    name: 'auth',
    reducer: createReducer(
        authInitialState,
        on(loginPageActions.signIn, (state, {email, password}) => ({...state, isLoginLoading: true}) ),
        on(authApiActions.loginSuccessful, (state, data) => ({...state, isLoginLoading: false,  isLoginSuccess: data}) ),
        on(authApiActions.loginFailed, (state, data) => ({...state, isLoginLoading: false,  loginFailure: 'I failed'}) )
    )
});
