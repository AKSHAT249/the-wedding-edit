import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  tone?: "dark" | "light";
  className?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  tone = "dark",
  className,
  id,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn(centered && "mx-auto max-w-3xl text-center", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "text-[0.72rem] font-medium uppercase tracking-[0.32em]",
            tone === "light" ? "text-gold" : "text-rose",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <div
        className={cn(
          "mt-4 h-px w-14 bg-gold",
          centered && "mx-auto",
        )}
        aria-hidden="true"
      />
      <Tag
        id={id}
        className={cn(
          "mt-5 font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-6xl",
          tone === "light" ? "text-ivory" : "text-maroon",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-7 sm:text-lg",
            tone === "light" ? "text-ivory/85" : "text-muted",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
