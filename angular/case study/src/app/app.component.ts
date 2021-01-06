import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './shared/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'casestudy';
  userrole: Observable<String>
  constructor(private as: AuthenticationService, 
      private router: Router){
        
      }
  logout(){ 
    this.as.logout()
    this.router.navigate(['login'])
  }
  ngOnInit(){
    this.userrole = this.as.userrole
  }
}
