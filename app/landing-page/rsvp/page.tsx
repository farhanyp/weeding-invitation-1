import Link from "next/link";
import { FiArrowLeft, FiChevronDown, FiEdit3, FiMenu } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { RiDoubleQuotesL } from "react-icons/ri";

type Wish = {
  name: string;
  time: string;
  message: string;
  tone?: "default" | "accent" | "primary";
};

const wishes: Wish[] = [
  {
    name: "Aditya Pratama",
    time: "10 Menit yang lalu",
    message:
      "Selamat menempuh hidup baru Tiara dan Siddiq! Semoga cinta kalian selalu mekar seperti bunga di musim semi, abadi dan penuh warna.",
  },
  {
    name: "Sarah & Mike",
    time: "1 Jam yang lalu",
    message: "Best wishes for a lifetime of love and happiness together. So happy for you both!",
  },
  {
    name: "Ustadz Hasan",
    time: "3 Jam yang lalu",
    message:
      "Barakallah untuk kalian berdua. Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin.",
  },
  {
    name: "Nadia & Geng SMA",
    time: "5 Jam yang lalu",
    message:
      "Akhirnya hari yang ditunggu tiba! Terharu melihat kalian berdua di pelaminan. Keep growing together!",
    tone: "accent",
  },
  {
    name: "Bambang Wijaya",
    time: "6 Jam yang lalu",
    message:
      "Selamat ya Siddiq! Jagain Tiara baik-baik. Semoga dilancarkan segala urusannya sampai maut memisahkan.",
  },
  {
    name: "Rizky Febrian",
    time: "8 Jam yang lalu",
    message:
      "Happy wedding guys! May your journey be filled with joy and countless beautiful memories.",
  },
  {
    name: "Citra Kirana",
    time: "12 Jam yang lalu",
    message:
      "Turut bahagia untuk kalian. Semoga cinta kalian menjadi inspirasi bagi orang-orang di sekitar. Selamat!",
  },
  {
    name: "Tante Lisa & Om Rudi",
    time: "Kemarin, 21:00",
    message:
      "A beautiful wedding for a beautiful couple. Congratulations on starting your forever.",
  },
  {
    name: "Drs. Hendrawan",
    time: "Kemarin, 19:45",
    message:
      "Semoga kebahagiaan hari ini bertahan selamanya. Selamat menempuh perjalanan baru yang penuh berkah.",
  },
  {
    name: "Kevin Sanjaya",
    time: "Kemarin, 18:20",
    message: "Wishing you both a lifetime of togetherness. Proud of you, Siddiq!",
    tone: "primary",
  },
];

