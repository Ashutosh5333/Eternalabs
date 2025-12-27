# Axiom Token Discovery – Dexscreener UI Clone (Assignment)

This project is a **pixel-perfect Dexscreener-style Token Dashboard**, built to replicate  
https://axiom.trade/pulse with production-level UX, performance and architecture.

---

## 🚀 Core Features

### ✔ Token Table (All Columns)
- New Pairs
- Final Stretch
- Migrated Tokens
- Real data-like mock structure

### ✔ Interactions & UX
- Popover (HoverCard / Profile Preview)
- Tooltip everywhere (Dex-style)
- Modal-ready architecture
- Sorting on headers
- Tabs filter (All / New / Final / Migrated)

### ✔ Real-Time WebSocket Streaming
- Smooth price updates
- Flash up/down animation
- Sparkline updates live
- Volume + Txns streaming
- Auto reconnect simulation
- Status Badge: 🟢 Live | 🟠 Connecting | 🔴 Offline

### ✔ Loading & Errors
- Skeleton Loader
- Shimmer animation
- Progressive Rendering
- Global Error Boundary

### ✔ Pixel-Perfect
- UI Match within ≤ 2px variance
- Dex chip styles recreated
- Hover / shadows / glow
- Mobile responsive
- Tablet optimized

---

## 🧠 Tech Stack

| Technology | Purpose |
|-----------|--------|
| **Next.js 14 App Router** | Core framework |
| **TypeScript (strict)** | Type safety |
| **Tailwind CSS** | UI styling |
| **Redux Toolkit** | Token state & updates |
| **React Query** | Data fetching |
| **Radix UI / Headless UI / shadcn** | Accessible primitives |
| **WebSocket Mock** | Live streaming simulation |

---

## 🧩 Architecture

- `modules/tokens/`
  - `components/TokenTable`
  - `TokenRowRenderer`
  - `TokenInfoCell`
  - `PairCell`
- `hooks/`
  - `useTokenData`
  - `useWebsocketPriceStream`
  - `useWebsocketStatus`
- `store/tokens.slice.ts`
- `shared/ui/`
  - `Tooltip`
  - `HoverCard`
  - `WebsocketBadge`
  - `DataTableBody`
- `shared/ErrorBoundary`

Built using **Atomic + Modular Architecture**, fully reusable and DRY.

---

## ⚡ Performance
- Memoized components
- No layout shift
- <100ms interaction target
- Stable animations
- Lighthouse ≥ 90 (Mobile + Desktop)

---

## ▶️ Run Locally

```bash
npm install
npm run dev
