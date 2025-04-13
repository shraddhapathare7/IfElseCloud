import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { VendorBreakdownComponent } from '../vendor-breakdown/vendor-breakdown.component';
import { VendorMonitoredComponent } from '../vendor-monitored/vendor-monitored.component';
import { TeamMembersComponent } from '../team-members/team-members.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ SidebarComponent, VendorBreakdownComponent, VendorMonitoredComponent, TeamMembersComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
