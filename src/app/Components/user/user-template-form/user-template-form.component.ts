import { Router } from '@angular/router';
import { Iuser } from 'src/app/models/iuser';
import { UserService } from './../../../services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-template-form',
  templateUrl: './user-template-form.component.html',
  styleUrls: ['./user-template-form.component.scss']
})
export class UserTemplateFormComponent {

  user:Iuser = {} as Iuser;

  constructor (private userService: UserService, private router: Router){ }

  addUser(){


    // let u:Iuser={

    //   "id":2,
    //   "firstName":"khamees",
    //   "lastName":"Zeyad",
    //   "email":"KhameesZeyad@gmail.com"
    // };

    // this.userService.signUpUser(u).subscribe({
    //   next:(user)=>{
    //     console.log(user)
    //   },
    //   error:(err)=>{
    //     console.log(err);
    //   }
    // })


    this.userService.signUpUser(this.user).subscribe({
      next:(data)=>{
        console.log(data);
        this.router.navigate(['/productsParent']);
      },
      error:(err)=>{
        console.log(err)
      }
    })






  }

}
