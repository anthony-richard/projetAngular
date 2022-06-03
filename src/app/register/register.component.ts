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

  connectForm: FormGroup
  constructor(formBuilder: FormBuilder, private auth:AuthentificationService, private router: Router) {
    this.connectForm = formBuilder.group({
      email: new FormControl("", [
        Validators.required,
      ]),
      password: new FormControl("", [
        Validators.required,
      ]),
      passwordConfirm: new FormControl("", [
        Validators.required,
      ]),
      pseudo: new FormControl("", [
        Validators.required,
      ])
    })
  }

  ngOnInit(): void {
  }


  submitForm() {
    let that = this;
    if (this.connectForm.valid) {
      if (this.connectForm.value.password === this.connectForm.value.passwordConfirm){
        this.auth.postSign(this.connectForm.value.email,this.connectForm.value.pseudo,this.connectForm.value.password).subscribe(
          {
            next(ret){
              that.auth.setUsersData(ret)
              that.router.navigateByUrl('/')
            }
          }
        );
      } else {
        alert('Les mots de passes ne sont pas similaire');
      }

    }
  }

}