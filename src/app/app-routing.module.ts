import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path : "", component : LoginComponent},
  {path : "register", component : RegisterComponent},
  {path : "article/liste", component : ListArticlesComponent},
  {path : "user/liste", component : ListUsersComponent},
  {path : "user/:id", component : UserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
