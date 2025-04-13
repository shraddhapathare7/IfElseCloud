import { Component } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-vendor-monitored',
  standalone: true,
  imports: [NgCircleProgressModule],
  templateUrl: './vendor-monitored.component.html',
  styleUrl: './vendor-monitored.component.scss'
})
export class VendorMonitoredComponent {

  // percent = 80;
  // total = 240;
  // growth = 10;
}
