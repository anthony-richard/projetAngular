import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private userData:{ token: string,id:string, email:string};
  private signData:{ token: string,id:string, email:string, password:string, pseudo:string};
  constructor(private http: HttpClient) {
    this.userData = {token:'',id:'',email:''}
    this.signData = { token: '',id:'', email:'', password:'', pseudo:''}
  }
  // connexion
  postLogin(email: string, password: string) {
    this.http.post<any>("https://reseau.jdedev.fr/api/user/connect",{"email":email,"password":password}).subscribe(data=>{
      this.userData=data;
      return 'utilisateur connecté !';
    })
  }
  // inscription
  postSign(email: string, pseudo: string, password: string) {
    this.http.post<any>("https://reseau.jdedev.fr/api/user",{"email":email,"password":password,"pseudo":pseudo}).subscribe(data=>{
    this.signData=data;
    return 'Eh mais vous vous êtes inscrit !';
    })
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
    this.userData = {token:'',id:'',email:''};
  }
}