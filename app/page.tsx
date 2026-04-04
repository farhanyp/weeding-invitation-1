import { InvitationGate } from "@/app/_components/invitation-gate";
import { FiArrowRight, FiChevronDown, FiCopy, FiHeart, FiMapPin } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

export default function Home() {
  return (
    <InvitationGate>
      <main className="bg-surface font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
        <nav className="fixed top-0 z-50 flex w-full max-w-full items-center justify-between bg-stone-50/70 px-6 py-4 shadow-sm backdrop-blur-xl md:px-12">
          <div className="font-headline text-2xl font-bold tracking-tighter text-stone-900">
            The Editorial Union
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a className="border-b-2 border-orange-800 pb-1 font-headline text-lg font-semibold italic tracking-tight text-orange-800" href="#">
              Home
            </a>
            <a className="font-headline text-lg italic tracking-tight text-stone-600 transition-colors hover:text-stone-900" href="#cerita">
              Cerita Kami
            </a>
            <a className="font-headline text-lg italic tracking-tight text-stone-600 transition-colors hover:text-stone-900" href="#acara">
              Detail Acara
            </a>
            <a className="font-headline text-lg italic tracking-tight text-stone-600 transition-colors hover:text-stone-900" href="#galeri">
              Galeri
            </a>
            <a className="font-headline text-lg italic tracking-tight text-stone-600 transition-colors hover:text-stone-900" href="#hadiah">
              Kirim Hadiah
            </a>
            <a className="font-headline text-lg italic tracking-tight text-stone-600 transition-colors hover:text-stone-900" href="#rsvp">
              RSVP
            </a>
          </div>
          <button className="rounded-xl bg-secondary px-6 py-2 font-medium text-on-secondary transition-opacity hover:opacity-80 active:scale-95">
            RSVP Now
          </button>
        </nav>

        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <img
              className="h-full w-full object-cover opacity-30"
              alt="cinematic soft focus portrait of a young couple"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5FpZA6ZZqEcdeNIUGXcDHZYG77xkWvsQFRmjrBDYAR23_oqT25KGX4STw1DQoBbQtbh_vuy8oeGB5kvqxRdzSETx-UE4nbi6PrK0S6O84B4U_OZ73_HVU9vEzBg5d5Uje_kCuaTjDgFg2QZ8baWFELWu0EXIy50oIy0F51DxfZNraKRle6df8_qeURRc5ddlpcEVeZ2OtyBc9pGxEECbdQGqR0dzfbdJZaMVfzhQP97ftNbpmmfMJ5FfW7McS3yfcKIsaO5ATLVpf"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/40 to-surface" />
          </div>
          <div className="relative z-10 px-6 text-center">
            <span className="mb-6 block font-label text-sm uppercase tracking-[0.3em] text-primary">The Wedding Celebration of</span>
            <h1 className="mb-8 font-headline text-[5rem] leading-[0.9] font-light italic text-primary md:text-[8rem]">
              Maya <span className="text-secondary">&amp;</span> Alex
            </h1>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-12">
              <div className="text-center">
                <p className="font-headline text-2xl italic text-on-surface-variant">24 September 2024</p>
              </div>
              <div className="hidden h-px w-12 bg-outline-variant md:block" />
              <div className="text-center">
                <p className="font-headline text-2xl italic text-on-surface-variant">The Glass House, Jakarta</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-primary">
            <FiChevronDown size={34} />
          </div>
        </section>

        <section className="bg-surface-container-low px-6 py-24" id="acara">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-headline text-4xl italic text-primary">Detail Acara</h2>
              <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Simpan Tanggal Penting Ini</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-xl bg-surface-container-lowest p-10 text-center shadow-sm transition-transform hover:-translate-y-2">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary-container text-primary">
                  <FiHeart size={32} />
                </div>
                <h3 className="mb-4 font-headline text-3xl italic text-primary">Akad Nikah</h3>
                <p className="mb-2 text-on-surface-variant">Pukul 09.00 - 10.30 WIB</p>
                <p className="font-semibold text-primary">Masjid Al-Ikhlas</p>
                <p className="mt-4 text-sm italic text-on-surface-variant">Keluarga Inti &amp; Kerabat Dekat</p>
              </div>
              <div className="flex flex-col items-center rounded-xl bg-primary p-10 text-center text-on-primary shadow-xl transition-transform hover:-translate-y-2">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-on-primary text-primary">
                  <HiSparkles size={30} />
                </div>
                <h3 className="mb-4 font-headline text-3xl italic">Resepsi</h3>
                <p className="mb-2 opacity-80">Pukul 12.00 - 15.00 WIB</p>
                <p className="text-lg font-semibold">The Glass House</p>
                <p className="mt-4 text-sm italic opacity-70">Mohon Kehadiran Tepat Waktu</p>
              </div>
              <div className="flex flex-col items-center rounded-xl bg-surface-container-lowest p-10 text-center shadow-sm transition-transform hover:-translate-y-2">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-tertiary-container text-tertiary">
                  <FiMapPin size={30} />
                </div>
                <h3 className="mb-4 font-headline text-3xl italic text-primary">Lokasi</h3>
                <p className="mb-6 text-on-surface-variant">Jl. Sudirman No. 45, Jakarta Selatan</p>
                <a className="rounded-full bg-tertiary px-6 py-3 text-sm font-bold uppercase tracking-widest text-on-tertiary hover:opacity-90" href="#">
                  Buka Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface px-6 py-24 md:px-24" id="cerita">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-xl shadow-2xl">
                <img
                  className="h-full w-full object-cover"
                  alt="vintage style warm toned photograph"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUUSmpddMfP9vWLVoWTno-_dgYX7KUz6gIt872UxtaVtd_UH1179ce3nBe4p71VIfmgPl1cOBb4YeBTAFaA6RXeBgMJ-NXpCGENUBcLrUTBsXe3B9xb-KiIQ98WhwtNciRJakQHVC7Hq4O6mIuDs1uSDRnWGkUtPcCeaqk-G-fMgwbAX_22qsWHmGrMG5os1nnhNbbEdYyTmYH6bud-IZjQ9Ylje0m-n9xpbqoLpVrduNJLHS-gxDptIb11vLf09K3SsreasHh_MLj"
                />
              </div>
              <div className="absolute -right-8 -bottom-8 -z-10 h-48 w-48 rounded-xl bg-secondary-container" />
            </div>
            <div className="space-y-8">
              <h2 className="font-headline text-5xl leading-tight italic text-primary">
                Sebuah Cerita
                <br />
                Tentang Kita.
              </h2>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                Dimulai dari sebuah pertemuan singkat di perpustakaan kota, hingga perjalanan panjang melintasi benua. Kami menemukan bahwa rumah bukanlah sebuah tempat, melainkan satu sama lain.
              </p>
              <p className="text-lg leading-relaxed text-on-surface-variant">
                Tiga tahun berlalu, penuh dengan tawa, tantangan, dan ribuan cangkir kopi. Hari ini, kami mengundang Anda untuk menjadi saksi awal dari bab baru kehidupan kami.
              </p>
              <button className="group flex items-center gap-3 border-b-2 border-primary pb-1 font-label text-sm font-bold uppercase tracking-wider text-primary transition-all hover:border-secondary hover:text-secondary">
                Lihat Cerita Lengkap
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </section>

        <section className="overflow-hidden px-6 py-24" id="galeri">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="font-headline text-5xl italic text-primary">Momen Kami</h2>
                <p className="mt-2 italic text-on-surface-variant">Capture in time, frozen in love.</p>
              </div>
              <button className="hidden border-b-2 border-primary-container pb-1 font-label text-sm font-bold uppercase tracking-widest text-primary md:block">
                Lihat Semua Foto
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
              <div className="group aspect-square overflow-hidden rounded-xl">
                <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="romantic couple at dusk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDVueI8LcrHDYUZ3S5bese09zIaFTRVyuCgplLiupD0Kzztw_xOtT8CgxrmP9lxCoP8I_K22hnA7BWjf3FQ1ROG_ifag3Ue5jkkx7NAj9-326nZNZ4g3dSrMhzoWTrUO7vVw4hZz1HnWPR75fQXNhKZq36fFgDWcYHVITEJU871X9bDsc6fYDyunYpZseMvZ1cAfzfIPPckYWd5DmA8Gs39ILctWRdNE-f6RR8IR4vDAZovOOqM18xThgWG1L7y4nvcICnxEZDOoPN" />
              </div>
              <div className="group aspect-square translate-y-8 overflow-hidden rounded-xl">
                <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="wedding rings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKR7OO8kBIKXpyv6-Bg4gx7tVSfeMQ6vwvr2rrUYbXuQUkLrAy7dgrqPP0UPuBOJCSGQvdgNgTMBXlN5Pk8EO2Ih3gqCHiC8KFwLKWWdfKHJ0NtNJFZh3HNnzC1JKZfy_ocWAD7u94kjN3LTiNEEldz9StyN2aFgY17bBbRH0byh2qaxiIrmh7yJ263V1zH16e-j-0o7dNGwBMGyzLRyCVKknjGKn-zoaM5cb-hZ4BWJNcub9NWstqVlsOjDsYLxmEgL-1yDMawIhn" />
              </div>
              <div className="group aspect-square overflow-hidden rounded-xl">
                <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="couple laughing together" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6mMMzGfHGJWkKSn53vabrJ4l9Cm_dEmcJZmk26kOjXt8HOnqgzWB1zpbLSwrBKju8xZXqcIh8Xu4hddYuu9-LuYHBaoiNsHTAJjEImHgYttU42xRg1Itgumso2phxgnZnwpweJbnjO_sgVPEicszxBBWbKOpJifuVyT4LBLZvszKIkFyz1WBmhFYDJJdjRo_Olq6MPiG1FJnizI2b4auqbnWuv_UYkQ7ppSdUFdlkBzCAAVsXdktv0vVAX8-TPCC98xSdNIjUXnbT" />
              </div>
              <div className="group aspect-square translate-y-8 overflow-hidden rounded-xl">
                <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" alt="reception table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsGkuJKrm_JMi_DDoEMGUwQb6UAQT-K_m0mMONxgtcoGd8x-lhkEBUGIIF0F4qnLTH5KZ9ZLG33bcAG7eYH-h8t6U-QWJbLL2oNc5cIr8KFc4y7S4BZeL9l5VYV3koH6pt54wPdo1SAbdUHrDZ5Oah6rNi-ckFc9WkiUcLxVF2rqcyuuyfNu6M7nl8w4gTrmaG5aydcbQcN9ffvBsduSuKWCtej1J5TzR8XHvLgjIlRycrwR1XevtiAEuA8xgM6H71TATks9CTh9f1" />
              </div>
            </div>
            <div className="mt-16 text-center md:hidden">
              <button className="border-b-2 border-primary-container pb-1 font-label text-sm font-bold uppercase tracking-widest text-primary">Lihat Semua Foto</button>
            </div>
          </div>
        </section>

        <section className="bg-surface px-6 py-24" id="hadiah">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-headline text-4xl italic text-primary">Kado Digital</h2>
              <p className="mx-auto max-w-md text-on-surface-variant">
                Doa restu Anda adalah hadiah terindah, namun jika Anda ingin memberikan tanda kasih, Anda dapat melakukannya secara digital.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-xl bg-surface-container-low p-8 text-center">
                <div className="mb-6 flex h-8 items-center text-xl font-bold italic text-tertiary">BANK BCA</div>
                <p className="mb-1 text-sm text-on-surface-variant">A.N. Maya Saraswati</p>
                <p className="mb-6 text-xl font-bold text-primary">1234567890</p>
                <button className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary">
                  <FiCopy size={14} /> SALIN NOMOR
                </button>
              </div>
              <div className="flex flex-col items-center rounded-xl bg-surface-container-low p-8 text-center">
                <div className="mb-6 flex h-8 items-center text-xl font-bold italic text-primary">BANK MANDIRI</div>
                <p className="mb-1 text-sm text-on-surface-variant">A.N. Alexander Wijaya</p>
                <p className="mb-6 text-xl font-bold text-primary">0987654321</p>
                <button className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary">
                  <FiCopy size={14} /> SALIN NOMOR
                </button>
              </div>
              <div className="flex flex-col items-center rounded-xl border-2 border-dashed border-outline-variant bg-surface-container-low p-8 text-center">
                <div className="mb-6 flex h-8 items-center text-xl font-bold italic text-error">QRIS</div>
                <div className="mb-6 h-32 w-32 rounded bg-white p-2">
                  <img alt="QR Code" className="h-full w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeJbPRvdEd5_RMkATSZXpMd_zd_jf4aJ_tupCvIvNT5ly80EsTTPF1txSi-fFOS3uqgygzv8yjIeWEPhBTUBPsoOI-S1-mavM0KHf8g8VnFqZ_HgLotQcVqexgTN9AjG9DR8hw3zPcj2_2qhZdYx5hwIGplHf-FuMMQFJf-pQVqphT0QguqMZU2uG13b614dXIqvEYLBZEtPgFe399nytpCFl0QBzS1CmoqgGZJooRlnr6181WEXRQdU2Cdf1omniuV1sR4J5rqR47" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Pindai untuk berbagi kasih</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container px-6 py-24" id="rsvp">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-headline text-4xl italic text-primary">Konfirmasi Kehadiran &amp; Doa Restu</h2>
              <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Mohon Berikan Kabar Bahagia &amp; Harapan Anda</p>
            </div>
            <div className="mb-16 overflow-hidden rounded-[2rem] bg-primary shadow-2xl">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-48 md:h-auto md:w-1/3">
                  <img className="h-full w-full object-cover" alt="elegant invitation card" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd69x4Df6cF6_1d-SrwKbgHYl_Wd9uexPI246z43n9vwxdrc2oJNMl3IPMbH8ZGeqIBx_x8ErIbfSCeUlm220xdhz5kP-n8neUPBpZPtEdXAsCfL1q1yQSZPSYjEOHjXOWb33yO9B-EbwN5DRB8ELdX444Vuxd3GY3OFZwj4TrvZGotK3NeQTbUqjlRamKx3QYT91XJIlWZA0gcTVGdThFvbq8yg1TYVE0ZgpATKnWC3E3UE9BfWMATB4XNdHqKpqxFz3NgP_Br9GQ" />
                  <div className="absolute inset-0 bg-primary/20" />
                </div>
                <div className="p-8 text-on-primary md:w-2/3 md:p-12">
                  <form className="space-y-6">
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-widest opacity-70">Nama Lengkap</label>
                      <input className="w-full rounded-lg border-none bg-white/10 p-4 text-white placeholder-white/40 focus:ring-2 focus:ring-on-primary" placeholder="Masukkan nama Anda" type="text" />
                    </div>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase tracking-widest opacity-70">Jumlah Tamu</label>
                        <select className="w-full rounded-lg border-none bg-white/10 p-4 text-white focus:ring-2 focus:ring-on-primary">
                          <option className="text-on-surface">1 Orang</option>
                          <option className="text-on-surface">2 Orang</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-2 block text-xs font-bold uppercase tracking-widest opacity-70">Kehadiran</label>
                        <select className="w-full rounded-lg border-none bg-white/10 p-4 text-white focus:ring-2 focus:ring-on-primary">
                          <option className="text-on-surface">Hadir</option>
                          <option className="text-on-surface">Ragu-ragu</option>
                          <option className="text-on-surface">Tidak Hadir</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-bold uppercase tracking-widest opacity-70">Ucapan &amp; Doa Restu</label>
                      <textarea className="w-full rounded-lg border-none bg-white/10 p-4 text-white placeholder-white/40 focus:ring-2 focus:ring-on-primary" placeholder="Tuliskan harapan Anda untuk kami..." rows={3} />
                    </div>
                    <button className="mt-2 w-full rounded-xl bg-secondary py-4 font-bold uppercase tracking-widest text-on-secondary transition-opacity hover:opacity-90">
                      Kirim Konfirmasi
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="mb-8 text-center font-headline text-2xl italic text-primary">Ucapan dari Kerabat</h3>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary-container font-bold text-on-secondary-container">R</div>
                <div className="max-w-lg rounded-2xl rounded-tl-none bg-surface-container-lowest p-6 shadow-sm">
                  <p className="leading-relaxed text-on-surface">Selamat ya Maya &amp; Alex! Semoga lancar sampai hari H dan jadi keluarga yang sakinah. Can&apos;t wait for the big day!</p>
                  <span className="mt-4 block text-[10px] uppercase tracking-widest text-outline-variant">Raka &amp; Shinta - 2 jam lalu</span>
                </div>
              </div>
              <div className="flex flex-row-reverse gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-container font-bold text-on-primary-container">B</div>
                <div className="max-w-lg rounded-2xl rounded-tr-none bg-primary p-6 text-on-primary shadow-md">
                  <p className="leading-relaxed">Wishing you both a lifetime of happiness. Truly an inspiration to us all. See you guys soon!</p>
                  <span className="mt-4 block text-[10px] uppercase tracking-widest opacity-60">Budi Santoso - 5 jam lalu</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-tertiary-container font-bold text-on-tertiary-container">L</div>
                <div className="max-w-lg rounded-2xl rounded-tl-none bg-surface-container-lowest p-6 shadow-sm">
                  <p className="leading-relaxed text-on-surface">Akhirnya kapal ini berlabuh juga. Bahagia selalu ya kalian berdua!</p>
                  <span className="mt-4 block text-[10px] uppercase tracking-widest text-outline-variant">Linda - Kemarin</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-full border-t border-stone-200 bg-stone-100 px-8 py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
            <div className="font-headline text-xl italic text-stone-900">The Editorial Union</div>
            <div className="flex gap-8">
              <a className="font-body text-xs uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-900" href="#">Privacy Policy</a>
              <a className="font-body text-xs uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-900" href="#">Registry</a>
              <a className="font-body text-xs uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-900" href="#">Contact</a>
            </div>
            <div className="font-body text-xs uppercase tracking-widest text-stone-500">Â© 2024 The Editorial Union. Designed for the modern couple.</div>
          </div>
        </footer>
      </main>
    </InvitationGate>
  );
}
