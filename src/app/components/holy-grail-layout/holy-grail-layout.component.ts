import { Component, OnInit } from '@angular/core';
import {CurComponentService} from '../../services/cur-component.service';

@Component({
  selector: 'app-holy-grail-layout',
  templateUrl: './holy-grail-layout.component.html',
  styleUrls: ['./holy-grail-layout.component.css']
})
export class HolyGrailLayoutComponent implements OnInit {

  constructor(
    private curCompService: CurComponentService
  ) { }

  ngOnInit() {
    this.updateCurrentComponent('Holy Grail Layout');
  }

  updateCurrentComponent(componentName: string) {
    this.curCompService.updateCurrentComponent(componentName);
  }


}
