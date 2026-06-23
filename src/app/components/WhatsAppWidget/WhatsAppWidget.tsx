'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export interface WhatsAppAgent {
  name: string;
  title: string;
  photo: string;
  whatsappUrl: string;
  isOnline?: boolean;
}

interface WhatsAppWidgetProps {
  agents: WhatsAppAgent[];
  greeting?: string;
  subtitle?: string;
}

const WhatsAppIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({
  agents,
  greeting = 'Hi! Click one of our members below to chat on WhatsApp',
  subtitle = 'The team typically replies in a few minutes.',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 pointer-events-none">
      {/* Agent list popup */}
      {isOpen && (
        <div className="w-[340px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto">
          {/* Header */}
          <div className="bg-[#25D366] px-5 py-4 text-white">
            <p className="font-semibold text-base">Start a Conversation</p>
            <p className="text-sm text-white/90 mt-1">{greeting}</p>
            <p className="text-xs text-white/75 mt-1">{subtitle}</p>
          </div>

          {/* Agent cards */}
          <div className="max-h-[360px] overflow-y-auto">
            {agents.map((agent) => (
              <a
                key={agent.whatsappUrl}
                href={agent.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 group ${
                  agent.isOnline !== false ? 'border-l-[3px] border-l-[#25D366]' : ''
                }`}
              >
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-gray-100">
                  <Image
                    src={agent.photo}
                    alt={agent.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 text-sm truncate">{agent.name}</p>
                  <p className="text-xs text-gray-500 truncate">{agent.title}</p>
                </div>

                <div
                  className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                    agent.isOnline !== false
                      ? 'bg-[#25D366] text-white group-hover:bg-[#20bd5a]'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Floating button row */}
      <div className="flex items-center gap-3 pointer-events-auto">
        {!isOpen && (
          <div className="bg-white text-gray-800 text-sm px-4 py-2.5 rounded-full shadow-lg whitespace-nowrap">
            Need Help? <span className="font-bold">Chat with us</span>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close WhatsApp chat menu' : 'Open WhatsApp chat menu'}
          className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 ${
            isOpen ? 'bg-[#25D366] rotate-0' : 'bg-[#25D366] hover:bg-[#20bd5a]'
          }`}
        >
          {isOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <WhatsAppIcon className="w-7 h-7 text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default WhatsAppWidget;
