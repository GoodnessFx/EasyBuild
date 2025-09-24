import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Textarea } from './ui/textarea';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Rocket, 
  Settings, 
  Shield, 
  Zap, 
  CheckCircle, 
  AlertTriangle, 
  ExternalLink,
  Copy,
  DollarSign,
  Clock,
  Network,
  Eye,
  PlayCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { toast } from 'sonner@2.0.3';
import type { View } from '../App';

interface DeploymentInterfaceProps {
  onNavigate: (view: View) => void;
}

export function DeploymentInterface({ onNavigate }: DeploymentInterfaceProps) {
  const [deploymentStep, setDeploymentStep] = useState<'config' | 'security' | 'deploy' | 'complete'>('config');
  const [selectedNetwork, setSelectedNetwork] = useState('ethereum');
  const [gasPrice, setGasPrice] = useState('standard');
  const [isDeploying, setIsDeploying] = useState(false);
  const [deploymentProgress, setDeploymentProgress] = useState(0);

  const networks = [
    { id: 'ethereum', name: 'Ethereum Mainnet', cost: '$45-85', time: '2-5 min', icon: '⚡' },
    { id: 'polygon', name: 'Polygon', cost: '$0.01-0.1', time: '30s-1min', icon: '🔷' },
    { id: 'arbitrum', name: 'Arbitrum One', cost: '$5-15', time: '1-2 min', icon: '🔵' },
    { id: 'optimism', name: 'Optimism', cost: '$5-15', time: '1-2 min', icon: '🔴' },
    { id: 'base', name: 'Base', cost: '$1-5', time: '30s-1min', icon: '🔷' }
  ];

  const gasPrices = [
    { id: 'slow', name: 'Slow', multiplier: '0.8x', time: '5-10 min' },
    { id: 'standard', name: 'Standard', multiplier: '1x', time: '2-5 min' },
    { id: 'fast', name: 'Fast', multiplier: '1.2x', time: '30s-2min' },
    { id: 'instant', name: 'Instant', multiplier: '1.5x', time: '15-30s' }
  ];

  const securityChecks = [
    { id: 'reentrancy', name: 'Reentrancy Protection', status: 'passed', critical: true },
    { id: 'overflow', name: 'Integer Overflow/Underflow', status: 'passed', critical: true },
    { id: 'access', name: 'Access Control', status: 'passed', critical: false },
    { id: 'front-running', name: 'Front-running Protection', status: 'warning', critical: false },
    { id: 'gas-limit', name: 'Gas Limit Optimization', status: 'passed', critical: false },
    { id: 'upgrade', name: 'Upgrade Pattern Safety', status: 'passed', critical: false }
  ];

  const handleDeploy = async () => {
    setIsDeploying(true);
    setDeploymentStep('deploy');
    
    // Simulate deployment process
    for (let i = 0; i <= 100; i += 10) {
      setDeploymentProgress(i);
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    
    setIsDeploying(false);
    setDeploymentStep('complete');
    toast.success('Contract deployed successfully!');
  };

  const renderConfigurationStep = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Contract Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="contract-name">Contract Name</Label>
              <Input id="contract-name" placeholder="MyAwesomeToken" />
            </div>
            <div>
              <Label htmlFor="token-symbol">Token Symbol</Label>
              <Input id="token-symbol" placeholder="MAT" />
            </div>
          </div>
          
          <div>
            <Label htmlFor="initial-supply">Initial Supply</Label>
            <Input id="initial-supply" placeholder="1000000" type="number" />
          </div>
          
          <div>
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea id="description" placeholder="Describe your token's purpose and utility..." />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="w-5 h-5" />
            Network Selection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {networks.map((network) => (
              <div
                key={network.id}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  selectedNetwork === network.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedNetwork(network.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{network.icon}</span>
                    <div>
                      <h4 className="font-medium">{network.name}</h4>
                      <p className="text-sm text-gray-600">Cost: {network.cost} • Time: {network.time}</p>
                    </div>
                  </div>
                  {selectedNetwork === network.id && (
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Gas Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {gasPrices.map((price) => (
              <div
                key={price.id}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  gasPrice === price.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setGasPrice(price.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{price.name}</h4>
                    <p className="text-sm text-gray-600">{price.multiplier} • ~{price.time}</p>
                  </div>
                  {gasPrice === price.id && (
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSecurityStep = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Security Audit Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {securityChecks.map((check) => (
              <div key={check.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                <div className="flex items-center gap-3">
                  {check.status === 'passed' ? (
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  )}
                  <div>
                    <h4 className="font-medium">{check.name}</h4>
                    {check.critical && (
                      <Badge variant="secondary" className="text-xs mt-1">Critical</Badge>
                    )}
                  </div>
                </div>
                <Badge 
                  variant={check.status === 'passed' ? 'default' : 'secondary'}
                  className={check.status === 'passed' ? 'bg-emerald-100 text-emerald-800' : 'bg-yellow-100 text-yellow-800'}
                >
                  {check.status === 'passed' ? 'Passed' : 'Warning'}
                </Badge>
              </div>
            ))}
          </div>
          
          <Alert className="mt-4 border-emerald-200 bg-emerald-50">
            <Shield className="w-4 h-4 text-emerald-600" />
            <AlertDescription className="text-emerald-800">
              Security audit completed successfully. Your contract meets all safety requirements for deployment.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pre-Deployment Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Contract Type:</span>
              <span className="font-medium">ERC20 Token</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Network:</span>
              <span className="font-medium">{networks.find(n => n.id === selectedNetwork)?.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Gas:</span>
              <span className="font-medium">2,247,856 gas</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Cost:</span>
              <span className="font-medium text-emerald-600">$12.45</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Safety Score:</span>
              <span className="font-medium text-emerald-600">96/100</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderDeploymentStep = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="w-5 h-5" />
            Deploying Contract
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-white animate-pulse" />
            </div>
            <h3 className="text-lg font-medium mb-2">Deploying to {networks.find(n => n.id === selectedNetwork)?.name}</h3>
            <p className="text-gray-600">Please wait while we deploy your contract...</p>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{deploymentProgress}%</span>
            </div>
            <Progress value={deploymentProgress} className="h-2" />
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Contract compiled successfully</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Security audit passed</span>
            </div>
            <div className="flex items-center gap-2">
              {deploymentProgress > 50 ? (
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              ) : (
                <Clock className="w-4 h-4 text-gray-400 animate-spin" />
              )}
              <span>Broadcasting to network...</span>
            </div>
            <div className="flex items-center gap-2">
              {deploymentProgress === 100 ? (
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              ) : (
                <Clock className="w-4 h-4 text-gray-400" />
              )}
              <span>Waiting for confirmation...</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCompleteStep = () => (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Contract Deployed Successfully!</h3>
            <p className="text-gray-600 mb-6">Your smart contract is now live on {networks.find(n => n.id === selectedNetwork)?.name}</p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Contract Address:</span>
                <Button size="sm" variant="outline" className="gap-1">
                  <Copy className="w-3 h-3" />
                  Copy
                </Button>
              </div>
              <code className="text-sm bg-white p-2 rounded border w-full block">
                0x742d35cc6490c0532c65fbc3d19ff1b7b0832c92
              </code>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">$12.45</div>
                <div className="text-sm text-gray-600">Gas Cost</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2m 34s</div>
                <div className="text-sm text-gray-600">Deploy Time</div>
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              <Button variant="outline" className="gap-2">
                <Eye className="w-4 h-4" />
                View on Explorer
              </Button>
              <Button variant="outline" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                Verify Contract
              </Button>
              <Button onClick={() => onNavigate('dashboard')} className="gap-2 bg-gradient-to-r from-blue-600 to-emerald-600">
                <PlayCircle className="w-4 h-4" />
                Go to Dashboard
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold mb-2">Deploy Contract</h1>
        <p className="text-gray-600">Configure and deploy your smart contract to the blockchain</p>
      </motion.div>

      {/* Progress Steps */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex items-center justify-between mb-4">
          {[
            { id: 'config', name: 'Configuration', icon: Settings },
            { id: 'security', name: 'Security Check', icon: Shield },
            { id: 'deploy', name: 'Deploy', icon: Rocket },
            { id: 'complete', name: 'Complete', icon: CheckCircle }
          ].map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                deploymentStep === step.id || (index < ['config', 'security', 'deploy', 'complete'].indexOf(deploymentStep))
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-500'
              }`}>
                <step.icon className="w-5 h-5" />
              </div>
              <span className={`ml-2 text-sm font-medium ${
                deploymentStep === step.id ? 'text-blue-600' : 'text-gray-500'
              }`}>
                {step.name}
              </span>
              {index < 3 && (
                <div className={`w-12 h-0.5 mx-4 ${
                  index < ['config', 'security', 'deploy', 'complete'].indexOf(deploymentStep)
                    ? 'bg-blue-600' 
                    : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {deploymentStep === 'config' && renderConfigurationStep()}
        {deploymentStep === 'security' && renderSecurityStep()}
        {deploymentStep === 'deploy' && renderDeploymentStep()}
        {deploymentStep === 'complete' && renderCompleteStep()}
        
        {/* Action Buttons */}
        {deploymentStep !== 'deploy' && deploymentStep !== 'complete' && (
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              onClick={() => onNavigate('builder')}
            >
              Back to Builder
            </Button>
            <Button 
              onClick={() => {
                if (deploymentStep === 'config') {
                  setDeploymentStep('security');
                } else if (deploymentStep === 'security') {
                  handleDeploy();
                }
              }}
              className="bg-gradient-to-r from-blue-600 to-emerald-600"
              disabled={isDeploying}
            >
              {deploymentStep === 'config' ? 'Continue' : 'Deploy Contract'}
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
}