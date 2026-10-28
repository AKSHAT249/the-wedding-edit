import { site } from "@/lib/constants";
import { cn } from "@/lib/utils";

type IllustrativeNoticeProps = {
  className?: string;
};

export function IllustrativeNotice({ className }: IllustrativeNoticeProps) {
  return (
    <p
      className={cn(
        "border border-gold/70 bg-white/80 px-4 py-3 text-sm leading-6 text-ink",
        className,
      )}
    >
      {site.illustrativeNotice}
    </p>
  );
}
