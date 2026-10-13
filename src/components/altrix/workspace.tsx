import { Link } from '@tanstack/react-router';
import { Menu, X, Bell, ChevronDown, ArrowLeft, ShieldCheck } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { modules, type ModuleSlug } from '@/lib/altrix/data';
import { useDemo } from '@/lib/altrix/store';
import { Brand, Footer } from './common';
export function Workspace({ slug, children }: { slug: ModuleSlug; children: ReactNode }) {
 const [open, setOpen] = useState(false); const { state } = useDemo();
 const module = modules.find(m => m.slug === slug);
 return <div className="workspace">{open && <div className="menu-backdrop" onClick={() => setOpen(false)} />}
 <aside className={`sidebar ${open ? 'open' : ''}`}><div className="flex items-center justify-between"><Brand /><Button variant="ghost" size="icon" className="mobile-toggle" aria-label="Close navigation" onClick={() => setOpen(false)}><X /></Button></div><div className="sidebar-scroll">{(['workspace','account','resources'] as const).map(group => <div key={group}><div className="nav-section">{group === 'workspace' ? 'Your health' : group}</div>{modules.filter(m => m.group === group).map(m => <Link key={m.slug} to={`/${m.slug}`} onClick={() => setOpen(false)} className={`nav-link ${m.slug === slug ? 'active' : ''}`}><m.icon /><span>{m.nav}</span>{m.slug === 'assistant' && <span className="demo-chip ml-auto">DEMO</span>}</Link>)}</div>)}</div><div className="sidebar-bottom"><div className="flex items-center gap-2 text-cyan text-xs"><ShieldCheck size={16} />Your health. Your priority.</div><Link to="/" className="nav-link mt-3"><ArrowLeft />Back to home</Link></div></aside>
 <div className="workspace-main"><header className="workspace-header"><div className="flex min-w-0 items-center gap-3"><Button className="mobile-toggle shrink-0" variant="ghost" size="icon" aria-label="Open navigation" onClick={() => setOpen(true)}><Menu /></Button><h1 className="truncate">{module?.title}</h1></div><div className="header-right"><span className="demo-chip">DEMO WORKSPACE</span><Button asChild size="icon" variant="ghost" aria-label="Reminders"><Link to="/reminders"><Bell size={18} /></Link></Button><Link to="/profile" className="flex items-center gap-2"><div className="avatar">{state.profile.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div><span className="desktop-label text-xs">{state.profile.name.split(' ')[0]}</span><ChevronDown size={12} className="desktop-label text-muted-foreground" /></Link></div></header><main className="workspace-content">{children}<Footer /></main></div></div>;
}
