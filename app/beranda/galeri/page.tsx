import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import { HiHeart } from "react-icons/hi2";

export default function GalleryPage() {
  return (
    <main className="bg-background font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-24 md:px-12">
        <header className="relative mb-24 md:mb-40">
          <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <h1 className="mb-8 font-headline text-6xl leading-[0.9] tracking-tighter text-primary md:text-8xl">
                Fragmen <br />{" "}
                <span className="ml-12 italic text-secondary">Kebahagiaan</span>
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-on-surface-variant">
                Kumpulan momen yang tertangkap dalam lensa, merangkum perjalanan
                cinta kami yang dikurasi secara editorial.
              </p>
            </div>
            <div className="relative md:col-span-5">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-high shadow-sm">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="candid wedding couple in forest"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3ZdI1i1KeSPccMJAfTNZ3K9PZd8NNjM4f7jVzDpk4yjHs8eyoi2rI9yZ5yMvXN7Tfy5l3RyhdPwZQOJayvb0YBhrWTB61eqySJRK5IIiSQRa39gwc_4pjsZGURCWQIBbXTqNxu1kIMGthyQPod03RvnHOUtn0VnoNfoadEEm6dmIasJRbG18s6S5R8YQ8h_YfGZYXrC6LcWQprU44ilwFZI49Q0pBE5_koXc3ZMwoBdBosV4vAhhN1vwNJ9fLTuxJwKy7j-lvhbCR"
                />
              </div>
            </div>
          </div>
        </header>

        <section className="mb-32 columns-1 gap-8 md:columns-2 lg:columns-3">
          <div className="mb-8 break-inside-avoid">
            <div className="group relative overflow-hidden rounded-lg bg-surface-container-low">
              <img
                className="w-full object-cover transition-opacity group-hover:opacity-90"
                alt="wedding rings on velvet cushion"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBipSBFGHBakGcXmikqoBflVWp80EZOB8TlxT0smJTx3xGHA4ySTbMFXReGUUnaSMo-JTVFKatfJwUVFXVjrxIbcR_xbuU98XMmPRNVUriYP9_ZsdapVY02J0CMjjwQAtWSWW-KyfB59hZ3JR2i_V7ftR-bXUplvCQg-rvDK6DsK1xput9cLKF258egGYnlT2OuA2eIoCoJAVzXN8oxKUbkSftD2elellPpmHP2HCUMNUrMmvfGTXPdMxcGy5gqSbV6FWTcepIx8HbJ"
              />
              <div className="p-4 opacity-0 transition-all group-hover:opacity-100">
                <span className="flex items-center justify-between text-xs uppercase tracking-widest text-primary">
                  Detail
                  <FiArrowUpRight />
                </span>
              </div>
            </div>
          </div>

          <div className="mb-8 break-inside-avoid">
            <div className="group relative overflow-hidden rounded-lg bg-surface-container-low">
              <img
                className="w-full object-cover transition-opacity group-hover:opacity-90"
                alt="bride at window"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8u8zGB3ckAx1xvO-k_2aPAy6MqAdtFqwqg-_LYmgeGu1n6p3DT4zhTRq0OboViUVWr78M9ehtX7m63wNrHChyF-l0U4w33wpIKTfX821g0HPjkCF0J_DY8dZSZMDWyR8vvWygqyQuB8aYx8VLpteY0Z3Bt6mB7M4BaDUvkSNn146oeEnzK2sVTpAtoAPYqrvcVAruHeIOOpuV1OBqkuz7NtDmtmzh7gPTkDEhMkoR-e8m0UZF1XHV8BurXB20ZGr6b3g8m4vSRQYd"
              />
              <div className="p-4">
                <p className="font-headline text-xl italic text-primary-dim">
                  Pre-Wedding Bloom
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8 break-inside-avoid rounded-lg bg-primary p-12">
            <HiHeart className="mb-6 text-4xl text-on-primary" />
            <h3 className="font-headline text-3xl leading-tight text-on-primary">
              Momen yang terhenti dalam waktu.
            </h3>
            <p className="mt-4 text-sm uppercase italic text-on-primary/60">
              Editorial Edition
            </p>
          </div>

          <div className="mb-8 break-inside-avoid">
            <div className="group relative overflow-hidden rounded-lg bg-surface-container-low">
              <img
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="minimalist wedding cake"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvtMFdSox3g8KK9wKQht24_bCBRxIfbNLncZnvQCBwg-Xnhm-7i5hGLB1JN0LD77Cq09oUeMvnys-BqneNO5025nT1e1qA4n2Xxyv98EHEGb1gMSIy3Mjo19F8aoDYdpz9F7lniq7y5XYWsrWEcR5x8qM3KH1-_KAP_6sbHdGnTQvzlxEBLyiUPCaAubP0y0erSZ4qZifBMVNcbelS9LXL_isG7egElZcwoSpoLEzH1K4YBIVxpakHhy3PczMB0RIQAgTf8bqkv-gR"
              />
            </div>
          </div>

          <div className="mb-8 break-inside-avoid">
            <div className="group relative">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  alt="wedding guests laughing"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ7aP4N0zX_X_L6QG5mmc5af8MNHDCrSen1rJL5LOW2nntRTzCualZ48N_y062hSKrQ2ucg4qY-l57gN-GfYUiu7ewKHrwyPD3c2f8LwmIcze7h8JC_vpbhAaol3sd3WuXGYKRzrI0AoQpbz61Kn1sB-AiDMPvVTc51AWYZhOK8-X0hJ2Nr4yyPkENQISnpaQ4QXpLn8t9k7tPddIGhTXNthBrfT-cT6orUmhlfbqYUrqFl-TvzA3Whzcp9Mj7keyWF6VVWCfDZZSb"
                />
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-outline-variant/30" />
                <span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                  The Reception
                </span>
              </div>
            </div>
          </div>

          <div className="mb-8 break-inside-avoid">
            <div className="group relative overflow-hidden rounded-lg bg-surface-container-low">
              <img
                className="w-full object-cover transition-opacity group-hover:opacity-90"
                alt="groom fixing cufflinks"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAKIAd5fumq9Lf9YZ80eI9DDRHgOfQ_xkmvmkgAiwyE_tnF_13T9cU0UhuiyEszmF-8Xi4_2CSl8yP5Vtw1X2Bshn-oo0xARjtOAi0cJXHSYrWZV-lC0xmvM6snCPUJI2BdNduNojNM2ZnG1F9doWaz1aU4LXFW0XCodwLA30INghyxQkFJ-nv7dsPf6IG6a7UNF_1XeQkwm39pzMrzfi_YTN593a1EJl1gmGu6LlKUDvuxm6sf-rzxxHuFGW6SqsOZQFcUFgEVLJ-"
              />
            </div>
          </div>

          <div className="mb-8 break-inside-avoid">
            <div className="grid grid-cols-2 gap-4">
              <div className="group aspect-square overflow-hidden rounded-lg bg-surface-container-high">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="bridal bouquet"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDApbH0cZzqokbneOm_yq9SyynbzepLeqx1djcFwoXm-Pz03y_W_evPogryR36S2qK2DInPeh8KohE01T94PdZ_zDuiV4jwSXX1cRTR0gh0jlyUdZfXFg9e4KBBYxvTdFCsfGzzygn_aKGdwiSXRWqfex6AtPcqBZbEhgUlPdo2ZQf5-HtOyQkaOGf1L_4r6LTNKsXCvFxUn5OD4CWwb7DGckk432MkflAsj07Z0GUQmIAlFt00yB_U4h1RSJbj0weNO1zZW2Oote8O"
                />
              </div>
              <div className="flex aspect-square items-center justify-center rounded-lg bg-secondary-container p-6 text-center">
                <span className="font-headline text-lg italic text-on-secondary-container">
                  &quot;Ever thine, ever mine, ever ours.&quot;
                </span>
              </div>
            </div>
          </div>

          <div className="mb-8 break-inside-avoid">
            <div className="group relative overflow-hidden rounded-lg bg-surface-container-low shadow-xl shadow-primary/5">
              <img
                className="w-full object-cover"
                alt="wedding aisle venue decor"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyqtWQnerO7QkWVrEiuGP0kJmqUGad6baTNxztcoFzcCH-ma-KYLxEDp4NM4QWs0MyEU-IF7NbHECP007h0A9JroZAXghxAIDYbo-xyf3bHFawxJVlMt0Dyd-vdoQHz4j83qffksi9UvLIZIuy6JmAV-_bjSCN6MyxmfmUI71mQxoI0nROpQRNtHSjLNBFrxV7A3CEPe_V6ffHQw2W4Ff_Jw80AUr23kEpq64EfAl5mcn6uiTaWh-mCxHzXmlxDQkUgsSEWz0QbkJI"
              />
              <div className="absolute top-4 right-4 rounded-full border border-white/20 bg-white/10 px-4 py-1 backdrop-blur-md">
                <span className="font-label text-[10px] uppercase tracking-widest text-white">
                  Venue Decor
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="relative mt-20 overflow-hidden rounded-[2rem] bg-surface-container-low px-8 py-24">
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-headline text-4xl text-primary md:text-5xl">
              Ingin Mengunduh Koleksi Lengkap?
            </h2>
            <p className="mb-10 leading-relaxed text-on-surface-variant">
              Kami telah menyiapkan folder khusus untuk tamu undangan untuk
              melihat seluruh rangkaian foto dalam resolusi tinggi.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <button className="flex items-center gap-3 rounded-xl bg-primary px-8 py-4 font-medium text-on-primary transition-all active:scale-95 hover:shadow-lg">
                <FiDownload />
                Akses Galeri Cloud
              </button>
              <button className="border-b-2 border-tertiary-fixed-dim px-1 py-2 font-medium text-primary transition-colors hover:text-tertiary-dim">
                Hubungi Fotografer
              </button>
            </div>
          </div>
        </section>
      </div>

      <footer className="w-full border-t border-stone-200 bg-stone-100 px-8 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="font-headline text-xl italic text-stone-900">
            The Editorial Union
          </div>
          <div className="flex gap-8">
            <a className="font-body text-xs uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-900">
              Privacy Policy
            </a>
            <a className="font-body text-xs uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-900">
              Registry
            </a>
            <a className="font-body text-xs uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-900">
              Contact
            </a>
          </div>
          <div className="font-body text-xs uppercase tracking-widest text-stone-500">
            &copy; 2024 The Editorial Union. Designed for the modern couple.
          </div>
        </div>
      </footer>
    </main>
  );
}



