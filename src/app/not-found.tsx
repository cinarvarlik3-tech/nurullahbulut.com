import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-muted-foreground mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-foreground mb-2">Sayfa Bulunamadı</h2>
      <p className="text-muted-foreground mb-8">
        Aradığınız sayfa mevcut değil ya da taşınmış olabilir.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
