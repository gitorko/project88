import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RestService} from './services/rest.service';
import {LoginComponent} from './components/login/login.component';
import {MenuComponent} from './components/menu/menu.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ChartComponent} from './components/chart/chart.component';
import {ChartsModule} from 'ng2-charts';
import {AlertComponent} from "./components/alert/alert.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    NavbarComponent,
    ChartComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
