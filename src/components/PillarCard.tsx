import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PillarCardProps {
  title: string;
  description: string;
  href: string;
}

export default function PillarCard({ title, description, href }: PillarCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-card border border-border rounded-xl p-6 hover:border-accent hover:shadow-md transition-all"
    >
      <h3 className="text-lg font-semibold text-card-foreground group-hover:text-accent mb-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center gap-1 text-sm text-accent font-medium">
        Daha Fazla <ArrowRight size={14} />
      </span>
    </Link>
  );
}
