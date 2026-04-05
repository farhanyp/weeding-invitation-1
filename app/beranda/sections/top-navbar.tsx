"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

type NavKey = "home" | "acara" | "cerita" | "galeri" | "hadiah" | "rsvp";

type NavItem = {
  href: string;
  key: NavKey;
  label: string;
};

const navItems: NavItem[] = [
  { key: "home", label: "Home", href: "/beranda" },
  { key: "acara", label: "Detail Acara", href: "/beranda#acara" },
  { key: "cerita", label: "Cerita Kami", href: "/beranda#cerita" },
  { key: "galeri", label: "Galeri", href: "/beranda#galeri" },
  { key: "hadiah", label: "Kirim Hadiah", href: "/beranda#hadiah" },
  { key: "rsvp", label: "RSVP", href: "/beranda/rsvp" },
];

const sectionItems: Array<{ id: string; key: NavKey }> = [
  { id: "acara", key: "acara" },
  { id: "cerita", key: "cerita" },
  { id: "galeri", key: "galeri" },
  { id: "hadiah", key: "hadiah" },
  { id: "rsvp", key: "rsvp" },
];

export function TopNavbar() {
  const [open, setOpen] = useState(false);
  const [sectionActiveNav, setSectionActiveNav] = useState<NavKey>("home");
  const pathname = usePathname();

  const mobileLinkClass =
    "block border-b border-stone-200/70 pb-3 font-headline text-base italic tracking-tight transition-colors";

  const closeMenu = () => setOpen(false);

  const pageActiveNav = useMemo<NavKey | null>(() => {
    if (pathname === "/beranda/cerita") {
      return "cerita";
    }

    if (pathname === "/beranda/galeri") {
      return "galeri";
    }

    if (pathname === "/beranda/rsvp") {
      return "rsvp";
    }

    if (pathname === "/beranda") {
      return null;
    }

    return "home";
  }, [pathname]);

  useEffect(() => {
    if (pageActiveNav) {
      return;
    }

    const evaluateActiveSection = () => {
      const scrollAnchor = window.scrollY + 160;
      let nextActive: NavKey = "home";

      for (const section of sectionItems) {
        const element = document.getElementById(section.id);

        if (element && scrollAnchor >= element.offsetTop) {
          nextActive = section.key;
        }
      }

      setSectionActiveNav(nextActive);
    };

    const frameId = window.requestAnimationFrame(evaluateActiveSection);
    window.addEventListener("scroll", evaluateActiveSection, { passive: true });
    window.addEventListener("hashchange", evaluateActiveSection);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", evaluateActiveSection);
      window.removeEventListener("hashchange", evaluateActiveSection);
    };
  }, [pageActiveNav]);

  const activeNav = pageActiveNav ?? sectionActiveNav;

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <nav className="fixed top-0 z-50 w-full max-w-full bg-stone-50/70 shadow-sm backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4 md:px-12">
          <Link
            href="/beranda"
            className="font-headline text-2xl font-bold tracking-tighter text-stone-900"
          >
            The Editorial Union
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const isActive = activeNav === item.key;

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setSectionActiveNav(item.key)}
                  className={cn(
                    "border-b-2 pb-1 font-headline text-lg italic tracking-tight transition-all duration-200",
                    isActive
                      ? "border-orange-800 font-semibold text-orange-800 animate-in fade-in-0 slide-in-from-bottom-1"
                      : "border-transparent text-stone-600 hover:text-stone-900",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <Button
            asChild
            className="hidden rounded-xl bg-secondary px-6 py-2 font-medium text-on-secondary transition-opacity hover:opacity-80 active:scale-95 md:inline-flex"
          >
            <Link href="/beranda#rsvp">RSVP Now</Link>
          </Button>

          <CollapsibleTrigger asChild>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              className="rounded-xl border-stone-300/70 bg-stone-50 text-stone-800 hover:bg-stone-100 md:hidden"
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </Button>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent
          forceMount
          className={cn(
            "border-t border-stone-200/70 bg-stone-50 px-6 pb-6 pt-4 md:hidden",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-2",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2",
          )}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeNav === item.key;

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={cn(
                    mobileLinkClass,
                    isActive
                      ? "border-orange-800 font-semibold text-orange-800 animate-in fade-in-0 slide-in-from-bottom-1"
                      : "text-stone-700 hover:text-stone-900",
                  )}
                  onClick={() => {
                    setSectionActiveNav(item.key);
                    closeMenu();
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/beranda#rsvp"
              className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-secondary px-6 py-3 font-medium text-on-secondary transition-opacity hover:opacity-80"
              onClick={closeMenu}
            >
              RSVP Now
            </Link>
          </div>
        </CollapsibleContent>
      </nav>
    </Collapsible>
  );
}
