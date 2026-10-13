import { createFileRoute } from '@tanstack/react-router';
import { ModulePage } from '@/components/altrix/modules';
export const Route = createFileRoute('/records')({
 head: () => ({ meta: [
  { title: 'Health Records & Timeline — Altrix Labs' },
  { name: 'description', content: 'Explore health records & timeline in the Altrix Labs personal health copilot. Fictional demo data only.' },
  { property: 'og:title', content: 'Health Records & Timeline — Altrix Labs' },
  { property: 'og:description', content: 'Your health, thoughtfully connected. Explore the Altrix health records & timeline demo.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: () => <ModulePage slug="records" />,
});
