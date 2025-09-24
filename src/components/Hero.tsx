import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ProductionFeatures } from './ProductionFeatures';
import { Zap, Shield, Bot, Rocket, ArrowRight, Sparkles, Code2, Users } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  const features = [
    {
      icon: Zap,
      title: "One-Click Deploy",
      description: "Launch ERC20, NFT, DAO, and marketplace contracts in seconds"
    },
    {
      icon: Code2,
      title: "Visual Builder",
      description: "Drag-and-drop interface to build contracts without coding"
    },
    {
      icon: Bot,
      title: "AI Co-Pilot",
      description: "Smart assistant explains contracts in plain English"
    },
    {
      icon: Shield,
      title: "Auto Security",
      description: "Built-in audits and safety checks for every deployment"
    }
  ];

  const stats = [
    { label: "Contracts Deployed", value: "10,247" },
    { label: "Gas Saved", value: "$2.1M" },
    { label: "Templates", value: "150+" },
    { label: "Active Users", value: "5,234" }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-800 border-blue-200">
            <Sparkles className="w-3 h-3 mr-1" />
            Production Ready • Security First • Human Friendly
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
            Smart Contracts
            <br />Made Easy
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Build and deploy production-ready smart contracts with our visual editor, 
            AI assistant, and one-click templates. No Solidity knowledge required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Building Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
            >
              <Bot className="w-5 h-5 mr-2" />
              Try AI Demo
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg border mb-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Trusted by Web3 Leaders</h2>
            <p className="text-gray-600">Production-ready platform used by top protocols and developers</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-emerald-600 font-bold text-lg">100% Open Source</div>
              <div className="text-sm text-gray-600">Fully transparent codebase</div>
            </div>
            <div className="text-center">
              <div className="text-blue-600 font-bold text-lg">$50M+ Secured</div>
              <div className="text-sm text-gray-600">Total value locked</div>
            </div>
            <div className="text-center">
              <div className="text-purple-600 font-bold text-lg">99.9% Uptime</div>
              <div className="text-sm text-gray-600">Enterprise reliability</div>
            </div>
            <div className="text-center">
              <div className="text-orange-600 font-bold text-lg">50+ Audits</div>
              <div className="text-sm text-gray-600">Professional security reviews</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-sm">ChainSafe</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="text-sm">ConsenSys</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-sm">OpenZeppelin</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <span className="text-sm">Chainlink</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Build the Future?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 10,000+ developers building production-ready smart contracts with enterprise-grade security and real-time collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Building Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6 rounded-xl transition-all duration-300"
            >
              <Shield className="w-5 h-5 mr-2" />
              View GitHub
            </Button>
          </div>
          <div className="flex justify-center gap-6 text-blue-100 text-sm">
            <span>✓ No credit card required</span>
            <span>✓ Open source forever</span>
            <span>✓ Enterprise support available</span>
          </div>
        </motion.div>

        {/* Production Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-20"
        >
          <ProductionFeatures />
        </motion.div>
      </div>
    </div>
  );
}