import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { StudentRegService } from 'src/app/services/student-reg.service';
import { StudentModel } from 'src/app/interface/student-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-records',
  templateUrl: './student-records.component.html',
  styleUrls: ['./student-records.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class StudentRecordsComponent implements OnInit {
  students!: StudentModel[] ;

  id: number = 0;

  name: string = '';

  email: string = '';

  phone: string = '';

  selectedUsers!: [];

  newData? = {};

  constructor(
    private studentRegService: StudentRegService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUsersFromService();
  }

  openNew() {
    this.router.navigate(['/studentform']);
  }

  getUsersFromService() {
   return this.studentRegService.getStudents()
    .subscribe(
      (data: any) => {
        console.log('success entered')
        this.students = data;
        console.log(data);
      
      },
      (err) => {
        console.log('error entered')
        console.log(err);
      },
    );
  }
}
