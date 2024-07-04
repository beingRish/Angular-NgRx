import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/layout/dashboard.component';
import { LayoutComponent } from './components/layout/youtube-layout.component';
import { HeaderComponent } from './components/layout/header.component';
import { PostComponent } from './containers/post/post.component';
import { UsersComponent } from './containers/users/users.component';
import { MaterialModule } from './material.module';
import { HttpService } from './services/http.service';
import { ApiService } from './services/api.service';
import { UserCardComponent } from './components/user-card.component';
import { UserListComponent } from './components/user-list.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers';
import { YoutubeRepository } from './services/youtube-repository';
import { errorComponent } from './components/error.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { updateUserComponent } from './components/update-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    HeaderComponent,
    PostComponent,
    UsersComponent,
    UserCardComponent,
    UserListComponent,
    errorComponent,
    updateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FlexModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    HttpService,
    ApiService,
    YoutubeRepository,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
