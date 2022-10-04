import { createFeature, createReducer, on } from "@ngrx/store";
import { loginPageActions } from "../action/auth.action";


export interface AuthState {
    isLoginLoading: boolean,
    isLoginSuccess: Object,
    loginFailure: string,
}

export const authInitialState: AuthState = {
    isLoginLoading: false,
    isLoginSuccess: {},
    loginFailure: ""
}

export const authReducer = createFeature({
    name: 'auth',
    reducer: createReducer(
        authInitialState,
        on(loginPageActions.signIn, (state, {email, password}) => ({...state, isLoginLoading: true}) )
    )
});
