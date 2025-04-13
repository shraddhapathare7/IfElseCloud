import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TeamMember } from '../../../Models/model';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-team-members',
  standalone: true,
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.scss'
})
export class TeamMembersComponent {
  teamMembers: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://01.fy25ey01.64mb.io/').subscribe(
      data => {
        console.log(data);
        
        this.teamMembers = data;
      },
      error => {
        console.error('API request failed:', error);
        // Optionally, show a user-friendly error message
      }
    );
  }
}
