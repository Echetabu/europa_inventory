import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthResponseType } from "../../types";
import { createAccountActions, createAuthApiActions } from "../action/auth.action";


export interface CreateAuthState {
    isSignupLoading: boolean,
    isSignupSuccessful: AuthResponseType | null,
    signupFailure: string,
}

export const createAuthInitialState: CreateAuthState = {
    isSignupLoading: false,
    isSignupSuccessful: null,
    signupFailure: ""
}

export const creatAuthReducer = createFeature({
    name: 'create-auth',
    reducer: createReducer(
        createAuthInitialState,
        on(createAccountActions.createAccount, (state, {firstName,lastName,email, password}) => ({...state, isLoginLoading: true}) ),
        on(createAuthApiActions.signupSuccessful, (state, data) => ({...state, isLoginLoading: false,  isLoginSuccess: data}) ),
        on(createAuthApiActions.signupFailed, (state, data) => ({...state, isLoginLoading: false,  loginFailure: 'Signup failed'}) )
    )
});




