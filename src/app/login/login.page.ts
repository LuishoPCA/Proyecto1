import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
@ViewChild('passwordEyeRegister', { read: ElementRef }) 


export class LoginPage implements OnInit {
  passwordEye: ElementRef;
  passwordTypeInput  =  'password';
  loginForm: FormGroup;
  validation_messages={
    email:[
      {type: "required", message:"El Email es obligatorio. "},
      {type: "pattern", message:"El Email no es válido. "}
    ],
    password:[
      {type: "required", message:"La contraseña es obligatoria. "},
      {type: "minlength", message:"La contraseña es mínimo de 6 caracteres. "}
    ]
    
  }

  
  constructor(private formBuilder: FormBuilder) { 
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      )
    })
  }
  ngOnInit() {
  }

  togglePasswordMode() {
    //cambiar tipo input
  this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text';
   //obtener el input
   const nativeEl = this.passwordEye.nativeElement.querySelector('input');
   //obtener el indice de la posición del texto actual en el input
   const inputSelection = nativeEl.selectionStart;
   //ejecuto el focus al input
   nativeEl.focus();
  //espero un milisegundo y actualizo la posición del indice del texto
   setTimeout(() => {
       nativeEl.setSelectionRange(inputSelection, inputSelection);
   }, 1);

}
}