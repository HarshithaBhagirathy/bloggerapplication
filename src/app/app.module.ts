import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/blogs/dashboard/dashboard.component';
import { PostsComponent } from './components/blogs/dashboard/posts/posts.component';
import { PagesComponent } from './components/blogs/dashboard/pages/pages.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { PostlistComponent } from './components/blogs/dashboard/posts/postlist/postlist.component';
import { DataService } from './data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { CarouselModule } from '@coreui/angular';
import { AllblogsComponent } from './components/allblogs/allblogs.component';
import { AboutComponent } from './components/about/about.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TokenInterceptorService } from './token-interceptor.service';
import { DispblogsService } from './dispblogs.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BlogsComponent,
    SidebarComponent,
    DashboardComponent,
    PostsComponent,
    PagesComponent,
    PostlistComponent,
    AllblogsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatMenuModule,
    CarouselModule,
    Ng2SearchPipeModule,
    MatSnackBarModule,
    FlexLayoutModule
   
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService, multi:true },DataService,DispblogsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
