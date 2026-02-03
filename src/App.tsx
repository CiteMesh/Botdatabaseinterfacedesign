import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { BotDetail } from './components/BotDetail';
import { CreateBot } from './components/CreateBot';
import { Bot } from './components/BotCard';
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BotCard } from './components/BotCard';

// Mock Data
const MOCK_BOTS: Bot[] = [
  {
    id: '1',
    name: 'Amazon Price Tracker',
    description: 'Monitors Amazon product pages for price changes and stock availability. Sends alerts via webhook.',
    author: 'scraper_king',
    stars: 1240,
    forks: 85,
    downloads: 5432,
    updatedAt: '2h ago',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1701099153587-6f28b448ff0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwc2NyZWVuJTIwbWF0cml4JTIwZGF0YXxlbnwxfHx8fDE3NzAwNzU4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['ecommerce', 'monitoring', 'alerting', 'nodejs']
  },
  {
    id: '2',
    name: 'LinkedIn Lead Gen',
    description: 'Automates profile visiting and connection requests on LinkedIn. Compliant with rate limits.',
    author: 'growth_hacker',
    stars: 890,
    forks: 120,
    downloads: 3210,
    updatedAt: '1d ago',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1737505599162-d9932323a889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5ldHdvcmslMjBub2Rlc3xlbnwxfHx8fDE3NzAwNzU5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['linkedin', 'marketing', 'automation']
  },
  {
    id: '3',
    name: 'Crypto Arbitrage Bot',
    description: 'Scans multiple exchanges for price differences and executes trades automatically.',
    author: 'satoshi_fan',
    stars: 2100,
    forks: 340,
    downloads: 8900,
    updatedAt: '5m ago',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1633957897986-70e83293f3ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGF2YXRhciUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzcwMDc1ODQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['crypto', 'finance', 'trading', 'high-frequency']
  },
  {
    id: '4',
    name: 'SEO Audit Spider',
    description: 'Crawls websites to identify broken links, missing metadata, and performance issues.',
    author: 'seo_wizard',
    stars: 560,
    forks: 45,
    downloads: 1200,
    updatedAt: '1w ago',
    category: 'Utilities',
    image: 'https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByYWNrJTIwZGF0YSUyMGNlbnRlcnxlbnwxfHx8fDE3NzAwNzU4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['seo', 'audit', 'crawler']
  },
  {
      id: '5',
      name: 'Security Vulnerability Scanner',
      description: 'Scans web applications for common vulnerabilities like XSS and SQL injection.',
      author: 'whitehat_sec',
      stars: 1500,
      forks: 200,
      downloads: 4500,
      updatedAt: '3d ago',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1696013910376-c56f76dd8178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbG9jayUyMHNoaWVsZHxlbnwxfHx8fDE3NzAwNzU5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['security', 'penetration-testing', 'python']
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedBot, setSelectedBot] = useState<Bot | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    if (page !== 'detail') {
      setSelectedBot(null);
    }
  };

  const handleBotClick = (bot: Bot) => {
    setSelectedBot(bot);
    setCurrentPage('detail');
  };

  const filteredBots = MOCK_BOTS.filter(bot => 
    bot.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    bot.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bot.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background font-sans text-foreground">
        <Navbar 
          onNavigate={handleNavigate} 
          currentPage={currentPage} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <main>
          {currentPage === 'home' && (
            <HomeView bots={filteredBots} onBotClick={handleBotClick} onNavigate={handleNavigate} />
          )}
          
          {currentPage === 'detail' && selectedBot && (
            <BotDetail bot={selectedBot} onBack={() => handleNavigate('home')} />
          )}

          {currentPage === 'create' && (
            <CreateBot onCancel={() => handleNavigate('home')} />
          )}

          {currentPage === 'browse' && (
              <div className="container mx-auto py-8">
                  <h1 className="text-3xl font-bold mb-6">Browse All Bots</h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {filteredBots.map((bot) => (
                          <BotCard key={bot.id} bot={bot} onClick={handleBotClick} />
                      ))}
                      {/* For demo purposes, we usually duplicate bots to fill the grid, but when filtering, it's better to only show matches. 
                          If no search query, we can show more content. */}
                      {searchQuery === '' && MOCK_BOTS.map((bot) => (
                          <BotCard key={`duplicate-${bot.id}`} bot={{...bot, id: `duplicate-${bot.id}`}} onClick={handleBotClick} />
                      ))}
                  </div>
                  {filteredBots.length === 0 && (
                      <div className="text-center py-12 text-muted-foreground">
                          <p>No bots found matching "{searchQuery}"</p>
                      </div>
                  )}
              </div>
          )}
          
          {currentPage === 'docs' && (
              <div className="container mx-auto py-8 max-w-3xl prose dark:prose-invert">
                  <h1>OpenClaw Documentation</h1>
                  <p>Welcome to the OpenClaw Wiki documentation.</p>
                  <p>This is a placeholder for the actual documentation page.</p>
              </div>
          )}
        </main>

        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built for the OpenClaw Community. Open Source and Free.
            </p>
          </div>
        </footer>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
