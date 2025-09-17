'use client';
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { siteContent } from "@/lib/utils";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <SectionHeading eyebrow="Testimonials" title="What clients say" />
        <div className="grid md:grid-cols-2 gap-6">
          {siteContent.testimonials.map((t, i) => (
            <AnimatedCard key={i}>
              <p className="text-neutral-800 text-lg">“{t.quote}”</p>
              <div className="mt-4 text-neutral-600 text-sm">— {t.name} — {t.title}</div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
