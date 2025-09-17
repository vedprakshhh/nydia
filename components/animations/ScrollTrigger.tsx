'use client';
import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type Props = { selector: string; y?: number; delay?: number };
export default function ScrollTriggerAnim({ selector, y = 24, delay = 0 }: Props) {
  useEffect(() => {
    const q = gsap.utils.toArray<HTMLElement>(selector);
    q.forEach((el, i) => {
      gsap.fromTo(el, { y, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, delay: delay + i * 0.06, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" }
      });
    });
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [selector, y, delay]);
  return null;
}
