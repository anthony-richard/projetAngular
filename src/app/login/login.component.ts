import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthentificationService } from '../service/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  connectForm: FormGroup
  constructor(formBuilder: FormBuilder, private authService: AuthentificationService, private router: Router) {
    this.connectForm = formBuilder.group({
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl("", [
        Validators.required,
      ])
    })
  }

  ngOnInit(): void {
  }

  submitForm() {
    let that = this;
    if (this.connectForm.valid) {
      this.authService.postLogin(this.connectForm.value.email,this.connectForm.value.password).subscribe(
        {
          next(ret){
            that.authService.setUsersData(ret)
            that.router.navigateByUrl('/article/liste')
          }
        }
      );
      
      
    }
    else {
      alert('il y a une erreur dans le formulaire')
    }
  }
}