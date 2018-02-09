import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './services/login/login.component';
import {FrontComponent} from './services/front/front.component';
import {TopBarComponent} from './services/top-bar/top-bar.component';
import {RegisterComponent} from './services/register/register.component';
import {LogoutComponent} from './services/logout/logout.component';
import {MediaService} from './services/media.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UploadComponent} from './services/upload/upload.component';
import { ThumbnailPipe } from './pipes/thumbnail.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FrontComponent,
    TopBarComponent,
    RegisterComponent,
    LogoutComponent,
    UploadComponent,
    ThumbnailPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [MediaService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
