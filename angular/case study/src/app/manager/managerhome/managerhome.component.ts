import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-managerhome',
  templateUrl: './managerhome.component.html',
  styleUrls: ['./managerhome.component.css']
})
export class ManagerhomeComponent implements OnInit {

  //dependency injection --> no need to create object by programmer
  constructor(private router: Router, private userService: UserService) { 
    console.log(this.userService.getUsers())
  }

  ngOnInit() {
  }
  goToLogin(){
    this.router.navigate(['login'])    
  }
}
