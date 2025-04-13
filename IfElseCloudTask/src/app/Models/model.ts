export interface TeamMember {
    name: string;
    username: string;
    avatar?: string;
    status: 'Customer' | 'Churned';
    role: string;
    licenseUse: number;
    teams: string[];
  }
  