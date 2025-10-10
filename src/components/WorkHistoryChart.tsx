'use client'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

interface WorkHistoryChartProps {
  totalProjects: number
}

// Generate last 6 months (excluding current month)
function generateMonthlyData(totalProjects: number) {
  const data = []
  const today = new Date()
  
  // Start from last month, go back 6 months
  for (let i = 1; i <= 6; i++) {
    const date = new Date(today.getFullYear(), today.getMonth() - i, 1)
    const monthShort = date.toLocaleDateString('en-US', { month: 'short' })
    const monthFull = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    
    // Generate consistent data using date as seed
    const seed = (totalProjects + date.getMonth() + date.getFullYear()) % 100
    const avgPerMonth = Math.floor(totalProjects / 24) // ~2 years active
    const variation = ((seed + i * 17) % 40) / 100 // 0-40% variation
    const trend = 1 + ((6 - i) * 0.05) // Slight upward trend (older = lower)
    
    const orders = Math.max(
      Math.floor(avgPerMonth * (0.8 + variation) * trend),
      5 // Minimum 5 orders
    )
    
    data.push({
      month: monthShort,
      orders,
      fullMonth: monthFull
    })
  }
  
  // Reverse so oldest is first (left to right)
  return data.reverse()
}

export default function WorkHistoryChart({ totalProjects }: WorkHistoryChartProps) {
  const data = generateMonthlyData(totalProjects)
  const latestMonth = data[data.length - 1]
  const previousMonth = data[data.length - 2]
  const percentChange = Math.round(((latestMonth.orders - previousMonth.orders) / previousMonth.orders) * 100)

  return (
    <div>
      <h2 className="text-lg font-bold text-gray-900 mb-4">Work History</h2>
      
      {/* Chart */}
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#9333ea" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#9333ea" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="month" 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#6b7280"
            style={{ fontSize: '12px' }}
            width={35}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              padding: '8px 12px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            labelStyle={{ fontWeight: 'bold', marginBottom: '4px' }}
            formatter={(value: number, name: string, props: any) => [
              `${value} orders`,
              props.payload.fullMonth
            ]}
          />
          <Area 
            type="monotone" 
            dataKey="orders" 
            stroke="#9333ea" 
            strokeWidth={2}
            fill="url(#colorOrders)"
            animationDuration={1500}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Stats Summary */}
      <div className="mt-4 flex items-center justify-between text-sm">
        <div>
          <span className="text-gray-600">Latest: </span>
          <span className="font-bold text-gray-900">{latestMonth.orders} orders</span>
        </div>
        <div className={`flex items-center gap-1 font-semibold ${percentChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          <span>{percentChange >= 0 ? '↗' : '↘'}</span>
          <span>{Math.abs(percentChange)}%</span>
          <span className="text-gray-500 font-normal">vs last month</span>
        </div>
      </div>
    </div>
  )
}