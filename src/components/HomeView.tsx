import React from 'react';
import { Bot, BotCard } from './BotCard';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Sparkles, Filter } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface HomeViewProps {
  bots: Bot[];
  onBotClick: (bot: Bot) => void;
  onNavigate: (page: string) => void;
}

export function HomeView({ bots, onBotClick, onNavigate }: HomeViewProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 via-background to-background py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <Badge variant="secondary" className="mb-2">v2.0 Now Available</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter sm:text-5xl">
            The Encyclopedia of <span className="text-primary">Bots</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Discover, share, and collaborate on automation scripts. The largest open-source database for OpenClaw bots.
          </p>
          <div className="flex w-full max-w-sm items-center space-x-2 mx-auto pt-4">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input type="text" placeholder="Search for bots, scrapers, automation..." className="pl-9 h-12" />
            </div>
            <Button size="lg" className="h-12">Search</Button>
          </div>
          
           <div className="flex flex-wrap justify-center gap-2 pt-4 text-sm text-muted-foreground">
             <span>Popular:</span>
             <span className="cursor-pointer hover:text-primary hover:underline">Instagram Scraper</span>
             <span>•</span>
             <span className="cursor-pointer hover:text-primary hover:underline">Crypto Trading</span>
             <span>•</span>
             <span className="cursor-pointer hover:text-primary hover:underline">SEO Audit</span>
           </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-yellow-500" />
                    Featured Bots
                </h2>
            </div>
            <div className="flex items-center gap-4">
                 <Tabs defaultValue="all" className="w-[300px]">
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="trending">Trending</TabsTrigger>
                        <TabsTrigger value="new">New</TabsTrigger>
                    </TabsList>
                </Tabs>
                <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                </Button>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bots.map((bot) => (
            <BotCard key={bot.id} bot={bot} onClick={onBotClick} />
          ))}
        </div>
        
         <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg" onClick={() => onNavigate('browse')}>View All Bots</Button>
         </div>
      </section>
      
      {/* Categories Section */}
      <section className="bg-muted/30 py-16 px-4 mt-12">
         <div className="container mx-auto">
             <h2 className="text-2xl font-bold mb-8 text-center">Browse by Category</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {['E-commerce', 'Social Media', 'Finance', 'Data Mining', 'Testing', 'Utilities', 'SEO', 'Marketing'].map((cat) => (
                     <div key={cat} className="bg-background hover:bg-muted p-6 rounded-lg border text-center cursor-pointer transition-colors">
                         <h3 className="font-semibold">{cat}</h3>
                     </div>
                 ))}
             </div>
         </div>
      </section>
    </div>
  );
}
