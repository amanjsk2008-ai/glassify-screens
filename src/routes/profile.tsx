import { createFileRoute } from '@tanstack/react-router';
import { ModulePage } from '@/components/altrix/modules';
export const Route = createFileRoute('/profile')({
 head: () => ({ meta: [
  { title: 'Unified Health Profile — Altrix Labs' },
  { name: 'description', content: 'Explore unified health profile in the Altrix Labs personal health copilot. Fictional demo data only.' },
  { property: 'og:title', content: 'Unified Health Profile — Altrix Labs' },
  { property: 'og:description', content: 'Your health, thoughtfully connected. Explore the Altrix unified health profile demo.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: () => <ModulePage slug="profile" />,
});
