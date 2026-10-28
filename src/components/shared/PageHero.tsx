import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import type { Crumb } from "@/types";

type PageHeroProps = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
};

export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  crumbs,
  children,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-maroon">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-maroon/45 to-maroon/25" />
      <Container className="relative z-10 pb-16 pt-40 sm:pb-20">
        <Breadcrumbs items={crumbs} tone="light" />
        <p className="mt-6 text-[0.72rem] font-medium uppercase tracking-[0.32em] text-gold">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-ivory/85 sm:text-lg">
          {description}
        </p>
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </Container>
    </section>
  );
}
