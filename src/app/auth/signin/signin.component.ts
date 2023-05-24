import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private router: Router) {}
  signInForm: any = {};

  signIn() {
    console.log('signInForm:', this.signInForm);
    this.router.navigate(['/dashboard']);
  }
}
 