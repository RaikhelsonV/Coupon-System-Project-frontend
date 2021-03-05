import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public imageWidth: number;
  public imageHeight: number;

  public constructor(private title: Title) {
  }

  public ngOnInit(): void {
    this.imageWidth = 150;
    this.imageHeight = 230;
    this.title.setTitle('Home');
  }

}
