import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient, private auth:AuthentificationService) {
  }

  // récuperer tous les articles
  getAllArticles(){
    const jwt = this.auth.getJwt();
    console.log("token :" ,jwt);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    }
    return this.http.get("https://reseau.jdedev.fr/api/article",{headers:headers})
  }



  // ajout d'un new article
  postArticle(titre: string, contenu: string){
    const jwt = this.auth.getJwt();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    })
    return this.http.post("https://reseau.jdedev.fr/api/article",{titre:titre,contenu:contenu}, {headers})
  }

  // modification article
  updatingArticle(titre: string, contenu: string, id:number){
    const jwt = this.auth.getJwt();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    })
    return this.http.put(`https://reseau.jdedev.fr/api/article/${id}`,{titre:titre,contenu:contenu}, {headers})
  }

  // suppression article
  deleteArticle(id:number){
    const jwt = this.auth.getJwt();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    })
    return this.http.delete(`https://reseau.jdedev.fr/api/article/${id}`,{headers:headers})
  }

  // 5 derniers articles d'un utilisateur
  getLastArticlesUser(id:string){
    const jwt = this.auth.getJwt();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    })
    return this.http.get(`https://reseau.jdedev.fr/api/user/${id}/article`,{headers:headers})
  }
}