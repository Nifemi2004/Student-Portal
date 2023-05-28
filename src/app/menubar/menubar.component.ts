import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { StudentRegService } from '../services/student-reg.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit{
  items!: MenuItem[];

  constructor(private studentRegService: StudentRegService){}

  ngOnInit() {
      this.items = [
          {
              label: 'Profile',
              icon: ' pi pi-fw pi-user',
          },
          {
              label: 'Setting',
              icon: 'pi pi-fw pi-cog'
          },
          {
            label: 'Log-out',
            icon: 'pi pi-fw pi-power-off',
        }
      ];
  }

  logout(){
   this.studentRegService.logout()
  }
}
