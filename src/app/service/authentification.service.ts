import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private userData:{ token: string,id:string, email:string};
  private signData:{ token: string,id:string, email:string, password:string, pseudo:string, avatar : ''};
  constructor(private http: HttpClient) {
    this.userData = {token:'',id:'',email:''}
    this.signData = { token: '',id:'', email:'', password:'', pseudo:'', avatar:''}
  }
  // connexion
  postLogin(email: string, password: string) {
    return this.http.post<any>("https://reseau.jdedev.fr/api/user/connect",{"email":email,"password":password})
  }
  // inscription
  postSign(email: string, pseudo: string, password: string) {
    return this.http.post<any>("https://reseau.jdedev.fr/api/user",{"email":email,"password":password,"pseudo":pseudo, avatar:''})
  }

  setUsersData(data: any){
    this.userData = data;
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