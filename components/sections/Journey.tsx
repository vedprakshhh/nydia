'use client';
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { siteContent } from "@/lib/utils";

export default function Journey() {
  return (
    <section id="journey" className="py-20">
      <div className="container">
        <SectionHeading eyebrow="About Us: Journey" title="Journey" />
        <div className="grid md:grid-cols-3 gap-6">
          {siteContent.journey.map((p, i) => (
            <AnimatedCard key={i}><p className="text-neutral-700">{p}</p></AnimatedCard>
          ))}
        </div>

        <div className="mt-12">
          <SectionHeading title="How We Work" />
          <div className="grid md:grid-cols-5 gap-4">
            {siteContent.howWeWork.map((step, i) => (
              <AnimatedCard key={i}>
                <div className="text-neutral-500 text-xs uppercase tracking-widest">{String(i+1).padStart(2,"0")}</div>
                <p className="text-neutral-700 mt-2">{step}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
