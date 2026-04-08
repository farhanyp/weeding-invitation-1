import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { HiHeart } from "react-icons/hi2";

type ProfessionalOneGaleriPageProps = {
  brandName: string;
};

export function ProfessionalOneGaleriPage({ brandName }: ProfessionalOneGaleriPageProps) {
  const cloudGalleryUrl = "https://drive.google.com/drive/folders/";
  const photographerWhatsAppUrl =
    "https://wa.me/6281234567890?text=Halo%20kak%2C%20saya%20ingin%20bertanya%20soal%20dokumentasi%20foto%20wedding.";

  return (
    <main className="bg-background font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 md:px-12">
        <header className="mb-20 grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <h1 className="mb-8 font-headline text-6xl leading-[0.9] tracking-tighter text-primary md:text-8xl">
              Fragmen <br /> <span className="ml-12 italic text-secondary">Kebahagiaan</span>
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-on-surface-variant">
              Kumpulan momen yang tertangkap dalam lensa, merangkum perjalanan cinta kami.
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-lg md:col-span-5">
            <img
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="candid wedding couple"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3ZdI1i1KeSPccMJAfTNZ3K9PZd8NNjM4f7jVzDpk4yjHs8eyoi2rI9yZ5yMvXN7Tfy5l3RyhdPwZQOJayvb0YBhrWTB61eqySJRK5IIiSQRa39gwc_4pjsZGURCWQIBbXTqNxu1kIMGthyQPod03RvnHOUtn0VnoNfoadEEm6dmIasJRbG18s6S5R8YQ8h_YfGZYXrC6LcWQprU44ilwFZI49Q0pBE5_koXc3ZMwoBdBosV4vAhhN1vwNJ9fLTuxJwKy7j-lvhbCR"
            />
          </div>
        </header>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {["https://lh3.googleusercontent.com/aida-public/AB6AXuBipSBFGHBakGcXmikqoBflVWp80EZOB8TlxT0smJTx3xGHA4ySTbMFXReGUUnaSMo-JTVFKatfJwUVFXVjrxIbcR_xbuU98XMmPRNVUriYP9_ZsdapVY02J0CMjjwQAtWSWW-KyfB59hZ3JR2i_V7ftR-bXUplvCQg-rvDK6DsK1xput9cLKF258egGYnlT2OuA2eIoCoJAVzXN8oxKUbkSftD2elellPpmHP2HCUMNUrMmvfGTXPdMxcGy5gqSbV6FWTcepIx8HbJ","https://lh3.googleusercontent.com/aida-public/AB6AXuA8u8zGB3ckAx1xvO-k_2aPAy6MqAdtFqwqg-_LYmgeGu1n6p3DT4zhTRq0OboViUVWr78M9ehtX7m63wNrHChyF-l0U4w33wpIKTfX821g0HPjkCF0J_DY8dZSZMDWyR8vvWygqyQuB8aYx8VLpteY0Z3Bt6mB7M4BaDUvkSNn146oeEnzK2sVTpAtoAPYqrvcVAruHeIOOpuV1OBqkuz7NtDmtmzh7gPTkDEhMkoR-e8m0UZF1XHV8BurXB20ZGr6b3g8m4vSRQYd","https://lh3.googleusercontent.com/aida-public/AB6AXuBvtMFdSox3g8KK9wKQht24_bCBRxIfbNLncZnvQCBwg-Xnhm-7i5hGLB1JN0LD77Cq09oUeMvnys-BqneNO5025nT1e1qA4n2Xxyv98EHEGb1gMSIy3Mjo19F8aoDYdpz9F7lniq7y5XYWsrWEcR5x8qM3KH1-_KAP_6sbHdGnTQvzlxEBLyiUPCaAubP0y0erSZ4qZifBMVNcbelS9LXL_isG7egElZcwoSpoLEzH1K4YBIVxpakHhy3PczMB0RIQAgTf8bqkv-gR"].map((src) => (
            <div key={src} className="group overflow-hidden rounded-lg bg-surface-container-low">
              <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="wedding gallery" src={src} />
            </div>
          ))}
        </section>

        <section className="relative mt-20 overflow-hidden rounded-[2rem] bg-surface-container-low px-8 py-24 text-center">
          <HiHeart className="mx-auto mb-4 text-4xl text-secondary" />
          <h2 className="mb-6 font-headline text-4xl text-primary md:text-5xl">Ingin Mengunduh Koleksi Lengkap?</h2>
          <p className="mb-10 leading-relaxed text-on-surface-variant">
            Kami telah menyiapkan folder khusus untuk tamu undangan untuk melihat seluruh rangkaian foto.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <a href={cloudGalleryUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl bg-primary px-8 py-4 font-medium text-on-primary transition-all duration-300 hover:-translate-y-1">
              <FiDownload />
              Akses Galeri Cloud
            </a>
            <a href={photographerWhatsAppUrl} target="_blank" rel="noreferrer" className="group border-b-2 border-tertiary-fixed-dim px-1 py-2 font-medium text-primary transition-all duration-300 hover:border-tertiary-dim hover:text-tertiary-dim">
              Hubungi Fotografer
              <FiArrowUpRight className="ml-1 inline" />
            </a>
          </div>
        </section>
      </div>

      <footer className="w-full border-t border-stone-200 bg-stone-100 px-8 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="font-headline text-xl italic text-stone-900">{brandName}</div>
          <div className="font-body text-xs uppercase tracking-widest text-stone-500">
            &copy; 2024 {brandName}. Designed for the modern couple.
          </div>
        </div>
      </footer>
    </main>
  );
}
