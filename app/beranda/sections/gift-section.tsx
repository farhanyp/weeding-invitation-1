import { FiCopy } from "react-icons/fi";

export function GiftSection() {
  return (
    <section className="bg-surface px-6 py-24" id="hadiah">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-headline text-4xl italic text-primary">Kado Digital</h2>
          <p className="mx-auto max-w-md text-on-surface-variant">
            Doa restu Anda adalah hadiah terindah, namun jika Anda ingin memberikan tanda kasih,
            Anda dapat melakukannya secara digital.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center rounded-xl bg-surface-container-low p-8 text-center">
            <div className="mb-6 flex h-8 items-center text-xl font-bold italic text-tertiary">
              BANK BCA
            </div>
            <p className="mb-1 text-sm text-on-surface-variant">A.N. Tiara Saraswati</p>
            <p className="mb-6 text-xl font-bold text-primary">1234567890</p>
            <button className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary">
              <FiCopy size={14} /> SALIN NOMOR
            </button>
          </div>
          <div className="flex flex-col items-center rounded-xl bg-surface-container-low p-8 text-center">
            <div className="mb-6 flex h-8 items-center text-xl font-bold italic text-primary">
              BANK MANDIRI
            </div>
            <p className="mb-1 text-sm text-on-surface-variant">A.N. Alexander Wijaya</p>
            <p className="mb-6 text-xl font-bold text-primary">0987654321</p>
            <button className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary">
              <FiCopy size={14} /> SALIN NOMOR
            </button>
          </div>
          <div className="flex flex-col items-center rounded-xl border-2 border-dashed border-outline-variant bg-surface-container-low p-8 text-center">
            <div className="mb-6 flex h-8 items-center text-xl font-bold italic text-error">
              QRIS
            </div>
            <div className="mb-6 h-32 w-32 rounded bg-white p-2">
              <img
                alt="QR Code"
                className="h-full w-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeJbPRvdEd5_RMkATSZXpMd_zd_jf4aJ_tupCvIvNT5ly80EsTTPF1txSi-fFOS3uqgygzv8yjIeWEPhBTUBPsoOI-S1-mavM0KHf8g8VnFqZ_HgLotQcVqexgTN9AjG9DR8hw3zPcj2_2qhZdYx5hwIGplHf-FuMMQFJf-pQVqphT0QguqMZU2uG13b614dXIqvEYLBZEtPgFe399nytpCFl0QBzS1CmoqgGZJooRlnr6181WEXRQdU2Cdf1omniuV1sR4J5rqR47"
              />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">
              Pindai untuk berbagi kasih
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


