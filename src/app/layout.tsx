import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ThemeProvider from '@/components/theme-provaider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yükselen İnşaat - Kaliteli ve Güvenilir Yapılar',
  description:
    '30 yıllık tecrübemizle, modern ve dayanıklı yapılar inşa ediyoruz.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='tr'>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className='min-h-screen'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
