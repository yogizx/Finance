import React from 'react';
import { 
  Search, 
  Rocket, 
  ShieldCheck, 
  CreditCard, 
  Briefcase, 
  Smartphone, 
  Cpu, 
  MessageCircle, 
  Scale,
  Mail,
  Users,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  LifeBuoy
} from 'lucide-react';
import { cn } from '../lib/utils';

const categories = [
  { icon: Rocket, title: 'Getting Started', desc: 'New to Crystal Ledger? Learn the basics of asset tracking.', color: 'indigo' },
  { icon: ShieldCheck, title: 'Account & Security', desc: '2FA, password recovery, and protecting your digital obsidian.', color: 'emerald' },
  { icon: CreditCard, title: 'Payments & Billing', desc: 'Subscription plans, invoices, and transaction limits.', color: 'rose' },
  { icon: Briefcase, title: 'Portfolio Management', desc: 'Connect wallets, import CSVs, and analyze performance.', color: 'violet' },
  { icon: Smartphone, title: 'Mobile App', desc: 'Help with our iOS and Android companion applications.', color: 'slate' },
  { icon: Cpu, title: 'API & Integration', desc: 'Technical documentation for developers and partners.', color: 'amber' },
  { icon: MessageCircle, title: 'Common FAQs', desc: 'Quick answers to the most frequently asked questions.', color: 'cyan' },
  { icon: Scale, title: 'Regulatory Compliance', desc: 'Tax reporting, legal terms, and jurisdictional data.', color: 'indigo' },
];

const articles = [
  { title: 'How to secure your account with 2FA', color: 'indigo' },
  { title: 'Understanding your portfolio gains & losses', color: 'emerald' },
  { title: 'Exporting transaction history for tax filing', color: 'rose' },
  { title: 'Connecting institutional custody wallets', color: 'slate' },
];

