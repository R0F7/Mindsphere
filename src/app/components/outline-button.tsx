import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface OutlineButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function OutlineButton({
  href,
  children,
  className,
}: OutlineButtonProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        "font-sans text-[0.9rem] font-normal inline-block items-center gap-2 rounded-full border border-strong bg-transparent px-7 py-3.25 text-primary transition-all duration-250 hover:-translate-y-0.5 hover:bg-navy hover:text-white hover:border-navy",
        className,
      )}
    >
      {children}
    </Link>
  );
}
