import { Card, CardContent } from '@/components/ui/card';
import { Building, Building2, HardHat, Users } from 'lucide-react';
import Image from 'next/image';
import HeroCarousel from '@/components/hero-carousel';

export default function Home() {
  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Stats Section */}
      <section className='py-16 bg-muted'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            {[
              { icon: Building2, label: 'Tamamlanan Proje', value: '150+' },
              { icon: Users, label: 'Mutlu Müşteri', value: '1000+' },
              { icon: HardHat, label: 'Uzman Çalışan', value: '50+' },
              { icon: Building, label: 'Devam Eden Proje', value: '10+' },
            ].map((stat, index) => (
              <Card key={index}>
                <CardContent className='flex flex-col items-center justify-center p-6'>
                  <stat.icon className='h-12 w-12 mb-4 text-primary' />
                  <p className='text-3xl font-bold mb-2'>{stat.value}</p>
                  <p className='text-muted-foreground text-center'>
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Hizmetlerimiz</h2>
            <p className='text-muted-foreground'>
              Profesyonel ekibimizle size en iyi hizmeti sunuyoruz
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                title: 'Konut Projeleri',
                description: 'Modern ve konforlu yaşam alanları inşa ediyoruz.',
                image:
                  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973',
              },
              {
                title: 'Ticari Projeler',
                description: 'İşinizi büyütecek ticari yapılar tasarlıyoruz.',
                image:
                  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
              },
              {
                title: 'Renovasyon',
                description: 'Mevcut yapılarınızı yeniliyoruz.',
                image:
                  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071',
              },
            ].map((service, index) => (
              <Card key={index} className='overflow-hidden'>
                <div className='relative h-48'>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className='object-cover'
                  />
                </div>
                <CardContent className='p-6'>
                  <h3 className='text-xl font-semibold mb-2'>
                    {service.title}
                  </h3>
                  <p className='text-muted-foreground'>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
