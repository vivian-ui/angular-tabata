import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Tabata Timer';
  action = '-';
  round = 0;
  second = 5;
  intervalId = setInterval(() => {
    if (this.round < 1) this.action = 'PREPARE';
    else if (this.round > 8) this.action = 'DONE!';
    else if (this.second > 10) this.action = 'DO IT!!!';
    else this.action = 'REST!';
    document.getElementById('app-action').innerHTML = this.action;
    if (this.round >= 1 && this.round <= 8) {
      document.getElementById('app-round').innerHTML = this.round.toString();
    } else {
      document.getElementById('app-round').innerHTML = '-';
    }
    if (this.round <= 8) {
      document.getElementById('app-time').innerHTML =
        this.second.toString() + 's';
    } else {
      document.getElementById('app-time').innerHTML = '-';
    }
    this.second -= 1;
    if (this.second == 0) {
      this.round += 1;
      this.second = 30;
    }
  }, 1000);
}
