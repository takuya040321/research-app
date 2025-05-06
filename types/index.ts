export interface Category {
  name: string;
  platforms: Platform[];
}

export interface Platform {
  name: string;
  brands: string[];
}

export interface Product {
  name: string;            // 商品名 (主キー部分)
  brand: string;           // ブランド名 (主キー部分)
  imageUrl: string;        // 商品画像URL
  price: number;           // 価格
  currency: string;        // 通貨
  url: string;             // 商品URL
  platform: string;        // プラットフォーム名（楽天、Yahoo等） (主キー部分)
  shopName: string;        // ショップ名 (主キー部分)
  amazonInfo?: {           // Amazon関連情報
    asin: string | null;   // ASIN (手動入力)
    price: number | null;  // Amazon価格 (Keepa APIから取得)
    url: string | null;    // AmazonのURL
    categoryFee: number;   // ASINにかかるカテゴリ手数料（%） (Keepa APIから取得)
    fbaFee: number;        // FBA手数料 (Keepa APIから取得)
  } | null;
  profitInfo?: {           // 利益情報
    estimatedProfit: number; // 予想利益 (システム計算または手動入力)
    profitMargin: number;  // 利益率 (システム計算または手動入力)
  } | null;
  metadata: {              // メタデータ
    lastUpdated: string;   // 最終更新日時
    category: string;      // 大カテゴリ
    uniqueId?: string;     // システム内部で使用する一意識別子（オプション）
  };
  [key: string]: any;      // インデックスシグネチャ（ソート機能用）
}