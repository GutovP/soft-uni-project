import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SoftUni';

  constructor(private router: Router, private pageTitle: Title) {
    this.router.events
      .pipe(
        filter(
          (event): event is ActivationStart => event instanceof ActivationStart
        ),
        map((event) => event.snapshot.data?.['title']),
        filter((data) => !!data)
      )
      .subscribe((pageTitle) => {
        this.pageTitle.setTitle(this.title + ' - ' + pageTitle);
      });
  }
}
