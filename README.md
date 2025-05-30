# カリトルくん - ランディングページ

[![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

商談創出に特化した営業代行サービス「カリトルくん」の公式ランディングページです。

## 🎯 プロジェクト概要

質の高いアポイントメントで企業の営業活動をサポートする「カリトルくん」のマーケティング用ランディングページ。レスポンシブデザインで、リード獲得に最適化された構成となっています。

## 🚀 特徴

- **Next.js 14** - 最新のReactフレームワーク
- **TypeScript** - 型安全な開発環境
- **Tailwind CSS** - ユーティリティファーストのCSSフレームワーク
- **レスポンシブデザイン** - モバイル・タブレット・デスクトップ対応
- **SEO最適化** - メタタグ・構造化データ・アクセシビリティ対応
- **高パフォーマンス** - Core Web Vitals最適化

## 📋 ページ構成

1. **ヘッダー** - ロゴ・ナビゲーション・CTAボタン
2. **ヒーローセクション** - キャッチコピー・イラスト・主要数値
3. **導入実績バッジ** - 圧倒的な実績の訴求
4. **悩み訴求ブロック** - ユーザーの課題を明確化
5. **サービス紹介** - 「そもそもカリトルくんとは」
6. **サービスの強み** - 3つのポイント
7. **対応範囲** - 幅広いサポート内容
8. **活用事例スライダー** - 実際の成功事例
9. **効果的な理由** - なぜ商談を獲得できるのか
10. **料金プラン** - 3つの選択肢
11. **導入までの流れ** - 4ステップ
12. **FAQ** - よくある質問
13. **お問い合わせフォーム** - リード獲得
14. **フッター** - サイトマップ・連絡先

## 🛠 セットアップ

### 必要な環境
- Node.js 18.0.0以上
- npm または yarn

### インストール手順

1. **リポジトリのクローン**
   ```bash
   git clone https://github.com/your-username/karitoru-kun-lp.git
   cd karitoru-kun-lp
   ```

2. **依存関係のインストール**
   ```bash
   npm install
   # または
   yarn install
   ```

3. **開発サーバーの起動**
   ```bash
   npm run dev
   # または
   yarn dev
   ```

4. **ブラウザでアクセス**
   ```
   http://localhost:3000
   ```

### ビルド・デプロイ

```bash
# 本番用ビルド
npm run build

# ビルド後のアプリケーション起動
npm run start

# リンターチェック
npm run lint
```

## 🎨 デザインシステム

### カラーパレット
- **Primary Red**: `#E53E3E` - メインブランドカラー
- **Accent Red**: `#FF6B6B` - アクセントカラー
- **Light Red**: `#FFF5F5` - 背景色
- **Dark Gray**: `#2D3748` - テキストカラー
- **Light Gray**: `#F7FAFC` - セクション背景

### フォント
- **日本語**: Noto Sans JP
- **英語**: Inter

### コンポーネント
- `btn-primary` - 主要なCTAボタン
- `btn-secondary` - セカンダリボタン
- `section-padding` - セクション共通の余白

## 📁 ファイル構成

```
├── components/           # Reactコンポーネント
│   ├── Header.tsx       # ヘッダー
│   ├── HeroSection.tsx  # ヒーローセクション
│   ├── PainPoints.tsx   # 悩み訴求
│   ├── Strengths.tsx    # サービスの強み
│   ├── Pricing.tsx      # 料金プラン
│   ├── FAQ.tsx          # よくある質問
│   ├── ContactForm.tsx  # お問い合わせフォーム
│   └── Footer.tsx       # フッター
├── pages/               # Next.jsページ
│   ├── _app.tsx        # アプリケーションルート
│   └── index.tsx       # メインページ
├── styles/              # スタイルファイル
│   └── globals.css     # グローバルCSS
├── package.json         # 依存関係
├── tailwind.config.js   # Tailwind設定
├── tsconfig.json        # TypeScript設定
├── next.config.js       # Next.js設定
└── README.md           # このファイル
```

## 🔧 カスタマイズ

### コンテンツの編集
各コンポーネント内のテキスト・数値・画像を編集することで、コンテンツをカスタマイズできます。

### デザインの変更
`tailwind.config.js`でカラーパレットやフォントを変更できます。

### 新しいセクションの追加
1. `components/`にNewSection.tsxを作成
2. `pages/index.tsx`でインポート・配置

## 🚀 デプロイ

### Vercel（推奨）
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# distフォルダをNetlifyにアップロード
```

### その他のプラットフォーム
`npm run build`で生成された静的ファイルを任意のホスティングサービスにデプロイ

## 📊 パフォーマンス

- **Lighthouse Score**: 95+
- **First Contentful Paint**: 1.5s以下
- **Largest Contentful Paint**: 2.5s以下
- **Cumulative Layout Shift**: 0.1以下

## 🌐 ブラウザサポート

- Chrome (最新)
- Firefox (最新)
- Safari (最新)
- Edge (最新)

## 🤝 貢献

1. このリポジトリをフォーク
2. フィーチャーブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは[MIT License](LICENSE)の下で公開されています。

## 📞 サポート

- 🐛 バグ報告: [Issues](https://github.com/your-username/karitoru-kun-lp/issues)
- 💡 機能要望: [Issues](https://github.com/your-username/karitoru-kun-lp/issues)
- 📧 連絡先: contact@karitoru-kun.com

## 🙏 謝辞

- [Next.js](https://nextjs.org/) - Reactフレームワーク
- [Tailwind CSS](https://tailwindcss.com/) - CSSフレームワーク
- [React Icons](https://react-icons.github.io/react-icons/) - アイコンライブラリ

---

© 2024 カリトルくん. All rights reserved. 