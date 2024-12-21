'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070',
    title: 'Geleceğin Yapılarını İnşa Ediyoruz',
    description:
      '30 yıllık tecrübemizle, modern ve dayanıklı yapılar inşa ediyor, hayallerinizi gerçeğe dönüştürüyoruz.',
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
    title: 'Modern Mimari, Üstün Kalite',
    description:
      'Yenilikçi tasarımlar ve kaliteli malzemelerle, yaşam alanlarınızı değerli kılıyoruz.',
  },
  {
    url: 'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067',
    title: 'Sürdürülebilir Projeler',
    description:
      'Çevre dostu yaklaşımımızla, gelecek nesillere yaşanabilir alanlar bırakıyoruz.',
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className='relative h-[600px]'>
      {images.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.url}
            alt='Modern building'
            fill
            className='object-cover'
            priority={index === 0}
          />
          <div className='absolute inset-0 bg-black/50' />
          <div className='relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center'>
            <div className='max-w-2xl text-white'>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                {image.title}
              </h1>
              <p className='text-lg mb-8'>{image.description}</p>
              <div className='space-x-4'>
                <Button asChild size='lg'>
                  <Link href='/projeler'>Projelerimiz</Link>
                </Button>
                <Button asChild variant='outline' size='lg'>
                  <Link href='/iletisim'>İletişime Geçin</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
