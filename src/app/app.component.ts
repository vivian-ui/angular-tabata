import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tabata - Angular';
  action = '-';
  round = 0;
  second = 5;
  intervalId = setInterval(() => {
    if (this.round < 1) this.action = 'PREPARE';
    else if (this.round > 8) this.action = 'FEITO!';
    else if (this.second > 10) this.action = 'FAÇA!!!';
    else this.action = 'DESCANSO!';
    this.action;
    if (this.round >= 1 && this.round <= 8) {
      this.round;
    } else {
      ('-');
    }
    if (this.round <= 8) {
      this.second;
    } else {
      ('-');
    }
    this.second -= 1;
    if (this.second == 0) {
      this.round += 1;
      this.second = 30;
    }
  }, 1000);
}
