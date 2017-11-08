import { Component, OnInit } from '@angular/core';
import {CurComponentService} from '../../services/cur-component.service';

@Component({
  selector: 'app-flex-layout-gap',
  templateUrl: './flex-layout-gap.component.html',
  styleUrls: ['./flex-layout-gap.component.css']
})
export class FlexLayoutGapComponent implements OnInit {

  constructor(
    private curCompService: CurComponentService
  ) { }

  ngOnInit() {
    this.updateCurrentComponent('Flex Layout Gap');
  }

  updateCurrentComponent(componentName: string) {
    this.curCompService.updateCurrentComponent(componentName);
  }

}
