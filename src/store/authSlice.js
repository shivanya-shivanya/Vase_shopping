// redux/slices/authSlice.js

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import MyAPI from '../APIs/MyAPI';


const BaseUrl =  MyAPI;

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        loading: false,
        error: null,
    },
    reducers: {
        loginStart: state => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: state => {
            state.loading = false;
            state.isLoggedIn = true;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        signupStart: state => {
            console.log("inside signupStart")
            state.loading = true;
            state.error = null;
        },
        signupSuccess: state => {
            console.log("inside signupSuccess")
            state.loading = false;
            state.error = null;
        },
        signupFailure: (state, action) => {
            // console.log("inside signupFailure", JSON.stringify(action))
            state.loading = false;
            state.error = action.payload;
        },
        logout: state => {
            state.isLoggedIn = false;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure } = authSlice.actions;


export const login = (email, password) => async dispatch => {
    console.log("email", email, "pass", password)
    dispatch(loginStart());
    try {
        const response = await axios.post(BaseUrl + 'login', {
            "email": String(email),
            "password": String(password)
        });

        AsyncStorage.setItem("@TOKEN", response?.data?.token)
          console.log("response in login",response.data)
     
        console.log("response in login", response)
        if (response?.data?.status === true) {
            Toast.show({
                type: 'success',
                text1: 'Login Successfully!',
            });
            dispatch(loginSuccess());

            // navigate to home or any other screen
        } else {
            Toast.show({
                type: 'error',
                text1: 'Something went wrong!',
                text2: 'Please check your login credentials and try again!'
            });
            dispatch(loginFailure(response.data.error));
        }
    } catch (error) {
        console.log("error in 66", error)
        Toast.show({
            type: 'error',
            text1: 'Something went wrong!',
            text2: 'Please check your login credentials and try again!'
        });
        dispatch(loginFailure('An error occurred'));
    }
};


export const signup = (fName, password, email, cpassword, lName) => async dispatch => {
    dispatch(signupStart());
    try {
        const response = await axios.post(BaseUrl + 'register', {
            "name": fName,
            "lastname": lName,
            "email": email,
            "password": password,
            "password_confirmation": cpassword
        });
        console.log("response in signup", response)
        if (response.data.status === true) {
            Toast.show({
                type: 'success',
                text1: response?.data?.message,
            });
            dispatch(signupSuccess());
        } else {
            Toast.show({
                type: 'error',
                text1: 'Something went wrong!',
                text2: 'Please check your registration details and try again!'
            });
            dispatch(signupFailure(response.data.errors || 'Registration failed'));
        }
    } catch (error) {
        // console.log("error in signup action:", JSON.stringify(error));
        Toast.show({
            type: 'error',
            text1: 'Something went wrong!',
            text2: 'User with this email already exists or an error occurred!'
        });
        dispatch(signupFailure(data.errors || 'An error occurred'));
    }
};

export default authSlice.reducer;
