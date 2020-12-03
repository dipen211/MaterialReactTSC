import React, { createContext, Dispatch } from "react";

interface Actions {
    type: string;
    value: any;
}

interface SidebarProps {
    show: boolean;
    content: JSX.Element | null;
}

interface InitContextProps {
    state: SidebarProps;
    dispatch: Dispatch<Actions>;
}

export const UserStateContext = createContext({} as InitContextProps);
export const UserDispatchContext = createContext({} as InitContextProps);

function useUserDispatch() {
    var context = React.useContext(UserDispatchContext);
    if (context === undefined) {
        throw new Error("useUserDispatch must be used within a UserProvider");
    }
    return context;
}

export { useUserDispatch, loginUser, signOut };

// ###########################################################

function loginUser(dispatch: any, login: any, password: any, history: any, setIsLoading: any, setError: any) {
    setError(false);
    setIsLoading(true);

    if (!!login && !!password) {
        setTimeout(() => {
            // localStorage.setItem("id_token", 1);
            setError(null);
            setIsLoading(false);
            dispatch({ type: "LOGIN_SUCCESS" });

            history.push("/app/dashboard");
        }, 2000);
    } else {
        dispatch({ type: "LOGIN_FAILURE" });
        setError(true);
        setIsLoading(false);
    }
}

function signOut(dispatch: any, history: any) {
    console.log("signOut");
    localStorage.removeItem("id_token");
    dispatch({ type: "SIGN_OUT_SUCCESS" });
    history.push("/login");
}
