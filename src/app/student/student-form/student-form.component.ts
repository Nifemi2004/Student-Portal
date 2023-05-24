import { Component, ViewChild } from '@angular/core';
import { StudentRegService } from 'src/app/services/student-reg.service';
import { StudentRecordsComponent } from '../student-records/student-records.component';
import { StudentModel } from 'src/app/interface/student-model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent {
  studentForms!: StudentModel;

  @ViewChild(StudentRecordsComponent)
  StudentRecordsComponent!: StudentRecordsComponent;

  constructor(private studentRegService: StudentRegService) {}

  submitForm() {
    console.log(JSON.stringify(this.studentForms));
    
  }
}
