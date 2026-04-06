# 💎 Crystal Ledger — Premium Finance Management App

A modern, high-end personal finance application built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Featuring a stunning glassmorphism UI, real-time smart SMS detection for pending transactions, and a fully responsive design across all devices.

---

## ✨ Features

### 🏦 Cards & Wallet
- **Interactive 3D Card Preview** — Flip between multiple cards with smooth Framer Motion animations
- **Card Controls** — Freeze/unfreeze cards and toggle international payments
- **Instant Hub** — One-tap bill payment gateway for Energy, Mobile, Network, and Estate bills
- **QR Scanner Gateway** — Scan & pay instantly
- **Rupee (₹) Standardized** — All financial values displayed in Indian Rupees

### 📊 Dashboard
- **Net Portfolio Overview** — Real-time balance and yield metrics
- **Smart Approvals** — Message-detected pending transactions shown for manual review
- **Spending Trends** — Visual charts for income vs. expenses
- **Recent Transactions** — Quick overview of latest activity

### 💳 Transactions
- **Full Transaction History** — Sortable, filterable ledger
- **Pending Status** — SMS-detected debits appear with `Pending` status until user confirms
- **Inflow / Outflow Charts** — Visual breakdowns powered by Recharts

### 🔒 Settings
- **Message Intelligence Toggle** — Enable/disable SMS-based transaction detection
- **Notification Preferences** — Email, push, and alert controls
- **Security Settings** — Password and account management
- **Profile Customization** — Avatar, name, and personal details

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI Framework |
| **TypeScript** | Type Safety |
| **Tailwind CSS v4** | Styling & Responsive Design |
| **Framer Motion** | Animations & Transitions |
| **Recharts** | Financial Charts |
| **Lucide React** | Icon Library |
| **Vite** | Build Tool |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yogizx/Finance.git

# Navigate to the project directory
cd Finance

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be live at `http://localhost:5173`

---

## 📱 Responsive Design

Fully optimized for all screen sizes:
- 📱 **Mobile** (320px+)
- 📟 **Tablet** (768px+)
- 🖥️ **Desktop** (1024px+)
- 🖥️ **Ultra-Wide** (1400px+)

---

## 🎨 Design System

- **Colors**: Indigo / Slate / Emerald palette
- **Typography**: Inter (body) + Outfit (display)
- **Glassmorphism**: `backdrop-blur` + `bg-white/70` layers
- **Animations**: Staggered entry, 3D card tilt, ambient floating orbs
- **Border Radius**: Extra-large rounded corners for a modern, premium feel

---

## 📂 Project Structure

```
src/
├── pages/
│   ├── Dashboard.tsx       # Main dashboard with metrics
│   ├── CardsWallet.tsx     # Cards, wallet & bill payments
│   ├── Transactions.tsx    # Full transaction ledger
│   └── Settings.tsx        # App settings & preferences
├── components/
│   └── Layout.tsx          # App shell & navigation
├── lib/
│   └── utils.ts            # Utility functions (cn, etc.)
├── index.css               # Global styles & design tokens
└── App.tsx                 # Root component & routing
```

---

## 🔮 Upcoming Features

- [ ] Bank account linking via API
- [ ] Biometric authentication
- [ ] Budget planning & goal tracking
- [ ] Export transactions to CSV/PDF
- [ ] Dark mode

---

## 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/yogizx">yogizx</a></p>
</div>
