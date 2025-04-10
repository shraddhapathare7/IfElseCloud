import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      // { path: 'vendor-breakdown', component: VendorBreakdownComponent },
      // { path: 'vendors-monitored', component: VendorsMonitoredComponent },
      // { path: 'team-members', component: TeamMembersComponent },
      // { path: '', redirectTo: 'vendor-breakdown', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
