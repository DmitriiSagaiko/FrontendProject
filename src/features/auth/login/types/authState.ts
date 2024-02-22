import type IUser from "./user"

export default interface AuthState {
    user: IUser | undefined
    isLoading : boolean
    error: null | string
}