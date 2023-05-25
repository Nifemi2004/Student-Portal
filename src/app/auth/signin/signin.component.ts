import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginDetails } from 'src/app/interface/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentRegService } from 'src/app/services/student-reg.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private studentRegService: StudentRegService
  ) {}
  signInForm!: FormGroup;

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  userLogin() {
    //If not valid, stops here
    if (!this.signInForm.valid) return alert('Form is invalid.');

    console.log(this.signInForm.value);
    this.studentRegService
      .login(this.signInForm.value)
      .pipe(first())
      .subscribe({
        next: () => this.router.navigate(['/dashboard']),
        error: (error) => console.log(error),
      });
      this.signInForm.reset();
  }
}
