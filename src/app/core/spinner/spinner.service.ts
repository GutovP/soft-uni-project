import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Spinner {
  show: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private spinnerSbj = new Subject<Spinner>();
  spinnerState = this.spinnerSbj.asObservable();

  constructor() {}

  showSpinner() {
    this.spinnerSbj.next(<Spinner>{ show: true });
  }

  hideSpinner() {
    this.spinnerSbj.next(<Spinner>{ show: false });
  }
}
