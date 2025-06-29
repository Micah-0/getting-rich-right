# Getting Rich Right - Financial Management App

A professional financial management application designed to help people make the most of what God has given them, so they can live out their calling to glorify God in all they do.

## Mission

This app uses accounting expertise to help people manage their money well through three key financial statements and a proven four-step budget building process.

## Features

### Three Financial Statements (The Three-Minute Accountant)

1. **Net Worth** - Like the "X" on a map that says "You are here"
   - Track assets and liabilities
   - Know where you currently are to plan where you're going

2. **Profit & Loss** - Monitor whether you earn more than you spend
   - Track income vs expenses
   - Essential for financial independence

3. **Cash Flow Statement** - Analyze where money comes from and where it goes
   - Three sources of cash: earn, sell, or borrow
   - Based on Profit & Loss and Balance Sheet data

### Four-Step Budget Building Process

1. **Track Every Penny Worksheet** - Track every penny spent for one week
2. **Annualize Your Spending Worksheet** - Convert weekly data to annual patterns
3. **SALY (Same As Last Year) Budget** - Create baseline budget from current spending
4. **Rank Your Spending Satisfaction Worksheet** - Prioritize spending based on satisfaction

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Routing**: React Router DOM
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd getting-rich-right
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Layout.tsx      # Main layout with navigation
├── pages/              # Page components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── NetWorth.tsx    # Net worth tracking
│   ├── ProfitLoss.tsx  # Profit & loss analysis
│   ├── CashFlow.tsx    # Cash flow analysis
│   ├── BudgetBuilder.tsx # Budget building tools
│   ├── TrackSpending.tsx # Step 1: Track spending
│   ├── AnnualizeSpending.tsx # Step 2: Annualize data
│   ├── SalyBudget.tsx  # Step 3: SALY budget
│   └── SpendingSatisfaction.tsx # Step 4: Satisfaction ranking
├── App.tsx             # Main app component with routing
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## Key Features Implemented

- ✅ Professional, modern UI with Tailwind CSS
- ✅ Responsive design for all devices
- ✅ Navigation sidebar with all major sections
- ✅ Dashboard with key financial metrics
- ✅ Net Worth tracking with assets and liabilities
- ✅ Four-step budget building process structure
- ✅ Clean, intuitive user interface
- ✅ Financial wisdom and guidance throughout

## Future Enhancements

- [ ] Data persistence with local storage or backend
- [ ] Interactive charts and graphs
- [ ] Export functionality for reports
- [ ] Mobile app version
- [ ] User accounts and data sync
- [ ] Advanced financial calculations
- [ ] Goal setting and tracking
- [ ] Financial education content

## Contributing

This project is designed to help people manage their finances according to biblical principles. Contributions that align with this mission are welcome.

## License

MIT License - see LICENSE file for details.

## About

Created based on the vision of helping people make the most of what God has given them, using accounting expertise to provide practical financial management tools. 