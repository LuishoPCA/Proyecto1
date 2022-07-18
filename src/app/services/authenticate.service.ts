import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { 
    this.storage.create();
  }

  loginUser(credentials){
    return new Promise((accept, reject) =>{
      this.storage.get("user").then((data)=>{
        if(
          credentials.email==data.email && 
          credentials.password==123456
          ){
            accept("Login exitoso");
          }else{
            reject("Login fallido. ");
          }
      }).catch(err => {
        return reject("Fallo en el Login")
      });
    });
  }

  registerUser(userData) {
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData);
  }

  desencriptar(userData){
    userData.password = atob(userData.password);
    return userData.password;
  }
}
