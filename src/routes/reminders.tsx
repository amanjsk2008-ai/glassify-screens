import { createFileRoute } from '@tanstack/react-router';
import { ModulePage } from '@/components/altrix/modules';
export const Route = createFileRoute('/reminders')({
 head: () => ({ meta: [
  { title: 'Reminders & Appointments — Altrix Labs' },
  { name: 'description', content: 'Explore reminders & appointments in the Altrix Labs personal health copilot. Fictional demo data only.' },
  { property: 'og:title', content: 'Reminders & Appointments — Altrix Labs' },
  { property: 'og:description', content: 'Your health, thoughtfully connected. Explore the Altrix reminders & appointments demo.' },
  { property: 'og:type', content: 'website' },
  { name: 'twitter:card', content: 'summary_large_image' },
 ] }),
 component: () => <ModulePage slug="reminders" />,
});
