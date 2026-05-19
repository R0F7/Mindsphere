"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FAQ() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "What is Mindsphere?",
      answer:
        "Mindsphere is a mental wellness platform built by teens, for teens. We offer self-help tools, a peer community, guided meditations, initial screenings, and a resource library — all designed around how young people actually think and feel.",
    },
    {
      question: "Is Mindsphere free to use?",
      answer:
        "Yes — our core features including the community space, blog, and self-help tools are completely free. We believe mental wellness support should be accessible to every teenager, regardless of background.",
    },
    {
      question: "Is my data private and secure?",
      answer:
        "Absolutely. Privacy is our top priority. We never share personal data with third parties, and all mood tracking and journaling data is stored securely — visible only to you.",
    },
    {
      question: "Is this a replacement for professional help?",
      answer:
        "No — Mindsphere is a supportive space, not a clinical service. We always encourage seeking professional help when needed, and our helpline page connects you with qualified resources.",
    },
    {
      question: "How can I get involved as a volunteer?",
      answer:
        "We'd love to have you. Head over to our Get Involved page to learn about volunteering, peer support training, and certification opportunities with Mindsphere.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-off-white w-full py-25 px-[5%]">
      <div className="max-w-170 mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="font-sans text-3xl font-normal text-primary mb-2">
            FAQ
          </h2>
          <p className="text-[0.9rem] text-muted font-light">
            Get quick answers to your questions.
            <br />
            To understand more, contact us.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 mb-10">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-duration={500 + idx * 100}
                className="w-full"
              >
                <div
                  className={`w-full overflow-hidden transition-[border-radius] duration-300 ${
                    isOpen ? "rounded-lg" : "rounded-full"
                  }`}
                >
                  <button
                    onClick={() => handleToggle(idx)}
                    className={`w-full flex items-center justify-between gap-4 px-5.5 py-4 bg-navy text-white cursor-pointer font-['DM_Sans',sans-serif] text-[0.9rem] font-normal text-left transition-colors duration-200 ${
                      isOpen ? "rounded-t-lg rounded-b-0" : "rounded-inherit"
                    }`}
                  >
                    {item.question}
                    <span
                      className={`w-6.5 h-6.5 rounded-full border border-white flex items-center justify-center shrink-0 text-[1rem] leading-none text-white transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-400 ease bg-white border border-border border-t-0 rounded-b-lg overflow-hidden ${
                      isOpen ? "max-h-75 px-5.5 py-5" : "max-h-0 px-5.5 py-0"
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-full bg-accentLight flex items-center justify-center shrink-0 text-[0.7rem] font-medium text-accent">
                        M
                      </div>
                      <div className="text-[0.875rem] text-secondary leading-[1.7] font-light">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center" data-aos="fade-up">
          <button
            onClick={() => router.push("/get-involved")}
            className="font-['DM_Sans',sans-serif] text-[0.875rem] font-medium px-7 py-3 bg-navy text-white rounded-full transition-all duration-200 hover:opacity-85 cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}