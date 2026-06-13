'use client';

import React from 'react';
import Image from 'next/image';
import { handleCtaRedirect } from '@/utils/navigation';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-navy-base/90 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Image
              src="/logo-v3.png"
              alt="Tech Hive Logo"
              width={140}
              height={42}
              className="h-11 w-auto object-contain"
              style={{ height: 'auto' }}
              priority
            />
          </div>

          {/* CTA Header */}
          <div className="flex items-center">
            <button
              onClick={() => handleCtaRedirect('navbar_cta')}
              className="inline-flex items-center justify-center rounded-lg bg-brand-blue px-5 py-2.5 text-xs font-bold tracking-wider text-white shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-300 hover:bg-brand-blue-hover hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] focus:outline-none focus:ring-2 focus:ring-brand-blue cursor-pointer"
            >
              FALAR COM ENGENHEIRO
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
