import { Component, OnInit } from '@angular/core';
import {CurComponentService} from '../../services/cur-component.service';

@Component({
  selector: 'app-basic-column-content-centered',
  templateUrl: './basic-column-content-centered.component.html',
  styleUrls: ['./basic-column-content-centered.component.css']
})
export class BasicColumnContentCenteredComponent implements OnInit {

  constructor(
    private curCompService: CurComponentService
  ) { }

  ngOnInit() {
    this.updateCurrentComponent('Basic Column Content Center');
  }

  updateCurrentComponent(componentName: string) {
    this.curCompService.updateCurrentComponent(componentName);
  }

}
