'use client';

import WhatsAppWidget from '@/app/components/WhatsAppWidget';

const siteAgents = [
  {
    name: 'Oyindamola',
    title: 'Property Consultant',
    photo: '/projects/queens-court/agents/agent-1.jpg',
    // whatsappUrl: 'https://wa.me/2348147321515',
    whatsappUrl: 'https://wa.me/2348147321515?text=Hello%2C%20I%20visited%20your%20website%20and%20I%20would%20like%20to%E2%80%A6',
  },
  {
    name: 'Sheriff',
    title: 'Property Consultant',
    photo: '/projects/queens-court/agents/agent-2.jpg',
    // whatsappUrl: 'https://wa.me/2348131996661',
    whatsappUrl: 'https://wa.me/2348131996661?text=Hello%2C%20I%20visited%20your%20website%20and%20I%20would%20like%20to%E2%80%A6',

  },
  {
    name: 'Maryam',
    title: 'Property Consultant',
    photo: '/projects/queens-court/agents/agent-3.jpg',
    // whatsappUrl: 'https://wa.me/2347083032287',
    whatsappUrl: 'https://wa.me/2347083032287?text=Hello%2C%20I%20visited%20your%20website%20and%20I%20would%20like%20to%E2%80%A6',

  },
  {
    name: 'Raji',
    title: 'Property Consultant',
    photo: '/projects/queens-court/agents/agent-4.jpg',
    // whatsappUrl: 'https://wa.me/2348146536712',
    whatsappUrl: 'https://wa.me/2348146536712?text=Hello%2C%20I%20visited%20your%20website%20and%20I%20would%20like%20to%E2%80%A6',
  },
];

export default function SiteWhatsAppWidget() {
  return <WhatsAppWidget agents={siteAgents} />;
}
