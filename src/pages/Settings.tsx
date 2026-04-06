import React from 'react';
import { 
  User, 
  ShieldCheck, 
  Bell, 
  CreditCard, 
  Users, 
  Search, 
  Camera, 
  Mail, 
  LogOut,
  Zap,
  Lock,
  Radio,
  Save,
  Monitor,
  Smartphone,
  Key,
  MessageSquare
} from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { icon: User, label: 'Profile', id: 'profile' },
  { icon: ShieldCheck, label: 'Security', id: 'security' },
  { icon: Bell, label: 'Notifications', id: 'notifications' },
  { icon: CreditCard, label: 'Billing', id: 'billing' },
  { icon: Users, label: 'Team', id: 'team' },
];

export default function Settings() {
  const [activeNav, setActiveNav] = React.useState('profile');
  const [notifications, setNotifications] = React.useState({ 
    email: true, 
    push: false, 
    alerts: true,
    sms_tracking: true 
  });

  return (
    <div className="max-w-[1400px] mx-auto space-y-8 pb-32 px-4 md:px-0">
      {/* Header section with search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
           <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight">Account Intelligence</h1>
           <p className="text-sm md:text-base text-slate-500">Configure your financial control center and integration preferences.</p>
        </div>
        <div className="relative group w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search preferences..." 
            className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl text-sm border border-slate-100 shadow-sm focus:bg-white focus:ring-4 focus:ring-indigo-600/5 transition-all outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-24 text-nowrap">
            <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm space-y-1">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveNav(item.id)}
                        className={cn(
                            "w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-200 group text-sm font-bold",
                            activeNav === item.id 
                                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-100" 
                                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                        )}
                    >
                        <item.icon size={18} className={cn(activeNav === item.id ? "text-white" : "text-slate-400 group-hover:text-slate-600")} />
                        <span>{item.label}</span>
                    </button>
                ))}
            </div>

            {/* AI Security Card */}
            <div className="bg-[#1e1a5a] p-6 rounded-3xl text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 transition-transform group-hover:rotate-0">
                    <ShieldCheck size={60} />
                 </div>
                 <div className="relative z-10">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-300 mb-2">Security Vault</p>
                    <p className="text-sm font-bold leading-tight mb-4 text-white/90">256-bit encryption active</p>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-5">
                       <div className="w-full h-full bg-indigo-400 animate-pulse" />
                    </div>
                    <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                        Security Log
                    </button>
                 </div>
            </div>

            <button className="w-full flex items-center gap-3 px-6 py-4 text-slate-500 hover:text-rose-600 hover:bg-rose-50/50 rounded-2xl transition-all group">
                <LogOut size={18} />
                <span className="font-bold text-sm">Logout Session</span>
            </button>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-9 space-y-8">
            {/* Top Cards Row */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Profile Overview Card */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-8 relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-50 rounded-full blur-3xl opacity-50" />
                    <div className="relative flex-shrink-0">
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-slate-100 ring-8 ring-slate-50 relative group">
                            <img 
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander" 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white cursor-pointer">
                                <Camera size={20} />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 min-w-0 relative z-10">
                        <h3 className="text-2xl font-black text-slate-900 truncate tracking-tight">Alex Thompson</h3>
                        <p className="text-sm font-bold text-slate-400 mb-4 truncate">alex@crystal-vault.io</p>
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                             <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[9px] font-black uppercase tracking-[0.1em]">Super Admin</span>
                             <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[9px] font-black uppercase tracking-[0.1em]">Pro Active</span>
                        </div>
                    </div>
                </div>

                {/* Plan Status Card */}
                <div className="bg-indigo-600 p-8 rounded-[2.5rem] shadow-2xl shadow-indigo-200 relative overflow-hidden text-white flex flex-col justify-between">
                    <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none group-hover:scale-110 transition-transform">
                        <Zap size={100} className="fill-white" />
                    </div>
                    <div className="relative z-10">
                        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-indigo-300 mb-1">Corporate Tier</p>
                        <h3 className="text-3xl font-black tracking-tight italic">CRYSTAL PRO+</h3>
                    </div>
                    
                    <div className="relative z-10 mt-8">
                         <div className="flex items-center justify-between mb-6">
                            <div className="space-y-1">
                                <p className="text-[9px] font-bold text-indigo-300 uppercase tracking-widest">Renews On</p>
                                <p className="text-sm font-black uppercase">Oct 12, 2024</p>
                            </div>
                            <div className="text-right space-y-1">
                                <p className="text-[9px] font-bold text-indigo-300 uppercase tracking-widest">Pricing</p>
                                <p className="text-sm font-black">₹4,067/mo</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Message Intelligence Section (New Task Requirement) */}
                <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-2xl space-y-8 relative overflow-hidden group">
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]" />
                    <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                                 <MessageSquare size={22} className="fill-current text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold tracking-tight">Message Intelligence</h3>
                                <p className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest mt-1">AI SMS Analytics</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => setNotifications(prev => ({ ...prev, sms_tracking: !prev.sms_tracking }))}
                            className={cn(
                                "w-14 h-7 rounded-full relative transition-all duration-300 flex items-center px-1.5",
                                notifications.sms_tracking ? "bg-indigo-500" : "bg-slate-700"
                            )}
                        >
                            <div className={cn("w-4 h-4 bg-white rounded-full transition-all duration-300 shadow-xl", notifications.sms_tracking ? "translate-x-7" : "translate-x-0")} />
                        </button>
                    </div>

                    <div className="space-y-5 relative z-10">
                        <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md">
                            <p className="text-xs font-medium text-indigo-200 leading-relaxed">
                                Automatically scan incoming SMS from banks to detect debit amounts and update your dashboard in real-time.
                            </p>
                            <div className="mt-4 flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">System Ready</span>
                            </div>
                        </div>
                        <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-between">
                            <span className="text-xs font-bold text-indigo-100 italic">"Detected $45.00 at Starbucks..."</span>
                            <span className="text-[9px] font-black text-indigo-300 uppercase tracking-widest">Example</span>
                        </div>
                    </div>
                </div>

                {/* Security Section (Compact) */}
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-6">
                    <div className="flex items-center gap-3 font-bold text-slate-900 text-lg">
                        <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-800 shadow-sm">
                             <Lock size={18} />
                        </div>
                        <h3 className="tracking-tight uppercase text-sm font-black">Security Protocols</h3>
                    </div>

                    <div className="space-y-3">
                        {[
                            { label: '2FA Auth', status: 'Active', icon: Smartphone, color: 'emerald' },
                            { label: 'Cloud Key', status: 'Encrypted', icon: Key, color: 'indigo' },
                            { label: 'Sessions', status: '3 Active', icon: Monitor, color: 'amber' }
                        ].map((item) => (
                            <div key={item.label} className="bg-slate-50/50 p-4 rounded-2xl flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-400 shadow-sm">
                                        <item.icon size={18} />
                                    </div>
                                    <span className="font-bold text-slate-800 text-xs uppercase tracking-tight">{item.label}</span>
                                </div>
                                <span className={cn("px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border", `bg-${item.color}-50 text-${item.color}-600 border-${item.color}-100`)}>
                                    {item.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Notification Center */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-rose-50 border border-rose-100 rounded-2xl flex items-center justify-center text-rose-500 shadow-sm">
                             <Bell size={26} className="animate-wiggle" />
                        </div>
                        <div>
                            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter leading-none">Alert Ecosystem</h3>
                            <p className="text-sm font-bold text-slate-400 mt-1 uppercase tracking-widest text-[10px]">Precision Notification Control</p>
                        </div>
                    </div>
                    <button className="px-6 py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-slate-200">Reset Defaults</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                        { id: 'email', icon: Mail, label: 'Email' },
                        { id: 'push', icon: Radio, label: 'Push' },
                        { id: 'alerts', icon: Zap, label: 'Visual' },
                        { id: 'sms_tracking', icon: MessageSquare, label: 'Intelligent' },
                    ].map((mode) => (
                        <div key={mode.id} className="flex flex-col items-center justify-between bg-slate-50/50 p-6 rounded-3xl border border-slate-50 hover:bg-white hover:border-indigo-100 transition-all group">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600 shadow-sm transition-colors mb-4">
                                <mode.icon size={20} />
                            </div>
                            <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest mb-6">{mode.label}</span>
                            
                            <button 
                                onClick={() => setNotifications(prev => ({ ...prev, [mode.id]: !prev[mode.id as keyof typeof notifications] }))}
                                className={cn(
                                    "w-12 h-6 rounded-full relative transition-all duration-300 flex items-center px-1.5",
                                    notifications[mode.id as keyof typeof notifications] ? "bg-indigo-600" : "bg-slate-300"
                                )}
                            >
                                <div className={cn("w-3.5 h-3.5 bg-white rounded-full transition-all duration-300 shadow-md", notifications[mode.id as keyof typeof notifications] ? "translate-x-5.5" : "translate-x-0")} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Footer Actions */}
            <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest order-2 md:order-1">
                    <button className="hover:text-indigo-600 transition-colors">Privacy Cloud</button>
                    <button className="hover:text-indigo-600 transition-colors">Legal Terms</button>
                    <button className="hover:text-indigo-600 transition-colors">Service Desk</button>
                </div>
                <div className="flex items-center gap-6 order-1 md:order-2 w-full md:w-auto">
                    <p className="hidden md:block text-[9px] font-black text-slate-300 uppercase tracking-[0.25em]">Cloud Sync: 2m ago</p>
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-3 bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black shadow-2xl shadow-indigo-200 hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-[10px]">
                        <Save size={18} />
                        <span>Force Sync Preferences</span>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
