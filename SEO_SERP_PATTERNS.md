# SEO & SERP Patterns — Göz Kliniği İçerik Rehberi

Bu belge, Türkçe göz sağlığı SERP araştırması ve rakiplerin analizine dayanarak pillar ve cluster sayfalarında uyulacak yapı ve kuralları özetler.

## SERP Araştırması Özeti

- **Kaynak:** Turkish SERP Source Map (first-page, Turkish-language only; Wikipedia/Britannica hariç).
- **Örneklenen kümeler:** Lazer/refraktif, katarakt/lens, hastalıklar, göz sağlığı/koruma, kontakt lens.
- **Kazanan türler:** Göz hastanesi grupları (tıbbi birimler / tedaviler kütüphaneleri), kamu kurumları (saglik.gov.tr), uzman doktor siteleri, sağlık rehberi formatında uzun içerik.

## İçerik Yapısı Kuralları

### Tüm sayfalar

1. **İlk paragraf:** Primary keyword ilk 100–150 karakter içinde, doğal biçimde geçmeli; konunun net tanımı verilmeli.
2. **Başlık hiyerarşisi:** Tek H1 (frontmatter `title`), sonrasında mantıksal H2/H3 sırası; her H2 konuyu tek bir fikre odaklamalı.
3. **Internal linking:** İlgili cluster ve pillar sayfalarına anlamlı anchor metinlerle link verilmeli (örn. [katarakt ameliyatı](/katarakt-akilli-lens/katarakt-ameliyati-nasil-yapilir/)).
4. **CTA:** Sayfa sonunda doktor/randevu çağrısı (Doç. Dr. Nurullah Bulut, muayene randevusu) yer almalı.

### Hastalık (disease) cluster sayfaları

Sıra: **Tanım (X nedir)** → **Nasıl oluşur / Nedenleri** → **Risk faktörleri** → **Belirtiler** → **Ne zaman doktora gidilmeli** → **Tanı** → **Tedavi** → **SSS**.

- Örnek H2’ler: "X Nedir?", "X Neden Olur?", "X Belirtileri", "Risk Faktörleri", "Tedavi", "Sıkça Sorulan Sorular".
- Rakip sitelerde istatistik kullanımı (örn. "Türkiye'de yaklaşık X kişi...") güven sinyali oluşturuyor; uygun yerlerde kullanılabilir.

### Tedavi / prosedür cluster sayfaları

Sıra: **Tanım (X nedir)** → **Nasıl yapılır (adımlar)** → **Kimlere uygulanır** → **Avantajlar** → **Riskler / yan etkiler** → **İyileşme süreci** → **Karşılaştırma (tablo, diğer yöntemler)** → **SSS**.

- Lazer sayfalarında LASIK / PRK / No Touch karşılaştırma tablosu SERP’te sık görülüyor; ilgili cluster’larda korunmalı.
- Süre, ağrı, başarı oranı gibi somut bilgiler (örn. "Ameliyat yaklaşık 15–20 dakika sürer") kullanılmalı.

### Göz sağlığı / koruma cluster sayfaları

Sıra: **Tanım / sorun nedir** → **Nedenleri** → **Belirtiler** → **Korunma / çözüm yolları** → **Ne zaman doktora gidilmeli** → **SSS**.

- "20-20-20 kuralı", "göz kuruluğu neden olur" gibi arama niyetine uygun H2/H3 başlıkları kullanılmalı.

## SSS (Sıkça Sorulan Sorular)

- Her cluster sayfasında **en az 4–6 SSS** bulunmalı.
- Soru cümleleri doğal, uzun kuyruk aramalara uygun olmalı (örn. "Katarakt belirtileri ani mi başlar?").
- Cevap kısa paragraf veya madde; gerekirse ilgili sayfaya internal link verilmeli.

## Anahtar kelime kullanımı

- **Primary keyword:** Title, meta description ve ilk paragrafta doğal geçmeli.
- **Secondary keywords:** TURKISH_KEYWORDS.md’deki ilgili kümeden seçilmeli; H2/H3 ve paragraflarda dağıtılmalı, keyword stuffing yapılmamalı.
- **Eş anlamlılar:** "Göz tansiyonu" / "glokom", "kırma kusuru" / "refraktif hata" gibi varyasyonlar okunabilirliği artırır.

## Güvenilirlik ve ton

- Kurumsal, bilgilendirici ton; abartılı vaatlerden kaçınılmalı.
- "Doç. Dr. Nurullah Bulut" ve kliniğe atıf, sayfa sonunda veya ilgili bölümlerde tutarlı kullanılmalı.
- Tıbbi terimler ilk geçişte kısa açıklama ile verilmeli (örn. "fakoemülsifikasyon (ultrasonik dalgalarla mercek alınması)").

## Teknik / MDX

- Frontmatter: `title`, `description`, `slug`, `pillar` (cluster için), `primaryKeyword`, `secondaryKeywords` (array).
- Görsel kullanılıyorsa `image` alanı; public path ile tutarlı olmalı.
- Uzun listeler madde işaretli; adım adım süreçler numaralı liste veya kısa alt başlıklarla verilmeli.

Bu kurallar, SERP’te öne çıkan göz hastanesi ve kamu kaynaklarının yapısına uyum için kullanılır; tüm pillar ve cluster makaleleri yazılırken veya güncellenirken dikkate alınır.
