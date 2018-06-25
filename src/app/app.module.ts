import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PersonalComponent } from './personal/personal.component';
import { PaymentComponent } from './payment/payment.component';
import { ReportComponent } from './report/report.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';

const appRoutes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Personal', component: PersonalComponent },
  { path: 'Payment', component: PaymentComponent },
  { path: 'Report', component: ReportComponent },
  { path: 'AboutUs', component: AboutUsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PersonalComponent,
    PaymentComponent,
    ReportComponent,
    HomeComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
