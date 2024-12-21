import { Card, CardContent } from '@/components/ui/card';
import { Award, Building2, ThumbsUp, Timer } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16'>
        <div>
          <h1 className='text-4xl font-bold mb-6'>Hakkımızda</h1>
          <p className='text-lg text-muted-foreground mb-6'>
            1993 yılından bu yana inşaat sektöründe faaliyet gösteren Yükselen
            İnşaat, müşteri memnuniyetini ön planda tutarak, kaliteli ve
            güvenilir projeler üretmeye devam ediyor.
          </p>
          <p className='text-lg text-muted-foreground'>
            Modern mimari anlayışı, yenilikçi çözümleri ve uzman kadrosuyla,
            sektörde öncü firmalar arasında yer almaktayız. Sürdürülebilirlik ve
            çevre dostu yaklaşımlarla, geleceğin yapılarını inşa ediyoruz.
          </p>
        </div>
        <div className='relative h-[400px]'>
          <Image
            src='https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070'
            alt='Office building'
            fill
            className='object-cover rounded-lg'
          />
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-16'>
        {[
          {
            icon: Building2,
            title: 'Vizyon',
            description:
              "Türkiye'nin önde gelen inşaat şirketlerinden biri olmak",
          },
          {
            icon: Award,
            title: 'Misyon',
            description:
              'Kaliteli ve güvenilir projeler üreterek müşteri memnuniyeti sağlamak',
          },
          {
            icon: ThumbsUp,
            title: 'Değerler',
            description: 'Dürüstlük, şeffaflık ve müşteri odaklı yaklaşım',
          },
          {
            icon: Timer,
            title: 'Tecrübe',
            description: '30 yıllık sektör deneyimi',
          },
        ].map((item, index) => (
          <Card key={index}>
            <CardContent className='flex flex-col items-center text-center p-6'>
              <item.icon className='h-12 w-12 mb-4 text-primary' />
              <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
              <p className='text-muted-foreground'>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className='bg-muted rounded-lg p-8'>
        <h2 className='text-2xl font-bold mb-6'>Neden Biz?</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <ul className='space-y-4'>
            <li className='flex items-start space-x-3'>
              <span className='text-primary'>•</span>
              <span>30 yıllık sektör deneyimi</span>
            </li>
            <li className='flex items-start space-x-3'>
              <span className='text-primary'>•</span>
              <span>Uzman ve profesyonel ekip</span>
            </li>
            <li className='flex items-start space-x-3'>
              <span className='text-primary'>•</span>
              <span>Modern mimari anlayışı</span>
            </li>
            <li className='flex items-start space-x-3'>
              <span className='text-primary'>•</span>
              <span>Yenilikçi çözümler</span>
            </li>
          </ul>
          <ul className='space-y-4'>
            <li className='flex items-start space-x-3'>
              <span className='text-primary'>•</span>
              <span>Kaliteli malzeme kullanımı</span>
            </li>
            <li className='flex items-start space-x-3'>
              <span className='text-primary'>•</span>
              <span>Zamanında teslim</span>
            </li>
            <li className='flex items-start space-x-3'>
              <span className='text-primary'>•</span>
              <span>Şeffaf iş süreçleri</span>
            </li>
            <li className='flex items-start space-x-3'>
              <span className='text-primary'>•</span>
              <span>Müşteri memnuniyeti odaklı yaklaşım</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
