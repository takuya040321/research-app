"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ChevronDown, ChevronRight, 
  ShoppingCart, Smartphone, Tv, 
  Package, Home, ChevronLast, ChevronFirst
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { mockCategories } from "@/data/mock-data";

interface SidebarProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  selectedPlatform: string | null;
  setSelectedPlatform: (platform: string | null) => void;
  selectedBrand: string | null;
  setSelectedBrand: (brand: string | null) => void;
}

export function Sidebar({
  selectedCategory,
  setSelectedCategory,
  selectedPlatform,
  setSelectedPlatform,
  selectedBrand,
  setSelectedBrand
}: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["コスメ"]);
  const [expandedPlatforms, setExpandedPlatforms] = useState<string[]>([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
    setSelectedCategory(category);
    setSelectedPlatform(null);
    setSelectedBrand(null);
  };
  
  const togglePlatform = (platform: string) => {
    setExpandedPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
    setSelectedPlatform(platform);
    setSelectedBrand(null);
  };
  
  const selectBrand = (brand: string) => {
    setSelectedBrand(brand);
  };

  const getIconForCategory = (category: string) => {
    switch(category) {
      case "コスメ":
        return <ShoppingCart className="h-4 w-4 mr-2" />;
      case "家電":
        return <Tv className="h-4 w-4 mr-2" />;
      case "スマホ":
        return <Smartphone className="h-4 w-4 mr-2" />;
      default:
        return <Package className="h-4 w-4 mr-2" />;
    }
  };
  
  return (
    <div className={cn(
      "bg-card border-r border-border h-full transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4 border-b border-border flex items-center justify-between">
        {!isCollapsed && (
          <>
            <Home className="h-5 w-5 mr-2" />
            <Link href="/" className="font-semibold text-lg flex-1">
              Sedori App
            </Link>
          </>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="h-8 w-8"
        >
          {isCollapsed ? (
            <ChevronLast className="h-4 w-4" />
          ) : (
            <ChevronFirst className="h-4 w-4" />
          )}
        </Button>
      </div>
      {!isCollapsed && (
        <ScrollArea className="h-[calc(100vh-60px)]">
          <div className="p-3">
            <div className="mb-2 px-2 py-1.5 text-sm font-medium text-muted-foreground">
              カテゴリー
            </div>
            <nav className="space-y-1">
              {mockCategories.map((category) => (
                <div key={category.name} className="space-y-1">
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className={cn(
                      "flex w-full items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      selectedCategory === category.name && "bg-accent text-accent-foreground"
                    )}
                  >
                    {expandedCategories.includes(category.name) ? (
                      <ChevronDown className="h-4 w-4 mr-1" />
                    ) : (
                      <ChevronRight className="h-4 w-4 mr-1" />
                    )}
                    {getIconForCategory(category.name)}
                    {category.name}
                  </button>
                  
                  {expandedCategories.includes(category.name) && (
                    <div className="ml-6 space-y-1">
                      {category.platforms.map((platform) => (
                        <div key={platform.name} className="space-y-1">
                          <button
                            onClick={() => togglePlatform(platform.name)}
                            className={cn(
                              "flex w-full items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                              selectedPlatform === platform.name && "bg-accent text-accent-foreground"
                            )}
                          >
                            {expandedPlatforms.includes(platform.name) ? (
                              <ChevronDown className="h-4 w-4 mr-1" />
                            ) : (
                              <ChevronRight className="h-4 w-4 mr-1" />
                            )}
                            {platform.name}
                          </button>
                          
                          {expandedPlatforms.includes(platform.name) && (
                            <div className="ml-5 space-y-1 border-l border-muted pl-2">
                              {platform.brands.map((brand) => (
                                <button
                                  key={brand}
                                  onClick={() => selectBrand(brand)}
                                  className={cn(
                                    "flex w-full items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                                    selectedBrand === brand && "bg-accent text-accent-foreground"
                                  )}
                                >
                                  {brand}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </ScrollArea>
      )}
    </div>
  );
}