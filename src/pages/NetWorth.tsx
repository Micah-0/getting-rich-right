import { useState } from 'react'
import { Plus, Minus, DollarSign } from 'lucide-react'

export default function NetWorth() {
  const [assets, setAssets] = useState([
    { id: 1, name: 'Checking Account', amount: 5000 },
    { id: 2, name: 'Savings Account', amount: 15000 },
    { id: 3, name: 'Investment Portfolio', amount: 45000 },
    { id: 4, name: 'Home Value', amount: 300000 },
    { id: 5, name: 'Car Value', amount: 25000 }
  ])

  const [liabilities, setLiabilities] = useState([
    { id: 1, name: 'Mortgage', amount: 250000 },
    { id: 2, name: 'Car Loan', amount: 15000 },
    { id: 3, name: 'Credit Card Debt', amount: 5000 }
  ])

  const totalAssets = assets.reduce((sum, asset) => sum + asset.amount, 0)
  const totalLiabilities = liabilities.reduce((sum, liability) => sum + liability.amount, 0)
  const netWorth = totalAssets - totalLiabilities

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Net Worth</h1>
        <p className="mt-2 text-gray-600">
          Your Net Worth is like the "X" on a map that says, "You are here."
        </p>
      </div>

      {/* Net Worth Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Plus className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Assets</p>
              <p className="text-2xl font-bold text-gray-900">
                ${totalAssets.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-2 bg-red-100 rounded-lg">
              <Minus className="h-6 w-6 text-red-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Liabilities</p>
              <p className="text-2xl font-bold text-gray-900">
                ${totalLiabilities.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Net Worth</p>
              <p className={`text-2xl font-bold ${netWorth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${netWorth.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Assets and Liabilities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Assets */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Assets</h2>
          <div className="space-y-3">
            {assets.map((asset) => (
              <div key={asset.id} className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="font-medium text-gray-900">{asset.name}</span>
                <span className="font-semibold text-green-600">
                  ${asset.amount.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Liabilities */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Liabilities</h2>
          <div className="space-y-3">
            {liabilities.map((liability) => (
              <div key={liability.id} className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <span className="font-medium text-gray-900">{liability.name}</span>
                <span className="font-semibold text-red-600">
                  ${liability.amount.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 