import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modelo/user';
import { ServiceService } from 'src/app/service/service.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users: User[] = [];
  constructor(private service: ServiceService, private router: Router) {}
  ngOnInit() {
    this.postUser()
    this.getUser()
   
    
  }
  postUser(){
    const useObj: User = {
      id: "7",
      name: 'name',
      lastName: 'testlast',
    };
    this.service.postUser(useObj).subscribe((dato)=>{
      console.log(dato);
    });


  }
  getUser(){
    this.service.getUserById('3').subscribe((data) => {
       this.users.push(data);
       console.log(data)
        });

  }
}
