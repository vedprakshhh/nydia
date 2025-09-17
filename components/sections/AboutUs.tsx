'use client';
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { siteContent } from "@/lib/utils";

export default function AboutUs() {
  const a = siteContent.about;

  return (
    <section id="about" className="py-20">
      <div className="container">
        <SectionHeading eyebrow="About us" title="About Nydia Tech" />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: About paragraphs + C/I/G */}
          <div className="space-y-4">
            {a.paragraphs.map((p, i) => <p key={i} className="text-neutral-700">{p}</p>)}

            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <AnimatedCard><h4 className="font-semibold mb-2">Collaborate</h4><p className="text-neutral-700">{a.collaborate}</p></AnimatedCard>
              <AnimatedCard><h4 className="font-semibold mb-2">Innovate</h4><p className="text-neutral-700">{a.innovate}</p></AnimatedCard>
              <AnimatedCard><h4 className="font-semibold mb-2">Grow</h4><p className="text-neutral-700">{a.grow}</p></AnimatedCard>
            </div>
          </div>

          {/* Right: Why Choose Us */}
          <AnimatedCard className="h-max">
            <h4 className="text-xl font-semibold">Why Choose Nydia Tech?</h4>
            <ol className="mt-4 list-decimal pl-5 space-y-2 text-neutral-700">
              {siteContent.whyChooseUs.map((x, i) => <li key={i}>{x}</li>)}
            </ol>
          </AnimatedCard>
        </div>

        {/* What We Do */}
        <div className="mt-10">
          <h4 className="text-2xl font-semibold text-foreground">What We Do</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {siteContent.whatWeDo.map((x, i) => (
              <AnimatedCard key={i}><p className="text-neutral-700">{x}</p></AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
