import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PhotosGridComponent } from './components/grids/Photos/photos-grid.component';
import { ApiService } from './services/api.service';
import { ApiAuthService } from './services/api.auth.service';
import { PhotoService } from './services/photo.service';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    PhotosGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ApiService, ApiAuthService, PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
