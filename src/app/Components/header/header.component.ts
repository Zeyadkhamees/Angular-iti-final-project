import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userLog:boolean;
  constructor(private userAuthService: UserAuthService){

    this.userLog = this.userAuthService.isUserLogged;
  }
  ngOnInit(): void {
    // this.userLog = this.userAuthService.isUserLogged;

    this.userAuthService.getUserStatus().subscribe(data=>{
      this.userLog=data;
    })
  }

}
