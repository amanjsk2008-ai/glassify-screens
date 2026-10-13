import { createFileRoute } from '@tanstack/react-router';
import { ModulePage } from '@/components/altrix/modules';
export const Route = createFileRoute('/reports')({
 head: () => ({ meta: [
  { title: 'AI Report Analysis — Altrix Labs' },
  { name: 'description', content: 'Explore ai report analysis in the Altrix Labs personal health copilot. Fictional demo data only.' },
  { property: 'og:title', content: 'AI Report Analysis — Altrix Labs' },
  { property: 'og:description', content: 'Your health, thoughtfully connected. Explore the Altrix ai report analysis demo.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: () => <ModulePage slug="reports" />,
});
