import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { demoMetrics, demoRecords, initialAppointments, initialProfile, initialReminders } from './data';
type DemoState = { profile: typeof initialProfile; reminders: typeof initialReminders; appointments: typeof initialAppointments; records: typeof demoRecords; metrics: typeof demoMetrics; settings: { notifications: boolean; consent: boolean; language: string } };
const defaults: DemoState = { profile: initialProfile, reminders: initialReminders, appointments: initialAppointments, records: demoRecords, metrics: demoMetrics, settings: { notifications: true, consent: false, language: 'English' } };
const DemoContext = createContext<{ state: DemoState; update: (patch: Partial<DemoState>) => void; reset: () => void } | null>(null);
export function DemoProvider({ children }: { children: ReactNode }) {
 const [state, setState] = useState<DemoState>(defaults);
 const [ready, setReady] = useState(false);
 useEffect(() => { try { const value = localStorage.getItem('altrix-demo-v1'); if (value) setState({ ...defaults, ...JSON.parse(value) }); } catch { /* Invalid demo state falls back to defaults. */ } setReady(true); }, []);
 useEffect(() => { if (ready) localStorage.setItem('altrix-demo-v1', JSON.stringify(state)); }, [state, ready]);
 return <DemoContext.Provider value={{ state, update: patch => setState(prev => ({ ...prev, ...patch })), reset: () => setState(defaults) }}>{children}</DemoContext.Provider>;
}
export function useDemo() { const ctx = useContext(DemoContext); if (!ctx) throw new Error('DemoProvider is required'); return ctx; }
