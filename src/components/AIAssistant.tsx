import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { 
  Bot, 
  X, 
  Send, 
  Lightbulb, 
  Code2, 
  Shield, 
  Zap,
  MessageCircle,
  Sparkles,
  Copy,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

export function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant',
      content: "👋 Hi! I'm your AI co-pilot for smart contract development. I can help you understand contracts, suggest optimizations, explain security best practices, and guide you through the building process. What would you like to know?",
      timestamp: new Date(),
      suggestions: [
        "Explain ERC20 tokens in simple terms",
        "What are the security risks I should know about?",
        "How can I optimize gas costs?",
        "Help me choose the right template"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    { icon: Code2, text: "Explain this contract", category: "analysis" },
    { icon: Shield, text: "Security audit", category: "security" },
    { icon: Zap, text: "Optimize gas usage", category: "optimization" },
    { icon: Lightbulb, text: "Suggest improvements", category: "suggestions" }
  ];

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const generateAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('erc20') || message.includes('token')) {
      return "🪙 **ERC20 tokens** are like digital coins on Ethereum! Think of them as:\n\n• **Fungible**: Each token is identical (like dollars - one $1 is the same as another)\n• **Transferable**: You can send them between wallets\n• **Standardized**: They follow the same rules, so all wallets and exchanges understand them\n\n**Key functions:**\n- `transfer()` - Send tokens to someone\n- `balanceOf()` - Check how many tokens an address has\n- `approve()` - Let someone spend your tokens\n\n**Production tips:**\n- Use OpenZeppelin's audited contracts (included in EasyBuild)\n- Consider adding pause functionality for emergencies\n- Implement proper access controls with role-based permissions\n- Add gas optimization patterns for lower transaction costs\n\n**Real examples:** USDC, LINK, UNI are all ERC20 tokens. Want me to help you create one with enterprise-grade security?";
    }
    
    if (message.includes('security') || message.includes('audit')) {
      return "🛡️ **Security is crucial!** EasyBuild includes enterprise-grade security:\n\n**Automated Checks:**\n• **Formal Verification**: Mathematical proof of correctness\n• **Economic Attack Simulation**: Test against MEV and arbitrage attacks\n• **Reentrancy Protection**: Built-in guards and checks\n• **Access Control Analysis**: Role-based permission verification\n\n**Professional Integration:**\n• Direct connection to top audit firms (ChainSafe, ConsenSys, OpenZeppelin)\n• Automated bug bounty program integration\n• Real-time vulnerability scanning\n• Compliance checking for institutional requirements\n\n**Production Features:**\n• Multi-signature wallet integration\n• Time-lock controls for admin functions\n• Emergency pause mechanisms\n• Upgrade pattern safety analysis\n\n**EasyBuild has secured $50M+ in smart contract value!** 🚀";
    }
    
    if (message.includes('gas') || message.includes('optimize')) {
      return "⚡ **Gas optimization tips** to save money:\n\n**Storage is expensive:**\n• Pack structs efficiently (use uint8 instead of uint256 when possible)\n• Use events instead of storage for historical data\n\n**Computation tricks:**\n• Cache storage variables in memory\n• Use `++i` instead of `i++` in loops\n• Avoid string concatenation\n\n**Smart patterns:**\n• Batch operations when possible\n• Use `external` instead of `public` for functions only called externally\n• Consider using libraries for complex math\n\n**Current gas prices:** Standard (~20 gwei) costs about $2-5 per transaction. Want me to estimate costs for your contract?";
    }
    
    if (message.includes('template') || message.includes('choose')) {
      return "🎯 **Choosing the right template** depends on your goals:\n\n**🪙 ERC20** - Perfect for:\n• Utility tokens for your app\n• Reward systems\n• Governance tokens\n\n**🖼️ ERC721 (NFTs)** - Great for:\n• Digital art collections\n• Gaming items\n• Membership passes\n• Unique certificates\n\n**🏛️ DAO** - Ideal for:\n• Community governance\n• Investment clubs\n• Protocol management\n\n**🏪 Marketplace** - Best for:\n• NFT trading platforms\n• Digital asset exchanges\n\nWhat are you trying to build? I can recommend the perfect starting point!";
    }
    
    // Default response
    return "I understand you're asking about smart contract development. As your AI co-pilot, I can help with:\n\n• **Contract explanations** - Break down complex code into simple terms\n• **Security advice** - Enterprise-grade security best practices\n• **Gas optimization** - Advanced optimization techniques\n• **Template selection** - Choose from 150+ audited templates\n• **Deployment guidance** - Multi-chain deployment strategies\n• **Collaboration** - Team workflows and Git integration\n• **API integration** - Programmatic contract management\n• **Formal verification** - Mathematical proof of correctness\n\n**Pro tip:** Try asking about \"mainnet forking\" or \"formal verification\" for advanced features!\n\nJust ask me anything! 🚀";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: generateAIResponse(inputValue),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleQuickPrompt = (prompt: string) => {
    setInputValue(prompt);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 400 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl border-l z-50 flex flex-col"
      >
        {/* Header */}
        <div className="p-4 border-b bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold">AI Co-Pilot</h3>
                <p className="text-xs text-blue-100">Smart contract assistant</p>
              </div>
            </div>
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Quick Prompts */}
        <div className="p-4 border-b bg-gray-50">
          <div className="grid grid-cols-2 gap-2">
            {quickPrompts.map((prompt, index) => (
              <Button
                key={index}
                size="sm"
                variant="outline"
                className="gap-2 text-xs h-8"
                onClick={() => handleQuickPrompt(prompt.text)}
              >
                <prompt.icon className="w-3 h-3" />
                {prompt.text}
              </Button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${
                  message.type === 'user' 
                    ? 'bg-blue-600 text-white rounded-2xl rounded-br-md' 
                    : 'bg-gray-100 text-gray-900 rounded-2xl rounded-bl-md'
                } p-3`}>
                  {message.type === 'assistant' && (
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="w-4 h-4 text-blue-600" />
                      <Badge variant="secondary" className="text-xs">AI Assistant</Badge>
                    </div>
                  )}
                  <div className="whitespace-pre-wrap text-sm">
                    {message.content}
                  </div>
                  {message.type === 'assistant' && (
                    <div className="flex items-center gap-2 mt-3 pt-2 border-t border-gray-200">
                      <Button size="sm" variant="ghost" className="gap-1 h-6 px-2 text-xs">
                        <Copy className="w-3 h-3" />
                        Copy
                      </Button>
                      <Button size="sm" variant="ghost" className="gap-1 h-6 px-2 text-xs">
                        <ThumbsUp className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="gap-1 h-6 px-2 text-xs">
                        <ThumbsDown className="w-3 h-3" />
                      </Button>
                    </div>
                  )}
                  {message.suggestions && (
                    <div className="mt-3 space-y-1">
                      {message.suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="block w-full text-left text-xs p-2 rounded bg-white/50 hover:bg-white/80 transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="bg-gray-100 rounded-2xl rounded-bl-md p-3">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-blue-600" />
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything about smart contracts..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button 
              size="sm" 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-gradient-to-r from-blue-600 to-emerald-600"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            AI assistant powered by advanced language models
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}