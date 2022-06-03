import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthentificationService } from '../service/authentification.service';
import { ArticleService} from '../service/article.service';
import { UserService } from '../service/user.service';
import { Article } from '../interfaces/articleInterface';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

allArticles: Article[]
connectForm: FormGroup

  constructor(formBuilder: FormBuilder, private art:ArticleService, private auth:AuthentificationService, private router: Router, private user: UserService) { 
    this.tokenJwt();
    this.getAllArticles();
    this.allArticles = [];

    // ajout d'un article 
    this.connectForm = formBuilder.group({
      titre: new FormControl("", [
        Validators.required,
      ]),
      contenu: new FormControl("", [
        Validators.required,
      ]),
    })
    
  }

  getMyId(){
    return this.auth.getUsersData().id;
  }
 
  
  // on recupere les articles
  getAllArticles(): void {
    this.art.getAllArticles().subscribe((value: any) => {
      this.allArticles = value;
    })
  }
  
  
  submitForm() {
    let that = this;
    if (this.connectForm.valid) {
      this.art.postArticle(this.connectForm.value.titre, this.connectForm.value.contenu).subscribe(() => {
        that.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          that.router.navigateByUrl('/article/liste');
        });
      })
    } else {
      alert('Aie le formulaire est pas bon');
    }
  }
  tokenJwt(){
    if (!this.auth.getJwt()) {
      this.router.navigateByUrl('/');
    }
  }

  // suppresion article
  deleteArt(id?: number){
    let that = this;
    this.art.deleteArticle(id as number).subscribe(()=>{
      that.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        that.router.navigateByUrl('/article/liste');
      });
    })
  }
  ngOnInit(): void {
  }

}
