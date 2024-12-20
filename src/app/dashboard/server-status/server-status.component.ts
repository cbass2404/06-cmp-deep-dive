import { Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  public currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random() * 10;

      if (rnd < 4) {
        this.currentStatus = 'offline';
      } else if (rnd < 7) {
        this.currentStatus = 'online';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
