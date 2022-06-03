import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { UserService } from '../service/user.service';
import { AuthentificationService } from '../service/authentification.service';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userData = {pseudo:"", email:""};

  constructor(
    private art:ArticleService,
    private user:UserService, 
    private auth:AuthentificationService, 
    private router: Router,
    private activatedRoute : ActivatedRoute) {
      this.user.getOneUser(+(this.activatedRoute.snapshot.paramMap.get('id') as string)).subscribe((value: any) => {
        this.userData = value;
      })
    }

      

  ngOnInit(): void {
  }

}
