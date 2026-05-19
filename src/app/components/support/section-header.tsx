type SectionHeaderProps = {
  label: string;
  title: string;
  accentText?: string;
  description: string;
  className?: string;
};

export default function SectionHeader({
  label,
  title,
  accentText,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-14 max-w-140 ${className}`}
      data-aos="fade-up"
    >
      {/* Label */}
      <div className="mb-2 text-[0.75rem] uppercase tracking-widest text-accent">
        {label}
      </div>

      {/* Title */}
      <h2 className="font-fraunces text-[clamp(2rem,4vw,2.5rem)] leading-tight font-light text-text">
        {title}{" "}

        {accentText && (
          <em className="font-fraunces font-light italic text-accent">
            {accentText}
          </em>
        )}
      </h2>

      {/* Description */}
      <p className="text-t2 mt-3 text-[0.95rem] font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
}