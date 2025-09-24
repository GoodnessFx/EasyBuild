import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Shield, 
  GitBranch, 
  Users, 
  Code2, 
  Zap, 
  Globe, 
  Lock, 
  BarChart3,
  CheckCircle2,
  Star,
  Award,
  Target
} from 'lucide-react';

export function ProductionFeatures() {
  const securityFeatures = [
    'Formal verification with theorem proving',
    'Economic attack simulation and MEV protection',
    'Multi-signature wallet integration',
    'Time-lock controls and emergency pauses',
    'Professional audit firm integration',
    'Real-time vulnerability scanning'
  ];

  const enterpriseFeatures = [
    'Real-time collaborative editing',
    'Git integration with CI/CD pipelines',
    'Team management and permissions',
    'API access with TypeScript SDK',
    'Multi-chain deployment automation',
    'Advanced gas optimization'
  ];

  const trustIndicators = [
    { label: 'Total Value Secured', value: '$50M+', icon: Shield },
    { label: 'Professional Audits', value: '50+', icon: Award },
    { label: 'Enterprise Clients', value: '100+', icon: Users },
    { label: 'Uptime Guarantee', value: '99.9%', icon: CheckCircle2 }
  ];

  const communityMetrics = [
    { label: 'GitHub Stars', value: '12.4k', icon: Star },
    { label: 'Active Contributors', value: '247', icon: GitBranch },
    { label: 'Templates Audited', value: '150+', icon: Shield },
    { label: 'Developer Community', value: '10k+', icon: Users }
  ];

  return (
    <div className="space-y-8">
      {/* Trust & Security */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Shield className="w-6 h-6 text-emerald-600" />
          Enterprise-Grade Security
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-emerald-200 bg-emerald-50/50">
            <CardHeader>
              <CardTitle className="text-emerald-800">Security-First Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="text-blue-800">Production-Ready Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {enterpriseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustIndicators.map((indicator, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-4">
                <indicator.icon className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                <div className="text-xl font-bold text-gray-900">{indicator.value}</div>
                <div className="text-xs text-gray-600">{indicator.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Open Source & Community */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Code2 className="w-6 h-6 text-purple-600" />
          Open Source & Community Driven
        </h2>
        
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-2">100% Open Source</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every line of code is open source and transparent. Community-governed development 
                with contributions from top Web3 developers worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {communityMetrics.map((metric, index) => (
                <div key={index} className="text-center p-3 rounded-lg bg-gray-50">
                  <metric.icon className="w-5 h-5 mx-auto mb-2 text-purple-600" />
                  <div className="font-bold text-purple-800">{metric.value}</div>
                  <div className="text-xs text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Production Guarantees */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Target className="w-6 h-6 text-orange-600" />
          Production Guarantees
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-6 text-center">
              <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">SLA Guarantee</h3>
              <p className="text-sm text-gray-600">99.9% uptime with enterprise support</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6 text-center">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Security Guarantee</h3>
              <p className="text-sm text-gray-600">Insurance coverage for audited contracts</p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold mb-2">Support Guarantee</h3>
              <p className="text-sm text-gray-600">24/7 expert support for enterprise users</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}