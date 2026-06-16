'use client';

import React from 'react';
import Image from 'next/image';
import { handleCtaRedirect } from '@/utils/navigation';

export default function Navbar() {
  return (
    <header
      className="absolute top-0 left-0 z-50 w-full"
      style={{
        backgroundColor: 'rgba(11, 15, 25, 0.95)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
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
              className="btn-nav"
            >
              FALAR COM UM ANALISTA
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
