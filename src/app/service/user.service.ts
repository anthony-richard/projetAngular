import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthentificationService } from './authentification.service';
import { User } from '../interfaces/userInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private auth:AuthentificationService) {
  }

  // liste de tous les utilisateurs
  getAllUser() {
    const jwt = this.auth.getJwt();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    })
    return this.http.get("https://reseau.jdedev.fr/api/user",{headers:headers})
  }

  // récupération d'un utilisateur
  getOneUser(id:number) {
    const jwt = this.auth.getJwt();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    })
    return this.http.get(`https://reseau.jdedev.fr/api/user/${id}`,{headers:headers})
  }
  
  // modification d'un utilisateur
  updateUser(pseudo: string, email: string, password:string, id:string){
    const jwt = this.auth.getJwt();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    })
    return this.http.put(`https://reseau.jdedev.fr/api/user/${id}`,{email:email,pseudo:pseudo,password:password}, {headers})
  }

  // suppression d'un utilisateur
  deleteUser(id:string){
    const jwt = this.auth.getJwt();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    })
    return this.http.delete(`https://reseau.jdedev.fr/api/user/${id}`,{headers:headers})
  }
}