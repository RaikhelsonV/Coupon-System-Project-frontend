import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompaniesService } from 'src/app/services/companies.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-com-update-company',
  templateUrl: './com-update-company.component.html',
  styleUrls: ['./com-update-company.component.css']
})
export class ComUpdateCompanyComponent implements OnInit {

  company= new Company();
  token: string = localStorage.getItem("token");
  Validation : boolean = true
 
   constructor(private companiesService: CompaniesService,private activatedRoute: ActivatedRoute) { }
 
   ngOnInit() {
   }
   idFormControl = new FormControl(localStorage.getItem("company_id"));
   nameFormControl = new FormControl('');
   imageURLFormControl = new FormControl('',[Validators.required, Validators.maxLength(2000)]);

   myFormGroup = new FormGroup(
     {
       id:this.idFormControl,
       name:this.nameFormControl,
       imageURL:this.imageURLFormControl,
     });
 
     UpdateCompany(){
       this.company.id =this.idFormControl.value; 
       this.company.name =this.nameFormControl.value;
       this.company.imageURL = this.imageURLFormControl.value;
       
       this.companiesService.updateCompCompanyRest(this.token, this.company.id, this.company ).subscribe(c => {
         this.company = c;
         
         console.log(c)
         alert("The Company " + c.name + " was updated succesfully")
     
       }, err => {
         console.log("error: Unable to update this company!" + err.message);
       });
 }
}
