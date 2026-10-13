import { createFileRoute } from '@tanstack/react-router';
import { ModulePage } from '@/components/altrix/modules';
export const Route = createFileRoute('/settings')({
 head: () => ({ meta: [
  { title: 'Privacy, Safety & Settings — Altrix Labs' },
  { name: 'description', content: 'Explore privacy, safety & settings in the Altrix Labs personal health copilot. Fictional demo data only.' },
  { property: 'og:title', content: 'Privacy, Safety & Settings — Altrix Labs' },
  { property: 'og:description', content: 'Your health, thoughtfully connected. Explore the Altrix privacy, safety & settings demo.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: () => <ModulePage slug="settings" />,
});
