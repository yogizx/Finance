import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Wallet, 
  TrendingDown, 
  PiggyBank,
  Send,
  MessageSquare,
  ChevronRight,
  ShoppingBag,
  Utensils,
  FileText,
  Receipt,
  Zap,
  Plus,
  BellRing,
  Smartphone
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  Tooltip,
  PieChart,
  Pie,
  Cell,
  CartesianGrid
} from 'recharts';
import { cn } from '../lib/utils';

const data = [
  { month: 'Jan', income: 450000, expenses: 240000 },
  { month: 'Feb', income: 320000, expenses: 139800 },
  { month: 'Mar', income: 560000, expenses: 480000 },
  { month: 'Apr', income: 480000, expenses: 390800 },
  { month: 'May', income: 620000, expenses: 480000 },
  { month: 'Jun', income: 580000, expenses: 380000 },
];

const pieData = [
  { name: 'Shopping', value: 45, color: '#6366f1' },
  { name: 'Food', value: 30, color: '#10b981' },
  { name: 'Travel', value: 15, color: '#f43f5e' },
  { name: 'Bills', value: 10, color: '#94a3b8' },
];

const transactions = [
  { icon: ShoppingBag, name: 'Apple Store', category: 'Technology', date: 'Oct 24, 2023', amount: '-₹1,29,900.00', status: 'Success', color: 'indigo' },
  { icon: Utensils, name: 'Spotify India', category: 'Entertainment', date: 'Oct 22, 2023', amount: '-₹2,490.00', status: 'Pending', color: 'orange' },
  { icon: FileText, name: 'Salary Deposit', category: 'Corporate', date: 'Oct 20, 2023', amount: '+₹8,50,000.00', status: 'Success', color: 'emerald' },
];

