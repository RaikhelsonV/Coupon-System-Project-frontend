import {Component, OnInit} from '@angular/core';
import {ModeService} from 'src/app/services/mode.service';

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit {

  constructor(public modeService: ModeService) {
  }

  ngOnInit(): void {
    this.modeService.clientType = this.modeService.ROLE_ADMIN;
  }

}
