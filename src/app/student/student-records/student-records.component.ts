import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { StudentRegService } from 'src/app/services/student-reg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-records',
  templateUrl: './student-records.component.html',
  styleUrls: ['./student-records.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class StudentRecordsComponent implements OnInit {
  users!: any;

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
    this.studentRegService.getUsers()
    .subscribe(
      (data: any) => {
        this.users = data;
        console.log(data);
        console.log(this.users);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('Successfully gotten the users');
      }
    );
  }
}
