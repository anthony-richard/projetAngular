import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private userData:{ token: string,id:string, email:string}
  constructor(private http: HttpClient) {
    this.userData = {token:'',id:'',email:''}
  }

  postLogin(email: string, password: string) {
    this.http.post<any>("https://reseau.jdedev.fr/api/user/connect",{"email":email,"password":password}).subscribe(data=>{
      this.userData=data;
      return 'come on user connected';
    })
  }
  getUsersData() {
    return this.userData;
  }
  getJwt() {
    return this.userData.token;
  }
  logout(){
    this.userData = {token:'',id:'',email:''};
  }
}