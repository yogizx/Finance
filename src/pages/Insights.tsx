import { 
  Brain, 
  TrendingUp, 
  Target, 
  Zap, 
  Calendar,
  ChevronRight,
  BarChart as BarIcon,
  Sparkles,
  Info
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  Tooltip as RechartsTooltip,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { cn } from '../lib/utils';

const spendingData = [
  { category: 'Food & Dining', value: 35000, color: '#6366f1' },
  { category: 'Shopping', value: 25000, color: '#8b5cf6' },
  { category: 'Transport', value: 15000, color: '#ec4899' },
  { category: 'Bills', value: 45000, color: '#f43f5e' },
  { category: 'Entertainment', value: 10000, color: '#f59e0b' },
];

const projectionData = [
  { month: 'Apr', spent: 120000, projected: 125000 },
  { month: 'May', spent: 135000, projected: 130000 },
  { month: 'Jun', spent: 110000, projected: 120000 },
  { month: 'Jul', spent: 0, projected: 128000 },
  { month: 'Aug', spent: 0, projected: 122000 },
];

export default function Insights() {
  return (
    <div className="max-w-[1400px] mx-auto space-y-8 pb-32 px-4 md:px-0">
      {/* Hero Section */}
      <div className="relative rounded-[2.5rem] bg-slate-900 p-8 md:p-12 overflow-hidden group">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-fuchsia-500/10 blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-[10px] font-bold uppercase tracking-widest">
              <Sparkles size={12} />
              AI-Powered Financial Intelligence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Your financial future, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">decoded.</span></h1>
            <p className="text-slate-400 text-sm md:text-lg max-w-xl">Our advanced algorithms analyze your patterns to provide hyper-personalized insights and predictive growth strategies.</p>
          </div>
          <div className="flex-shrink-0 relative">
            <div className="w-48 h-48 bg-indigo-600/20 rounded-full border border-indigo-500/20 flex items-center justify-center animate-pulse-slow">
                 <Brain size={80} className="text-indigo-400 drop-shadow-[0_0_20px_rgba(129,140,248,0.5)]" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Core Insights */}
        <div className="lg:col-span-8 space-y-8">
            {/* Spending Patterns */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-10">
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">Spending Anomalies</h3>
                        <p className="text-sm text-slate-400 font-medium">Auto-detected patterns that deviate from your 6-month average.</p>
                    </div>
                    <button className="p-2 bg-slate-50 rounded-xl text-slate-400 hover:text-indigo-600 transition-all">
                        <Info size={18} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-rose-50/50 p-6 rounded-3xl border border-rose-100/50 group hover:bg-rose-50 transition-all">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-rose-500 shadow-sm">
                                <TrendingUp size={18} />
                            </div>
                            <span className="text-[10px] font-bold text-rose-600 uppercase tracking-widest">Spike Detected</span>
                        </div>
                        <p className="font-bold text-slate-900 text-lg mb-2">Dining Expenses +42%</p>
                        <p className="text-xs text-slate-500 leading-relaxed">Your food & dining spending is significantly higher than your average for the first week of April.</p>
                        <button className="mt-4 text-xs font-bold text-rose-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            See breakdown <ChevronRight size={14} />
                        </button>
                    </div>

                    <div className="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100/50 group hover:bg-emerald-50 transition-all">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-emerald-600 shadow-sm">
                                <Target size={18} />
                            </div>
                            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Goal Progress</span>
                        </div>
                        <p className="font-bold text-slate-900 text-lg mb-2">Savings Boost +₹12k</p>
                        <p className="text-xs text-slate-500 leading-relaxed">Reduced commute costs have allowed you to allocate ₹12,000 more to your vacation fund this month.</p>
                        <button className="mt-4 text-xs font-bold text-emerald-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Adjust goals <ChevronRight size={14} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Projected Cashflow */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">Projected Cashflow</h3>
                        <p className="text-sm text-slate-400 font-medium">Predictive model based on recurring bills and historical behavior.</p>
                    </div>
                    <div className="flex bg-slate-50 p-1 rounded-xl">
                        <button className="px-4 py-1.5 text-[10px] font-bold rounded-lg bg-white text-indigo-600 shadow-sm">Standard</button>
                        <button className="px-4 py-1.5 text-[10px] font-bold rounded-lg text-slate-400 hover:text-slate-600 transition-all">AI Optimized</button>
                    </div>
                </div>

                <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={projectionData}>
                            <defs>
                                <linearGradient id="colorProjected" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <RechartsTooltip 
                                contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                formatter={(value) => `₹${Number(value).toLocaleString()}`}
                            />
                            <Area type="monotone" dataKey="projected" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorProjected)" strokeDasharray="5 5" />
                            <Area type="monotone" dataKey="spent" stroke="#ec4899" strokeWidth={3} fillOpacity={0} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>

        {/* Actionable Sidebar */}
        <div className="lg:col-span-4 space-y-8">
            {/* Category Allocation */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col items-center">
                <h3 className="font-bold text-lg text-slate-900 w-full mb-8">Category Insight</h3>
                <div className="relative w-48 h-48">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={spendingData}
                                innerRadius={65}
                                outerRadius={90}
                                paddingAngle={5}
                                dataKey="value"
                                cornerRadius={8}
                            >
                                {spendingData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <BarIcon size={24} className="text-slate-300" />
                    </div>
                </div>
                <div className="w-full mt-8 space-y-2">
                    {spendingData.map((item) => (
                        <div key={item.category} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-all">
                            <div className="flex items-center gap-3">
                                <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: item.color}} />
                                <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">{item.category}</span>
                            </div>
                            <span className="text-sm font-bold text-slate-900">₹{(item.value / 1000).toFixed(0)}k</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Smart Tips Container */}
            <div className="bg-indigo-600 p-8 rounded-[2.5rem] shadow-xl shadow-indigo-100 text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:scale-110 transition-transform">
                    <Zap size={80} className="fill-white" />
                 </div>
                 <h4 className="text-lg font-bold mb-4 relative z-10">Smart Strategy</h4>
                 <p className="text-sm text-indigo-100 leading-relaxed mb-8 relative z-10">Based on your surplus this month, investing an additional <span className="text-white font-bold">₹15,000</span> in SIP will help you reach your house deposit goal <span className="text-white font-bold font-italic">4 months earlier.</span></p>
                 <button className="w-full bg-white text-indigo-600 py-3 rounded-2xl text-xs font-bold hover:bg-indigo-50 transition-all uppercase tracking-wider relative z-10">
                    Apply Strategy
                 </button>
            </div>

            {/* Upcoming Bills */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-6">Upcoming Signals</h3>
                <div className="space-y-4">
                    {[
                        { title: 'Tax Deadline', date: 'Jul 31', type: 'High Priority', color: 'rose' },
                        { title: 'Portfolio Review', date: 'Jul 15', type: 'Neutral', color: 'slate' },
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-50">
                            <div className="flex items-center gap-4">
                                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ring-4 ring-white shadow-sm", `bg-${item.color}-50 text-${item.color}-600`)}>
                                    <Calendar size={18} />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-bold text-xs text-slate-900 truncate">{item.title}</p>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{item.type}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold text-xs text-indigo-600">{item.date}</p>
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
