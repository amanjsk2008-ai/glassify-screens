import { createFileRoute } from '@tanstack/react-router';
import { ModulePage } from '@/components/altrix/modules';
export const Route = createFileRoute('/assistant')({
 head: () => ({ meta: [
  { title: 'AI Health Assistant — Altrix Labs' },
  { name: 'description', content: 'Explore ai health assistant in the Altrix Labs personal health copilot. Fictional demo data only.' },
  { property: 'og:title', content: 'AI Health Assistant — Altrix Labs' },
  { property: 'og:description', content: 'Your health, thoughtfully connected. Explore the Altrix ai health assistant demo.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: () => <ModulePage slug="assistant" />,
});
