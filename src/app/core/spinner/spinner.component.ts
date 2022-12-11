import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Spinner, SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  //componentHandler:any;
  visible = false;
  private subs = new Subscription();
  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    //this.componentHandler.upgradeDom();
    this.subs.add(
      this.spinnerService.spinnerState.subscribe((data: Spinner) => {
        this.visible = data.show;
      })
    );
  }
}