function WishCard({ wish }: { wish: Wish }) {
  if (wish.tone === "accent") {
    return (
      <article className="rounded-xl bg-secondary p-8 text-on-secondary shadow-xl">
        <HiSparkles className="mb-4 opacity-70" />
        <p className="mb-8 font-headline text-2xl leading-snug">{wish.message}</p>
        <div className="border-t border-on-secondary/20 pt-6">
          <h4 className="font-body font-bold text-white">{wish.name}</h4>
          <p className="text-[10px] uppercase tracking-widest opacity-70">{wish.time}</p>
        </div>
      </article>
    );
  }

  if (wish.tone === "primary") {
    return (
      <article className="rounded-xl bg-primary p-8 text-on-primary">
        <p className="mb-6 leading-relaxed text-white/90">{wish.message}</p>
        <div className="border-t border-on-primary/10 pt-6">
          <h4 className="font-headline font-bold text-white">{wish.name}</h4>
          <p className="text-[10px] uppercase tracking-widest text-white/50">{wish.time}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-[0_12px_40px_rgba(48,51,46,0.04)]">
      <RiDoubleQuotesL className="mb-4 text-secondary-dim" />
      <p className="mb-6 leading-relaxed text-on-surface">{wish.message}</p>
      <h4 className="font-headline font-bold text-primary">{wish.name}</h4>
      <p className="text-[10px] uppercase tracking-widest text-outline">{wish.time}</p>
    </article>
  );
}

export default function RsvpPage() {
  return (
    <main className="bg-surface text-on-surface">
      <header className="fixed top-0 z-50 w-full bg-surface/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
          <Link
            className="font-headline text-2xl font-bold italic tracking-tight text-primary"
            href="/"
          >
            The Editorial Union
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              className="text-sm text-primary/80 transition-all hover:text-secondary"
              href="/landing-page/cerita"
            >
              Our Story
            </Link>
            <Link
              className="text-sm text-primary/80 transition-all hover:text-secondary"
              href="/#acara"
            >
              Events
            </Link>
            <Link
              className="text-sm text-primary/80 transition-all hover:text-secondary"
              href="/landing-page/galeri"
            >
              Gallery
            </Link>
            <span className="border-b-2 border-secondary pb-1 text-sm font-bold text-secondary">
              Wishes
            </span>
            <Link
              className="rounded-xl bg-secondary px-6 py-2 font-medium text-on-secondary"
              href="/#rsvp"
            >
              RSVP
            </Link>
          </nav>
          <button className="text-primary md:hidden" aria-label="menu">
            <FiMenu />
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pt-32 pb-24 md:px-12 lg:px-24">
        <div className="mb-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-surface-container-high px-4 py-1 text-xs uppercase tracking-widest text-on-surface-variant">
            <HiSparkles className="text-sm" />
            Digital Guestbook
          </div>
          <h1 className="mb-8 font-headline text-5xl italic leading-tight text-primary md:text-7xl">
            Doa Restu dari Kerabat
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant/90">
            Terima kasih atas segala ucapan manis dan doa tulus yang telah diberikan. Kehadiran dan
            perhatian Anda adalah kado terindah bagi perjalanan baru kami.
          </p>
          <div className="mt-12">
            <Link
              className="inline-flex items-center gap-3 font-semibold text-secondary transition-all hover:gap-5"
              href="/"
            >
              <FiArrowLeft />
              Kembali ke Beranda
            </Link>
          </div>
        </div>

        <section className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
          <div className="flex flex-col gap-8 md:col-span-4">
            <WishCard wish={wishes[0]} />
            <WishCard wish={wishes[1]} />
            <WishCard wish={wishes[2]} />
          </div>
          <div className="flex flex-col gap-8 md:col-span-4 md:mt-12">
            <div className="relative mb-4 h-64 overflow-hidden rounded-xl">
              <img
                alt="wedding flowers"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUpH8FvsHU_SIeq9EAO-V22GFTWVjI65PLlzBRsvvqxTAYBny1POyU5AX8nLuiqTN0V6mnRD9S-zJt9N-E0nb1jNGpqdoiuDW90KugG60a7EiGQXjGAOPS1Yjg_aOJtIxK1xSCPI67YZXROYtGx3p3ymSGwiUa5SRWb7lM_iib2QNFsJUJlLi-wuG_I1Cciu6SEGJUFWaQdUDbtB6O8wHRR_C5yAjrPTJjy4zzItdZesytBlEukXzN7AJn3SVgMZ3HJLsIjdf0ETgk"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </div>
            <WishCard wish={wishes[3]} />
            <WishCard wish={wishes[4]} />
            <WishCard wish={wishes[5]} />
          </div>
          <div className="flex flex-col gap-8 md:col-span-4 md:mt-24">
            <WishCard wish={wishes[6]} />
            <WishCard wish={wishes[7]} />
            <WishCard wish={wishes[8]} />
            <WishCard wish={wishes[9]} />
          </div>
        </section>

        <div className="mt-24 text-center">
          <button className="mx-auto flex items-center gap-3 rounded-full bg-surface-container-high px-12 py-4 font-semibold text-primary transition-all hover:bg-surface-container-highest">
            Lihat Lebih Banyak
            <FiChevronDown />
          </button>
        </div>
      </section>

      <footer className="mt-24 w-full bg-surface-container-low py-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-12 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="font-headline text-lg italic text-primary">The Editorial Union</span>
            <p className="text-sm tracking-wide text-primary/60">
              &copy; 2024 The Editorial Union. Handcrafted for our forever.
            </p>
          </div>
          <div className="flex gap-8">
            <a
              className="text-sm tracking-wide text-primary/60 transition-colors hover:text-secondary"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-sm tracking-wide text-primary/60 transition-colors hover:text-secondary"
              href="#"
            >
              Contact Us
            </a>
            <a
              className="text-sm tracking-wide text-primary/60 transition-colors hover:text-secondary"
              href="#"
            >
              Registry
            </a>
          </div>
        </div>
      </footer>

      <button className="group fixed right-8 bottom-8 z-40 flex items-center justify-center rounded-full bg-secondary p-4 text-on-secondary shadow-2xl transition-all hover:scale-110 active:scale-95">
        <FiEdit3 />
        <span className="max-w-0 overflow-hidden whitespace-nowrap px-0 font-medium transition-all duration-500 group-hover:max-w-xs group-hover:px-2">
          Kirim Doa
        </span>
      </button>
    </main>
  );
}
