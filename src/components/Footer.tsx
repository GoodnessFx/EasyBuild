import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { 
  Github, 
  Twitter, 
  MessageCircle, 
  Linkedin, 
  Youtube, 
  Mail, 
  ExternalLink,
  Shield,
  Code2,
  Users,
  Globe,
  BookOpen,
  Heart,
  Zap,
  Award
} from 'lucide-react';

export function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/easybuild',
      color: 'hover:text-gray-900',
      followers: '12.4k'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/easybuild',
      color: 'hover:text-blue-500',
      followers: '25.8k'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      href: 'https://discord.gg/easybuild',
      color: 'hover:text-indigo-500',
      followers: '10k+'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/company/easybuild',
      color: 'hover:text-blue-600',
      followers: '5.2k'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: 'https://youtube.com/@easybuild',
      color: 'hover:text-red-500',
      followers: '8.1k'
    }
  ];

  const productLinks = [
    { name: 'Smart Contract Builder', href: '#' },
    { name: 'Template Marketplace', href: '#' },
    { name: 'AI Assistant', href: '#' },
    { name: 'Security Audits', href: '#' },
    { name: 'Multi-chain Deploy', href: '#' },
    { name: 'API & SDK', href: '#' }
  ];

  const resourceLinks = [
    { name: 'Documentation', href: '#', icon: BookOpen },
    { name: 'API Reference', href: '#', icon: Code2 },
    { name: 'Tutorials', href: '#', icon: Users },
    { name: 'Blog', href: '#', icon: Globe },
    { name: 'Community', href: '#', icon: MessageCircle },
    { name: 'Status Page', href: '#', icon: Shield }
  ];

  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press Kit', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ];

  const trustBadges = [
    { label: 'SOC 2 Compliant', icon: Shield },
    { label: 'Open Source', icon: Code2 },
    { label: '99.9% Uptime', icon: Zap },
    { label: 'Enterprise Ready', icon: Award }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">EasyBuild</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              The production-ready platform that makes smart contract creation accessible to everyone. 
              Build, audit, and deploy with confidence using enterprise-grade security and AI assistance.
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Join Our Community</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="sm"
                    className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all duration-300 group"
                    asChild
                  >
                    <a href={social.href} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <social.icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{social.name}</span>
                      <Badge variant="secondary" className="bg-white/20 text-white text-xs group-hover:bg-slate-100 group-hover:text-slate-900">
                        {social.followers}
                      </Badge>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all duration-300 w-full"
                asChild
              >
                <a href="mailto:hello@easybuild.dev" className="gap-2">
                  <Mail className="w-4 h-4" />
                  hello@easybuild.dev
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center mb-6">
            <h4 className="font-semibold text-white mb-4">Trusted by 10,000+ Developers Worldwide</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg border border-white/20"
                >
                  <badge.icon className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-gray-300">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-emerald-400">$50M+</div>
              <div className="text-sm text-gray-400">Value Secured</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">50+</div>
              <div className="text-sm text-gray-400">Security Audits</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">10k+</div>
              <div className="text-sm text-gray-400">Developers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>© 2024 EasyBuild. All rights reserved.</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-400" /> for Web3
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              Enterprise Security
            </span>
            <span className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-400" />
              Open Source
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}