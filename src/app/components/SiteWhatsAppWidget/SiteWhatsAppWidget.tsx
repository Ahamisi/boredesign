'use client';

import WhatsAppWidget from '@/app/components/WhatsAppWidget';

const siteAgents = [
  {
    name: 'Oyindamola',
    title: 'Property Consultant',
    photo: '/projects/queens-court/agents/agent-1.jpg',
    whatsappUrl: 'https://wa.me/2348147321515',
  },
  {
    name: 'Sheriff',
    title: 'Property Consultant',
    photo: '/projects/queens-court/agents/agent-2.jpg',
    whatsappUrl: 'https://wa.me/2348131996661',
  },
  {
    name: 'Maryam',
    title: 'Property Consultant',
    photo: '/projects/queens-court/agents/agent-3.jpg',
    whatsappUrl: 'https://wa.me/2347083032287',
  },
  {
    name: 'Raji',
    title: 'Property Consultant',
    photo: '/projects/queens-court/agents/agent-4.jpg',
    whatsappUrl: 'https://wa.me/2348146536712',
  },
];

export default function SiteWhatsAppWidget() {
  return <WhatsAppWidget agents={siteAgents} />;
}
