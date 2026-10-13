import { createFileRoute } from '@tanstack/react-router';
import { ModulePage } from '@/components/altrix/modules';
export const Route = createFileRoute('/abha')({
 head: () => ({ meta: [
  { title: 'Mock ABHA / ABDM Integration — Altrix Labs' },
  { name: 'description', content: 'Explore mock abha / abdm integration in the Altrix Labs personal health copilot. Fictional demo data only.' },
  { property: 'og:title', content: 'Mock ABHA / ABDM Integration — Altrix Labs' },
  { property: 'og:description', content: 'Your health, thoughtfully connected. Explore the Altrix mock abha / abdm integration demo.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: () => <ModulePage slug="abha" />,
});
