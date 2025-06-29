import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Home, 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  ArrowLeftRight,
  Calculator,
  ClipboardList,
  Calendar,
  FileText,
  Star
} from 'lucide-react'

interface LayoutProps {
  children: ReactNode
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Net Worth', href: '/net-worth', icon: DollarSign },
  { name: 'Profit & Loss', href: '/profit-loss', icon: TrendingUp },
  { name: 'Cash Flow', href: '/cash-flow', icon: ArrowLeftRight },
  { name: 'Budget Builder', href: '/budget-builder', icon: Calculator },
  { name: 'Track Spending', href: '/track-spending', icon: ClipboardList },
  { name: 'Annualize Spending', href: '/annualize-spending', icon: Calendar },
  { name: 'SALY Budget', href: '/saly-budget', icon: FileText },
  { name: 'Spending Satisfaction', href: '/spending-satisfaction', icon: Star },
]

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-center border-b border-gray-200">
            <h1 className="text-xl font-bold text-primary-600">Getting Rich Right</h1>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-4 py-6">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>
          
          {/* Footer */}
          <div className="border-t border-gray-200 p-4">
            <p className="text-xs text-gray-500 text-center">
              Helping people make the most of what God has given them
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="pl-64">
        <main className="py-8 px-8">
          {children}
        </main>
      </div>
    </div>
  )
} 