import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { User } from '../interfaces/userInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private userData:User;
  constructor(private http: HttpClient) {
    this.userData = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')as 'string') : {email:''}
  }
  // connexion
  postLogin(email: string, password: string) {
    return this.http.post<any>("https://reseau.jdedev.fr/api/user/connect",{"email":email,"password":password})
  }
  // inscription
  postSign(email: string, pseudo: string, password: string) {
    return this.http.post<any>("https://reseau.jdedev.fr/api/user",{"email":email,"password":password,"pseudo":pseudo, avatar:''})
  }

  setUsersData(data: User){
    this.userData = data;
    sessionStorage.setItem("user",JSON.stringify(this.userData));
  }

  getUsersData() {
    return this.userData;
  }
  // tokenJwt
  getJwt() {
    return this.userData.token;
  }
  // deconnexion
  logout(){
    this.userData = {
      email:"",
    };
    sessionStorage.removeItem('user');
  }
}