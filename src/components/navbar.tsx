'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Building2, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/projeler', label: 'Projeler' },
    { href: '/hizmetler', label: 'Hizmetler' },
    { href: '/iletisim', label: 'İletişim' },
  ];

  return (
    <nav className='bg-background border-b'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <Link href='/' className='flex items-center space-x-2'>
            <Building2 className='h-8 w-8' />
            <span className='font-bold text-xl'>Yükselen İnşaat</span>
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex space-x-4'>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium'
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium'
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
