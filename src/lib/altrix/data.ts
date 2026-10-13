import { Activity, Bell, Bot, CalendarHeart, ChartNoAxesCombined, ClipboardCheck, FileCheck2, FileHeart, Fingerprint, HeartPulse, LayoutDashboard, Layers3, Presentation, ScanLine, Settings2, UserRound } from 'lucide-react';
export const modules = [
 { slug: 'dashboard', title: 'Health Dashboard', nav: 'Dashboard', icon: LayoutDashboard, group: 'workspace' },
 { slug: 'reports', title: 'AI Report Analysis', nav: 'Report Analysis', icon: FileHeart, group: 'workspace' },
 { slug: 'prescriptions', title: 'Prescription Reader', nav: 'Prescriptions', icon: ScanLine, group: 'workspace' },
 { slug: 'assistant', title: 'AI Health Assistant', nav: 'AI Assistant', icon: Bot, group: 'workspace' },
 { slug: 'records', title: 'Health Records & Timeline', nav: 'Health Records', icon: CalendarHeart, group: 'workspace' },
 { slug: 'insights', title: 'Health Insights & Charts', nav: 'Health Insights', icon: ChartNoAxesCombined, group: 'workspace' },
 { slug: 'visit', title: 'Doctor Visit Preparation', nav: 'Doctor Visit', icon: ClipboardCheck, group: 'workspace' },
 { slug: 'reminders', title: 'Reminders & Appointments', nav: 'Reminders', icon: Bell, group: 'workspace' },
 { slug: 'profile', title: 'Unified Health Profile', nav: 'My Profile', icon: UserRound, group: 'account' },
 { slug: 'abha', title: 'ABHA / ABDM Integration', nav: 'ABHA Connect', icon: Fingerprint, group: 'account' },
 { slug: 'architecture', title: 'System Architecture', nav: 'Architecture', icon: Layers3, group: 'resources' },
 { slug: 'extraction', title: 'Extraction Review', nav: 'Extraction Review', icon: FileCheck2, group: 'resources' },
 { slug: 'presentation', title: 'Hackathon Presentation', nav: 'Presentation', icon: Presentation, group: 'resources' },
 { slug: 'settings', title: 'Privacy, Safety & Settings', nav: 'Settings', icon: Settings2, group: 'account' },
] as const;
export type ModuleSlug = typeof modules[number]['slug'];
export const demoRecords = [
 { id: 'r1', name: 'Blood Test Report', category: 'Lab report', date: '2026-10-12', doctor: 'Dr. Priya Sharma', note: 'Hemoglobin, Vitamin D, glucose', tone: 'violet' },
 { id: 'r2', name: 'Chest X-Ray', category: 'Imaging', date: '2026-10-08', doctor: 'Dr. Arjun Mehta', note: 'Chest · Lungs', tone: 'blue' },
 { id: 'r3', name: 'Prescription', category: 'Prescription', date: '2026-10-05', doctor: 'Dr. Priya Sharma', note: 'Paracetamol · Amoxicillin', tone: 'pink' },
 { id: 'r4', name: 'Doctor Consultation', category: 'Consultation', date: '2026-09-28', doctor: 'Dr. Priya Sharma', note: 'Routine health check-up', tone: 'cyan' },
];
export const demoMetrics = [
 { name: 'Hemoglobin', value: '11.2', unit: 'g/dL', range: '13–17', status: 'Low', tone: 'pink' },
 { name: 'Vitamin D', value: '18', unit: 'ng/mL', range: '30–100', status: 'Low', tone: 'amber' },
 { name: 'WBC Count', value: '7,800', unit: '/µL', range: '4,000–11,000', status: 'Normal', tone: 'cyan' },
 { name: 'Platelets', value: '2.4', unit: 'lakh/µL', range: '1.5–4.5', status: 'Normal', tone: 'cyan' },
 { name: 'Fasting Glucose', value: '98', unit: 'mg/dL', range: '70–99', status: 'Normal', tone: 'cyan' },
];
export const trendData = [
 { month: 'May', vitamin: 12, hemoglobin: 10.2, glucose: 92 },
 { month: 'Jun', vitamin: 22, hemoglobin: 10.8, glucose: 97 },
 { month: 'Jul', vitamin: 18, hemoglobin: 10.6, glucose: 94 },
 { month: 'Aug', vitamin: 24, hemoglobin: 11, glucose: 96 },
 { month: 'Sep', vitamin: 19, hemoglobin: 11.4, glucose: 95 },
 { month: 'Oct', vitamin: 18, hemoglobin: 11.2, glucose: 98 },
];
export const initialReminders = [
 { id: 'm1', name: 'Paracetamol 500 mg', time: '08:00', type: 'Medication', done: false },
 { id: 'm2', name: 'Amoxicillin 500 mg', time: '13:00', type: 'Medication', done: false },
 { id: 'm3', name: 'Vitamin D3 60K', time: '20:00', type: 'Medication', done: false },
];
export const initialProfile = { name: 'Aman Yadav', age: '22', gender: 'Male', blood: 'B+', weight: '78', height: '180', allergies: 'None reported', conditions: 'None reported' };
export const initialAppointments = [{ id: 'a1', name: 'Dr. Priya Sharma', date: '2026-10-22', time: '10:00', type: 'General check-up' }, { id: 'a2', name: 'Blood test', date: '2026-10-25', time: '09:00', type: 'Lab appointment' }];
export function assistantReply(message: string) {
 const text = message.toLowerCase();
 if (/emergency|chest pain|breath|suicid/.test(text)) return 'If you have chest pain, trouble breathing, or are in immediate danger, contact your local emergency service now. Do not wait for a chat response.';
 if (/vitamin|\bd\b/.test(text)) return 'In the fictional sample report, Vitamin D is 18 ng/mL, below its listed 30–100 reference range. Ask a clinician whether further testing or supplementation is appropriate. This scripted demo cannot recommend a dose.';
 if (/hemoglobin|blood|tired|fatigue/.test(text)) return 'The fictional sample hemoglobin is 11.2 g/dL, below the sample reference range. Many things can contribute to fatigue; this demo cannot diagnose the cause. Bring your report and symptoms to a qualified clinician.';
 if (/medicine|medication|dose|amoxicillin|paracetamol/.test(text)) return 'Follow the instructions on your actual prescription and speak with a pharmacist or clinician before changing any medicine. This demo cannot check interactions or recommend a dose.';
 return 'I can explain the fictional sample report, organize your questions, and help prepare a doctor-visit summary. What would you like to discuss: Vitamin D, hemoglobin, or your next appointment? This is a scripted demo, not medical advice.';
}
export function makeVisitSummary(name: string, notes: string) {
 return `ALTRIX LABS — DEMO VISIT SUMMARY\nPatient: ${name} (fictional profile)\n\nSample findings:\nVitamin D: 18 ng/mL — low in sample\nHemoglobin: 11.2 g/dL — low in sample\nGlucose: 98 mg/dL\n\nQuestions:\nWhat could explain my fatigue?\nShould these sample findings be rechecked?\n\nPatient notes:\n${notes}\n\nThis fictional summary is not a diagnosis or medical advice.`;
}
export { Activity, HeartPulse };
