// import { type } from "@testing-library/user-event/dist/type"

export const LoginStart = (userCredentials) =>({
    type: "LOGIN_START",
})

export const LoginSuccess = (user) =>({
    type: "LOGIN_SUCCESS",
    payload: user,
})

export const LoginFailure = () =>({
    type: "LOGIN_FAILURE",
})

export const Logout = () =>({
    type: "LOGOUT",
})

////////
export const UPDATEStart = (userCredentials) =>({
    type: "UPDATE_START",
})

export const UPDATESuccess = (user) =>({
    type: "UPDATE_SUCCESS",
    payload: user,
})

export const UPDATEFailure = () =>({
    type: "UPDATE_FAILURE",
})