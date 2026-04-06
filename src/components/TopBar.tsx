import { Search, Bell, Menu, HelpCircle } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export function TopBar({ onMenuOpen }: { onMenuOpen: () => void }) {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b sticky top-0 z-40 flex items-center justify-between px-6 lg:px-10">
      <div className="flex items-center gap-4 lg:hidden">
        <button 
          onClick={onMenuOpen}
          className="p-2 text-muted-foreground hover:bg-slate-100 rounded-xl transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>

      <div className="flex-1 max-w-xl mx-4 lg:mx-0">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-indigo-600 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search transactions..." 
            className="w-full pl-10 lg:pl-12 pr-4 py-2.5 lg:py-3 bg-slate-100 rounded-2xl text-xs lg:text-sm border-none ring-0 focus:ring-2 focus:ring-indigo-600 outline-none transition-all placeholder:text-muted-foreground/60 shadow-inner"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 lg:gap-6 ml-4">
        <button className="relative p-2.5 bg-slate-100 rounded-xl text-muted-foreground hover:bg-slate-200 transition-colors lg:rounded-2xl">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
        </button>

        <Link to="/help" className="relative p-2.5 bg-slate-100 rounded-xl text-muted-foreground hover:bg-slate-200 transition-colors lg:rounded-2xl">
          <HelpCircle size={20} />
        </Link>

        <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-xl lg:rounded-2xl overflow-hidden bg-slate-200 ring-4 ring-indigo-600/5 shadow-sm">
                <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                />
            </div>
        </button>
      </div>
    </header>
  );
}
