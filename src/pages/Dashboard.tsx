import { Link } from 'react-router-dom'
import { 
  DollarSign, 
  TrendingUp, 
  ArrowLeftRight, 
  Calculator,
  Target,
  BarChart3
} from 'lucide-react'

export default function Dashboard() {
  // Mock data - in a real app this would come from state management
  const netWorth = 125000
  const monthlyIncome = 8500
  const monthlyExpenses = 6200
  const profit = monthlyIncome - monthlyExpenses

  const quickActions = [
    {
      title: 'Net Worth',
      description: 'Track your assets and liabilities',
      icon: DollarSign,
      href: '/net-worth',
      color: 'bg-blue-500'
    },
    {
      title: 'Profit & Loss',
      description: 'Monitor income vs expenses',
      icon: TrendingUp,
      href: '/profit-loss',
      color: 'bg-green-500'
    },
    {
      title: 'Cash Flow',
      description: 'Analyze money sources and uses',
      icon: ArrowLeftRight,
      href: '/cash-flow',
      color: 'bg-purple-500'
    },
    {
      title: 'Budget Builder',
      description: 'Create your financial plan',
      icon: Calculator,
      href: '/budget-builder',
      color: 'bg-orange-500'
    }
  ]

  const budgetSteps = [
    {
      step: 1,
      title: 'Track Every Penny',
      description: 'Track every penny you spend for one week',
      href: '/track-spending',
      completed: false
    },
    {
      step: 2,
      title: 'Annualize Your Spending',
      description: 'Convert weekly data to annual spending patterns',
      href: '/annualize-spending',
      completed: false
    },
    {
      step: 3,
      title: 'SALY Budget',
      description: 'Create "Same As Last Year" budget baseline',
      href: '/saly-budget',
      completed: false
    },
    {
      step: 4,
      title: 'Rank Spending Satisfaction',
      description: 'Prioritize spending based on satisfaction',
      href: '/spending-satisfaction',
      completed: false
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Financial Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome to Getting Rich Right. Let's help you make the most of what God has given you.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Net Worth</p>
              <p className="text-2xl font-bold text-gray-900">
                ${netWorth.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Monthly Profit</p>
              <p className="text-2xl font-bold text-gray-900">
                ${profit.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <ArrowLeftRight className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Cash Flow</p>
              <p className="text-2xl font-bold text-gray-900">
                ${(monthlyIncome - monthlyExpenses).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.title}
              to={action.href}
              className="card hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center">
                <div className={`p-2 rounded-lg ${action.color}`}>
                  <action.icon className="h-5 w-5 text-white" />
                </div>
                <div className="ml-3">
                  <h3 className="font-medium text-gray-900">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Budget Builder Steps */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Build Your Better Budget</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {budgetSteps.map((step) => (
            <Link
              key={step.step}
              to={step.href}
              className="card hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary-700">{step.step}</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Financial Wisdom */}
      <div className="card bg-gradient-to-r from-primary-50 to-blue-50 border-primary-200">
        <div className="flex items-start">
          <Target className="h-6 w-6 text-primary-600 mt-1" />
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900">Your Financial Journey</h3>
            <p className="text-gray-700 mt-2">
              "Your Net Worth is like the 'X' on a map that says, 'You are here.' 
              You need to know where you are to know where you are going, and develop 
              a plan of how to get there."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 