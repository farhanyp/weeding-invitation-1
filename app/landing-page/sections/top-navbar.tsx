"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

export function TopNavbar() {
  const [open, setOpen] = useState(false);

  const mobileLinkClass =
    "block border-b border-stone-200/70 pb-3 font-headline text-base italic tracking-tight text-stone-700 transition-colors hover:text-stone-900";

  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full max-w-full bg-stone-50/70 shadow-sm backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <div className="font-headline text-2xl font-bold tracking-tighter text-stone-900">
          The Editorial Union
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a
            className="border-b-2 border-orange-800 pb-1 font-headline text-lg font-semibold italic tracking-tight text-orange-800"
            href="#"
          >
            Home
          </a>
          <a
            className="font-headline text-lg italic tracking-tight text-stone-600 transition-colors hover:text-stone-900"
            href="#acara"
          >
            Detail Acara
          </a>
          <a
            className="font-headline text-lg italic tracking-tight text-stone-600 transition-colors hover:text-stone-900"
            href="#cerita"
          >
            Cerita Kami
          </a>
          <a
            className="font-headline text-lg italic tracking-tight text-stone-600 transition-colors hover:text-stone-900"
            href="#galeri"
          >
            Galeri
          </a>
          <a
            className="font-headline text-lg italic tracking-tight text-stone-600 transition-colors hover:text-stone-900"
            href="#hadiah"
          >
            Kirim Hadiah
          </a>
          <Link
            className="font-headline text-lg italic tracking-tight text-stone-600 transition-colors hover:text-stone-900"
            href="/landing-page/rsvp"
          >
            RSVP
          </Link>
        </div>

        <button className="hidden rounded-xl bg-secondary px-6 py-2 font-medium text-on-secondary transition-opacity hover:opacity-80 active:scale-95 md:block">
          RSVP Now
        </button>

        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-xl border border-stone-300/70 bg-stone-50 p-2 text-stone-800 transition-colors hover:bg-stone-100 md:hidden"
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-stone-200/70 bg-stone-50 px-6 pb-6 pt-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              <a href="#acara" className={mobileLinkClass} onClick={closeMenu}>
                Detail Acara
              </a>
              <a href="#cerita" className={mobileLinkClass} onClick={closeMenu}>
                Cerita Kami
              </a>
              <a href="#galeri" className={mobileLinkClass} onClick={closeMenu}>
                Galeri
              </a>
              <a href="#hadiah" className={mobileLinkClass} onClick={closeMenu}>
                Kirim Hadiah
              </a>
              <Link href="/landing-page/rsvp" className={mobileLinkClass} onClick={closeMenu}>
                RSVP
              </Link>
              <Link
                href="/#rsvp"
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-secondary px-6 py-3 font-medium text-on-secondary transition-opacity hover:opacity-80"
                onClick={closeMenu}
              >
                RSVP Now
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </nav>
  );
}
