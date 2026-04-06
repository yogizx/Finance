import { 
  Plus, 
  Calendar, 
  Filter, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Utensils,
  Wallet,
  Plane,
  ShoppingBag,
  Scale,
  Search
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  Cell
} from 'recharts';
import { cn } from '../lib/utils';

const transactionList = [
  { date: 'Oct 24, 2023', icon: ShoppingBag, desc: 'Apple Store - Fifth Ave', category: 'Electronics', status: 'Success', amount: '-₹2,07,417.00', color: 'indigo' },
  { date: 'Oct 23, 2023', icon: Wallet, desc: 'Monthly Salary - TechCorp', category: 'Income', status: 'Success', amount: '+₹7,02,150.00', color: 'emerald' },
  { date: 'Just Now', icon: Utensils, desc: 'Spotify India Subscription', category: 'Entertainment', status: 'Pending', amount: '-₹2,490.0', color: 'orange' },
  { date: 'Oct 22, 2023', icon: Plane, desc: 'Lufthansa Airlines Booking', category: 'Travel', status: 'Pending', amount: '-₹92,840.00', color: 'slate' },
];

const inflowData = [
    { day: 'M', val: 20 }, { day: 'T', val: 40 }, { day: 'W', val: 35 }, { day: 'T', val: 50 }, { day: 'F', val: 45 }, { day: 'S', val: 30 }, { day: 'S', val: 25 }
];

const outflowData = [
    { day: 'M', val: 15 }, { day: 'T', val: 25 }, { day: 'W', val: 20 }, { day: 'T', val: 40 }, { day: 'F', val: 35 }, { day: 'S', val: 60 }, { day: 'S', val: 30 }
];

