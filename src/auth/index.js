import baseApi from '@baseApi';
import router from '@router';
import { response } from 'express';
const LOGIN_URL = '/login';
const REG_URL = '/register';
const LOGOUT = '/logout';

export default ({
    userDefault: {
        id: '',
        name: '',
        email: '',
        password: '',
      },
      LogIn(model, redirect){
          baseApi().post(LOGIN_URL).then((response)=>{

          });
      },
      Register(model, redirect){
        baseApi().post(REG_URL).then((response)=>{

        });
    },
    LogOut(){
        baseApi().post(LOGOUT).then((response)=>{

        });
    },
});