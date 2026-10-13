import { createFileRoute } from '@tanstack/react-router';
import { ModulePage } from '@/components/altrix/modules';
export const Route = createFileRoute('/insights')({
 head: () => ({ meta: [
  { title: 'Health Insights & Charts — Altrix Labs' },
  { name: 'description', content: 'Explore health insights & charts in the Altrix Labs personal health copilot. Fictional demo data only.' },
  { property: 'og:title', content: 'Health Insights & Charts — Altrix Labs' },
  { property: 'og:description', content: 'Your health, thoughtfully connected. Explore the Altrix health insights & charts demo.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: () => <ModulePage slug="insights" />,
});
