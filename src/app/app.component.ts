import {Component, OnDestroy} from '@angular/core';
import {CurComponentService} from './services/cur-component.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  curComponent: string;
  bSubject: any;

  constructor(
    private curCompService: CurComponentService
  ) {
    this.bSubject = this.curCompService.getComponentObs().subscribe((value) => {
      console.log('Subscription got', value);
      this.curComponent = value;
    });
  }

  ngOnDestroy() {
    if (this.bSubject) { this.bSubject.unsubscribe(); }
  }

}
