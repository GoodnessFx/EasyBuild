import React, { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { 
  Blocks, 
  Code2, 
  Eye, 
  Play, 
  Save, 
  Settings, 
  Plus,
  Trash2,
  Move,
  ArrowRight,
  Zap,
  Shield,
  Coins,
  Users
} from 'lucide-react';
import { motion } from 'motion/react';
import type { View } from '../App';

interface ContractBuilderProps {
  onNavigate: (view: View) => void;
}

interface ContractBlock {
  id: string;
  type: 'function' | 'variable' | 'modifier' | 'event';
  name: string;
  description: string;
  icon: any;
  color: string;
  config?: Record<string, any>;
}

export function ContractBuilder({ onNavigate }: ContractBuilderProps) {
  const [selectedTemplate, setSelectedTemplate] = useState('erc20');
  const [contractBlocks, setContractBlocks] = useState<ContractBlock[]>([]);
  const [activeView, setActiveView] = useState('visual');
  const dragRef = useRef<HTMLDivElement>(null);

  const templates = [
    { id: 'erc20', name: 'ERC20 Token', icon: Coins, description: 'Standard fungible token' },
    { id: 'erc721', name: 'NFT Collection', icon: Shield, description: 'Non-fungible tokens' },
    { id: 'dao', name: 'DAO Governance', icon: Users, description: 'Decentralized organization' },
    { id: 'custom', name: 'Custom Contract', icon: Code2, description: 'Build from scratch' }
  ];

  const availableBlocks: ContractBlock[] = [
    {
      id: 'mint',
      type: 'function',
      name: 'Mint Function',
      description: 'Create new tokens',
      icon: Plus,
      color: 'bg-emerald-500'
    },
    {
      id: 'burn',
      type: 'function',
      name: 'Burn Function',
      description: 'Destroy tokens',
      icon: Trash2,
      color: 'bg-red-500'
    },
    {
      id: 'transfer',
      type: 'function',
      name: 'Transfer Function',
      description: 'Move tokens between accounts',
      icon: ArrowRight,
      color: 'bg-blue-500'
    },
    {
      id: 'balance',
      type: 'variable',
      name: 'Balance Mapping',
      description: 'Track token balances',
      icon: Coins,
      color: 'bg-purple-500'
    },
    {
      id: 'onlyowner',
      type: 'modifier',
      name: 'Only Owner',
      description: 'Restrict function access',
      icon: Shield,
      color: 'bg-orange-500'
    },
    {
      id: 'transfer-event',
      type: 'event',
      name: 'Transfer Event',
      description: 'Log transfer operations',
      icon: Zap,
      color: 'bg-pink-500'
    }
  ];

  const addBlock = (block: ContractBlock) => {
    setContractBlocks([...contractBlocks, { ...block, id: `${block.id}-${Date.now()}` }]);
  };

  const removeBlock = (blockId: string) => {
    setContractBlocks(contractBlocks.filter(b => b.id !== blockId));
  };

  const generateCode = () => {
    // Mock code generation based on selected blocks
    return `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyToken is ERC20, Ownable {
    constructor() ERC20("MyToken", "MTK") {}
    
    ${contractBlocks.map(block => {
      switch (block.type) {
        case 'function':
          return `
    function ${block.name.toLowerCase().replace(' ', '')}() public onlyOwner {
        // ${block.description}
    }`;
        case 'modifier':
          return `
    modifier ${block.name.toLowerCase().replace(' ', '')}() {
        // ${block.description}
        _;
    }`;
        case 'event':
          return `
    event ${block.name.replace(' ', '')}(address indexed from, address indexed to, uint256 value);`;
        default:
          return '';
      }
    }).join('')}
}`;
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
          <h1 className="text-3xl font-bold mb-2">Contract Builder</h1>
          <p className="text-gray-600">Build smart contracts visually with drag-and-drop components</p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Save className="w-4 h-4" />
            Save Draft
          </Button>
          <Button variant="outline" className="gap-2">
            <Code2 className="w-4 h-4" />
            Fork Mainnet
          </Button>
          <Button variant="outline" className="gap-2">
            <Shield className="w-4 h-4" />
            Run Audit
          </Button>
          <Button onClick={() => onNavigate('deploy')} className="gap-2 bg-gradient-to-r from-blue-600 to-emerald-600">
            <Play className="w-4 h-4" />
            Deploy Contract
          </Button>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Template Selection */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Templates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {templates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => setSelectedTemplate(template.id)}
                  className={`w-full text-left p-3 rounded-lg border transition-all ${
                    selectedTemplate === template.id 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <template.icon className="w-5 h-5 text-gray-600" />
                    <div>
                      <div className="font-medium text-sm">{template.name}</div>
                      <div className="text-xs text-gray-500">{template.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Available Blocks */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Components</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                <div className="space-y-2">
                  {availableBlocks.map((block) => (
                    <div
                      key={block.id}
                      className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 cursor-pointer transition-all hover:shadow-sm"
                      onClick={() => addBlock(block)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 ${block.color} rounded-lg flex items-center justify-center`}>
                          <block.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{block.name}</div>
                          <div className="text-xs text-gray-500">{block.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Builder Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-3"
        >
          <Card className="h-[800px]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Blocks className="w-5 h-5" />
                  Contract Workspace
                </CardTitle>
                <Tabs value={activeView} onValueChange={setActiveView} className="w-auto">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="visual" className="gap-2">
                      <Eye className="w-4 h-4" />
                      Visual
                    </TabsTrigger>
                    <TabsTrigger value="code" className="gap-2">
                      <Code2 className="w-4 h-4" />
                      Code
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent className="h-full">
              <Tabs value={activeView} className="h-full">
                <TabsContent value="visual" className="h-full mt-0">
                  <div className="h-full border-2 border-dashed border-gray-200 rounded-lg p-6 bg-gray-50/50">
                    {contractBlocks.length === 0 ? (
                      <div className="h-full flex items-center justify-center text-center">
                        <div>
                          <Blocks className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                          <h3 className="text-lg font-medium text-gray-600 mb-2">Start Building</h3>
                          <p className="text-gray-500 mb-4">Drag components from the sidebar to build your contract</p>
                          <Button variant="outline" className="gap-2">
                            <Plus className="w-4 h-4" />
                            Add Component
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {contractBlocks.map((block, index) => (
                          <motion.div
                            key={block.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-4 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 ${block.color} rounded-lg flex items-center justify-center`}>
                                  <block.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <h4 className="font-medium">{block.name}</h4>
                                  <p className="text-sm text-gray-600">{block.description}</p>
                                  <Badge variant="outline" className="text-xs mt-1">{block.type}</Badge>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button size="sm" variant="outline" className="gap-1">
                                  <Settings className="w-3 h-3" />
                                </Button>
                                <Button size="sm" variant="outline" className="gap-1">
                                  <Move className="w-3 h-3" />
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline" 
                                  className="gap-1 text-red-600 hover:text-red-700"
                                  onClick={() => removeBlock(block.id)}
                                >
                                  <Trash2 className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="code" className="h-full mt-0">
                  <div className="h-full">
                    <div className="flex items-center justify-between mb-4 p-2 bg-gray-100 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm font-medium">Live Collaboration</span>
                        <Badge variant="secondary" className="text-xs">3 users editing</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="gap-1">
                          <Code2 className="w-3 h-3" />
                          Format
                        </Button>
                        <Button size="sm" variant="outline" className="gap-1">
                          <Shield className="w-3 h-3" />
                          Verify
                        </Button>
                      </div>
                    </div>
                    <pre className="h-full bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto text-sm">
                      <code>{generateCode()}</code>
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}