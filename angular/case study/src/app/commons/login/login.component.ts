import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userrole } from 'src/app/models/userrole';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as : AuthenticationService, 
    private router: Router
    ) { }

  ngOnInit() {
  }
  @Input() errorMessage = null
  username:string 
  password:string 
  onLogin(){
    this.as.authenticate(this.username, this.password)
    .subscribe(
      data => {
        console.log('inside login', data.roles[0])
        if(data.roles[0] === "ROLE_USER"){
          this.router.navigate(['user'])
        }
        if(data.roles[0] === "ROLE_ADMIN"){
          this.router.navigate(['admin'])
        }
        if(data.roles[0] === "ROLE_MANAGER"){
          this.router.navigate(['manager'])
        }
      },
      error =>{
        //stay on same page
        this.errorMessage = 'LOgin failure'
      }
    )
  }

}
