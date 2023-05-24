import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  sidebarVisible!: boolean;
  items!: MenuItem[];

  constructor(private router: Router) {}

  openDashboard() {
    this.router.navigate(['/dashboard']);
  }

  openStudentRecord() {
    this.router.navigate(['/studentrecord']);
  }

  openStudentForm() {
    this.router.navigate(['/studentform']);
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Student',
        icon: 'pi pi-fw pi-user',
      },
      {
        label: 'Student Records',
        icon: 'pi pi-fw pi-database',
      },
    ];
  }
}
