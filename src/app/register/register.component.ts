import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthentificationService } from '../service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup
  constructor(formBuilder : FormBuilder, private auth:AuthentificationService, private router:Router) {
    this.registerForm = formBuilder.group({
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      pseudo: new FormControl("", [
        Validators.required,
      ]),
      password: new FormControl("", [
        Validators.required,
      ]),
      passwordConfirm: new FormControl("", [
        Validators.required,
      ])
    })
  }
   
  ngOnInit(): void {
  }

  submitForm() {
    if (this.registerForm.valid) {
      if (this.registerForm.value.password === this.registerForm.value.passwordConfirm){
        this.auth.postSign(this.registerForm.value.email,this.registerForm.value.pseudo,this.registerForm.value.password);
        this.router.navigateByUrl('');
      } else {
        alert('Mots de passe non identique');
      }
    } 
  }
}
