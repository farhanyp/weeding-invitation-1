"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { FiMail } from "react-icons/fi";

type InvitationGateProps = {
  children?: ReactNode;
};

export function InvitationGate({ children }: InvitationGateProps) {
  if (children) {
    return <>{children}</>;
  }

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-surface text-on-surface">
      <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-transparent px-8 py-6 font-headline italic tracking-tight text-stone-100"></header>

      <div className="absolute inset-0 z-0">
        <img
          className="h-full w-full object-cover"
          alt="Cinematic couple in minimalist garden"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmnh04kLKNQYghV2ncnl0FhXBTcJR9yXdNL-fcCXb006fs0SBwHh5P8g4gMPhtGCQ32bt2qn0YbKUAkGMx7Ywx90MoZLKZNPrmFHYtDEmxNpY_ZaZkM0E-Fi2IKjTqthWXWGzXsrNQnWTVEC8vASvaEZ69Ed9jARGOusYGzNJd_LTkZfaWSjGqTbdexjqhF5ljOkPEA87kEay6vx0g-Tm8hcToIBIb72arMyvA22b1fVpNu1AUMDvVuo54hiG3zycuME0SldyBnyuZ"
        />
        <div className="editorial-overlay absolute inset-0 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/10 opacity-40" />
      </div>

      <div className="relative z-10 flex max-w-4xl flex-col items-center px-6 text-center">
        <div className="gate-fade-in mb-8">
          <span className="rounded-full border border-white/10 bg-primary/20 px-4 py-2 font-label text-xs font-bold uppercase tracking-[0.4em] text-on-primary/90 backdrop-blur-md">
            24 September 2024
          </span>
        </div>

        <div className="mb-12 space-y-2">
          <p className="mb-4 font-label text-sm font-medium uppercase tracking-[0.2em] text-stone-300">
            The Wedding Celebration of
          </p>
          <h1 className="font-headline text-6xl leading-none font-extralight tracking-tighter text-white italic md:text-8xl">
            Tiara <span className="text-secondary">&amp;</span> Siddiq
          </h1>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Link
            href="/beranda"
            className="group relative flex items-center gap-3 rounded-full bg-secondary px-10 py-5 font-label text-sm font-bold tracking-widest text-on-secondary shadow-[0_12px_40px_rgba(159,66,38,0.3)] transition-all duration-500 hover:scale-105 hover:bg-secondary-dim cursor-pointer"
          >
            <FiMail size={18} />
            BUKA UNDANGAN
          </Link>
        </div>
      </div>

      <div className="absolute bottom-12 left-12 hidden md:block">
        <div className="relative h-24 w-px bg-white/20">
          <div className="absolute top-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-secondary shadow-[0_0_10px_rgba(159,66,38,0.8)]" />
        </div>
      </div>
    </div>
  );
}
