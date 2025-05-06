"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { ProductList } from "@/components/shop-research/product-list";
import { ShopResearchHeader } from "@/components/shop-research/shop-research-header";
import { ShopResearchStats } from "@/components/shop-research/shop-research-stats";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

export default function ShopResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchProducts = () => {
    setIsLoading(true);
    // Simulate API fetch
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex h-screen">
      <Sidebar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
      />
      <div className="flex-1 overflow-auto">
        <ShopResearchHeader 
          selectedCategory={selectedCategory}
          selectedPlatform={selectedPlatform}
          selectedBrand={selectedBrand}
        />
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">ショップリサーチ</h1>
            <Button 
              onClick={handleFetchProducts} 
              disabled={isLoading}
              className="gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
              商品データ取得
            </Button>
          </div>
          
          <ShopResearchStats />
          
          <ProductList 
            selectedCategory={selectedCategory}
            selectedPlatform={selectedPlatform}
            selectedBrand={selectedBrand}
          />
        </div>
      </div>
    </div>
  );
}