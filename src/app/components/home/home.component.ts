import { Component, OnInit } from '@angular/core';
import {CurComponentService} from '../../services/cur-component.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private curCompService: CurComponentService
  ) { }

  ngOnInit() {
    this.updateCurrentComponent('Home');
  }

  updateCurrentComponent(componentName: string) {
    this.curCompService.updateCurrentComponent(componentName);
  }

}
