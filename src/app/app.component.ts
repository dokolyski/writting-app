import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'writting-app';

  panelOpenState = false;

  constructor() {}

  onSelectionChanged(event: any): void {
    if (event.oldRange == null) {
      this.onFocus();
    }
    if (event.range == null) {
      this.onBlur();
    }
  }

  onContentChanged(event: any): void {
    console.log(event.html);
  }

  onFocus(): void {
    console.log('On Focus');
  }
  onBlur(): void {
    console.log('Blurred');
  }
}
