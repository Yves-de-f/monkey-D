# 正峰印刷整合服務

正峰印刷整合服務的 Astro 靜態網站。首頁採用專屬的 editorial × brutalist UI kit；既有服務頁、耗材頁與 PHP 寄信端點在第一階段維持相容。

## 技術架構

- Astro 靜態輸出（不使用 React runtime）
- TypeScript 內容資料與元件 props
- 原生 CSS：cascade layers、design tokens、12／4 欄響應式網格
- 原生 JavaScript：導覽、scroll reveal、表單與 footer overlay
- PHP／PHPMailer：沿用正式主機寄信流程

## 專案結構

```text
src/
├── components/       # Header、服務卡片、表單、footer 等元件
├── data/site.ts      # 中英文內容與服務資料
├── layouts/          # HTML 共用版型與 SEO metadata
├── pages/            # index、index_en、ui-kit
└── styles/
    ├── tokens.css    # 色彩、字體、比例、間距與動效 tokens
    ├── base.css      # reset、排版與通用網格
    ├── components.css
    └── pages/

public/               # 圖片、字型、舊子頁、PHP 與其他原樣輸出資產
legacy/               # 改版前首頁原始檔，僅供比對，不會部署
```

## 本機開發

需求：Node.js 22.12+、pnpm 11。

```bash
pnpm install
pnpm dev
```

本機網址：

- 中文首頁：`http://127.0.0.1:4321/index.html`
- 英文首頁：`http://127.0.0.1:4321/index_en.html`
- UI kit：`http://127.0.0.1:4321/ui-kit.html`

## 建置

```bash
pnpm build
pnpm preview
```

輸出位於 `dist/`，並保留 `index.html`、`index_en.html`、`service.html` 等既有網址。

Astro dev server 只預覽靜態 UI，不執行 PHP。寄信功能需要部署到支援 PHP 的正式主機後測試。

## Project-only 環境

pnpm 的依賴與下載儲存庫都限制在專案內：

```text
node_modules/
.pnpm-store/
pnpm-lock.yaml
```

設定在 `pnpm-workspace.yaml`。若需要 Python 工具，固定使用專案的 `./.venv`，不安裝至系統 Python。

需要完全清理本機建置環境時，只移除下列專案目錄：

```bash
rm -rf node_modules .pnpm-store .astro dist
```

重新執行 `pnpm install` 即可還原。

## UI kit 原則

- Paper：內容與大面積背景
- Ink：文字、結構線與主要操作
- Orange：主要操作與印刷套色標記
- Signal green：狀態、方向與 footer 反色
- Display serif：大標題與 editorial hierarchy
- Sans／mono：內文、標籤、規格與 metadata
- 只有 footer overlay 自己反色；頁面根節點沒有 dark theme 切換
