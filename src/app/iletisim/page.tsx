'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log(formData);
    alert('Mesajınız alınmıştır. En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold mb-4'>İletişim</h1>
        <p className='text-lg text-muted-foreground'>
          Sorularınız için bize ulaşın
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
        {[
          {
            icon: MapPin,
            title: 'Adres',
            content: 'Atatürk Cad. No:123\nÇankaya/Ankara',
          },
          {
            icon: Phone,
            title: 'Telefon',
            content: '+90 (312) 123 45 67\n+90 (312) 123 45 68',
          },
          {
            icon: Mail,
            title: 'E-posta',
            content: 'info@yukseleninsaat.com\nsatis@yukseleninsaat.com',
          },
        ].map((item, index) => (
          <Card key={index}>
            <CardContent className='flex flex-col items-center text-center p-6'>
              <item.icon className='h-12 w-12 mb-4 text-primary' />
              <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
              <p className='text-muted-foreground whitespace-pre-line'>
                {item.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Card>
          <CardContent className='p-6'>
            <h2 className='text-2xl font-semibold mb-6'>İletişim Formu</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Ad Soyad</Label>
                <Input
                  id='name'
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='email'>E-posta</Label>
                <Input
                  id='email'
                  type='email'
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='phone'>Telefon</Label>
                <Input
                  id='phone'
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='message'>Mesaj</Label>
                <Textarea
                  id='message'
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <Button type='submit' className='w-full'>
                Gönder
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className='h-[500px] relative'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.4799509661654!2d32.8663!3d39.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU1JzAwLjEiTiAzMsKwNTEnNTguNyJF!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str'
            className='absolute inset-0 w-full h-full rounded-lg'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
          />
        </div>
      </div>
    </div>
  );
}
