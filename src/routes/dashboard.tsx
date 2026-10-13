import { createFileRoute } from '@tanstack/react-router';
import { ModulePage } from '@/components/altrix/modules';
export const Route = createFileRoute('/dashboard')({
 head: () => ({ meta: [
  { title: 'Health Dashboard — Altrix Labs' },
  { name: 'description', content: 'Explore health dashboard in the Altrix Labs personal health copilot. Fictional demo data only.' },
  { property: 'og:title', content: 'Health Dashboard — Altrix Labs' },
  { property: 'og:description', content: 'Your health, thoughtfully connected. Explore the Altrix health dashboard demo.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: () => <ModulePage slug="dashboard" />,
});
