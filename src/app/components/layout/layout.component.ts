import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ModeService } from 'src/app/services/mode.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public role:string = localStorage.getItem("role");

  public constructor(public modeService: ModeService ){}

  ngOnInit(): void {
    this.role = this.modeService._clientType;
  

  }


}


