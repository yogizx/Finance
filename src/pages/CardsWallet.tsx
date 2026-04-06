import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus,
  QrCode,
  Receipt, 
  Smartphone, 
  ShieldCheck, 
  Lock, 
  Globe, 
  Eye, 
  EyeOff, 
  TrendingUp,
  LayoutGrid,
  Zap,
  ArrowUpRight,
  Scan,
  CreditCard as CardIcon,
  Activity,
  BellRing,
  Wallet,
  ChevronRight,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { cn } from '../lib/utils';

const cards = [
  { id: 1, type: 'Visa Platinum', number: '•••• 4092', balance: '₹4,52,000', color: 'indigo', expiry: '08/28', secondaryColor: 'indigo-400' },
  { id: 2, type: 'Mastercard Gold', number: '•••• 8812', balance: '₹1,24,000', color: 'slate', secondaryColor: 'slate-400' },
  { id: 3, type: 'Virtual Card', number: '•••• 1109', balance: '₹8,500.00', color: 'emerald', secondaryColor: 'emerald-400' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1, 
        transition: { 
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as any
        } 
    }
};

export default function CardsWallet() {
  const [showNumbers, setShowNumbers] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  return (
    <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative min-h-screen space-y-12 pb-24"
    >
      {/* Background Ambient Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
         <motion.div 
            animate={{ 
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[120px] opacity-20" 
         />
         <motion.div 
            animate={{ 
                x: [0, -80, 0],
                y: [0, 100, 0],
                scale: [1, 1.1, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, delay: 2 }}
            className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-emerald-50/30 rounded-full blur-[100px] opacity-10" 
         />
      </div>

      {/* Header Section */}
      <motion.div variants={itemVariants} className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12 relative z-10 px-4 md:px-0">
        <div className="space-y-4">
           <div className="flex items-center gap-3">
              <div className="px-3 py-1 bg-indigo-600/10 border border-indigo-600/20 text-indigo-700 text-[10px] font-black uppercase tracking-[0.3em] rounded-md">
                  Premium Services
              </div>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
           </div>
           <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-slate-950 leading-[0.9] lg:leading-[0.85] uppercase tracking-tighter">
               Cards <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">Vault</span>
           </h1>
           <p className="text-base md:text-lg font-medium text-slate-500/80 max-w-md italic font-display leading-tight">Secure architecture for your global liquidity management.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 w-full lg:w-auto">
            <motion.button 
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-4 bg-white/70 backdrop-blur-3xl border border-slate-200/50 p-5 md:p-6 rounded-2xl md:rounded-3xl font-black text-[10px] md:text-xs uppercase tracking-widest text-slate-800 shadow-2xl shadow-slate-200/40 hover:bg-white transition-all ring-offset-2 hover:ring-2 ring-indigo-50"
            >
                <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-50 rounded-xl md:rounded-2xl flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                    <QrCode size={18} />
                </div>
                <span>Scanner Gateway</span>
            </motion.button>
            <motion.button 
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto flex items-center justify-center gap-4 bg-indigo-600 p-5 md:p-6 rounded-2xl md:rounded-3xl font-black text-[10px] md:text-xs uppercase tracking-widest text-white shadow-[0_30px_60px_-15px_rgba(79,70,229,0.5)] hover:bg-indigo-700 transition-all group"
            >
                <Receipt size={18} />
                <span>Initialize Settlements</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 relative z-10 px-4 md:px-0">
        {/* Left Column: Management & Cards */}
        <div className="col-span-1 lg:col-span-8 space-y-6 md:space-y-10">
            <motion.div 
               variants={itemVariants}
               className="bg-white/80 backdrop-blur-3xl p-6 md:p-12 rounded-[2.5rem] md:rounded-[5rem] border border-white/40 shadow-[0_100px_150px_-50px_rgba(0,0,0,0.06)] relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-1000 hidden md:block">
                    <LayoutGrid size={400} />
                </div>
                
                <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 md:gap-8 mb-8 md:mb-16">
                    <div className="flex items-center gap-4 md:gap-5">
                       <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-950 rounded-2xl md:rounded-3xl flex items-center justify-center text-white shadow-2xl relative">
                           <Activity size={24} />
                           <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-emerald-500 rounded-full border-2 md:border-4 border-white animate-pulse" />
                       </div>
                       <div>
                           <h3 className="text-xl md:text-3xl font-black text-slate-950 uppercase italic tracking-tighter leading-none">Financial Cloud</h3>
                           <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mt-1 md:mt-2">Global Asset Ledger Active</p>
                       </div>
                    </div>
                    
                    <div className="flex bg-slate-50 p-1 rounded-xl md:rounded-2xl border border-slate-100 shadow-inner w-full md:w-auto overflow-x-auto">
                        {[
                            { id: 'all', label: 'All Assets' },
                            { id: 'sec', label: 'Secured' },
                            { id: 'virt', label: 'Virtual' }
                        ].map((tab) => (
                            <button 
                                key={tab.id}
                                className={cn(
                                    "flex-1 md:flex-none px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-[1rem] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap",
                                    tab.id === 'all' ? "bg-white shadow-sm text-slate-900 border border-slate-100" : "text-slate-400 hover:text-slate-600"
                                )}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-16">
                    <div className="space-y-4 md:space-y-5">
                        {cards.map((card, idx) => (
                            <motion.button 
                                key={card.id}
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setActiveCard(idx)}
                                className={cn(
                                    "w-full group p-5 md:p-8 rounded-2xl md:rounded-[3.5rem] border-2 transition-all relative overflow-hidden flex items-center justify-between",
                                    activeCard === idx 
                                        ? "bg-slate-950 border-slate-950 text-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]" 
                                        : "bg-white/50 border-slate-50 hover:border-indigo-100 hover:bg-white"
                                )}
                            >
                                <div className="flex items-center gap-4 md:gap-6">
                                    <div className={cn(
                                        "w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-[2.5rem] flex items-center justify-center transition-all duration-700",
                                        activeCard === idx 
                                            ? "bg-indigo-600 text-white rotate-6 md:rotate-12 scale-110 shadow-2xl" 
                                            : "bg-slate-100 text-slate-400 group-hover:bg-slate-950 group-hover:text-white"
                                    )}>
                                        <CardIcon size={24} />
                                    </div>
                                    <div className="text-left font-bold">
                                        <p className={cn("text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] mb-1", activeCard === idx ? "text-indigo-300" : "text-slate-400")}>{card.type}</p>
                                        <p className="text-base md:text-xl font-black">{card.number}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                     <h4 className="text-lg md:text-2xl font-black italic tracking-tighter">{card.balance}</h4>
                                     <AnimatePresence>
                                        {activeCard === idx && (
                                            <motion.div 
                                                initial={{ width: 0, opacity: 0 }}
                                                animate={{ width: "100%", opacity: 1 }}
                                                className="h-[2px] bg-indigo-500 mt-1 md:mt-2 rounded-full" 
                                            />
                                        )}
                                     </AnimatePresence>
                                </div>
                            </motion.button>
                        ))}
                        
                        <motion.button 
                            whileHover={{ scale: 1.01 }}
                            className="w-full flex items-center justify-center gap-3 md:gap-4 p-5 md:p-8 rounded-2xl md:rounded-[3.5rem] border-2 border-dashed border-slate-200 text-slate-400 hover:text-indigo-600 hover:border-indigo-600 hover:bg-indigo-50/50 transition-all font-black text-[8px] md:text-[10px] uppercase tracking-[0.4em]"
                        >
                            <Plus size={16} className="bg-slate-100 rounded-full p-0.5" />
                            <span>Integrate New Asset</span>
                        </motion.button>
                    </div>

                    <div className="flex flex-col justify-center gap-8 md:gap-10">
                        {/* 3D Interactive Card Preview */}
                        <div className="relative group perspective-[2000px]">
                            <AnimatePresence mode="wait">
                                <motion.div 
                                    key={activeCard}
                                    initial={{ opacity: 0, x: 20, rotateY: -30, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -20, rotateY: 30, scale: 0.95 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    whileHover={{ rotateY: 10, rotateX: -5, scale: 1.02 }}
                                    className={cn(
                                        "relative h-64 md:h-80 w-full rounded-2xl md:rounded-[4.5rem] p-8 md:p-12 text-white overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.45)] preserve-3d transition-transform duration-500",
                                        cards[activeCard].color === 'indigo' ? "bg-[radial-gradient(circle_at_top_left,#1e1a5a_0%,#4f46e5_45%,#7c3aed_100%)]" : 
                                        cards[activeCard].color === 'slate' ? "bg-[radial-gradient(circle_at_top_left,#0f172a_0%,#334155_45%,#475569_100%)]" : 
                                        "bg-[radial-gradient(circle_at_top_left,#064e3b_0%,#10b981_45%,#34d399_100%)]"
                                    )}
                                >
                                    <div className="absolute top-0 right-0 p-8 md:p-12 opacity-10 blur-sm overflow-hidden">
                                        <Globe size={300} strokeWidth={1} className="max-w-none" />
                                    </div>
                                    
                                    <div className="flex justify-between items-start relative z-10 mb-12 md:mb-20">
                                        <div>
                                            <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] text-white/50 mb-2 md:mb-3">Cloud Secure</p>
                                            <h5 className="text-xl md:text-3xl font-black italic uppercase leading-none tracking-tighter">{cards[activeCard].type.split(' ')[0]}</h5>
                                        </div>
                                        <div className="w-12 h-10 md:w-16 md:h-12 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg">
                                            <Zap size={20} md:size={24} className="fill-white text-white drop-shadow-lg animate-pulse" />
                                        </div>
                                    </div>

                                    <div className="relative z-10 space-y-8 md:space-y-12">
                                        <p className="text-xl md:text-3xl font-black tracking-[0.2em] md:tracking-[0.3em] font-mono drop-shadow-2xl flex justify-between items-center opacity-90">
                                            {showNumbers ? "4092 8219 9021 4452" : "•••• •••• •••• " + cards[activeCard].number.slice(-4)}
                                            <motion.button 
                                                whileHover={{ scale: 1.2 }}
                                                onClick={(e) => { e.stopPropagation(); setShowNumbers(!showNumbers); }} 
                                                className="opacity-40 hover:opacity-100 transition-opacity"
                                            >
                                                {showNumbers ? <EyeOff size={16} /> : <Eye size={16} />}
                                            </motion.button>
                                        </p>
                                        
                                        <div className="flex justify-between items-end">
                                            <div className="space-y-1 font-bold">
                                                <p className="text-[6px] md:text-[8px] font-black uppercase tracking-[0.4em] text-white/40">Verified Holder</p>
                                                <p className="text-xs md:text-sm font-black tracking-widest leading-none uppercase">Alexander Vaughn</p>
                                            </div>
                                            <div className="text-right space-y-1 font-bold">
                                                <p className="text-[6px] md:text-[8px] font-black uppercase tracking-[0.4em] text-white/40">Exp Date</p>
                                                <p className="text-xs md:text-sm font-black tracking-widest leading-none">08 / 28</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Feature Toggles */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {[
                                { label: 'Card Freeze', icon: Lock, status: false, color: 'rose' },
                                { label: 'Intl Gateway', icon: Globe, status: true, color: 'indigo' }
                            ].map((feature) => (
                                <div key={feature.label} className="p-5 md:p-7 bg-white rounded-2xl md:rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-100/50 flex flex-col gap-4 md:gap-5 hover:border-indigo-100 transition-all cursor-pointer group">
                                     <div className={cn("w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center transition-all", feature.status ? "bg-indigo-50 text-indigo-600 shadow-lg shadow-indigo-100" : "bg-slate-50 text-slate-400")}>
                                         <feature.icon size={18} md:size={22} className="group-hover:rotate-12 transition-transform" />
                                     </div>
                                     <div className="flex items-center justify-between px-1">
                                         <span className="text-[10px] md:text-[11px] font-black text-slate-900 uppercase tracking-tighter">{feature.label}</span>
                                         <div className={cn("w-8 h-4 md:w-10 md:h-5 rounded-full relative transition-all flex items-center p-0.5 md:p-1", feature.status ? "bg-indigo-600" : "bg-slate-200")}>
                                             <div className={cn("w-2.5 h-2.5 md:w-3 md:h-3 bg-white rounded-full shadow-md transition-all duration-300", feature.status ? "translate-x-4 md:translate-x-5" : "translate-x-0")} />
                                         </div>
                                     </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Quick Pay / Bill Section */}
            <motion.div variants={itemVariants} className="bg-white/80 backdrop-blur-3xl p-6 md:p-14 rounded-[2.5rem] md:rounded-[5rem] border border-white/40 shadow-[0_80px_120px_-30px_rgba(0,0,0,0.05)]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 md:gap-16 mb-8 md:mb-16">
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-indigo-50 rounded-2xl md:rounded-3xl flex items-center justify-center text-indigo-600 shadow-inner">
                            <Scan size={22} md:size={26} />
                        </div>
                        <div>
                             <h4 className="text-xl md:text-3xl font-black text-slate-950 uppercase italic tracking-tighter leading-none">Instant Hub</h4>
                             <p className="text-[8px] md:text-[10px] font-black text-slate-400 capitalize tracking-widest mt-1 md:mt-2">One-Tap Settlements Gateway</p>
                        </div>
                    </div>
                    <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 bg-slate-50 hover:bg-slate-100 text-[9px] md:text-[10px] font-black text-slate-600 uppercase tracking-widest rounded-xl md:rounded-2xl border border-slate-100 transition-all flex items-center justify-center gap-3">
                         Expand Services <ChevronRight size={14} />
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {[
                        { label: 'Energy', icon: Zap, color: 'amber', amount: '₹2,450', change: '+2%' },
                        { label: 'Mobile', icon: Smartphone, color: 'indigo', amount: '₹899', change: '0%' },
                        { label: 'Network', icon: Globe, color: 'emerald', amount: '₹1,250', change: '-5%' },
                        { label: 'Estate', icon: LayoutGrid, color: 'rose', amount: '₹45,000', change: '+12%' }
                    ].map((hub) => (
                        <motion.button 
                           key={hub.label}
                           whileHover={{ y: -8, scale: 1.02 }}
                           className="flex flex-col items-center gap-4 md:gap-6 p-6 md:p-10 bg-white border border-slate-100 rounded-2xl md:rounded-[3.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:border-indigo-100 transition-all group relative overflow-hidden"
                        >
                             <div className={cn("w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-[2rem] flex items-center justify-center transition-all duration-700 group-hover:scale-110", `bg-${hub.color}-50 text-${hub.color}-600`)}>
                                 <hub.icon size={28} md:size={36} />
                             </div>
                             <div className="text-center">
                                 <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-1 md:mb-2">{hub.label}</p>
                                 <p className="text-sm md:text-xl font-black text-slate-950">{hub.amount}</p>
                             </div>
                             <div className="absolute -bottom-1 translate-y-full group-hover:translate-x-0 group-hover:-translate-y-2 text-[6px] md:text-[8px] font-black text-indigo-600 uppercase tracking-[0.5em] transition-transform duration-500 hidden sm:block">
                                 Pay Now
                             </div>
                        </motion.button>
                    ))}
                </div>
            </motion.div>
        </div>

        {/* Right Column: Intelligence & Security */}
        <div className="col-span-1 lg:col-span-4 space-y-6 md:space-y-10 lg:-mt-24">
            {/* Liquid Balance Card */}
            <motion.div 
                variants={itemVariants} 
                whileHover={{ scale: 1.02 }}
                className="bg-slate-950 p-8 md:p-12 rounded-[2.5rem] md:rounded-[5rem] text-white shadow-[0_100px_150px_-40px_rgba(30,26,90,0.5)] relative overflow-hidden group border border-white/5"
            >
                <div className="absolute -bottom-10 -right-10 p-10 opacity-10 rotate-12 transition-transform duration-1000 group-hover:scale-150 group-hover:rotate-0 hidden md:block">
                    <Wallet size={200} fill="currentColor" />
                </div>
                
                <div className="relative z-10 pb-6 md:pb-8 border-b border-white/10 mb-6 md:mb-8">
                    <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] text-indigo-400 mb-4 md:mb-6 italic">Master Net Liquidity</p>
                    <div className="flex items-baseline gap-2 md:gap-3 mb-6 md:mb-10">
                        <span className="text-xl md:text-3xl font-black text-white/30 italic">₹</span>
                        <h3 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-none italic drop-shadow-2xl">8,24,432</h3>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4">
                        <div className="inline-flex px-4 md:px-6 py-2 md:py-3 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl items-center gap-2 md:gap-3 shadow-inner">
                            <TrendingUp size={16} md:size={20} className="text-emerald-400" />
                            <span className="text-xs md:text-sm font-black text-emerald-400 uppercase tracking-tighter">+12.4%</span>
                        </div>
                        <span className="text-[8px] md:text-[10px] font-black text-white/30 uppercase tracking-[0.2em] md:tracking-[0.3em]">Monthly Yield Surge</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4 relative z-10">
                    <button className="py-4 md:py-5 bg-white text-slate-950 rounded-xl md:rounded-[2rem] font-black text-[10px] md:text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10">
                        Add Funds
                    </button>
                    <button className="py-4 md:py-5 bg-white/5 border border-white/10 text-white rounded-xl md:rounded-[2rem] font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
                        Withdraw
                    </button>
                </div>
            </motion.div>

            {/* AI Security Hub */}
            <motion.div 
               variants={itemVariants}
               className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[5rem] border border-slate-100 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.06)] relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-6 md:p-8">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-rose-600 rounded-xl md:rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-rose-200 animate-bounce-subtle outline outline-4 md:outline-8 outline-rose-50">
                         <BellRing size={20} md:size={24} />
                    </div>
                </div>

                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-[2.5rem] bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-inner">
                        <ShieldAlert size={24} md:size={28} className="animate-pulse" />
                    </div>
                    <div>
                        <h4 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter leading-none">Security Pulse</h4>
                        <p className="text-[8px] md:text-[9px] font-black text-slate-400 tracking-[0.2em] md:tracking-[0.3em] mt-1 md:mt-2 uppercase">Active Shield: Level 4</p>
                    </div>
                </div>

                <div className="space-y-6 md:space-y-8">
                    <motion.div 
                       whileHover={{ scale: 1.02 }}
                       className="p-6 md:p-10 bg-slate-50 border border-slate-100 rounded-3xl md:rounded-[4rem] group/alert shadow-inner relative overflow-hidden"
                    >
                        <motion.div 
                            animate={{ opacity: [0.1, 0.2, 0.1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute inset-0 bg-indigo-50" 
                        />
                        <div className="relative z-10">
                            <p className="text-[8px] md:text-[10px] font-black text-indigo-600 uppercase tracking-[0.4em] md:tracking-[0.5em] mb-3 md:mb-4">Urgent Review</p>
                            <p className="text-[10px] md:text-sm text-slate-500 font-medium leading-relaxed italic mb-6 md:mb-8">
                                Potential subscription renewal detected from <span className="text-slate-950 font-black">Spotify India</span> for <span className="text-indigo-600 font-black">₹2,490</span>.
                            </p>
                            <div className="flex gap-3">
                                <button className="flex-1 py-3 md:py-4 bg-slate-950 text-white rounded-xl md:rounded-[1.5rem] text-[8px] md:text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-2xl">Confirm</button>
                                <button className="flex-1 py-3 md:py-4 bg-white border border-slate-200 text-slate-400 rounded-xl md:rounded-[1.5rem] text-[8px] md:text-[10px] font-black uppercase tracking-widest hover:text-slate-600 transition-all">Ignore</button>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex items-center justify-between p-4 md:p-6 bg-emerald-50/50 border border-emerald-100 rounded-2xl md:rounded-[2.5rem]">
                        <div className="flex items-center gap-2 md:gap-3">
                            <ShieldCheck size={16} md:size={20} className="text-emerald-500" />
                            <span className="text-[8px] md:text-[9px] font-black text-emerald-900 uppercase tracking-[0.1em] md:tracking-[0.2em]">AES-256 Link Active</span>
                        </div>
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-emerald-100 p-1">
                             <div className="w-full h-full bg-emerald-400 rounded-full animate-ping" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Smart Metrics */}
            <motion.div 
               variants={itemVariants}
               className="bg-indigo-50/50 border border-indigo-100/50 p-8 md:p-10 rounded-[2.5rem] md:rounded-[5rem] shadow-inner relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-10 opacity-[0.05] pointer-events-none hidden md:block">
                     <TrendingUp size={200} />
                </div>
                <div className="flex items-center gap-4 md:gap-5 mb-8 md:mb-10">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center text-indigo-600 shadow-xl shadow-indigo-100">
                        <Activity size={22} md:size={26} />
                    </div>
                    <div>
                        <span className="text-[10px] md:text-[11px] font-black text-slate-900 uppercase tracking-[0.3em] md:tracking-[0.4em]">Global Pulse</span>
                        <p className="text-[8px] md:text-[9px] font-black text-indigo-500 tracking-widest uppercase">Analytics Active</p>
                    </div>
                </div>
                
                <div className="space-y-3">
                    <div className="flex items-end justify-between">
                        <h5 className="text-xl md:text-3xl font-black italic tracking-tighter">50% Utilization</h5>
                        <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">₹5L <span className="opacity-30">/</span> ₹10L</p>
                    </div>
                    <div className="h-3 md:h-4 w-full bg-slate-200/50 rounded-full overflow-hidden p-0.5 md:p-1 shadow-inner relative">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "50%" }}
                            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full bg-indigo-600 rounded-full relative overflow-hidden shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-shimmer scale-y-150" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