export default function HelpCenter() {
  return (
    <div className="space-y-20 pb-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto space-y-10 pt-10">
        <h1 className="text-7xl font-black font-display tracking-tight text-slate-800 animate-fade-in leading-[1.1]">
          How can we help <span className="text-indigo-600">you</span> today?
        </h1>
        <div className="relative group max-w-2xl mx-auto transform hover:scale-[1.02] transition-all">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={24} />
          <input 
            type="text" 
            placeholder="Search help articles, guides, or keywords..." 
            className="w-full pl-16 pr-40 py-6 bg-white rounded-[2.5rem] text-lg font-medium border-2 border-slate-100 shadow-xl shadow-slate-200/50 outline-none focus:border-indigo-600/50 focus:ring-4 focus:ring-indigo-600/5 transition-all placeholder:text-slate-400"
          />
          <button className="absolute right-3 top-3 bottom-3 px-8 bg-indigo-600 text-white rounded-[1.8rem] font-bold shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-all flex items-center gap-2 group-active:scale-95">
             <span>Search</span>
             <ChevronRight size={18} />
          </button>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="space-y-12">
        <div className="flex items-end justify-between border-b pb-8 border-slate-100">
            <div>
                 <p className="text-xs font-black text-indigo-600 uppercase tracking-[0.4em] mb-4">Knowledge Base</p>
                 <h2 className="text-4xl font-black font-display tracking-tight text-slate-800">Explore Categories</h2>
            </div>
            <button className="flex items-center gap-2 text-xs font-black text-slate-500 hover:text-indigo-600 uppercase tracking-widest group">
                <span>View all resources</span>
                <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>

        <div className="grid grid-cols-4 gap-10">
            {categories.map((cat, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col group hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all">
                    <div className={cn("w-14 h-14 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-sm transition-transform group-hover:scale-110", `bg-${cat.color}-50 text-${cat.color}-600`)}>
                        <cat.icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold font-display text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors uppercase tracking-tight">{cat.title}</h3>
                    <p className="text-sm font-medium text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">{cat.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Contact & Articles Section */}
      <div className="grid grid-cols-12 gap-16">
          <section className="col-span-7 space-y-12">
             <div className="flex items-center gap-4">
                 <div className="w-1 h-8 bg-indigo-600 rounded-full" />
                 <div>
                    <p className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.5em] leading-none mb-1">Trending Now</p>
                    <h2 className="text-3xl font-black font-display tracking-tight text-slate-800">Featured Articles</h2>
                 </div>
             </div>
             <div className="space-y-4">
                 {articles.map((art, idx) => (
                     <div key={idx} className="bg-white p-4 pl-10 rounded-[2rem] border border-slate-100 flex items-center justify-between group cursor-pointer hover:border-indigo-600 shadow-sm hover:shadow-lg transition-all relative overflow-hidden">
                        <div className={cn("absolute left-0 top-0 bottom-0 w-1.5", `bg-${art.color}-500 opacity-20`)} />
                        <div className="flex items-center gap-4">
                             <div className={cn("w-2 h-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.1)]", `bg-${art.color}-500 shadow-${art.color}-400/50`)} />
                             <span className="font-bold text-slate-700 text-lg group-hover:text-indigo-600 transition-colors">{art.title}</span>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                             <ChevronRight size={18} />
                        </div>
                     </div>
                 ))}
             </div>
          </section>

          <section className="col-span-5 space-y-12">
              <div className="flex items-center gap-4">
                 <div className="w-1 h-8 bg-rose-500 rounded-full" />
                 <div>
                    <p className="text-[10px] font-black text-rose-500 uppercase tracking-[0.5em] leading-none mb-1">Need More?</p>
                    <h2 className="text-3xl font-black font-display tracking-tight text-slate-800">Direct Contact</h2>
                 </div>
             </div>
             <div className="space-y-6">
                 {[
                     { icon: MessageCircle, label: 'Live Chat', status: 'Online Now', color: 'emerald' },
                     { icon: Mail, label: 'Email Support', status: 'Response in < 2h', color: 'indigo' },
                     { icon: Users, label: 'Community Forum', status: 'Ask the community', color: 'violet' },
                 ].map((contact, idx) => (
                     <div key={idx} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 flex items-center justify-between group cursor-pointer hover:shadow-xl transition-all">
                        <div className="flex items-center gap-6">
                            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm", `bg-${contact.color}-50 text-${contact.color}-600`)}>
                                <contact.icon size={22} />
                            </div>
                            <div>
                                <p className="font-black text-slate-800 text-lg tracking-tight leading-none mb-2 uppercase tracking-tight">{contact.label}</p>
                                <p className={cn("text-[9px] font-black uppercase tracking-[0.3em]", contact.status.includes('Online') ? 'text-emerald-500' : 'text-slate-400')}>{contact.status}</p>
                            </div>
                        </div>
                        <ChevronRight size={18} className="text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                     </div>
                 ))}

                 {/* Global Status Card */}
                 <div className="bg-emerald-50/50 p-8 rounded-[3rem] border border-emerald-100 relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.4em]">Global Status</p>
                        <CheckCircle2 size={18} className="text-emerald-500 animate-pulse" />
                    </div>
                    <h4 className="text-2xl font-black font-display tracking-tight text-emerald-900/80 uppercase tracking-tight mb-2">All Systems Operational</h4>
                    <p className="text-[10px] text-emerald-700/60 font-bold leading-relaxed uppercase tracking-widest">Last updated 4 minutes ago. No incidents reported in the last 24h.</p>
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                         <LifeBuoy size={160} className="text-emerald-900" />
                    </div>
                 </div>
             </div>
          </section>
      </div>

      {/* Footer Branding */}
      <footer className="pt-20 border-t border-slate-100 flex items-center justify-between opacity-40 hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                  <LifeBuoy size={18} className="fill-current" />
              </div>
              <p className="font-display font-black text-sm uppercase tracking-[0.3em]">Crystal Ledger</p>
          </div>
          <div className="flex gap-10">
              {['Privacy Policy', 'Terms of Service', 'API Status'].map((f) => (
                  <button key={f} className="text-[10px] font-black uppercase tracking-[0.4em] hover:text-indigo-600 transition-colors">{f}</button>
              ))}
          </div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Ver. 2.4.9-Crystal_Light</p>
      </footer>
    </div>
  );
}
