import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
  id?: string;
  width?: "default" | "narrow";
};

export function Container({
  children,
  className,
  as: Tag = "div",
  id,
  width = "default",
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-10",
        width === "narrow" ? "max-w-3xl" : "max-w-7xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
