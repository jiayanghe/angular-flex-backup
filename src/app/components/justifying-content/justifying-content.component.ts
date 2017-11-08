import { Component, OnInit } from '@angular/core';
import {CurComponentService} from '../../services/cur-component.service';

@Component({
  selector: 'app-justifying-content',
  templateUrl: './justifying-content.component.html',
  styleUrls: ['./justifying-content.component.css']
})
export class JustifyingContentComponent implements OnInit {

  constructor(
    private curCompService: CurComponentService
  ) { }

  ngOnInit() {
    this.updateCurrentComponent('Justifying Content');
  }

  updateCurrentComponent(componentName: string) {
    this.curCompService.updateCurrentComponent(componentName);
  }

}
