import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { 
  Code2, 
  GitBranch, 
  Users, 
  Shield, 
  Zap, 
  Target, 
  Globe, 
  Award,
  FileCode,
  BarChart3,
  Cpu,
  Wrench,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Clock,
  DollarSign,
  Network
} from 'lucide-react';
import { motion } from 'motion/react';

export function AdvancedFeatures() {

  const enterpriseFeatures = [
    {
      icon: Users,
      title: 'Real-time Collaboration',
      description: 'Google Docs style collaboration for smart contracts',
      status: 'live' as const,
      details: 'Multiple developers can work on the same contract simultaneously with live cursors, comments, and conflict resolution.'
    },
    {
      icon: GitBranch,
      title: 'Git Integration',
      description: 'Native version control with GitHub/GitLab sync',
      status: 'live' as const,
      details: 'Automatic commits, branch management, and CI/CD pipeline integration with popular development workflows.'
    },
    {
      icon: Shield,
      title: 'Formal Verification',
      description: 'Mathematical proof of contract correctness',
      status: 'beta' as const,
      details: 'Verify contract properties using advanced theorem proving and symbolic execution techniques.'
    },
    {
      icon: Target,
      title: 'Mainnet Forking',
      description: 'Test against real blockchain state',
      status: 'live' as const,
      details: 'Fork any blockchain at any block height to test your contracts against real-world conditions and data.'
    },
    {
      icon: Cpu,
      title: 'Advanced Profiler',
      description: 'Gas optimization and performance analysis',
      status: 'live' as const,
      details: 'Deep analysis of gas usage, execution paths, and optimization suggestions with visual profiling.'
    },
    {
      icon: Globe,
      title: 'API & SDK Access',
      description: 'Programmatic platform access',
      status: 'live' as const,
      details: 'Full REST API and TypeScript SDK for integrating EasyBuild into your existing development workflows.'
    }
  ];

  const securityFeatures = [
    { name: 'Formal Verification', status: 'enabled' as const, score: 98 },
    { name: 'Economic Attack Simulation', status: 'enabled' as const, score: 95 },
    { name: 'Multi-signature Wallet Integration', status: 'enabled' as const, score: 100 },
    { name: 'Time-lock Controls', status: 'enabled' as const, score: 90 },
    { name: 'Upgrade Pattern Analysis', status: 'enabled' as const, score: 92 },
    { name: 'Front-running Protection', status: 'enabled' as const, score: 88 }
  ];

  const analyticsMetrics = [
    { label: 'Gas Efficiency', value: '94%', trend: '+5%', icon: Zap },
    { label: 'Security Score', value: '96/100', trend: '+2', icon: Shield },
    { label: 'Code Coverage', value: '98%', trend: '+3%', icon: Target },
    { label: 'Performance Score', value: '91%', trend: '+8%', icon: TrendingUp }
  ];

  const communityFeatures = [
    {
      icon: Award,
      title: 'Code Review System',
      description: 'Peer review with reputation scoring',
      users: '1,247 reviewers'
    },
    {
      icon: DollarSign,
      title: 'Bug Bounty Integration',
      description: 'Automated security bounties',
      users: '$2.1M paid out'
    },
    {
      icon: FileCode,
      title: 'Open Source Registry',
      description: 'Verified contract library',
      users: '5,847 contracts'
    },
    {
      icon: BarChart3,
      title: 'Developer Analytics',
      description: 'Track usage and performance',
      users: '89% adoption'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Enterprise Features Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Wrench className="w-6 h-6 text-blue-600" />
          Production-Ready Features
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enterpriseFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-blue-200">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge 
                      variant={feature.status === 'live' ? 'default' : 'secondary'}
                      className={feature.status === 'live' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}
                    >
                      {feature.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Advanced Security Dashboard */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Shield className="w-6 h-6 text-emerald-600" />
          Enterprise Security Suite
        </h2>
        
        <Card>
          <CardHeader>
            <CardTitle>Security Analysis Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    {feature.status === 'enabled' ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    )}
                    <span className="font-medium">{feature.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={feature.score} className="w-24 h-2" />
                    <span className="text-sm font-medium text-emerald-600">{feature.score}%</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg border border-emerald-200">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-emerald-600" />
                <span className="font-semibold text-emerald-800">Enterprise Security Score: 96/100</span>
              </div>
              <p className="text-sm text-emerald-700">
                Your contracts meet enterprise-grade security standards with formal verification, 
                economic attack resistance, and comprehensive testing coverage.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Analytics */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <BarChart3 className="w-6 h-6 text-purple-600" />
          Real-time Development Analytics
        </h2>
        
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          {analyticsMetrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <metric.icon className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-emerald-600 font-medium">{metric.trend}</span>
                </div>
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Performance Monitoring</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Deployment Speed
                </h4>
                <div className="text-2xl font-bold text-blue-600">2.3s</div>
                <p className="text-sm text-gray-600">Average deployment time</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  Gas Optimization
                </h4>
                <div className="text-2xl font-bold text-emerald-600">-34%</div>
                <p className="text-sm text-gray-600">Average gas savings</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold flex items-center gap-2">
                  <Network className="w-4 h-4" />
                  Multi-chain Support
                </h4>
                <div className="text-2xl font-bold text-purple-600">12</div>
                <p className="text-sm text-gray-600">Supported networks</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Community & Open Source */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Users className="w-6 h-6 text-orange-600" />
          Developer Community Features
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                <Badge variant="secondary" className="text-xs">{feature.users}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">🌟 Open Source & Community Driven</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                EasyBuild is fully open source with transparent development, community governance, 
                and contributions from top Web3 developers worldwide. Join 10,000+ developers building the future.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="gap-2">
                  <GitBranch className="w-4 h-4" />
                  View on GitHub
                </Button>
                <Button variant="outline" className="gap-2">
                  <Users className="w-4 h-4" />
                  Join Discord
                </Button>
                <Button variant="outline" className="gap-2">
                  <Award className="w-4 h-4" />
                  Contribute
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* API & Integration */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Code2 className="w-6 h-6 text-indigo-600" />
          Developer API & SDK
        </h2>
        
        <Card>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">REST API</h3>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  <pre>{`// Deploy contract via API
const response = await fetch('/api/v1/deploy', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    contractType: 'ERC20',
    name: 'MyToken',
    symbol: 'MTK',
    network: 'ethereum'
  })
});

const deployment = await response.json();
console.log('Contract deployed:', deployment.address);`}</pre>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">TypeScript SDK</h3>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                  <pre>{`import { EasyBuild } from '@easybuild/sdk';

const eb = new EasyBuild({ apiKey: 'YOUR_API_KEY' });

// Create and deploy in one line
const contract = await eb.contracts.deploy({
  template: 'erc20-advanced',
  config: {
    name: 'MyToken',
    symbol: 'MTK',
    initialSupply: '1000000'
  },
  network: 'polygon'
});

console.log('Deployed to:', contract.address);`}</pre>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center gap-4">
              <Button className="gap-2">
                <FileCode className="w-4 h-4" />
                API Documentation
              </Button>
              <Button variant="outline" className="gap-2">
                <Code2 className="w-4 h-4" />
                Download SDK
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}