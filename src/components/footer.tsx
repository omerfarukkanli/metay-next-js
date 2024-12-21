import { Building2, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-background border-t'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <div className='flex items-center space-x-2'>
              <Building2 className='h-6 w-6' />
              <span className='font-bold text-lg'>Yükselen İnşaat</span>
            </div>
            <p className='mt-2 text-sm text-muted-foreground'>
              30 yıllık tecrübemizle, modern ve dayanıklı yapılar inşa ediyoruz.
            </p>
          </div>

          <div>
            <h3 className='font-semibold mb-4'>Hızlı Erişim</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/hakkimizda'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href='/projeler'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  Projeler
                </Link>
              </li>
              <li>
                <Link
                  href='/hizmetler'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link
                  href='/iletisim'
                  className='text-sm text-muted-foreground hover:text-primary'
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold mb-4'>İletişim</h3>
            <ul className='space-y-2'>
              <li className='flex items-center space-x-2 text-sm text-muted-foreground'>
                <MapPin className='h-4 w-4' />
                <span>Atatürk Cad. No:123 Ankara</span>
              </li>
              <li className='flex items-center space-x-2 text-sm text-muted-foreground'>
                <Phone className='h-4 w-4' />
                <span>+90 (312) 123 45 67</span>
              </li>
              <li className='flex items-center space-x-2 text-sm text-muted-foreground'>
                <Mail className='h-4 w-4' />
                <span>info@yukseleninsaat.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold mb-4'>Çalışma Saatleri</h3>
            <ul className='space-y-2'>
              <li className='text-sm text-muted-foreground'>
                Pazartesi - Cuma: 09:00 - 18:00
              </li>
              <li className='text-sm text-muted-foreground'>
                Cumartesi: 09:00 - 14:00
              </li>
              <li className='text-sm text-muted-foreground'>Pazar: Kapalı</li>
            </ul>
          </div>
        </div>

        <div className='mt-8 pt-8 border-t'>
          <p className='text-center text-sm text-muted-foreground'>
            © {new Date().getFullYear()} Yükselen İnşaat. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
