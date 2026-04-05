export function RsvpSection() {
  return (
    <section className="bg-surface-container px-6 py-24" id="rsvp">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline text-4xl italic text-primary">
            Konfirmasi Kehadiran &amp; Doa Restu
          </h2>
          <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
            Mohon Berikan Kabar Bahagia &amp; Harapan Anda
          </p>
        </div>
        <div className="mb-16 overflow-hidden rounded-[2rem] bg-primary shadow-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="relative h-48 md:h-auto md:w-1/3">
              <img
                className="h-full w-full object-cover"
                alt="elegant invitation card"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd69x4Df6cF6_1d-SrwKbgHYl_Wd9uexPI246z43n9vwxdrc2oJNMl3IPMbH8ZGeqIBx_x8ErIbfSCeUlm220xdhz5kP-n8neUPBpZPtEdXAsCfL1q1yQSZPSYjEOHjXOWb33yO9B-EbwN5DRB8ELdX444Vuxd3GY3OFZwj4TrvZGotK3NeQTbUqjlRamKx3QYT91XJIlWZA0gcTVGdThFvbq8yg1TYVE0ZgpATKnWC3E3UE9BfWMATB4XNdHqKpqxFz3NgP_Br9GQ"
              />
              <div className="absolute inset-0 bg-primary/20" />
            </div>
            <div className="p-8 text-on-primary md:w-2/3 md:p-12">
              <form className="space-y-6">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest opacity-70">
                    Nama Lengkap
                  </label>
                  <input
                    className="w-full rounded-lg border-none bg-white/10 p-4 text-white placeholder-white/40 focus:ring-2 focus:ring-on-primary"
                    placeholder="Masukkan nama Anda"
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-widest opacity-70">
                      Jumlah Tamu
                    </label>
                    <select className="w-full rounded-lg border-none bg-white/10 p-4 text-white focus:ring-2 focus:ring-on-primary">
                      <option className="text-on-surface">1 Orang</option>
                      <option className="text-on-surface">2 Orang</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-widest opacity-70">
                      Kehadiran
                    </label>
                    <select className="w-full rounded-lg border-none bg-white/10 p-4 text-white focus:ring-2 focus:ring-on-primary">
                      <option className="text-on-surface">Hadir</option>
                      <option className="text-on-surface">Ragu-ragu</option>
                      <option className="text-on-surface">Tidak Hadir</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest opacity-70">
                    Ucapan &amp; Doa Restu
                  </label>
                  <textarea
                    className="w-full rounded-lg border-none bg-white/10 p-4 text-white placeholder-white/40 focus:ring-2 focus:ring-on-primary"
                    placeholder="Tuliskan harapan Anda untuk kami..."
                    rows={3}
                  />
                </div>
                <button className="mt-2 w-full rounded-xl bg-secondary py-4 font-bold uppercase tracking-widest text-on-secondary transition-opacity hover:opacity-90">
                  Kirim Konfirmasi
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="mb-8 text-center font-headline text-2xl italic text-primary">
            Ucapan dari Kerabat
          </h3>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary-container font-bold text-on-secondary-container">
              R
            </div>
            <div className="max-w-lg rounded-2xl rounded-tl-none bg-surface-container-lowest p-6 shadow-sm">
              <p className="leading-relaxed text-on-surface">
                Selamat ya Tiara &amp; Siddiq! Semoga lancar sampai hari H dan jadi keluarga yang
                sakinah. Can&apos;t wait for the big day!
              </p>
              <span className="mt-4 block text-[10px] uppercase tracking-widest text-outline-variant">
                Raka &amp; Shinta - 2 jam lalu
              </span>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-container font-bold text-on-primary-container">
              B
            </div>
            <div className="max-w-lg rounded-2xl rounded-tr-none bg-primary p-6 text-on-primary shadow-md">
              <p className="leading-relaxed">
                Wishing you both a lifetime of happiness. Truly an inspiration to us all. See you
                guys soon!
              </p>
              <span className="mt-4 block text-[10px] uppercase tracking-widest opacity-60">
                Budi Santoso - 5 jam lalu
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-tertiary-container font-bold text-on-tertiary-container">
              L
            </div>
            <div className="max-w-lg rounded-2xl rounded-tl-none bg-surface-container-lowest p-6 shadow-sm">
              <p className="leading-relaxed text-on-surface">
                Akhirnya kapal ini berlabuh juga. Bahagia selalu ya kalian berdua!
              </p>
              <span className="mt-4 block text-[10px] uppercase tracking-widest text-outline-variant">
                Linda - Kemarin
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


