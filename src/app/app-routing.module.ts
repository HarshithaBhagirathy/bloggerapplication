import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BlogsComponent } from './components/blogs/blogs.component';
import { DashboardComponent } from './components/blogs/dashboard/dashboard.component';
import { PagesComponent } from './components/blogs/dashboard/pages/pages.component';
import { PostsComponent } from './components/blogs/dashboard/posts/posts.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AllblogsComponent } from './components/allblogs/allblogs.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'blogs/:id',component:BlogsComponent,
   canActivate : [AuthGuard],
    children:[
      {path:'',redirectTo:'posts',pathMatch:'full'},
      {path:'dashboard',component:DashboardComponent},
      {path:'posts',component:PostsComponent},
      {path:'pages',component:PagesComponent}
    ]
  },
  {path:'allblogs/:id',component:AllblogsComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
