import { createFileRoute } from '@tanstack/react-router';
import { ModulePage } from '@/components/altrix/modules';
export const Route = createFileRoute('/presentation')({
 head: () => ({ meta: [
  { title: 'Hackathon Presentation — Altrix Labs' },
  { name: 'description', content: 'Explore hackathon presentation in the Altrix Labs personal health copilot. Fictional demo data only.' },
  { property: 'og:title', content: 'Hackathon Presentation — Altrix Labs' },
  { property: 'og:description', content: 'Your health, thoughtfully connected. Explore the Altrix hackathon presentation demo.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: () => <ModulePage slug="presentation" />,
});
