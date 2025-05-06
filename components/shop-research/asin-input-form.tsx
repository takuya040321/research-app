"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Product } from "@/types";

interface AsinInputFormProps {
  product: Product;
  onSubmit: (asin: string) => void;
}

export function AsinInputForm({ product, onSubmit }: AsinInputFormProps) {
  const [asin, setAsin] = useState(product.amazonInfo?.asin || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!asin.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onSubmit(asin);
      setIsSubmitting(false);
    }, 800);
  };
  
  return (
    <div className="space-y-4 py-2">
      <div className="space-y-2">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.brand} - {product.platform}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="asin" className="text-sm font-medium">
            Amazon ASIN
          </label>
          <div className="flex space-x-2">
            <Input
              id="asin"
              placeholder="例: B01ABCDEF"
              value={asin}
              onChange={(e) => setAsin(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={isSubmitting || !asin.trim()}>
              {isSubmitting ? "保存中..." : "保存"}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            ASINは「B」で始まる10桁の英数字です。Amazonの商品ページURLや商品詳細から確認できます。
          </p>
        </div>
      </form>
      
      <div className="text-sm space-y-2">
        <h4 className="font-medium">ASINを設定すると、以下の情報が取得できます:</h4>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li>Amazon販売価格</li>
          <li>カテゴリ手数料</li>
          <li>FBA手数料</li>
          <li>予想利益と利益率</li>
        </ul>
      </div>
    </div>
  );
}