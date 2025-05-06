"use client";

import { useState } from "react";
import Image from "next/image";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, AlertTriangle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { mockProducts } from "@/data/mock-data";
import { Product } from "@/types";
import { AsinInputForm } from "./asin-input-form";

interface ProductListProps {
  selectedCategory: string | null;
  selectedPlatform: string | null;
  selectedBrand: string | null;
}

export function ProductList({ 
  selectedCategory, 
  selectedPlatform, 
  selectedBrand 
}: ProductListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<keyof Product>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [editingAsin, setEditingAsin] = useState<string | null>(null);
  const [asinInputs, setAsinInputs] = useState<{[key: string]: string}>({});
  
  // Filter products based on selection and search
  const filteredProducts = mockProducts.filter(product => {
    const categoryMatch = !selectedCategory || product.metadata.category === selectedCategory;
    const platformMatch = !selectedPlatform || product.platform === selectedPlatform;
    const brandMatch = !selectedBrand || product.brand === selectedBrand;
    
    const searchMatch = !searchTerm || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    
    return categoryMatch && platformMatch && brandMatch && searchMatch;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortDirection === 'asc' 
        ? aValue.localeCompare(bValue) 
        : bValue.localeCompare(aValue);
    }
    
    return 0;
  });
  
  const handleSort = (key: keyof Product) => {
    if (sortBy === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortDirection('asc');
    }
  };
  
  const calculateProfitability = (product: Product) => {
    if (!product.amazonInfo?.price || !product.price) return null;
    
    const amazonPrice = product.amazonInfo.price;
    const purchasePrice = product.price;
    const fees = (product.amazonInfo.categoryFee / 100) * amazonPrice + product.amazonInfo.fbaFee;
    const profit = amazonPrice - purchasePrice - fees;
    const profitMargin = (profit / amazonPrice) * 100;
    
    return { profit, profitMargin };
  };
  
  const getProfitColor = (profitMargin: number) => {
    if (profitMargin >= 30) return "text-emerald-500";
    if (profitMargin >= 15) return "text-amber-500";
    return "text-red-500";
  };

  const handleAsinSubmit = (productId: string, asin: string) => {
    console.log(`ASIN ${asin} set for product ${productId}`);
    setEditingAsin(null);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="text-base font-semibold">
          {filteredProducts.length} 件の商品
        </div>
        <div className="w-80">
          <Input
            placeholder="商品名・ブランドで検索..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">画像</TableHead>
              <TableHead>商品名</TableHead>
              <TableHead className="text-right">価格</TableHead>
              <TableHead>プラットフォーム</TableHead>
              <TableHead>
                <div>ASIN</div>
                <div className="text-xs font-normal text-muted-foreground">カテゴリ手数料 / FBA手数料</div>
              </TableHead>
              <TableHead className="text-right">Amazon価格</TableHead>
              <TableHead className="text-right">予想利益</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedProducts.map((product) => {
              const profitInfo = calculateProfitability(product);
              const productId = `${product.name}-${product.platform}-${product.shopName}`;
              
              return (
                <TableRow key={productId}>
                  <TableCell>
                    <div className="relative w-16 h-16 bg-muted rounded-md overflow-hidden">
                      {product.imageUrl ? (
                        <Image 
                          src={product.imageUrl} 
                          alt={product.name}
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          No image
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="text-sm font-medium">{product.name}</div>
                      <div className="text-xs text-muted-foreground">{product.brand}</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right text-sm">
                    ¥{product.price.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-sm">{product.platform}</TableCell>
                  <TableCell>
                    {editingAsin === productId ? (
                      <Dialog open={true} onOpenChange={() => setEditingAsin(null)}>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle className="text-base">ASIN 設定</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4 py-4">
                            <div className="space-y-2">
                              <h3 className="text-sm font-medium">{product.name}</h3>
                              <p className="text-xs text-muted-foreground">{product.brand} - {product.platform}</p>
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-medium">
                                Amazon ASIN
                              </label>
                              <div className="flex space-x-2">
                                <Input
                                  value={asinInputs[productId] || ''}
                                  onChange={(e) => setAsinInputs({
                                    ...asinInputs,
                                    [productId]: e.target.value
                                  })}
                                  placeholder="例: B01ABCDEF"
                                />
                                <Button onClick={() => handleAsinSubmit(productId, asinInputs[productId] || '')}>
                                  保存
                                </Button>
                              </div>
                              <p className="text-xs text-muted-foreground">
                                ASINは「B」で始まる10桁の英数字です。Amazonの商品ページURLや商品詳細から確認できます。
                              </p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <div 
                        className="cursor-pointer hover:bg-accent rounded px-2 py-1"
                        onClick={() => {
                          setEditingAsin(productId);
                          setAsinInputs({
                            ...asinInputs,
                            [productId]: product.amazonInfo?.asin || ''
                          });
                        }}
                      >
                        <div className="text-sm">
                          {product.amazonInfo?.asin || (
                            <span className="text-muted-foreground flex items-center">
                              <AlertTriangle className="h-3 w-3 mr-1" />
                              未設定
                            </span>
                          )}
                        </div>
                        {product.amazonInfo && (
                          <div className="text-xs text-muted-foreground">
                            {product.amazonInfo.categoryFee}% / ¥{product.amazonInfo.fbaFee.toLocaleString()}
                          </div>
                        )}
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-right text-sm">
                    {product.amazonInfo?.price 
                      ? `¥${product.amazonInfo.price.toLocaleString()}`
                      : "-"
                    }
                  </TableCell>
                  <TableCell className="text-right">
                    {profitInfo && (
                      <span className={getProfitColor(profitInfo.profitMargin)}>
                        <span className="text-sm">
                          ¥{Math.round(profitInfo.profit).toLocaleString()}
                        </span>
                        <br />
                        <span className="text-xs">
                          ({Math.round(profitInfo.profitMargin)}%)
                        </span>
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={product.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-sm text-muted-foreground">商品が見つかりませんでした</div>
          <p className="text-xs text-muted-foreground mt-2">
            別のカテゴリーやプラットフォームを選択するか、検索条件を変更してください。
          </p>
        </div>
      )}
    </div>
  );
}