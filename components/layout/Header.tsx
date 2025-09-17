'use client';
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Header() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current, { y:-40, opacity:0 }, { y:0, opacity:1, duration:0.6, ease:"power3.out" });
  }, []);

  const items = [
    { href:"#services", label:"Services" },
    { href:"#about", label:"About" },
    { href:"#pricing", label:"Pricing" },
    { href:"#testimonials", label:"Testimonials" },
    { href:"#journey", label:"Process" },
    { href:"#contact", label:"Contact" },
  ];

  return (
    <header
      ref={ref}
      className="sticky top-0 z-40 bg-white/80 supports-[backdrop-filter]:backdrop-blur"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-foreground">
          <span className="text-lg">Nydia</span><span className="text-neutral-700">Tech</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          {items.map(it => (
            <a key={it.href} href={it.href} className="hover:text-neutral-900 transition-colors">{it.label}</a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-lg px-4 py-2 text-sm font-medium bg-black text-white shadow-md hover:bg-neutral-900 transition-colors"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
