import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { AdvancedFeatures } from './AdvancedFeatures';
import { 
  Plus, 
  Zap, 
  Shield, 
  TrendingUp, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  ExternalLink,
  Copy,
  Edit,
  Trash2,
  GitBranch,
  Users,
  Code2,
  Cpu,
  Globe
} from 'lucide-react';
import { motion } from 'motion/react';
import type { View } from '../App';

interface DashboardProps {
  onNavigate: (view: View) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const mockContracts = [
    {
      id: '1',
      name: 'MyToken (MTK)',
      type: 'ERC20',
      status: 'deployed',
      network: 'Ethereum',
      deployedAt: '2024-01-15',
      gasUsed: '2.4M',
      address: '0x742d35cc6490c0532c65fbc3d19ff1b7b0832c92',
      safetyScore: 95
    },
    {
      id: '2',
      name: 'CoolNFTs Collection',
      type: 'ERC721',
      status: 'deployed',
      network: 'Polygon',
      deployedAt: '2024-01-12',
      gasUsed: '1.8M',
      address: '0x853d35cc6490c0532c65fbc3d19ff1b7b0832d41',
      safetyScore: 88
    },
    {
      id: '3',
      name: 'Community DAO',
      type: 'DAO',
      status: 'pending',
      network: 'Arbitrum',
      deployedAt: null,
      gasUsed: null,
      address: null,
      safetyScore: 92
    }
  ];

  const quickStats = [
    { label: 'Total Contracts', value: '7', change: '+2 this week', icon: Zap, color: 'text-blue-600' },
    { label: 'Gas Saved', value: '$1,247', change: '+$340 today', icon: TrendingUp, color: 'text-emerald-600' },
    { label: 'Safety Score', value: '91%', change: 'Excellent', icon: Shield, color: 'text-purple-600' },
    { label: 'Active Networks', value: '4', change: 'Multi-chain', icon: CheckCircle, color: 'text-orange-600' }
  ];

  const recentActivity = [
    { action: 'Contract deployed', contract: 'MyToken (MTK)', time: '2 hours ago', type: 'success' },
    { action: 'Security audit passed', contract: 'CoolNFTs Collection', time: '1 day ago', type: 'info' },
    { action: 'Template purchased', contract: 'DeFi Vault Template', time: '2 days ago', type: 'warning' },
    { action: 'Gas optimization', contract: 'Community DAO', time: '3 days ago', type: 'success' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'deployed':
        return <Badge className="bg-emerald-100 text-emerald-800">Deployed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'failed':
        return <Badge className="bg-red-100 text-red-800">Failed</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-600">Manage your smart contracts and deployments</p>
        </div>
        
        <div className="flex gap-2">
          <Button onClick={() => onNavigate('marketplace')} variant="outline" className="gap-2">
            <Shield className="w-4 h-4" />
            Browse Templates
          </Button>
          <Button onClick={() => onNavigate('builder')} className="gap-2 bg-gradient-to-r from-blue-600 to-emerald-600">
            <Plus className="w-4 h-4" />
            New Contract
          </Button>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {quickStats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-xs text-gray-500">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Contracts</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
            <TabsTrigger value="advanced">Pro Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Your Contracts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockContracts.map((contract) => (
                    <div key={contract.id} className="flex items-center justify-between p-4 rounded-lg border bg-gray-50/50">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{contract.name}</h3>
                            <Badge variant="outline" className="text-xs">{contract.type}</Badge>
                            {getStatusBadge(contract.status)}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>{contract.network}</span>
                            {contract.deployedAt && <span>Deployed {contract.deployedAt}</span>}
                            {contract.gasUsed && <span>{contract.gasUsed} gas</span>}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <div className="text-right mr-4">
                          <div className="text-sm font-medium">Safety Score</div>
                          <div className="flex items-center gap-2">
                            <Progress value={contract.safetyScore} className="w-16 h-2" />
                            <span className="text-sm text-gray-600">{contract.safetyScore}%</span>
                          </div>
                        </div>
                        
                        <Button size="sm" variant="outline" className="gap-1">
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="gap-1">
                          <ExternalLink className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="outline" className="gap-1">
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50">
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'success' ? 'bg-emerald-500' :
                        activity.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`} />
                      <div className="flex-1">
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-gray-600">{activity.contract}</p>
                      </div>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Deployment Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    <TrendingUp className="w-8 h-8 mb-2" />
                    <p>Analytics coming soon...</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Gas Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    <Zap className="w-8 h-8 mb-2" />
                    <p>Gas analytics coming soon...</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="collaboration" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Team Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-blue-50 border border-blue-200">
                    <div className="flex items-center gap-3">
                      <GitBranch className="w-5 h-5 text-blue-600" />
                      <div>
                        <h4 className="font-semibold">Real-time Collaboration</h4>
                        <p className="text-sm text-gray-600">Google Docs style editing for smart contracts</p>
                      </div>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800">Live</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                    <div className="flex items-center gap-3">
                      <Code2 className="w-5 h-5 text-emerald-600" />
                      <div>
                        <h4 className="font-semibold">Git Integration</h4>
                        <p className="text-sm text-gray-600">Native GitHub/GitLab sync with CI/CD</p>
                      </div>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-800">Live</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-lg bg-purple-50 border border-purple-200">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-purple-600" />
                      <div>
                        <h4 className="font-semibold">Code Review System</h4>
                        <p className="text-sm text-gray-600">Peer review with reputation scoring</p>
                      </div>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">Beta</Badge>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Active Collaborators</h4>
                  <div className="flex -space-x-2">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                        {i}
                      </div>
                    ))}
                    <div className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-gray-600 text-xs">
                      +12
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="advanced" className="space-y-6">
            <AdvancedFeatures />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}