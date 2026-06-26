import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function PrimaryButton({
  href,
  children,
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={twMerge(
        "font-sans text-[0.9rem] font-medium inline-block items-center gap-2 rounded-full bg-navy px-7 py-3.25 text-white transition-all duration-250 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-[0_8px_28px_rgba(13,31,60,0.22)]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
