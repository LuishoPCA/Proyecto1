import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController
  ) { 
    this.registerForm = this.formBuilder.group({
      name: new FormControl(
        "",
        Validators.compose([])
    ),
      lastname: new FormControl(
        "",
        Validators.compose([])
      )
    });
  }
ngOnInit() {
}
}
