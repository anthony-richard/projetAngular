import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: [{id:string; email: string; pseudo: string}] | undefined
  constructor(private user:UserService, private auth:AuthentificationService, private router: Router) {
    this.tokenJwt();
    this.getAllUsers()
  }
  getAllUsers(): void {
    this.user.getAllUser().subscribe((value: any) => {
      this.users = value;
    })
  }
  routeOneUser(id:string){
    this.router.navigateByUrl(`/user/${id}`);
  }

  tokenJwt(){
    if (!this.auth.getJwt()) {
      this.router.navigateByUrl('/');
    }
  }


  ngOnInit(): void {
  }

}