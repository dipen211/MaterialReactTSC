import { SET_USER, SET_ERRORS, LOADING_UI, CLEAR_ERRORS, SET_UNAUTHENTICATED, LOADING_USER } from '../types'
import axios from 'axios';
export const loginUser = (userData: any, history: any) => (dispatch: any) => {
    dispatch({ type: LOADING_UI })
    axios.get('http://localhost:5000/employees', userData)
        .then((res) => {
            const employees = res.data;
            const token = `Bearer ${res.data.token}`;
            localStorage.setItem('token', `Bearer ${res.data.token}`);
            axios.defaults.headers.common['Authorization'] = token;
            dispatch({ type: CLEAR_ERRORS });
            console.log(userData.email)
            console.log(userData.password)
            employees.map((key: any) => (key.email === userData.email && key.password === userData.password ?
                history.push("/app/dashboard") : null)
            );
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