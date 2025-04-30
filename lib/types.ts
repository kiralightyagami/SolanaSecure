

export type ExploitType = 
  | 'Smart Contract'
  | 'Flash Loan'
  | 'Oracle Manipulation'
  | 'Access Control'
  | 'Logic Error'
  | 'Admin Key Compromise'
  | 'Frontend Attack'
  | 'Rug Pull'
  | 'Social Engineering'
  | 'Other';

export type ExploitStatus = 
  | 'Confirmed'
  | 'Suspected'
  | 'Resolved'
  | 'Funds Recovered'
  | 'Ongoing Investigation';

export type Severity = 
  | 'Critical'
  | 'High'
  | 'Medium'
  | 'Low';

export interface Exploit {
  id: string;
  name: string;
  date: string;
  type: ExploitType;
  status: ExploitStatus;
  severity: Severity;
  fundsLost: number; // in USD
  projectName: string;
  description: string;
  technicalDetails?: string;
  transactionHash?: string;
  exploitAddress?: string;
  postMortem?: string;
  timeline?: TimelineEvent[];
  tags?: string[];
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface ExploitStats {
  totalExploits: number;
  totalFundsLost: number;
  avgResponseTime: number; // in hours
  exploitsByType: Record<ExploitType, number>;
  exploitsBySeverity: Record<Severity, number>;
  exploitsByMonth: Record<string, number>;
  totalRecovered: number;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'Guide' | 'Tool' | 'Article' | 'Video' | 'Community';
  tags: string[];
}