import { Exploit, ExploitStats, Resource, ExploitType, Severity } from './types';


export const exploits: Exploit[] = [
  {
    id: '1',
    name: 'Mango Markets Exploit',
    date: '2022-10-11',
    type: 'Oracle Manipulation',
    status: 'Resolved',
    severity: 'Critical',
    fundsLost: 114000000,
    projectName: 'Mango Markets',
    description: 'An attacker manipulated the MNGO token price oracle by taking large positions on two exchanges, artificially inflating the price to take out significant loans against their position.',
    technicalDetails: 'The attacker manipulated Mango\'s oracle price by taking large opposing positions on two exchanges, artificially moving MNGO\'s price. This allowed the attacker to take out massive loans against their position, draining Mango\'s treasury.',
    transactionHash: '4vvZ2dBfoV6k3RP4Sd6gHLEFsBB6SuraA1Y5WPvyQPpaYAJnWf49CNpQJXmWrGxQkjpJtf1HzLpYz6ARJTQcY4c4',
    postMortem: 'https://mango-markets.medium.com/mango-v3-exploit-post-mortem-33845c1b86ee',
    timeline: [
      {
        date: '2022-10-11T20:00:00Z',
        title: 'Initial Attack',
        description: 'Attacker began manipulating MNGO price across exchanges.'
      },
      {
        date: '2022-10-11T21:30:00Z',
        title: 'Funds Drained',
        description: 'Approximately $114M was drained from the protocol.'
      },
      {
        date: '2022-10-15T14:00:00Z',
        title: 'Negotiation',
        description: 'Attacker negotiated to return $67M, keeping $47M as a "bug bounty".'
      }
    ],
    tags: ['DEX', 'Oracle', 'Lending']
  },
  {
    id: '2',
    name: 'Solend Protocol Exploit',
    date: '2022-11-02',
    type: 'Logic Error',
    status: 'Resolved',
    severity: 'High',
    fundsLost: 1260000,
    projectName: 'Solend',
    description: 'An attacker exploited a vulnerability in the oracle configuration to manipulate price feeds and drain funds from the lending protocol.',
    technicalDetails: 'The exploit was possible due to an incorrect oracle configuration that allowed the attacker to take out loans with minimal collateral.',
    transactionHash: '3vZ2dBfoV6k3RP4Sd6gHLEFsBB6SuraA1Y5WPvyQPpaYAJnWf49CNpQJXmWrGxQkjpJtf1HzLpYz6ARJTQcY4c5',
    postMortem: 'https://twitter.com/solendprotocol/status/1587965923777179649',
    timeline: [
      {
        date: '2022-11-02T18:45:00Z',
        title: 'Vulnerability Exploited',
        description: 'Attacker exploited oracle misconfiguration.'
      },
      {
        date: '2022-11-02T19:30:00Z',
        title: 'Protocol Paused',
        description: 'Solend team paused all operations.'
      },
      {
        date: '2022-11-03T10:00:00Z',
        title: 'Patch Deployed',
        description: 'Fixed oracle configuration deployed.'
      }
    ],
    tags: ['Lending', 'Oracle']
  },
  {
    id: '3',
    name: 'Slope Wallet Private Key Leak',
    date: '2022-08-02',
    type: 'Frontend Attack',
    status: 'Confirmed',
    severity: 'Critical',
    fundsLost: 4000000,
    projectName: 'Slope Wallet',
    description: 'Slope Wallet was sending user seed phrases unencrypted to their centralized servers, leading to a compromise of thousands of wallets.',
    technicalDetails: 'The Slope mobile app was logging user seed phrases in plaintext and transmitting them to centralized servers. A breach of these servers exposed private keys that were then used to drain funds.',
    transactionHash: '',
    postMortem: 'https://slope-finance.medium.com/slopes-official-statement-regarding-the-ongoing-exploit-70b8647d290f',
    timeline: [
      {
        date: '2022-08-02T14:00:00Z',
        title: 'Initial Reports',
        description: 'First reports of wallets being drained.'
      },
      {
        date: '2022-08-02T20:00:00Z',
        title: 'Investigation Begun',
        description: 'Multiple security teams began investigation.'
      },
      {
        date: '2022-08-03T10:00:00Z',
        title: 'Cause Identified',
        description: 'Plaintext logging of seed phrases identified as the cause.'
      }
    ],
    tags: ['Wallet', 'Privacy', 'Seed Phrase']
  },
  {
    id: '4',
    name: 'Wormhole Bridge Exploit',
    date: '2022-02-02',
    type: 'Smart Contract',
    status: 'Resolved',
    severity: 'Critical',
    fundsLost: 320000000,
    projectName: 'Wormhole',
    description: 'An attacker exploited a vulnerability in Wormhole\'s smart contract validation logic, minting 120,000 wETH on Solana without proper backing on Ethereum.',
    technicalDetails: 'The exploit occurred due to a signature verification vulnerability where the attacker was able to forge a valid signature for a VAA (Validator Action Approval) message.',
    transactionHash: '2xKjEGs4MSzC9RzLfr4MnvK8rKoBzA3P5QXP5xvG9Z3qwMJ8837FCQVPvbXkYHoNEAkVYjgVzGR2zTwmZQL4nHCY',
    postMortem: 'https://wormholecrypto.medium.com/wormhole-incident-report-02-02-22-ad9b8f21eec6',
    timeline: [
      {
        date: '2022-02-02T21:04:00Z',
        title: 'Exploit Executed',
        description: 'Attacker exploited the signature verification to mint 120,000 wETH.'
      },
      {
        date: '2022-02-02T23:00:00Z',
        title: 'Bridge Halted',
        description: 'Wormhole team halted bridge operations.'
      },
      {
        date: '2022-02-03T13:00:00Z',
        title: 'Funds Replaced',
        description: 'Jump Crypto added 120,000 ETH to restore bridge solvency.'
      }
    ],
    tags: ['Bridge', 'Cross-chain', 'Signature Verification']
  },
  {
    id: '5',
    name: 'Cashio Infinite Mint Exploit',
    date: '2022-03-23',
    type: 'Logic Error',
    status: 'Confirmed',
    severity: 'High',
    fundsLost: 52000000,
    projectName: 'Cashio',
    description: 'An attacker exploited a vulnerability in Cashio\'s smart contract to mint an unlimited amount of CASH tokens.',
    technicalDetails: 'The exploit allowed the attacker to create fake collateral accounts that passed verification checks, enabling the minting of unbacked CASH tokens.',
    transactionHash: '5qLMZ1JKhZTfzg5SZcUqvKvdwEPeBorFZ9Zfu1gEcATrQKP6PgzQQg8fKVZoKJHNHiXKUGHBaTWiez5Ff9nqQzxN',
    postMortem: 'https://twitter.com/CashioApp/status/1506726185439920128',
    timeline: [
      {
        date: '2022-03-23T12:30:00Z',
        title: 'Exploit Detected',
        description: 'Large minting of unbacked CASH tokens detected.'
      },
      {
        date: '2022-03-23T13:00:00Z',
        title: 'Protocol Halted',
        description: 'Cashio team disabled further mints.'
      },
      {
        date: '2022-03-23T18:00:00Z',
        title: 'Audit Announced',
        description: 'Team announced a full security audit.'
      }
    ],
    tags: ['Stablecoin', 'Mint']
  }
];