function StatCard({ title, value, change, trend, icon: Icon, color }: any) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm group hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", `bg-${color}-50 text-${color}-600`)}>
          <Icon size={24} />
        </div>
        <div className={cn(
            "flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold", 
            trend === 'up' ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
        )}>
          {trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {change}
        </div>
      </div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{title}</p>
      <h3 className="text-2xl font-bold text-slate-900 mt-1 tracking-tight">{value}</h3>
      <div className="mt-4 h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
        <div className={cn("h-full rounded-full w-2/3", `bg-${color}-500/80 group-hover:w-full transition-all duration-700`)} />
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-10 pb-32">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 bg-indigo-600 rounded-full animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600">Live Financial Intelligence</span>
           </div>
           <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">Global Overview</h1>
        </div>
        <div className="flex items-center gap-4">
            <button className="flex items-center justify-center gap-3 bg-white border-2 border-slate-100 text-slate-900 px-6 py-4 rounded-2xl font-black shadow-xl shadow-slate-100 hover:border-indigo-600/20 transition-all text-xs uppercase tracking-widest leading-none">
              <MessageSquare size={18} className="text-indigo-600" />
              <span>Insights</span>
            </button>
            <button className="flex items-center justify-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-black shadow-2xl shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all text-xs uppercase tracking-widest leading-none">
              <Plus size={20} />
              <span>New Entry</span>
            </button>
        </div>
      </div>

      {/* Overview stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatCard title="Liquidity Pool" value="₹1,28,43,000" change="+2.4%" trend="up" icon={Wallet} color="indigo" />
        <StatCard title="Revenue Stream" value="₹12,24,000" change="+5.1%" trend="up" icon={Zap} color="indigo" />
        <StatCard title="Expense Burn" value="₹4,82,000" change="-1.2%" trend="down" icon={TrendingDown} color="rose" />
        <StatCard title="Reserve Assets" value="₹32,15,000" change="+8.4%" trend="up" icon={PiggyBank} color="amber" />
      </div>

      {/* Smart Approvals Section */}
      <div className="bg-[#1e1a5a] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
         <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12 transition-transform group-hover:rotate-0">
            <BellRing size={120} />
         </div>
         <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                    <Smartphone size={24} className="text-indigo-300" />
                </div>
                <div>
                    <h3 className="text-2xl font-black tracking-tight uppercase italic">Pending Smart Approvals</h3>
                    <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-[0.4em] mt-1">Verification required for recent SMS detections</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { merchant: 'Spotify India', amount: '₹2,490', date: 'Just Now', type: 'Subscription' },
                    { merchant: 'Amazon Pay', amount: '₹12,850', date: '2h ago', type: 'Shopping' }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:bg-white/10 transition-all group/card">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-[9px] font-black text-indigo-300 uppercase tracking-widest mb-1">{item.type}</p>
                                <h4 className="text-lg font-black">{item.merchant}</h4>
                            </div>
                            <span className="text-[10px] font-bold text-white/40">{item.date}</span>
                        </div>
                        <div className="flex items-end justify-between">
                            <h5 className="text-2xl font-black text-white">{item.amount}</h5>
                            <div className="flex gap-2">
                                <button className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center hover:bg-indigo-400 transition-colors shadow-lg">
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <button className="border-2 border-dashed border-white/10 rounded-[2rem] flex flex-col items-center justify-center gap-3 p-8 hover:bg-white/5 transition-all text-white/40 hover:text-white/60">
                    <Plus size={32} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Add Manual Entry</span>
                </button>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column */}
        <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* Card preview */}
                <div className="bg-slate-900 h-64 rounded-[2.5rem] p-8 text-white relative flex flex-col justify-between overflow-hidden group shadow-2xl">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/20 blur-[80px] pointer-events-none" />
                    <div className="flex justify-between items-start z-10">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Crystal Platinum</p>
                            <h4 className="text-xl font-bold tracking-tight mt-1">Mastercard</h4>
                        </div>
                        <div className="w-12 h-8 bg-white/10 rounded-lg flex items-center justify-center font-bold text-white/40 italic">
                            ...
                        </div>
                    </div>
                    
                    <div className="z-10">
                        <p className="font-bold tracking-[0.2em] text-2xl">•••• •••• •••• 4092</p>
                        <div className="flex justify-between items-end mt-8">
                            <div className="space-y-1">
                                <p className="text-[8px] uppercase tracking-widest opacity-60 font-bold">Card Holder</p>
                                <p className="text-sm font-semibold tracking-wide">ALEX STERLING</p>
                            </div>
                            <div className="flex gap-8">
                                <div className="space-y-1">
                                    <p className="text-[8px] uppercase tracking-widest opacity-60 font-bold">Expires</p>
                                    <p className="text-sm font-semibold tracking-wide">08/28</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick actions */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col h-full">
                    <h3 className="font-bold text-lg text-slate-900 mb-6">Quick Actions</h3>
                    <div className="space-y-3 flex-1 overflow-y-auto">
                        {[
                            { icon: Send, label: 'Send Money', color: 'indigo' },
                            { icon: MessageSquare, label: 'Request', color: 'emerald' },
                            { icon: Receipt, label: 'Pay Bills', color: 'rose' }
                        ].map((btn) => (
                            <button key={btn.label} className="w-full bg-slate-50/50 flex items-center justify-between p-4 px-6 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-white hover:shadow-md transition-all group">
                                <div className="flex items-center gap-4">
                                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm", `bg-${btn.color}-50 text-${btn.color}-600`)}>
                                        <btn.icon size={20} />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700">{btn.label}</span>
                                </div>
                                <ChevronRight size={18} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Analytics chart */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">Analytics</h3>
                        <p className="text-xs text-slate-400 font-medium">Income vs Expenses Analysis</p>
                    </div>
                    <div className="flex bg-slate-50 p-1 rounded-xl">
                        <button className="px-5 py-1.5 bg-white text-[10px] font-bold rounded-lg shadow-sm text-indigo-600">Monthly</button>
                        <button className="px-5 py-1.5 text-[10px] font-bold text-slate-400 hover:text-slate-600 transition-all">Weekly</button>
                    </div>
                </div>
                <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#94a3b8'}} dy={10} />
                            <Tooltip 
                                contentStyle={{borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}}
                                itemStyle={{fontSize: '12px', fontWeight: '600'}}
                                formatter={(value: any) => [`₹${Number(value).toLocaleString()}`, 'Value']}
                            />
                            <Area type="monotone" dataKey="income" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorIncome)" />
                            <Area type="monotone" dataKey="expenses" stroke="#f43f5e" strokeWidth={3} fillOpacity={0} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>

        {/* Right column */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center">
                <h3 className="font-bold text-lg text-slate-900 w-full mb-8">Spending Breakdown</h3>
                <div className="relative w-48 h-48">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={pieData}
                                innerRadius={70}
                                outerRadius={90}
                                paddingAngle={5}
                                dataKey="value"
                                cornerRadius={10}
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                        <p className="text-2xl font-bold text-slate-900 tracking-tight">₹4.8k</p>
                        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-none">Spent</p>
                    </div>
                </div>
                
                <div className="w-full mt-8 space-y-2">
                    {pieData.map((item) => (
                        <div key={item.name} className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: item.color}} />
                                <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">{item.name}</span>
                            </div>
                            <span className="text-xs font-bold text-slate-900">{item.value}%</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-500/10 blur-[60px] pointer-events-none" />
                <div className="flex items-center gap-2 mb-8 relative z-10">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500 text-white flex items-center justify-center">
                        <Zap size={18} className="fill-current" />
                    </div>
                    <h3 className="font-bold text-lg tracking-tight uppercase">Smart Insight</h3>
                </div>
                
                <div className="space-y-6 relative z-10">
                    <p className="text-xs text-indigo-200 leading-relaxed">Spending increased by <span className="text-white font-bold underline decoration-indigo-400">12%</span> this week compared to your average.</p>

                    <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                         <p className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest mb-1">Highest expense</p>
                         <p className="text-sm font-bold">Shopping at Apple Store</p>
                         <p className="text-lg font-bold text-indigo-400 mt-1">₹1,29,900.00</p>
                    </div>

                    <button className="w-full bg-indigo-600 text-white py-3 rounded-xl text-xs font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-900/20">
                        View Detailed Analysis
                    </button>
                </div>
            </div>
        </div>

        {/* Transactions Table */}
        <div className="lg:col-span-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden mt-4">
            <div className="p-8 flex items-center justify-between border-b border-slate-50">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Recent Transactions</h3>
                <button className="text-xs font-bold text-indigo-600 uppercase tracking-widest hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>Explore All</span>
                    <ChevronRight size={14} />
                </button>
            </div>
            
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-slate-50/50">
                            <th className="py-5 px-10 text-[10px] font-bold uppercase tracking-widest text-slate-400">Transaction</th>
                            <th className="py-5 px-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">Category</th>
                            <th className="py-5 px-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-right">Amount</th>
                            <th className="py-5 px-10 text-[10px] font-bold uppercase tracking-widest text-slate-400 text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {transactions.map((tx, idx) => (
                            <tr key={idx} className="group hover:bg-slate-50/30 transition-all">
                                <td className="py-6 px-10 whitespace-nowrap">
                                    <div className="flex items-center gap-4">
                                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shadow-sm", idx === 0 ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-900")}>
                                            <tx.icon size={20} />
                                        </div>
                                        <span className="font-bold text-slate-900 text-sm">{tx.name}</span>
                                    </div>
                                </td>
                                <td className="py-6 px-6 whitespace-nowrap">
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{tx.category}</span>
                                </td>
                                <td className="py-6 px-6 text-right whitespace-nowrap">
                                    <span className={cn("font-bold text-sm", tx.amount.includes('+') ? "text-emerald-600" : "text-slate-900")}>
                                        {tx.amount}
                                    </span>
                                </td>
                                <td className="py-6 px-10 text-right whitespace-nowrap">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg">
                                        <div className={cn("w-2 h-2 rounded-full", tx.status === 'Success' ? "bg-emerald-500" : "bg-orange-500")} />
                                        <span className={cn("text-[10px] font-bold uppercase tracking-widest", tx.status === 'Success' ? "text-emerald-600" : "text-orange-600")}>
                                            {tx.status}
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  );
}
