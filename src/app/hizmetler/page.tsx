'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building2, Home, Building, Wrench, Ruler } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    id: 'konut',
    icon: Home,
    title: 'Konut Projeleri',
    description: 'Modern ve konforlu yaşam alanları inşa ediyoruz.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973',
    details: [
      'Lüks Konutlar',
      'Toplu Konut Projeleri',
      'Villa Projeleri',
      'Akıllı Ev Sistemleri',
      'Özel Tasarım İç Mekanlar',
    ],
  },
  {
    id: 'ticari',
    icon: Building2,
    title: 'Ticari Projeler',
    description: 'İşinizi büyütecek ticari yapılar tasarlıyoruz.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
    details: [
      'İş Merkezleri',
      'Ofis Binaları',
      'Alışveriş Merkezleri',
      'Otel Projeleri',
      'Endüstriyel Tesisler',
    ],
  },
  {
    id: 'renovasyon',
    icon: Wrench,
    title: 'Renovasyon',
    description: 'Mevcut yapılarınızı yeniliyoruz.',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071',
    details: [
      'Bina Güçlendirme',
      'İç Mekan Yenileme',
      'Dış Cephe Yenileme',
      'Restorasyon',
      'Tadilat İşleri',
    ],
  },
  {
    id: 'mimari',
    icon: Ruler,
    title: 'Mimari Tasarım',
    description: 'Hayallerinizdeki mekanları tasarlıyoruz.',
    image:
      'https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=2071',
    details: [
      'Konsept Tasarım',
      '3D Modelleme',
      'İç Mimari',
      'Peyzaj Tasarımı',
      'Teknik Çizimler',
    ],
  },
  {
    id: 'danismanlik',
    icon: Building,
    title: 'Proje Danışmanlığı',
    description: 'Uzman ekibimizle yanınızdayız.',
    image:
      'https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=2070',
    details: [
      'Fizibilite Çalışmaları',
      'Proje Yönetimi',
      'Maliyet Analizi',
      'Yasal Danışmanlık',
      'Teknik Danışmanlık',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold mb-4'>Hizmetlerimiz</h1>
        <p className='text-lg text-muted-foreground'>
          Profesyonel ekibimizle size en iyi hizmeti sunuyoruz
        </p>
      </div>

      <Tabs defaultValue='konut' className='w-full'>
        <TabsList className='flex flex-wrap justify-center gap-2 mb-8'>
          {services.map((service) => (
            <TabsTrigger
              key={service.id}
              value={service.id}
              className='flex items-center gap-2'
            >
              <service.icon className='h-4 w-4' />
              {service.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {services.map((service) => (
          <TabsContent key={service.id} value={service.id}>
            <Card>
              <CardContent className='p-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  <div className='relative h-[300px] md:h-full rounded-lg overflow-hidden'>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className='object-cover'
                    />
                  </div>
                  <div>
                    <h2 className='text-2xl font-semibold mb-4'>
                      {service.title}
                    </h2>
                    <p className='text-muted-foreground mb-6'>
                      {service.description}
                    </p>
                    <h3 className='font-semibold mb-4'>
                      Sunduğumuz Hizmetler:
                    </h3>
                    <ul className='space-y-2'>
                      {service.details.map((detail, index) => (
                        <li key={index} className='flex items-center gap-2'>
                          <div className='h-1.5 w-1.5 rounded-full bg-primary' />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
