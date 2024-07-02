import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/layout/dashboard.component';
import { LayoutComponent } from './components/layout/youtube-layout.component';
import { HeaderComponent } from './components/layout/header.component';
import { PostComponent } from './containers/post/post.component';
import { UsersComponent } from './containers/users/users.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    HeaderComponent,
    PostComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
