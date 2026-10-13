import { createFileRoute } from '@tanstack/react-router';
import { ModulePage } from '@/components/altrix/modules';
export const Route = createFileRoute('/extraction')({
 head: () => ({ meta: [
  { title: 'Extraction Review — Altrix Labs' },
  { name: 'description', content: 'Explore extraction review in the Altrix Labs personal health copilot. Fictional demo data only.' },
  { property: 'og:title', content: 'Extraction Review — Altrix Labs' },
  { property: 'og:description', content: 'Your health, thoughtfully connected. Explore the Altrix extraction review demo.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: () => <ModulePage slug="extraction" />,
});
