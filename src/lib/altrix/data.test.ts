import { describe, expect, it } from 'vitest';
import { assistantReply, demoRecords, makeVisitSummary, modules } from './data';
describe('Altrix demo safeguards', () => {
 it('provides all 14 workspace modules in addition to the landing page', () => { expect(modules).toHaveLength(14); expect(new Set(modules.map(m=>m.slug)).size).toBe(14); });
 it('keeps sample records explicitly fictional', () => { expect(demoRecords).toHaveLength(4); expect(makeVisitSummary('Sample','Notes')).toContain('(fictional profile)'); });
 it('does not prescribe medicine doses', () => { expect(assistantReply('What dose of amoxicillin should I take?')).toContain('cannot check interactions or recommend a dose'); });
 it('directs urgent symptoms to emergency services', () => { expect(assistantReply('I have chest pain')).toContain('contact your local emergency service now'); });
 it('identifies report explanations as fictional', () => { expect(assistantReply('What is Vitamin D?')).toContain('fictional sample report'); });
});
