import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const projects = [
  {
    title: 'Modern Yaşam Rezidans',
    location: 'Ankara',
    status: 'Tamamlandı',
    description: '200 daireli modern rezidans projesi',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070',
    features: ['200 Daire', 'Kapalı Otopark', 'Sosyal Alanlar', 'Spor Salonu'],
  },
  {
    title: 'İş Merkezi',
    location: 'İstanbul',
    status: 'Devam Ediyor',
    description: 'A+ ofis projesi',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
    features: ['50 Ofis', 'Konferans Salonu', 'Restoran', '24/7 Güvenlik'],
  },
  {
    title: 'Yeşil Vadi Konutları',
    location: 'İzmir',
    status: 'Tamamlandı',
    description: 'Doğayla iç içe yaşam projesi',
    image:
      'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067',
    features: ['150 Villa', 'Yüzme Havuzu', 'Yeşil Alanlar', 'Güvenlik'],
  },
  {
    title: 'Sahil Residences',
    location: 'Antalya',
    status: 'Tamamlandı',
    description: 'Deniz manzaralı lüks konut projesi',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070',
    features: ['100 Daire', 'Özel Plaj', 'SPA', 'Restoran'],
  },
];

export default function ProjectsPage() {
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold mb-4'>Projelerimiz</h1>
        <p className='text-lg text-muted-foreground'>
          Tamamlanan ve devam eden prestijli projelerimiz
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {projects.map((project, index) => (
          <Card key={index} className='overflow-hidden'>
            <div className='relative h-64'>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className='object-cover'
              />
            </div>
            <CardContent className='p-6'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h2 className='text-2xl font-semibold mb-2'>
                    {project.title}
                  </h2>
                  <p className='text-muted-foreground'>{project.location}</p>
                </div>
                <Badge
                  variant={
                    project.status === 'Tamamlandı' ? 'default' : 'secondary'
                  }
                >
                  {project.status}
                </Badge>
              </div>
              <p className='mb-4'>{project.description}</p>
              <div className='flex flex-wrap gap-2'>
                {project.features.map((feature, featureIndex) => (
                  <Badge key={featureIndex} variant='outline'>
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
