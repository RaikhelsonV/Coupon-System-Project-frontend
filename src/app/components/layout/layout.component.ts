import {Component, OnInit} from '@angular/core';
import {ModeService} from 'src/app/services/mode.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public constructor(public modeService: ModeService) {
  }

  ngOnInit() {
    this.modeService.clientType = this.modeService.ROLE_USER;
  }


}


