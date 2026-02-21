# GitHub bilgileri

Bu dosyaya repo bilgilerini buraya yaz. (README'de tutmuyoruz.)

- **Repository URL:** https://github.com/cinarvarlik3-tech/nurullahbulut.com
- **Username:** cinarvarlik3-tech
- **Repo name:** nurullahbulut.com

## Vercel deploy

Proje `next.config.ts` içinde `output: "export"` ile static export kullanıyor. **Vercel Project Settings → General → Build & Development Settings** bölümünde **"Output Directory"** alanını **boş bırak** (override etme). Vercel, Next.js static export’u otomatik algılar. "Output Directory" = `out` yapılırsa "routes-manifest.json could not be found" hatası oluşur.
