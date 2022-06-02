import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private auth:AuthentificationService) {
  }

  // liste users
  getAllUser():any {
    const jwt = this.auth.getJwt();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    })
    return this.http.get<any>("https://reseau.jdedev.fr/api/user",{headers:headers})
  }

  getOneUser(id:number):any {
    const jwt = this.auth.getJwt();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    })
    return this.http.get<any>(`https://reseau.jdedev.fr/api/user/${id}`,{headers:headers})
  }
  
  updateUser(pseudo: string, email: string, password:string, id:string):any {
    const jwt = this.auth.getJwt();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    })
    return this.http.put<any>(`https://reseau.jdedev.fr/api/user/${id}`,{email:email,pseudo:pseudo,password:password}, {headers})
  }
  
  deleteUser(id:string):any {
    const jwt = this.auth.getJwt();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`
    })
    return this.http.delete<any>(`https://reseau.jdedev.fr/api/user/${id}`,{headers:headers})
  }


}