import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { AuthentificationService } from '../service/authentification.service';
import { User } from '../interfaces/userInterface';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: User[]
  constructor(private user:UserService, private auth:AuthentificationService, private router: Router) {
    this.users = [];
    this.tokenJwt();
    this.getAllUsers()
  }
  getAllUsers(): void {
    this.user.getAllUser().subscribe((value: any) => {
      this.users = value;
    })
  }
  routeOneUser(id?:number){
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