import { cn } from "@/lib/utils";

export interface WidthContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function WidthContainer({
  children,
  className,
  ...props
}: WidthContainerProps) {
  return (
    <div className={cn("max-w-6xl mx-auto", className)} {...props}>
      {children}
    </div>
  );
}
