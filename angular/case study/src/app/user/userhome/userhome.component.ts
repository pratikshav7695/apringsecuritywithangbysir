import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  ////dependency injection (constructor based)
  constructor(private aRoute: ActivatedRoute) { }

  ///
  id:any 
  ngOnInit() {
    //params --> http://localhost:4200/user/12343
    this.id = this.aRoute.snapshot.paramMap.get('id')

    //queryparams --> http://localhost:4200/user?name=dm&address=pune
    console.log(this.aRoute.snapshot.queryParamMap.get('name'))
    console.log(this.aRoute.snapshot.queryParamMap.get('address'))
  }

}