export const calculateExploitStats = (): ExploitStats => {
  const typeCount: Record<ExploitType, number> = {
    'Smart Contract': 0,
    'Flash Loan': 0,
    'Oracle Manipulation': 0,
    'Access Control': 0,
    'Logic Error': 0,
    'Admin Key Compromise': 0,
    'Frontend Attack': 0,
    'Rug Pull': 0,
    'Social Engineering': 0,
    'Other': 0
  };
  
  const severityCount: Record<Severity, number> = {
    'Critical': 0,
    'High': 0,
    'Medium': 0,
    'Low': 0
  };
  
  const monthlyExploits: Record<string, number> = {};
  
  let totalLost = 0;
  let totalRecovered = 0;
  
  exploits.forEach(exploit => {
    // Count by type
    typeCount[exploit.type]++;
    
    // Count by severity
    severityCount[exploit.severity]++;
    
    // Count by month
    const date = new Date(exploit.date);
    const monthYear = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
    monthlyExploits[monthYear] = (monthlyExploits[monthYear] || 0) + 1;
    
    // Sum funds lost
    totalLost += exploit.fundsLost;
    
    // Rough estimate of recovered funds based on status
    if (exploit.status === 'Funds Recovered') {
      totalRecovered += exploit.fundsLost * 0.8; // Assume 80% recovery for this status
    } else if (exploit.status === 'Resolved') {
      totalRecovered += exploit.fundsLost * 0.3; // Assume 30% recovery for resolved issues
    }
  });
  
  // Calculate average response time (mock data)
  const avgResponseTime = 12.5; // in hours
  
  return {
    totalExploits: exploits.length,
    totalFundsLost: totalLost,
    avgResponseTime,
    exploitsByType: typeCount,
    exploitsBySeverity: severityCount,
    exploitsByMonth: monthlyExploits,
    totalRecovered
  };
};

// Security resources
export const resources: Resource[] = [
  {
    id: '1',
    title: 'Solana Program Security Best Practices',
    description: 'Comprehensive guide to secure Solana program development, covering common vulnerabilities and security patterns.',
    url: 'https://github.com/solana-foundation/security-docs',
    category: 'Guide',
    tags: ['Development', 'Smart Contracts', 'Best Practices']
  },
  {
    id: '2',
    title: 'Anchor Framework Security Checklist',
    description: 'Essential security checks for Solana developers using the Anchor framework.',
    url: 'https://www.anchorframework.com/docs/security/checklist',
    category: 'Guide',
    tags: ['Anchor', 'Development', 'Checklist']
  },
  {
    id: '3',
    title: 'Solana Validator Security',
    description: 'Best practices for securing Solana validator nodes.',
    url: 'https://docs.solana.com/running-validator/validator-security',
    category: 'Guide',
    tags: ['Validator', 'Infrastructure', 'Network']
  },
  {
    id: '4',
    title: 'Soteria - Solana Smart Contract Auditing Tool',
    description: 'Automated security scanner for Solana programs.',
    url: 'https://github.com/solana-labs/soteria',
    category: 'Tool',
    tags: ['Audit', 'Static Analysis', 'Automation']
  },
  {
    id: '5',
    title: 'Securing SPL Token Programs',
    description: 'In-depth article on security considerations for SPL token implementations.',
    url: 'https://solana.com/developers/guides/security/spl-tokens',
    category: 'Article',
    tags: ['SPL', 'Tokens', 'Standards']
  },
  {
    id: '6',
    title: 'Wallet Security Fundamentals',
    description: 'Guide to securing wallets and private keys in the Solana ecosystem.',
    url: 'https://docs.phantom.app/security/best-practices',
    category: 'Guide',
    tags: ['Wallet', 'Private Keys', 'User Security']
  }
];