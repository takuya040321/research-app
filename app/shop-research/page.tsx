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

  const handleFetchProducts = async (type: 'bulk' | 'shop') => {
    console.log('handleFetchProducts called with type:', type);
    console.log('Current state:', {
      selectedCategory,
      selectedPlatform,
      selectedBrand,
      isLoading
    });

    if (type === 'shop') {
      if (selectedBrand !== 'VT') {
        console.log('Brand is not VT, returning early');
        return;
      }

      if (selectedCategory !== 'コスメ') {
        console.log('Category is not コスメ, returning early');
        return;
      }

      if (selectedPlatform !== '公式サイト') {
        console.log('Platform is not 公式サイト, returning early');
        return;
      }

      console.log('Conditions met, starting VT product fetch');
      setIsLoading(true);
      try {
        console.log(`VT商品データ取得を開始します... (ブランド: ${selectedBrand})`);
        // ここで実際のスクレイピング処理を実装します
        
        // シミュレーション用の遅延
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log('VT商品データ取得が完了しました！');
      } catch (error) {
        console.error('VT商品データ取得に失敗しました:', error);
      } finally {
        setIsLoading(false);
      }
    }
  }

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
            <div className="flex gap-4">
              <Button 
                onClick={() => handleFetchProducts('bulk')} 
                disabled={isLoading}
                className="gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
                一括商品取得
              </Button>
              <Button 
                onClick={() => handleFetchProducts('shop')} 
                disabled={isLoading}
                className="gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
                商品取得(ショップ)
              </Button>
            </div>
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