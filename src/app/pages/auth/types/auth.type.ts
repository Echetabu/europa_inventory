
export interface AuthResponseType {
    message: string,
    token : { access_token: string, refresh_token: string },
    user:{
      firstName: string,
      email: string
    }
}