import { SET_USER, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, SET_UNAUTHENTICATED, LOADING_USER } from '../types'
import axios from 'axios';
export const loginUser = (userData: any, history: any) => (dispatch: any) => {
    dispatch({ type: LOADING_UI })
    axios.post("http://localhost:5000/login/", userData)
        .then((res) => {
            debugger;
            if (res.statusText === "Created") {
                history.push("/app/dashboard")
            }
            else
            {
                history.push("/login")
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            });
        });
}
//for fetching authenticated user information
export const getUserData = () => (dispatch: any) => {
    dispatch({ type: LOADING_USER });
    axios.get('http://localhost:5000/employees')
        .then((res: any) => {
            console.log('user data', res.data);
            dispatch({
                type: SET_USER,
                payload: res.data
            });
        }).catch((err: any) => {
            console.log(err);
        });
}
export const logoutUser = () => (dispatch: any) => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization']
    dispatch({
        type: SET_UNAUTHENTICATED
    });
    window.location.href = '/login';
};