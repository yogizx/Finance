import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ArrowLeftRight, 
  BarChart3, 
  Briefcase, 
  CreditCard, 
  Settings as SettingsIcon, 
  HelpCircle, 
  LogOut,
  ShieldCheck,
  Zap,
  X,
  ChevronDown
} from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', to: '/' },
  { icon: ArrowLeftRight, label: 'Transactions', to: '/transactions' },
  { icon: BarChart3, label: 'Insights', to: '/insights' },
  { icon: Briefcase, label: 'Portfolio', to: '/portfolio' },
  { icon: CreditCard, label: 'Cards & Wallet', to: '/cards' },
  { icon: SettingsIcon, label: 'Settings', to: '/settings' },
];

export function Sidebar({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isAdmin, setIsAdmin] = React.useState(false);

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )} 
        onClick={onClose}
      />

      <aside className={cn(
        "w-64 h-screen border-r bg-white flex flex-col fixed left-0 top-0 z-[70] transition-transform duration-300 transform lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <button 
          onClick={onClose}
          className="absolute right-4 top-6 p-2 text-muted-foreground lg:hidden"
        >
          <X size={20} />
        </button>

        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
            <Zap size={24} className="fill-current" />
          </div>
          <div>
            <h1 className="font-display font-bold text-xl leading-none">Crystal Ledger</h1>
            <p className="text-xs text-muted-foreground mt-1">Premium Finance</p>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              onClick={() => { if(window.innerWidth < 1024) onClose(); }}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 group",
                isActive 
                  ? "bg-indigo-50 text-indigo-700 font-medium" 
                  : "text-muted-foreground hover:bg-slate-50 hover:text-foreground"
              )}
            >
              <item.icon size={20} className={cn("transition-colors", "group-hover:text-indigo-600")} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-6 mt-auto space-y-6">
          <div className="bg-gradient-to-br from-indigo-600 to-violet-600 p-5 rounded-2xl text-white relative overflow-hidden group hidden lg:block">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={64} />
              </div>
              <p className="text-xs font-medium opacity-80 uppercase tracking-wider">Pro Membership</p>
              <h3 className="text-lg font-bold mt-1">Unlimited Power</h3>
              <button className="mt-4 w-full bg-white text-indigo-600 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors shadow-lg">
                  Upgrade Now
              </button>
          </div>

          <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Admin Mode</span>
                  <button 
                      onClick={() => setIsAdmin(!isAdmin)}
                      className={cn(
                          "w-10 h-5 rounded-full transition-colors relative",
                          isAdmin ? "bg-indigo-600" : "bg-slate-200"
                      )}
                  >
                      <div className={cn(
                          "absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform",
                          isAdmin ? "translate-x-5" : "translate-x-0"
                      )} />
                  </button>
              </div>

              <NavLink to="/help" onClick={() => onClose()} className={({ isActive }) => cn(
                  "flex items-center gap-3 px-4 py-2 rounded-2xl transition-all duration-200 group text-sm font-medium",
                  isActive 
                    ? "bg-indigo-50 text-indigo-700 font-bold" 
                    : "text-muted-foreground hover:bg-slate-50 hover:text-foreground"
              )}>
                  <HelpCircle size={20} />
                  <span>Support</span>
              </NavLink>
              <button className="flex items-center gap-3 px-4 py-2 text-red-500 hover:text-red-600 transition-colors w-full">
                  <LogOut size={20} />
                  <span className="text-sm font-medium">Log Out</span>
              </button>
          </div>

          {/* Role Switcher Widget */}
          <div className="pt-4 border-t border-slate-100">
              <button className="w-full flex items-center justify-between p-3.5 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-xl transition-all group">
                  <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl overflow-hidden ring-2 ring-indigo-600/10">
                          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander" alt="Role" className="w-full h-full object-cover" />
                      </div>
                      <div className="text-left">
                          <p className="text-[10px] font-black text-slate-800 uppercase tracking-tight">Role Switcher</p>
                          <p className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.1em] mt-0.5">Admin Level</p>
                      </div>
                  </div>
                  <ChevronDown size={14} className="text-slate-300 group-hover:text-indigo-600 transition-colors" />
              </button>
          </div>
        </div>
      </aside>
    </>
  );
}
