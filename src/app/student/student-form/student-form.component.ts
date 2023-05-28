import { Component, OnInit } from '@angular/core';
import { StudentRegService } from 'src/app/services/student-reg.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentModel } from 'src/app/interface/student-model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  constructor(
    private studentRegService: StudentRegService,
    private formBuilder: FormBuilder
  ) {}

  studentForms!: FormGroup;

  pureAndAppliedScience: string[] = [
    'Computer Science',
    'Mathematics',
    'Physics',
    'Biochemistry',
    'Food Sciences',
  ];
  engineering: string[] = [
    'Chemical Engineering',
    'Mechatronics',
    'Electrical Engineering',
    'Computer Engineering',
  ];
  arts: string[] = ['Music', 'Painting', 'Mass Communication'];

  ngOnInit(): void {
    this.studentForms = this.formBuilder.group({
      lastName: ['', Validators.required],
      middleName: ['', Validators.required],
      firstName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      state: ['', Validators.required],
      course: ['', Validators.required],
      gender: ['', Validators.required],
      emergencyContact: ['', Validators.required],
      email: ['', Validators.required],
      dateofBirth: ['', Validators.required],
      departmentId: ['', Validators.required],
      registrationYear: ['', Validators.required],
    });
  }

  get f() {
    return this.studentForms.controls;
  }

  submitForm() {
    // if (this.pureAndAppliedScience.includes(this.f.course.value)) {
    //   this.f.departmentId.setValue(1);
    // } else if (this.engineering.includes(this.f.course.value)) {
    //   this.f.departmentId.setValue(2);
    // } else this.f.departmentId.setValue(3);
    console.log(JSON.stringify(this.studentForms))
  }
}
