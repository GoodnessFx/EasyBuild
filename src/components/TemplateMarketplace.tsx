import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Search, 
  Star, 
  Download, 
  Eye, 
  Shield, 
  Zap, 
  Coins, 
  Users, 
  TrendingUp,
  Filter,
  Heart,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';
import type { View } from '../App';

interface TemplateMarketplaceProps {
  onNavigate: (view: View) => void;
}

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  downloads: number;
  author: string;
  tags: string[];
  safetyScore: number;
  preview: string;
  icon: any;
}

export function TemplateMarketplace({ onNavigate }: TemplateMarketplaceProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { id: 'all', name: 'All Templates', count: 156 },
    { id: 'tokens', name: 'Tokens (ERC20)', count: 45 },
    { id: 'nfts', name: 'NFTs (ERC721)', count: 38 },
    { id: 'dao', name: 'DAOs & Governance', count: 22 },
    { id: 'defi', name: 'DeFi Protocols', count: 28 },
    { id: 'marketplace', name: 'Marketplaces', count: 15 },
    { id: 'gaming', name: 'Gaming', count: 8 }
  ];

  const mockTemplates: Template[] = [
    {
      id: '1',
      name: 'Advanced ERC20 Token',
      description: 'Feature-rich token with minting, burning, pausable functionality and role-based access control. Formally verified and battle-tested.',
      category: 'tokens',
      price: 0,
      rating: 4.8,
      downloads: 1247,
      author: 'OpenZeppelin',
      tags: ['ERC20', 'Mintable', 'Burnable', 'Pausable', 'Audited', 'Open Source'],
      safetyScore: 98,
      preview: 'Token with advanced features for professional use',
      icon: Coins
    },
    {
      id: '2',
      name: 'NFT Collection Launcher',
      description: 'Complete NFT collection template with reveal mechanics, whitelist, and royalty support.',
      category: 'nfts',
      price: 49,
      rating: 4.9,
      downloads: 892,
      author: 'CryptoDevs',
      tags: ['ERC721', 'Reveal', 'Whitelist', 'Royalties'],
      safetyScore: 95,
      preview: 'Launch your NFT collection with all the bells and whistles',
      icon: Shield
    },
    {
      id: '3',
      name: 'DAO Governance System',
      description: 'Complete governance system with proposal creation, voting, and treasury management.',
      category: 'dao',
      price: 99,
      rating: 4.7,
      downloads: 456,
      author: 'DAOBuilder',
      tags: ['Governance', 'Voting', 'Treasury', 'Proposals'],
      safetyScore: 92,
      preview: 'Fully featured DAO for community governance',
      icon: Users
    },
    {
      id: '4',
      name: 'DeFi Staking Pool',
      description: 'Staking contract with rewards distribution, lock periods, and emergency functions.',
      category: 'defi',
      price: 149,
      rating: 4.6,
      downloads: 324,
      author: 'DeFiLabs',
      tags: ['Staking', 'Rewards', 'DeFi', 'Yield'],
      safetyScore: 94,
      preview: 'Professional staking pool for DeFi protocols',
      icon: TrendingUp
    },
    {
      id: '5',
      name: 'NFT Marketplace',
      description: 'Full-featured marketplace for buying, selling, and auctioning NFTs.',
      category: 'marketplace',
      price: 199,
      rating: 4.8,
      downloads: 198,
      author: 'MarketMaker',
      tags: ['Marketplace', 'Auction', 'Escrow', 'Fees'],
      safetyScore: 96,
      preview: 'Complete marketplace solution for NFT trading',
      icon: Zap
    },
    {
      id: '6',
      name: 'Simple Token Contract',
      description: 'Basic ERC20 token perfect for beginners and simple use cases.',
      category: 'tokens',
      price: 0,
      rating: 4.4,
      downloads: 2156,
      author: 'Community',
      tags: ['ERC20', 'Simple', 'Beginner'],
      safetyScore: 90,
      preview: 'Perfect starter template for your first token',
      icon: Coins
    }
  ];

  const filteredTemplates = mockTemplates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.downloads - a.downloads;
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return parseInt(b.id) - parseInt(a.id);
      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Template Marketplace</h1>
          <p className="text-gray-600">Discover and use battle-tested smart contract templates</p>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Heart className="w-4 h-4" />
            Favorites
          </Button>
          <Button variant="outline" className="gap-2">
            <Shield className="w-4 h-4" />
            Audited Only
          </Button>
          <Button variant="outline" className="gap-2">
            <ExternalLink className="w-4 h-4" />
            Open Source
          </Button>
          <Button onClick={() => onNavigate('builder')} className="gap-2 bg-gradient-to-r from-blue-600 to-emerald-600">
            <Zap className="w-4 h-4" />
            Create Template
          </Button>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          {/* Search */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* Categories */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    selectedCategory === category.id 
                      ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{category.name}</span>
                    <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>

          {/* Sort Options */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Sort By
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                { id: 'popular', name: 'Most Popular' },
                { id: 'rating', name: 'Highest Rated' },
                { id: 'newest', name: 'Newest' },
                { id: 'price-low', name: 'Price: Low to High' },
                { id: 'price-high', name: 'Price: High to Low' }
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSortBy(option.id)}
                  className={`w-full text-left p-2 rounded text-sm transition-all ${
                    sortBy === option.id 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {option.name}
                </button>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Templates Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-3"
        >
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sortedTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <template.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{template.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{template.name}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>by {template.author}</span>
                      <span>•</span>
                      <span>{template.downloads} downloads</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{template.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {template.tags.slice(0, 4).map((tag) => (
                        <Badge 
                          key={tag} 
                          variant={tag === 'Audited' ? 'default' : tag === 'Open Source' ? 'default' : 'secondary'}
                          className={`text-xs ${
                            tag === 'Audited' ? 'bg-emerald-100 text-emerald-800' :
                            tag === 'Open Source' ? 'bg-blue-100 text-blue-800' : ''
                          }`}
                        >
                          {tag}
                        </Badge>
                      ))}
                      {template.tags.length > 4 && (
                        <Badge variant="secondary" className="text-xs">+{template.tags.length - 4}</Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-emerald-600" />
                        <span className="text-sm font-medium text-emerald-600">{template.safetyScore}% Safe</span>
                      </div>
                      <div className="text-right">
                        {template.price === 0 ? (
                          <span className="text-lg font-bold text-emerald-600">Free</span>
                        ) : (
                          <span className="text-lg font-bold">${template.price}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 gap-1">
                        <Eye className="w-3 h-3" />
                        Preview
                      </Button>
                      <Button size="sm" className="flex-1 gap-1 bg-gradient-to-r from-blue-600 to-emerald-600">
                        <Download className="w-3 h-3" />
                        {template.price === 0 ? 'Use' : 'Buy'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-600 mb-2">No templates found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or category filters</p>
              <Button variant="outline" onClick={() => {setSearchQuery(''); setSelectedCategory('all');}}>
                Clear Filters
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}