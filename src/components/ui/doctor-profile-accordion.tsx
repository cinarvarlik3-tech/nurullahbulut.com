'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Link from 'next/link'

const doctorProfileSections = [
  {
    id: 'egitim',
    title: 'Eğitim ve Akademik Kariyer',
    content: (
      <div className="space-y-5 text-foreground/90 text-lg">
        <p>
          Doç. Dr. Nurullah Bulut, 2008 yılında Atatürk Üniversitesi Tıp Fakültesi&apos;nden mezun olmuştur. Mezuniyetinin ardından uzmanlık eğitimini Kartal Dr. Lütfi Kırdar Şehir Hastanesi Göz Kliniği&apos;nde tamamlamış ve 2013 yılına kadar bu kurumda görev yapmıştır. Bu süreçte özellikle retina hastalıkları, katarakt cerrahisi ve göz travmaları alanlarında yoğun klinik deneyim kazanmış; ileri düzey cerrahi uygulamalar konusunda uzmanlaşmıştır.
        </p>
        <p>
          2017 yılında Sağlık Bilimleri Üniversitesi&apos;nde akademik kariyerine başlamış, yardımcı doçent olarak görev almıştır. Akademik çalışmalarını sürdürürken aynı zamanda modern göz cerrahisi teknikleri üzerine klinik pratiğini geliştirmiş; retina ve katarakt alanındaki uzmanlığını hem akademik hem de cerrahi düzeyde derinleştirmiştir.
        </p>
        <p>
          2022 yılından itibaren Sağlık Bilimleri Üniversitesi&apos;nde Doçent Doktor unvanıyla görevini sürdürmektedir.
        </p>
        <p>
          2023–2025 yılları arasında Memorial Bahçelievler Hastanesi&apos;nde doçent doktor olarak görev yapmış olup, 2025 yılı itibarıyla Memorial Göztepe Hastanesi&apos;nde hastalarına hizmet vermektedir. Retina hastalıkları tanı ve tedavisi, katarakt cerrahisi ve göz travmaları başta olmak üzere kapsamlı göz sağlığı hizmetleri sunmaktadır.
        </p>
      </div>
    ),
  },
  {
    id: 'uzmanlik',
    title: 'Uzmanlık Alanları',
    content: (
      <div className="space-y-5 text-foreground/90 text-lg">
        <p className="mb-5">
          Doç. Dr. Nurullah Bulut aşağıdaki alanlarda tanı ve tedavi hizmeti sunmaktadır:
        </p>
        <ul className="list-disc list-inside space-y-3">
          <li>Retina hastalıkları ve retina cerrahisi</li>
          <li>Katarakt ve katarakt cerrahisi</li>
          <li>Göz travmaları</li>
          <li>LASIK ve excimer lazer tedavileri</li>
          <li>Lazer göz ameliyatı değerlendirme ve takip süreçleri</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'tedavi',
    title: 'Tedavi Yaklaşımı',
    content: (
      <div className="space-y-5 text-foreground/90 text-lg">
        <p>
          Doç. Dr. Nurullah Bulut, her hastayı ayrı bir vaka olarak değerlendirerek{' '}
          <strong>kişiye özel tedavi planları</strong> oluşturmayı benimser. Güncel tanı yöntemleri ve modern cerrahi teknikler kullanarak, hastalarının hem güvenli hem de konforlu bir tedavi süreci geçirmesini hedefler.
        </p>
        <p>
          Tedavi sürecinde hasta bilgilendirmesine ve şeffaf iletişime büyük önem vermektedir.
        </p>
      </div>
    ),
  },
  {
    id: 'akademik',
    title: 'Akademik ve Klinik Deneyim',
    content: (
      <p className="text-foreground/90 text-lg">
        Akademik çalışmaları ve klinik tecrübesi sayesinde Doç. Dr. Nurullah Bulut, göz hastalıkları alanındaki bilimsel gelişmeleri yakından takip etmekte ve bu bilgileri günlük pratiğe entegre etmektedir. Özellikle{' '}
        <strong>retina hastalıkları</strong>, <strong>katarakt cerrahisi</strong> ve{' '}
        <strong>lazer göz tedavileri</strong> alanlarında ileri düzey deneyime sahiptir.
      </p>
    ),
  },
  {
    id: 'randevu',
    title: 'Randevu ve Danışma',
    content: (
      <p className="text-foreground/90 text-lg">
        Göz muayenesi veya tedavi planlaması için hemen randevu alın. Doç. Dr. Nurullah Bulut ile yüz yüze muayene randevunuzu oluşturmak için{' '}
        <Link href="/randevu-al" className="font-semibold text-primary hover:underline">
          Randevu Al
        </Link>{' '}
        sayfamıza gidin; tarih ve saat seçerek birkaç adımda randevunuzu tamamlayabilirsiniz.
      </p>
    ),
  },
]

export default function DoctorProfileAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex h-full w-full flex-col rounded-xl border-0 bg-transparent shadow-none"
    >
      {doctorProfileSections.map((section, index) => (
        <AccordionItem
          key={section.id}
          value={section.id}
          className={`border-border px-8 data-[state=open]:border-b last:border-b-0 ${index === 0 ? 'rounded-t-xl' : ''} ${index === doctorProfileSections.length - 1 ? 'rounded-b-xl' : ''}`}
        >
          <AccordionTrigger className="cursor-pointer text-left text-lg font-semibold hover:no-underline py-6">
            {section.title}
          </AccordionTrigger>
          <AccordionContent className="pb-5 pt-1 text-lg">
            {section.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
