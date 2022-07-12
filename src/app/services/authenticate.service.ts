import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }

  loginUser(credentials){
    return new Promise((accept, reject) =>{
      if(credentials.email=="luis@aaa.com" && credentials.password=="luis12345"){
        accept("Login exitoso");
      }else{
        reject("Login fallido. ");
      }
    });
  }
}
