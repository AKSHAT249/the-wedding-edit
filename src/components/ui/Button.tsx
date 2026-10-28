import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ivory" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-maroon text-ivory hover:bg-rose",
  secondary:
    "border border-maroon/80 bg-transparent text-maroon hover:bg-maroon hover:text-ivory",
  ivory: "bg-ivory text-maroon hover:bg-white",
  ghost:
    "border border-ivory/80 bg-transparent text-ivory hover:bg-ivory hover:text-maroon",
};

const base =
  "inline-flex min-h-12 items-center justify-center px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60";

type Common = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
};

type AsLink = Common & {
  href: string;
};

type AsButton = Common & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button(props: AsLink | AsButton) {
  const className = cn(base, variants[props.variant ?? "primary"], props.className);

  if ("href" in props && props.href) {
    const external = /^(https?:|mailto:|tel:)/.test(props.href);
    if (external) {
      const outbound = props.href.startsWith("http");
      return (
        <a
          href={props.href}
          className={className}
          {...(outbound ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {props.children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={className}>
        {props.children}
      </Link>
    );
  }

  const buttonProps = props as AsButton;

  return (
    <button
      type={buttonProps.type ?? "button"}
      className={className}
      disabled={buttonProps.disabled}
      onClick={buttonProps.onClick}
    >
      {buttonProps.children}
    </button>
  );
}

export function PrimaryButton(props: Omit<AsLink, "variant"> | Omit<AsButton, "variant">) {
  return <Button {...props} variant="primary" />;
}

export function SecondaryButton(
  props: Omit<AsLink, "variant"> | Omit<AsButton, "variant">,
) {
  return <Button {...props} variant="secondary" />;
}
