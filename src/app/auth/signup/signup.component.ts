import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminDetails } from 'src/app/interface/admin-details';
import { StudentRegService } from 'src/app/services/student-reg.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private studentRegService: StudentRegService
  ) {}

  signUpForm!: FormGroup;
  formData!: AdminDetails;

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  signUpUser() {
    //If not valid, stops here
    if (!this.signUpForm.valid) return alert('Form is invalid.');

    this.studentRegService.createUser(this.signUpForm.value).subscribe(
      (response) => {
        console.log(response);
        // this.signUpForm.reset();
      },
      (error: any) => console.log(error),
      // () => console.log(this.signUpForm.value)
    );
    this.router.navigate(['/dashboard']);
  }
}
