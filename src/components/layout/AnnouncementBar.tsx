import { site } from "@/lib/constants";
import { cn } from "@/lib/utils";

type AnnouncementBarProps = {
  hidden?: boolean;
};

export function AnnouncementBar({ hidden = false }: AnnouncementBarProps) {
  return (
    <div
      className={cn(
        "overflow-hidden bg-maroon text-ivory transition-[max-height] duration-300",
        hidden ? "max-h-0" : "max-h-16",
      )}
    >
      <p className="px-4 py-2.5 text-center text-[0.68rem] uppercase tracking-[0.22em]">
        {site.announcement}
      </p>
    </div>
  );
}
