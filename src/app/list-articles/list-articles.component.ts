import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthentificationService } from '../service/authentification.service';
import { ArticleService} from '../service/article.service';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

allArticles: [{  titre: string; contenu: string;id: number;}] | undefined

  constructor(formBuilder: FormBuilder, private art:ArticleService, private auth:AuthentificationService, private router: Router) { 
    this.tokenJwt();
    this.getAllArticles();
    
  }
  
  getAllArticles(): void {
    this.art.getAllArticles().subscribe((value: any) => {
      this.allArticles = value;
    })
  }
  tokenJwt(){
    if (!this.auth.getJwt()) {
      this.router.navigateByUrl('/');
    }
  }
  ngOnInit(): void {
  }

}
