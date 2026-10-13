import { createFileRoute } from '@tanstack/react-router';
import { ModulePage } from '@/components/altrix/modules';
export const Route = createFileRoute('/architecture')({
 head: () => ({ meta: [
  { title: 'System Architecture — Altrix Labs' },
  { name: 'description', content: 'Explore system architecture in the Altrix Labs personal health copilot. Fictional demo data only.' },
  { property: 'og:title', content: 'System Architecture — Altrix Labs' },
  { property: 'og:description', content: 'Your health, thoughtfully connected. Explore the Altrix system architecture demo.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: () => <ModulePage slug="architecture" />,
});