export default function Transactions() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-8 pb-32 px-4 md:px-0">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2">Transactions</h1>
           <p className="text-sm md:text-base text-slate-500">Review and manage your financial movements with precision.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all uppercase tracking-wider text-xs">
          <Plus size={18} />
          <span>Add Transaction</span>
        </button>
      </div>

      {/* Filters & Search bar */}
      <div className="flex flex-col xl:flex-row xl:items-end gap-6">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Date Range</span>
                  <button className="w-full flex items-center justify-between px-5 py-3 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-indigo-600/30 transition-all group">
                      <span className="text-sm font-semibold text-slate-700">Last 30 Days</span>
                      <Calendar size={18} className="text-slate-400 group-hover:text-indigo-600" />
                  </button>
              </div>

              <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Category</span>
                  <button className="w-full flex items-center justify-between px-5 py-3 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-indigo-600/30 transition-all group">
                      <span className="text-sm font-semibold text-slate-700">All Categories</span>
                      <Filter size={18} className="text-slate-400 group-hover:text-indigo-600" />
                  </button>
              </div>

              <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Status</span>
                  <button className="w-full flex items-center justify-between px-5 py-3 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-indigo-600/30 transition-all group">
                      <span className="text-sm font-semibold text-slate-700">Completed</span>
                      <ChevronDown size={18} className="text-slate-400 group-hover:text-indigo-600" />
                  </button>
              </div>
          </div>

          <div className="flex items-center gap-4">
              <div className="relative group w-full md:w-64">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                    type="text" 
                    placeholder="Search tx..." 
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-100 rounded-2xl text-sm shadow-sm focus:border-indigo-600/30 outline-none transition-all"
                />
              </div>
              <button className="p-3.5 bg-slate-100 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-2xl transition-all">
                  <RefreshCw size={18} />
              </button>
          </div>
      </div>

      {/* Main Table Container */}
      <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
          <div className="overflow-x-auto">
              <table className="w-full text-left">
                  <thead>
                      <tr className="bg-slate-50/50 border-b border-slate-50">
                          <th className="py-5 px-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">Date</th>
                          <th className="py-5 px-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">Transaction Details</th>
                          <th className="py-5 px-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">Category</th>
                          <th className="py-5 px-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">Status</th>
                          <th className="py-5 px-8 text-right text-[10px] font-bold uppercase tracking-widest text-slate-400">Amount</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                      {transactionList.map((tx, idx) => (
                          <tr key={idx} className="group hover:bg-slate-50/30 transition-all">
                              <td className="py-6 px-8 whitespace-nowrap">
                                  <span className="font-semibold text-slate-500 text-sm">{tx.date}</span>
                              </td>
                              <td className="py-6 px-6">
                                  <div className="flex items-center gap-4">
                                      <div className={cn("w-12 h-12 rounded-[1rem] flex items-center justify-center shadow-sm flex-shrink-0", `bg-${tx.color}-50 text-${tx.color}-600`)}>
                                          <tx.icon size={22} />
                                      </div>
                                      <span className="font-bold text-slate-900 text-base">{tx.desc}</span>
                                  </div>
                              </td>
                              <td className="py-6 px-6">
                                  <span className={cn(
                                      "px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider",
                                      tx.category === 'Income' ? "bg-emerald-100 text-emerald-700" : 
                                      tx.category === 'Food' ? "bg-indigo-100 text-indigo-700" :
                                      tx.category === 'Travel' ? "bg-rose-100 text-rose-700" : "bg-slate-100 text-slate-700"
                                  )}>
                                      {tx.category}
                                  </span>
                              </td>
                              <td className="py-6 px-6">
                                  <div className="flex items-center gap-2">
                                      <div className={cn(
                                          "w-1.5 h-1.5 rounded-full",
                                          tx.status === 'Success' ? "bg-emerald-500" : 
                                          tx.status === 'Pending' ? "bg-orange-500" : "bg-rose-500"
                                      )} />
                                      <span className={cn(
                                          "text-[11px] font-bold uppercase tracking-wider",
                                          tx.status === 'Success' ? "text-emerald-600" : 
                                          tx.status === 'Pending' ? "text-orange-600" : "text-rose-600"
                                      )}>
                                          {tx.status}
                                      </span>
                                  </div>
                              </td>
                              <td className="py-6 px-8 text-right whitespace-nowrap">
                                  <span className={cn("text-lg font-bold tracking-tight", tx.amount.includes('+') ? "text-emerald-600" : "text-slate-900")}>
                                      {tx.amount}
                                  </span>
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>

          <div className="p-6 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs font-semibold text-slate-400">Showing 4 of 248 transactions</p>
              <div className="flex items-center gap-2">
                  <button className="p-2.5 bg-slate-50 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors">
                      <ChevronLeft size={16} />
                  </button>
                  <div className="flex items-center gap-1">
                      {[1, 2, 3].map((p) => (
                          <button key={p} className={cn("w-9 h-9 rounded-xl text-xs font-bold transition-all", p === 1 ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" : "text-slate-400 hover:bg-slate-50")}>
                              {p}
                          </button>
                      ))}
                  </div>
                  <button className="p-2.5 bg-slate-50 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors">
                      <ChevronRight size={16} />
                  </button>
              </div>
          </div>
      </div>

      {/* Bottom Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                  <div>
                      <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Total Inflow</p>
                      <h3 className="text-3xl font-bold tracking-tight text-slate-900">₹2,00,780.50</h3>
                  </div>
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                      <TrendingUp size={18} />
                  </div>
              </div>
              <div className="h-16 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={inflowData}>
                          <Bar dataKey="val" fill="#10b981" radius={[2, 2, 0, 0]}>
                              {inflowData.map((_, index) => (
                                  <Cell key={`cell-${index}`} fillOpacity={0.3 + (index * 0.1)} />
                              ))}
                          </Bar>
                      </BarChart>
                  </ResponsiveContainer>
              </div>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                  <div>
                      <p className="text-[10px] font-bold text-rose-500 uppercase tracking-widest mb-1">Total Outflow</p>
                      <h3 className="text-3xl font-bold tracking-tight text-slate-900">₹1,06,572.12</h3>
                  </div>
                  <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center text-rose-500">
                      <TrendingDown size={18} />
                  </div>
              </div>
              <div className="h-16 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={outflowData}>
                          <Bar dataKey="val" fill="#f43f5e" radius={[2, 2, 0, 0]}>
                              {outflowData.map((_, index) => (
                                  <Cell key={`cell-${index}`} fillOpacity={0.3 + (index * 0.1)} />
                              ))}
                          </Bar>
                      </BarChart>
                  </ResponsiveContainer>
              </div>
          </div>

          <div className="bg-indigo-600 p-8 rounded-[2rem] shadow-xl shadow-indigo-100 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:rotate-0 transition-transform">
                  <Scale size={100} />
              </div>
              <div className="relative z-10 flex justify-between items-start mb-6">
                  <div>
                      <p className="text-[10px] font-bold text-indigo-200 uppercase tracking-widest mb-1">Net Cash Flow</p>
                      <h3 className="text-3xl font-bold tracking-tight">₹94,208.38</h3>
                  </div>
              </div>
              <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-lg text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                      +12.4% vs last month
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
