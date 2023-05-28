import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SigninComponent } from './auth/signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentRecordsComponent } from './student/student-records/student-records.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './menubar/sidebar/sidebar.component';
import { CardModule } from 'primeng/card';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { MenuModule } from 'primeng/menu';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ErrorComponent } from './error/error.component';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    DashboardComponent,
    StudentRecordsComponent,
    MenubarComponent,
    SidebarComponent,
    StatsCardComponent,
    StudentFormComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    SidebarModule,
    CardModule,
    MenuModule,
    TableModule,
    ToastModule,
    DialogModule,
    HttpClientModule,
    PaginatorModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
