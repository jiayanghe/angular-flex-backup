import { Component, OnInit } from '@angular/core';
import {CurComponentService} from '../../services/cur-component.service';

@Component({
  selector: 'app-row-reverse',
  templateUrl: './row-reverse.component.html',
  styleUrls: ['./row-reverse.component.css']
})
export class RowReverseComponent implements OnInit {

  constructor(
    private curCompService: CurComponentService
  ) { }

  ngOnInit() {
    this.updateCurrentComponent('Reversed Row');
  }

  updateCurrentComponent(componentName: string) {
    this.curCompService.updateCurrentComponent(componentName);
  }

}
