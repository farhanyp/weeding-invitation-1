export function FooterSection() {
  return (
    <footer className="w-full border-t border-stone-200 bg-stone-100 px-8 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="font-headline text-xl italic text-stone-900">The Editorial Union</div>
        <div className="flex gap-8">
          <a className="font-body text-xs uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-900" href="#">Privacy Policy</a>
          <a className="font-body text-xs uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-900" href="#">Registry</a>
          <a className="font-body text-xs uppercase tracking-widest text-stone-500 transition-colors hover:text-stone-900" href="#">Contact</a>
        </div>
        <div className="font-body text-xs uppercase tracking-widest text-stone-500">&copy; 2024 The Editorial Union. Designed for the modern couple.</div>
      </div>
    </footer>
  );
}
