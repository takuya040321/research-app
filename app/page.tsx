"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SearchIcon, BarChart3Icon, PackageIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">せどり支援アプリケーション</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Amazon販売のためのリサーチと在庫管理を効率化
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                <SearchIcon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>ショップリサーチ</CardTitle>
              <CardDescription>
                商品情報を効率的に収集し、利益率を計算
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground pb-3">
              <ul className="space-y-1 list-disc list-inside">
                <li>カテゴリ・ブランド別商品検索</li>
                <li>複数ECサイトからの一括データ取得</li>
                <li>Amazon価格と利益率の分析</li>
                <li>商品情報のフィルタリングとソート</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/shop-research">
                  開始する
                </Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow opacity-70">
            <CardHeader className="pb-3">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                <BarChart3Icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>ASINリサーチ</CardTitle>
              <CardDescription>
                ASIN情報の詳細分析と競合チェック
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground pb-3">
              <ul className="space-y-1 list-disc list-inside">
                <li>ASIN検索と詳細データ取得</li>
                <li>価格推移と競合状況の分析</li>
                <li>ランキングとレビューの評価</li>
                <li>販売可能性のスコアリング</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full" disabled>
                <div>
                  開発中
                </div>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow opacity-70">
            <CardHeader className="pb-3">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                <PackageIcon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>在庫管理</CardTitle>
              <CardDescription>
                販売中商品の在庫と収益性の管理
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground pb-3">
              <ul className="space-y-1 list-disc list-inside">
                <li>在庫数と仕入れ情報の記録</li>
                <li>販売状況と収益の追跡</li>
                <li>在庫アラートと補充計画</li>
                <li>月間・年間レポートの生成</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full" disabled>
                <div>
                  開発中
                </div>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}