import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { AuthDto } from "../../dto";
import { CreateAuthDto } from "../../dto/create-auth.dto";
import { AuthResponseType } from "../../types";


// export const loginPageAction = createAction("[LOGIN PAGE] SIGN IN", props<{email: string, password: string}>());
// export const loginPageAddUserAction = createAction("[LOGIN PAGE] Add user", props<{firstName: string}>());

export const createAccountActions = createActionGroup({
    source: 'SIGNUP PAGE',
    events: {
        'CREATE ACCOUNT': props<CreateAuthDto>(),
    }
})

export const createAuthApiActions = createActionGroup({
    source: 'CREATE AUTH API',
    events: {
        'Signup Successful': props<AuthResponseType>(),
        'Signup Failed' : props<String>()
    }
})

export const loginPageActions = createActionGroup({
    source: 'LOGIN PAGE',
    events: {
        'SIGN IN': props<AuthDto>(),
    }
})


export const authApiActions = createActionGroup({
    source: 'AUTH API',
    events: {
        'Login successful': props<AuthResponseType>(),
        'Login Failed' : props<String>()
    }
})


