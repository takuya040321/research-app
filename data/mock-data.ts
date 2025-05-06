import { Category, Product } from "@/types";

export const mockCategories: Category[] = [
  {
    name: "コスメ",
    platforms: [
      {
        name: "公式サイト",
        brands: ["SHISEIDO", "ORBIS", "POLA", "KOSE"]
      },
      {
        name: "楽天",
        brands: ["SHISEIDO", "SK-II", "ORBIS", "KOSE", "FANCL"]
      },
      {
        name: "ヤフショ",
        brands: ["SHISEIDO", "SK-II", "POLA", "KANEBO", "FANCL"]
      },
      {
        name: "Qoo10",
        brands: ["SHISEIDO", "SK-II", "Sulwhasoo", "Dr.Jart+"]
      }
    ]
  },
  {
    name: "家電",
    platforms: [
      {
        name: "公式サイト",
        brands: ["Panasonic", "SONY", "SHARP"]
      },
      {
        name: "楽天",
        brands: ["Panasonic", "SONY", "SHARP", "TOSHIBA"]
      },
      {
        name: "ヤフショ",
        brands: ["Panasonic", "SONY", "SHARP", "TOSHIBA", "HITACHI"]
      }
    ]
  }
];

export const mockProducts: Product[] = [
  {
    name: "薬用 美白 化粧水 高保湿タイプ",
    brand: "SHISEIDO",
    imageUrl: "https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg",
    price: 3850,
    currency: "JPY",
    url: "https://example.com/product1",
    platform: "楽天",
    shopName: "SHISEIDO 公式ショップ",
    amazonInfo: {
      asin: "B07ABCDE12",
      price: 5240,
      url: "https://amazon.co.jp/dp/B07ABCDE12",
      categoryFee: 15,
      fbaFee: 520
    },
    profitInfo: {
      estimatedProfit: 870,
      profitMargin: 16.6
    },
    metadata: {
      lastUpdated: "2023-06-15T10:30:00Z",
      category: "コスメ",
      uniqueId: "shiseido-hakuhaku-toner-high"
    }
  },
  {
    name: "エッセンス ファンデーション 215",
    brand: "SHISEIDO",
    imageUrl: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg",
    price: 4950,
    currency: "JPY",
    url: "https://example.com/product2",
    platform: "楽天",
    shopName: "SHISEIDO 公式ショップ",
    amazonInfo: {
      asin: "B07FGHIJ34",
      price: 7480,
      url: "https://amazon.co.jp/dp/B07FGHIJ34",
      categoryFee: 15,
      fbaFee: 580
    },
    profitInfo: {
      estimatedProfit: 1950,
      profitMargin: 26.1
    },
    metadata: {
      lastUpdated: "2023-06-15T10:35:00Z",
      category: "コスメ",
      uniqueId: "shiseido-essence-foundation-215"
    }
  },
  {
    name: "フェイシャル トリートメント エッセンス",
    brand: "SK-II",
    imageUrl: "https://images.pexels.com/photos/3737576/pexels-photo-3737576.jpeg",
    price: 15800,
    currency: "JPY",
    url: "https://example.com/product3",
    platform: "楽天",
    shopName: "SK-II 公式ショップ",
    amazonInfo: {
      asin: "B07KLMNO56",
      price: 21800,
      url: "https://amazon.co.jp/dp/B07KLMNO56",
      categoryFee: 15,
      fbaFee: 850
    },
    profitInfo: {
      estimatedProfit: 5150,
      profitMargin: 23.6
    },
    metadata: {
      lastUpdated: "2023-06-15T10:40:00Z",
      category: "コスメ",
      uniqueId: "skii-facial-treatment-essence"
    }
  },
  {
    name: "R.N.A. パワー ラディカル ニュー エイジ",
    brand: "SK-II",
    imageUrl: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg",
    price: 12600,
    currency: "JPY",
    url: "https://example.com/product4",
    platform: "公式サイト",
    shopName: "SK-II 公式サイト",
    amazonInfo: {
      asin: "B07PQRST78",
      price: 18200,
      url: "https://amazon.co.jp/dp/B07PQRST78",
      categoryFee: 15,
      fbaFee: 760
    },
    profitInfo: {
      estimatedProfit: 4840,
      profitMargin: 26.6
    },
    metadata: {
      lastUpdated: "2023-06-15T10:45:00Z",
      category: "コスメ",
      uniqueId: "skii-rna-power-radical-new-age"
    }
  },
  {
    name: "アクアフォース ローション M しっとり",
    brand: "ORBIS",
    imageUrl: "https://images.pexels.com/photos/3750640/pexels-photo-3750640.jpeg",
    price: 1800,
    currency: "JPY",
    url: "https://example.com/product5",
    platform: "楽天",
    shopName: "ORBIS 楽天市場店",
    amazonInfo: {
      asin: "B07UVWXYZ90",
      price: 2570,
      url: "https://amazon.co.jp/dp/B07UVWXYZ90",
      categoryFee: 15,
      fbaFee: 440
    },
    profitInfo: {
      estimatedProfit: 330,
      profitMargin: 12.8
    },
    metadata: {
      lastUpdated: "2023-06-15T10:50:00Z",
      category: "コスメ",
      uniqueId: "orbis-aquaforce-lotion-m"
    }
  },
  {
    name: "クリアモイスチャー ジェル",
    brand: "FANCL",
    imageUrl: "https://images.pexels.com/photos/4210347/pexels-photo-4210347.jpeg",
    price: 1800,
    currency: "JPY",
    url: "https://example.com/product6",
    platform: "ヤフショ",
    shopName: "FANCL Yahoo!ショッピング店",
    amazonInfo: {
      asin: null,
      price: null,
      url: null,
      categoryFee: 0,
      fbaFee: 0
    },
    profitInfo: null,
    metadata: {
      lastUpdated: "2023-06-15T10:55:00Z",
      category: "コスメ",
      uniqueId: "fancl-clear-moisture-gel"
    }
  },
  {
    name: "マイルドクレンジングオイル",
    brand: "FANCL",
    imageUrl: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
    price: 1300,
    currency: "JPY",
    url: "https://example.com/product7",
    platform: "ヤフショ",
    shopName: "FANCL Yahoo!ショッピング店",
    amazonInfo: null,
    profitInfo: null,
    metadata: {
      lastUpdated: "2023-06-15T11:00:00Z",
      category: "コスメ",
      uniqueId: "fancl-mild-cleansing-oil"
    }
  },
  {
    name: "アドバンスト ナイトリペア SMR コンプレックス",
    brand: "KOSE",
    imageUrl: "https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg",
    price: 10800,
    currency: "JPY",
    url: "https://example.com/product8",
    platform: "公式サイト",
    shopName: "KOSE 公式オンラインショップ",
    amazonInfo: {
      asin: "B09ABCDEF12",
      price: 15800,
      url: "https://amazon.co.jp/dp/B09ABCDEF12",
      categoryFee: 15,
      fbaFee: 720
    },
    profitInfo: {
      estimatedProfit: 4280,
      profitMargin: 27.1
    },
    metadata: {
      lastUpdated: "2023-06-15T11:05:00Z",
      category: "コスメ",
      uniqueId: "kose-advanced-night-repair"
    }
  },
  {
    name: "バイタルパーフェクション リンクルリフト クリーム",
    brand: "POLA",
    imageUrl: "https://images.pexels.com/photos/5618473/pexels-photo-5618473.jpeg",
    price: 24000,
    currency: "JPY",
    url: "https://example.com/product9",
    platform: "ヤフショ",
    shopName: "POLA公式 Yahoo!ショッピング店",
    amazonInfo: {
      asin: "B09GHIJKL34",
      price: 32000,
      url: "https://amazon.co.jp/dp/B09GHIJKL34",
      categoryFee: 15,
      fbaFee: 980
    },
    profitInfo: {
      estimatedProfit: 7020,
      profitMargin: 21.9
    },
    metadata: {
      lastUpdated: "2023-06-15T11:10:00Z",
      category: "コスメ",
      uniqueId: "pola-wrinkle-lift-cream"
    }
  },
  {
    name: "水分活性クリーム",
    brand: "KANEBO",
    imageUrl: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg",
    price: 6600,
    currency: "JPY",
    url: "https://example.com/product10",
    platform: "ヤフショ",
    shopName: "KANEBO Yahoo!ショッピング店",
    amazonInfo: null,
    profitInfo: null,
    metadata: {
      lastUpdated: "2023-06-15T11:15:00Z",
      category: "コスメ",
      uniqueId: "kanebo-moisture-cream"
    }
  },
];