import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './componentes/input/input.component';
import { MenuComponent } from './componentes/menu/menu.component';

@NgModule({
  declarations:
  [
    AppComponent,
    HomeComponent,
    InputComponent,
    MenuComponent
  ],
  imports:
  [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
