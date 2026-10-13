import { createFileRoute } from '@tanstack/react-router';
import { ModulePage } from '@/components/altrix/modules';
export const Route = createFileRoute('/visit')({
 head: () => ({ meta: [
  { title: 'Doctor Visit Preparation — Altrix Labs' },
  { name: 'description', content: 'Explore doctor visit preparation in the Altrix Labs personal health copilot. Fictional demo data only.' },
  { property: 'og:title', content: 'Doctor Visit Preparation — Altrix Labs' },
  { property: 'og:description', content: 'Your health, thoughtfully connected. Explore the Altrix doctor visit preparation demo.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: () => <ModulePage slug="visit" />,
});
