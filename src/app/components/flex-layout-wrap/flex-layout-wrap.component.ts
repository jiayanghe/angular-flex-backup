import { Component, OnInit } from '@angular/core';
import {CurComponentService} from '../../services/cur-component.service';

@Component({
  selector: 'app-flex-layout-wrap',
  templateUrl: './flex-layout-wrap.component.html',
  styleUrls: ['./flex-layout-wrap.component.css']
})
export class FlexLayoutWrapComponent implements OnInit {

  constructor(
    private curCompService: CurComponentService
  ) { }

  ngOnInit() {
    this.updateCurrentComponent('Flex Layout Wrap');
  }

  updateCurrentComponent(componentName: string) {
    this.curCompService.updateCurrentComponent(componentName);
  }

}
