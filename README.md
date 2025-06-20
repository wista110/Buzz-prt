# Buzz Partners - ランディングページ

[![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

TikTok・SNS運用代行サービス「Buzz Partners」の公式ランディングページです。

## 🎯 プロジェクト概要

「話題の『あの会社』へ、今日から一緒に。」をキャッチコピーに、企画・撮影から編集まで一貫したSNS運用サポートを提供する「Buzz Partners」のマーケティング用ランディングページ。レスポンシブデザインで、リード獲得に最適化された構成となっています。

## 🚀 特徴

- **Next.js 14** - 最新のReactフレームワーク
- **TypeScript** - 型安全な開発環境
- **Tailwind CSS** - ユーティリティファーストのCSSフレームワーク
- **レスポンシブデザイン** - モバイル・タブレット・デスクトップ対応
- **モバイルスワイプ対応** - タッチジェスチャーでの直感的な操作
- **SEO最適化** - メタタグ・構造化データ・アクセシビリティ対応
- **高パフォーマンス** - Core Web Vitals最適化
- **ローディングアニメーション** - 印象的なブランド体験

## 📋 ページ構成

1. **ローディングスクリーン** - ブランドロゴとアニメーション
2. **ヘッダー** - ロゴ・ナビゲーション・CTAボタン
3. **ヒーローセクション** - キャッチコピー・メインビジュアル・CTA
4. **導入実績バッジ** - 圧倒的な実績の訴求
5. **悩み訴求ブロック** - ユーザーの課題を明確化
6. **サービスの強み** - Buzz Partnersの6つの特徴
7. **活用事例スライダー** - 10業種の成功事例（スワイプ対応）
8. **お問い合わせフォーム** - リード獲得
9. **フッター** - 企業情報・プライバシーポリシー

## 🛠 セットアップ

### 必要な環境
- Node.js 18.0.0以上
- npm、yarn、または pnpm

### インストール手順

1. **リポジトリのクローン**
   ```bash
   git clone https://github.com/your-username/karitorumosya.git
   cd karitorumosya
   ```

2. **依存関係のインストール**
   ```bash
   pnpm install
   # または
   npm install
   # または
   yarn install
   ```

3. **開発サーバーの起動**
   ```bash
   pnpm dev
   # または
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
pnpm build

# GitHub Pages用ビルド
pnpm build:github

# ビルド後のアプリケーション起動
pnpm start

# リンターチェック
pnpm lint
```

## 🎨 デザインシステム

### カラーパレット
- **Primary**: グラデーション（`bg-gradient-main`）
- **Secondary**: アクセントカラー（`bg-gradient-reverse`）
- **Text**: `text-gray-800`, `text-gray-600`
- **Background**: グラデーション背景（`from-gray-50 via-white to-primary-light/10`）

### フォント
- **日本語**: M PLUS Rounded 1c
- **英語**: Montserrat

### アニメーション
- `animate-fade-in-up` - フェードインアップ
- `animate-float-gentle` - ふんわり浮遊
- `animate-heartbeat` - ハートビート効果
- `animate-loading-bar` - ローディングバー

## 📁 ファイル構成

```
├── components/              
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