import Link from "next/link";

export default function ServiceCard({ i, item, isVision = false }: any) {
  return (
    <div data-aos="fade-up" data-aos-delay={i * 100}>
      <div className="group relative bg-white border border-border rounded-xl p-[36px_32px] transition-all duration-300 ease-in-out hover:shadow-sh3 hover:-translate-y-0.5">
        {/* Giant Faded Number */}
        <div className="absolute -top-4 right-4 font-fraunces text-[8rem] font-semibold text-navy opacity-[0.04] dark:text-accent dark:opacity-[0.05] leading-none pointer-events-none select-none tracking-[-0.04em]">
          {i <= 9 ? "0" + (i + 1) : i + 1}
        </div>

        {/* Tag */}
        <span className="inline-flex text-[0.65rem] font-medium tracking-widest uppercase text-accent bg-accent-light px-2.5 py-1 rounded-full mb-4">
          {item.tag}
        </span>

        {/* Title */}
        <h3 className="font-fraunces text-[1.3rem] font-normal text-text mb-2.5 leading-tight">
          {item.title}
        </h3>

        {/* Body Text */}
        <p className="text-[0.85rem] text-t2 leading-[1.7] font-light mb-6">
          {item.body}
        </p>

        {/* Link with Arrow Animation */}
        {!isVision && (
          <Link
            href={item.link}
            className="inline-flex items-center gap-2.5 text-[0.82rem] font-medium text-t2 transition-colors duration-300 ease-in-out hover:text-text"
          >
            Learn more
            <span className="w-7 h-7 rounded-full border border-bd2 bg-transparent flex items-center justify-center text-[0.7rem] text-t3 transition-all duration-300 ease-in-out group-hover:bg-navy group-hover:text-white group-hover:border-navy">
              ↗
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
