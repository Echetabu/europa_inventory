import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";


// export const loginPageAction = createAction("[LOGIN PAGE] SIGN IN", props<{email: string, password: string}>());
// export const loginPageAddUserAction = createAction("[LOGIN PAGE] Add user", props<{firstName: string}>());

export const loginPageActions = createActionGroup({
    source: '[LOGIN PAGE]',
    events: {
        'SIGN IN': props<{email: string, password: string}>(),
    }
})


