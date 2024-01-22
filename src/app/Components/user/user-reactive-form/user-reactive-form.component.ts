import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.scss']
})
export class UserReactiveFormComponent {

  userForm:FormGroup;
  constructor(private fb:FormBuilder){
    // this.userForm= new FormGroup({

    //   firstName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    //   lastName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    //   email: new FormControl('',[Validators.required, Validators.email])


    // })
    this.userForm= this.fb.group({

      firstName: ['',[Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.pattern('[a-zA-Z]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')]],
      address:this.fb.array([])
    })
  }

  get firstName(){
    return this.userForm.get('firstName');
  }

  get lastName(){
    return this.userForm.get('lastName');
  }

  get email(){
    return this.userForm.get('email');
  }


  get address():FormArray{
    return this.userForm.get('address') as FormArray;
  }

  newAdress():FormGroup{
    return this.fb.group({

      city:'',
      street:''
    })
  }


  addAddress(){
    this.address.push(this.newAdress())
  }

  removeAddress(numOfIndex: number){
    this.address.removeAt(numOfIndex)
  }

}
