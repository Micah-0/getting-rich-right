import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import NetWorth from './pages/NetWorth'
import ProfitLoss from './pages/ProfitLoss'
import CashFlow from './pages/CashFlow'
import BudgetBuilder from './pages/BudgetBuilder'
import TrackSpending from './pages/TrackSpending'
import AnnualizeSpending from './pages/AnnualizeSpending'
import SalyBudget from './pages/SalyBudget'
import SpendingSatisfaction from './pages/SpendingSatisfaction'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/net-worth" element={<NetWorth />} />
        <Route path="/profit-loss" element={<ProfitLoss />} />
        <Route path="/cash-flow" element={<CashFlow />} />
        <Route path="/budget-builder" element={<BudgetBuilder />} />
        <Route path="/track-spending" element={<TrackSpending />} />
        <Route path="/annualize-spending" element={<AnnualizeSpending />} />
        <Route path="/saly-budget" element={<SalyBudget />} />
        <Route path="/spending-satisfaction" element={<SpendingSatisfaction />} />
      </Routes>
    </Layout>
  )
}

export default App 