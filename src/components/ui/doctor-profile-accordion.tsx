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
          Doç. Dr. Nurullah Bulut,{' '}
          <strong>2008 yılında Atatürk Üniversitesi Tıp Fakültesi&apos;nden mezun olmuştur</strong>. Tıp eğitimini tamamladıktan sonra göz hastalıkları alanında uzmanlık eğitimini alarak{' '}
          <strong>göz hastalıkları uzmanı</strong> unvanını kazanmıştır.
        </p>
        <p>
          <strong>2013 yılına kadar Kartal Eğitim ve Araştırma Hastanesi&apos;nde</strong> uzman doktor olarak görev yapmış; bu süreçte özellikle{' '}
          <strong>retina hastalıkları</strong>, <strong>katarakt cerrahisi</strong> ve{' '}
          <strong>göz travmaları</strong> üzerine yoğun klinik deneyim edinmiştir.
        </p>
        <p>
          <strong>2017 yılında Sağlık Bilimleri Üniversitesi&apos;nde akademik kariyerine başlamış</strong>, yardımcı doçent (assistant professor) olarak görev almıştır. Akademik çalışmalarını sürdürürken aynı zamanda ileri düzey cerrahi uygulamalarda aktif rol almıştır.
        </p>
        <p>
          <strong>2022 yılından bu yana Sağlık Bilimleri Üniversitesi&apos;nde Doçent Doktor (Associate Professor) unvanı ile görev yapmaktadır.</strong>
        </p>
        <p>
          <strong>2023 yılından itibaren Memorial Göztepe Hastanesi Göz Hastalıkları Bölümü&apos;nü yönetmekte</strong>, klinik ve cerrahi uygulamalarını burada sürdürmektedir.
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
