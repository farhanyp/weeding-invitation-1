import { FiChevronDown, FiEdit3 } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { RiDoubleQuotesL } from "react-icons/ri";

type ProfessionalOneRsvpPageProps = {
  brandName: string;
};

type Wish = {
  name: string;
  time: string;
  message: string;
};

const wishes: Wish[] = [
  {
    name: "Aditya Pratama",
    time: "10 Menit yang lalu",
    message: "Selamat menempuh hidup baru Tiara dan Siddiq! Semoga cinta kalian selalu mekar.",
  },
  {
    name: "Sarah & Mike",
    time: "1 Jam yang lalu",
    message: "Best wishes for a lifetime of love and happiness together.",
  },
  {
    name: "Nadia & Geng SMA",
    time: "5 Jam yang lalu",
    message: "Akhirnya hari yang ditunggu tiba! Keep growing together!",
  },
];

export function ProfessionalOneRsvpPage({ brandName }: ProfessionalOneRsvpPageProps) {
  return (
    <main className="bg-surface text-on-surface">
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-24 md:px-12 lg:px-24">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-surface-container-high px-4 py-1 text-xs uppercase tracking-widest text-on-surface-variant">
            <HiSparkles className="text-sm" />
            Digital Guestbook
          </div>
          <h1 className="mb-8 font-headline text-5xl italic leading-tight text-primary md:text-7xl">
            Doa Restu dari Kerabat
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-on-surface-variant/90">
            Terima kasih atas segala ucapan manis dan doa tulus yang telah diberikan.
          </p>
        </div>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {wishes.map((wish) => (
            <article key={wish.name} className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-[0_12px_40px_rgba(48,51,46,0.04)]">
              <RiDoubleQuotesL className="mb-4 text-secondary-dim" />
              <p className="mb-6 leading-relaxed text-on-surface">{wish.message}</p>
              <h4 className="font-headline font-bold text-primary">{wish.name}</h4>
              <p className="text-[10px] uppercase tracking-widest text-outline">{wish.time}</p>
            </article>
          ))}
        </section>

        <div className="mt-16 text-center">
          <button className="mx-auto flex items-center gap-3 rounded-full bg-surface-container-high px-12 py-4 font-semibold text-primary transition-all hover:bg-surface-container-highest">
            Lihat Lebih Banyak
            <FiChevronDown />
          </button>
        </div>
      </section>

      <footer className="mt-24 w-full bg-surface-container-low py-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-12 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="font-headline text-lg italic text-primary">{brandName}</span>
            <p className="text-sm tracking-wide text-primary/60">&copy; 2024 {brandName}. Handcrafted for our forever.</p>
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
