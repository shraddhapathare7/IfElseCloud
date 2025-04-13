import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-vendor-breakdown',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './vendor-breakdown.component.html',
  styleUrl: './vendor-breakdown.component.scss'
})
export class VendorBreakdownComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Vendor Breakdown'
    },
    xAxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Security Rating'
      }
    },
    series: [{
      name: 'Vendors',
      type: 'column',
      color: '#7f56d9',
      data: [40, 70, 50, 60, 45, 85, 65, 70, 75, 80, 60, 50]
    }]
  };

}
