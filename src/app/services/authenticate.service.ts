import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, subscribeOn } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthenticateService {
  goBack=false;
  header = {'Access-Control-Request-Headers': '*',
    'Content-Type': 'application/json'};

  url_server = "https://music-back-seminario.herokuapp.com/";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
     'Access-Control-Request-Headers': '*', observe: 'response' })
  };

  constructor(private storage: Storage, private http: HttpClient, private alertController: AlertController) { 
    this.storage.create();
  }

  loginUser(credentials){
    let params = {
      "user": credentials
    }
    return new Promise((accept, reject) =>{
      this.http.post(`${this.url_server}login`, params, this.httpOptions)
      .subscribe((data: any)=>{
        if(data.status =="OK"
          ){
            accept(data);
          }else{
            reject("Email o Contraseña Invalida");
          }
      },
      (error) =>{
        reject("Error en la petición")
      }
      )
    });
  }

  registerUser(userData) {
    // userData.password = btoa(userData.password);
    // return this.storage.set("user", userData);
    let params = {
      "user": userData
    }
    return new Promise((accept, reject)=>{
      this.http.post(`${this.url_server}signup`, params, this.httpOptions)
      .subscribe((data: any)=>{
        if(data.status=="OK"){
          accept(data.msg);
        }else{
          reject(data.errors)
        }
      },
      (error)=>{
        reject("Error enla solicitud") 
      }
      )
    });
  }

  async presentAlert(header, subHeader, message){
    const alert = await this.alertController.create({
      header: header,
      subHeader: subHeader,
      message: message,
      buttons: [
        {
          text: 'OK',
          handler:()=>{this.goBack=true}
        }
      ]
    });
    await alert.present();
  }

  getCurrentUser(id){
   return this.http.get(`${this.url_server}current_user/${id}`, this.httpOptions)
  }

  updateUser(id, user){
    let params = {
      "user": user
    }
    return new Promise((accept, reject)=>{
      this.http.post(`${this.url_server}update/${id}`, params,
       this.httpOptions).subscribe((data:any)=>{
        if(data.status = "OK"){
          accept(data)
        }else{
          reject(data.errors)
        }
      },
      (error)=>{
        reject(error)
      }
      )
    })
    }
}