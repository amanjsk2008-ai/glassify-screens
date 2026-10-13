import { createFileRoute } from '@tanstack/react-router';
import { ModulePage } from '@/components/altrix/modules';
export const Route = createFileRoute('/prescriptions')({
 head: () => ({ meta: [
  { title: 'Prescription Reader — Altrix Labs' },
  { name: 'description', content: 'Explore prescription reader in the Altrix Labs personal health copilot. Fictional demo data only.' },
  { property: 'og:title', content: 'Prescription Reader — Altrix Labs' },
  { property: 'og:description', content: 'Your health, thoughtfully connected. Explore the Altrix prescription reader demo.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: () => <ModulePage slug="prescriptions" />,
});
