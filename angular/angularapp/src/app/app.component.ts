import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  counter = 10;
  handledAdd(){
    this.counter++;
  }
}
