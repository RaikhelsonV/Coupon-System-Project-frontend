import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Company} from 'src/app/models/company';
import {GeneralService} from 'src/app/services/general.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  public companies: Company[];
  token: string = localStorage.getItem('token');

  public constructor(private title: Title, private generalsService: GeneralService) {
  }

  public ngOnInit(): void {
    this.title.setTitle('Companies');
    setTimeout(() => {
      this.generalsService.getAllCompanies().subscribe(companies => {
        this.companies = companies;
      }, err => {
        alert('Error:' + err.message);
      });

    }, 1000);
  }

  public showImage(imageSource: string): void {
    alert('User clicked on image' + imageSource);
  }

}
