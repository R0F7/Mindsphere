import Link from "next/link";

type Blog = {
  emoji: string;
  likes: number;
  comments: number;
  category: string;
  title: string;
  avatar: string;
  avatarBg: string;
  author: string;
  readTime: string;
  delay: string;
};

type BlogSectionProps = {
  title: string;
  blogs: Blog[];
};

export default function BlogSection({ title, blogs }: BlogSectionProps) {
  return (
    <section className="w-full px-[5%] py-20" id="blog">
      <div className="mx-auto container">
        <div className="bg-off-white rounded-xl p-6 sm:p-12 border border-border">
          <div
            className="flex flex-wrap items-center justify-between gap-4 mb-9"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-sm bg-navy flex items-center justify-center shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 stroke-white fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>

              <h2 className="font-['Fraunces',serif] text-[1.3rem] font-normal text-primary">
                {title}
              </h2>
            </div>

            <Link
              href="/blogs"
              className="text-[0.85rem] font-medium text-secondary inline-flex items-center gap-1 border-b border-border pb-0.5 transition-all duration-200 hover:text-primary hover:border-primary"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogs.map((blog, index) => (
              /* .blog-card */
              <div
                key={index}
                className="group bg-white border border-border rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                data-aos="fade-up"
                data-aos-delay={blog.delay}
              >
                <div className="w-full aspect-video overflow-hidden bg-[linear-gradient(135deg,var(--soft-grey),var(--accent-light))] relative">
                  <div className="w-full h-full flex items-center justify-center text-3xl opacity-30 select-none">
                    {blog.emoji}
                  </div>
                </div>

                <div className="flex items-center gap-3.5 px-4 pt-2.5">
                  <span className="flex items-center gap-1 text-[0.75rem] text-muted">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 stroke-muted fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"
                    >
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
                    </svg>
                    {blog.likes}
                  </span>
                  <span className="flex items-center gap-1 text-[0.75rem] text-muted">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 stroke-muted fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    {blog.comments}
                  </span>
                </div>

                <div className="p-[12px_16px_16px]">
                  <div className="text-[0.68rem] font-medium tracking-[0.08em] uppercase text-accent mb-1.5">
                    {blog.category}
                  </div>

                  <h3 className="font-['Fraunces',serif] text-[0.95rem] font-normal text-primary leading-[1.45] mb-3 line-clamp-2 min-h-[2.9em]">
                    {blog.title}
                  </h3>

                  <div className="flex items-center gap-2 pt-2.5 border-t border-border">
                    <div
                      className={`w-6 h-6 rounded-full ${blog.avatarBg} flex items-center justify-center text-[0.65rem] font-medium text-white shrink-0`}
                    >
                      {blog.avatar}
                    </div>

                    <span className="text-[0.75rem] text-secondary font-light">
                      {blog.author}
                    </span>

                    <span className="text-[0.72rem] text-muted ml-auto">
                      {blog.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
