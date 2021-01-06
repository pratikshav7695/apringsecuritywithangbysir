import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  // //without async pipe
  // users: any = []
  // constructor(private userService: UserService) {
  //   this.userService.getUsers().subscribe(
  //     res => this.users = res
  //   )
  //  }

  //with async pipe
  users: Observable<Users>
  constructor(private userService: UserService) {
    this.users = this.userService.getUsers()
   }

   username: String
  ngOnInit() {
    this.username = sessionStorage.getItem('username')
  }
}
