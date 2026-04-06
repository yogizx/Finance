import { 
  TrendingUp, 
  Plus, 
  Download, 
  MoreVertical,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight,
  Bitcoin,
  Globe,
  Coins
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { cn } from '../lib/utils';

const portfolioData = [
  { day: 'Man', value: 16000000 },
  { day: 'Tue', value: 17200000 },
  { day: 'Wed', value: 16800000 },
  { day: 'Thu', value: 18000000 },
  { day: 'Fri', value: 19200000 },
  { day: 'Sat', value: 18800000 },
  { day: 'Sun', value: 19874568 },
];

const allocationData = [
  { name: 'Stocks', value: 45, color: '#6366f1' },
  { name: 'Bonds', value: 25, color: '#06b6d4' },
  { name: 'Crypto', value: 20, color: '#d946ef' },
  { name: 'Cash', value: 10, color: '#94a3b8' },
];

const holdings = [
  { name: 'Reliance Industries', symbol: 'RELIANCE', currentPrice: '₹2,942.10', dayChange: '+1.2%', totalValue: '₹6,42,210.00', units: '218 Shares', icon: Activity, color: 'indigo' },
  { name: 'Bitcoin', symbol: 'BTC', currentPrice: '₹53,42,210.50', dayChange: '-0.5%', totalValue: '₹40,15,787.00', units: '0.75 BTC', icon: Bitcoin, color: 'orange' },
  { name: 'HDFC Bank', symbol: 'HDFCBANK', currentPrice: '₹1,542.10', dayChange: '+0.8%', totalValue: '₹5,14,300.00', units: '333 Shares', icon: Globe, color: 'emerald' },
  { name: 'Ethereum', symbol: 'ETH', currentPrice: '₹2,85,450.20', dayChange: '+2.1%', totalValue: '₹17,45,210.00', units: '6.21 ETH', icon: Coins, color: 'indigo' },
];

const watchlist = [
  { name: 'TCS', company: 'Tata Consultancy Services', price: '₹3,975.22', change: '+3.42%', trend: 'up' },
  { name: 'INFY', company: 'Infosys Ltd.', price: '₹1,472.10', change: '-1.15%', trend: 'down' },
  { name: 'TATAMOTORS', company: 'Tata Motors', price: '₹1,021.28', change: '+0.92%', trend: 'up' },
  { name: 'SOL', company: 'Solana', price: '₹12,444.50', change: '+5.12%', trend: 'up' },
];

export default function Portfolio() {

  return (
    <div className="max-w-[1400px] mx-auto space-y-8 pb-32 px-4 md:px-0">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mb-1">Executive Summary</p>
           <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Investment Portfolio</h1>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-slate-100 px-6 py-3 rounded-2xl font-bold shadow-sm hover:bg-slate-50 transition-colors text-xs uppercase tracking-wider text-slate-600">
                <Download size={16} />
                <span>Export Report</span>
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all text-xs uppercase tracking-wider">
                <Plus size={16} />
                <span>Add Asset</span>
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Chart Column */}
        <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10 z-10 relative">
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Portfolio Value</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">₹1,98,74,568.10</h2>
                        <div className="flex flex-wrap gap-3 mt-4">
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-bold">
                                <TrendingUp size={12} />
                                <span>+$1,71,240.50 (+0.87%) Today</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[10px] font-bold">
                                <Plus size={12} />
                                <span>Net Gain ₹36,10,210.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-slate-50 p-1 rounded-xl w-full md:w-auto">
                        {['1M', '3M', '6M', '1Y', 'All'].map((v) => (
                            <button key={v} className={cn(
                                "flex-1 md:flex-none px-4 py-1.5 text-[10px] font-bold rounded-lg transition-all",
                                v === '6M' ? "bg-white text-indigo-600 shadow-sm" : "text-slate-400 hover:text-slate-600"
                            )}>
                                {v}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="h-[300px] md:h-[400px] mt-10">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={portfolioData}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Holdings Table */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
                <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">Active Holdings</h3>
                    <button className="flex items-center gap-2 text-xs font-bold text-indigo-600 hover:translate-x-1 transition-transform uppercase tracking-wider">
                         <span>View Full Report</span>
                         <ChevronRight size={14} />
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="py-5 px-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">Asset</th>
                                <th className="py-5 px-6 text-right text-[10px] font-bold uppercase tracking-widest text-slate-400">Price</th>
                                <th className="py-5 px-6 text-right text-[10px] font-bold uppercase tracking-widest text-slate-400">Change</th>
                                <th className="py-5 px-8 text-right text-[10px] font-bold uppercase tracking-widest text-slate-400">Value</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {holdings.map((asset, idx) => (
                                <tr key={idx} className="group hover:bg-slate-50/30 transition-all">
                                    <td className="py-6 px-8 whitespace-nowrap">
                                        <div className="flex items-center gap-4">
                                            <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shadow-sm", `bg-${asset.color}-50 text-${asset.color}-600`)}>
                                                <asset.icon size={20} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900 text-sm">{asset.name}</p>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{asset.symbol}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-6 px-6 text-right whitespace-nowrap">
                                        <span className="font-bold text-slate-900 text-sm">{asset.currentPrice}</span>
                                    </td>
                                    <td className="py-6 px-6 text-right whitespace-nowrap">
                                        <span className={cn(
                                            "inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-bold",
                                            asset.dayChange.includes('+') ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                                        )}>
                                            {asset.dayChange.includes('+') ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                                            {asset.dayChange}
                                        </span>
                                    </td>
                                    <td className="py-6 px-8 text-right whitespace-nowrap">
                                        <p className="font-bold text-slate-900 text-sm">{asset.totalValue}</p>
                                        <p className="text-[10px] font-bold text-slate-400">{asset.units}</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* Sidebar Column */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            {/* Allocation Chart */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center">
                <h3 className="font-bold text-lg text-slate-900 w-full mb-8">Asset Allocation</h3>
                <div className="relative w-48 h-48">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={allocationData}
                                innerRadius={65}
                                outerRadius={90}
                                paddingAngle={5}
                                dataKey="value"
                                cornerRadius={8}
                            >
                                {allocationData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Sectors</p>
                        <p className="text-3xl font-bold text-slate-900">4</p>
                    </div>
                </div>
                <div className="w-full mt-8 space-y-2">
                    {allocationData.map((item) => (
                        <div key={item.name} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: item.color}} />
                                <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">{item.name}</span>
                            </div>
                            <span className="text-sm font-bold text-slate-900">{item.value}%</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Watchlist */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg font-bold text-slate-900">Market Watch</h3>
                    <button className="text-slate-400 hover:text-indigo-600">
                        <MoreVertical size={18} />
                    </button>
                </div>
                <div className="space-y-4">
                    {watchlist.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-50 hover:bg-white hover:shadow-md transition-all group">
                            <div className="flex items-center gap-4">
                                <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ring-4 ring-white shadow-sm", item.trend === 'up' ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700")}>
                                    {item.name.charAt(0)}
                                </div>
                                <div className="min-w-0">
                                    <p className="font-bold text-xs text-slate-900 truncate">{item.name}</p>
                                    <p className="text-[9px] font-bold text-slate-400 truncate uppercase tracking-wider">{item.company}</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-end whitespace-nowrap">
                                <p className="font-bold text-xs text-slate-900">{item.price}</p>
                                <p className={cn("text-[9px] font-bold", item.trend === 'up' ? "text-emerald-600" : "text-rose-600")}>{item.change}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
