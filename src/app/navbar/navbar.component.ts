import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private auth : AuthentificationService) { }
  
  jwt(): string {
    return this.auth.getJwt() as string;
  }

  logout():void{
    this.auth.logout();
    this.router.navigateByUrl('/')
  }

  ngOnInit(): void {
  }

}
