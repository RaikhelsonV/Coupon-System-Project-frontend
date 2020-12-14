import { Component} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CompaniesService } from 'src/app/services/companies.service';
import { Company } from 'src/app/models/company';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent  {

  public showImage(imageSource: string): void{
    alert("User clicked on image" + imageSource);
  }
 
  public companies: Company[];
  token: string = localStorage.getItem("token");

  public constructor(private title: Title, private companiesService: CompaniesService , private adminService: AdminService){}
  

  public ngOnInit(): void{

    this.title.setTitle("Companies");
    setTimeout(() => {
      this.companiesService.getAllCompaniesRest().subscribe(companies => {
        this.companies = companies;
       
      }, err => {
        alert("Error:" + err.message)
      });

    },1000);}
    


    
   // setTimeout(() => {
     // this.companiesService.getAllCompaniesHttp().subscribe(companies => {
       // this.companies = companies;
     // }, err => {
      //  alert("Error:" + err.message)
     // });

    //},300);
  //}
  /*
 save(): void{
  this.companiesService.updateCompany(this.company).subscribe(
    () => this.);
}*/

 // public updateCompany(company: Company): void {
     
   // this.companiesService.updateCompany(company).subscribe( p => {
     // alert("Company has been succesfully update! Company ID: " + p.id);
    //}, err => {
     // alert("Error:" + err);
    //})
 // }

  //public deleteCompany(company: Company): void {
    //this.companiesService.deleteCompany(company).subscribe(p => {
      //  p !==company;
     // }, err => {
       // alert("Error:" + err);
      //})
  //}
    
  //  public getCompanyById(company: Company) {
    //  this.companiesService.getCompanyById(this.company.id).subscribe(company => {
      //  this.company['id'] = company.id;
        
      //})
    }
    




  
    
    
    

  
  
   // this.companiesService.getAllCompaniesAsync3().subscribe(companies => {
    //  this.companies = companies;
    //}, err => {
     // alert("Error:" + err.message)
    //});
    
    
    
   


