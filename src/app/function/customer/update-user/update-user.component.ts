import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user= new User();
  token: string = localStorage.getItem("token");
  Validation : boolean = true

 
   constructor(private userService: UserService,private activatedRoute: ActivatedRoute) { }
 

   ngOnInit() {
   }
  //  idFormControl = new FormControl('');
  //  emailFormControl = new FormControl('');
  //  passwordFormControl = new FormControl('');
 
  //  myFormGroup = new FormGroup(
  //    {
  //      id:this.idFormControl,
  //      email:this.emailFormControl,
  //      password:this.passwordFormControl,
  //    });
 
//      UpdateAccount(){
     
//        this.user.email =this.emailFormControl.value;
//        this.user.password = this.passwordFormControl.value;
   
       
//       //  this.userService.changeEmail(this.email, this.password, this.newE ).subscribe(c => {
//       //    this.user = c;
         
//          console.log(c)
//          alert("The user was updated succesfully")
     
//        }, err => {
//          console.log("error:");
//        });
//  }
}
