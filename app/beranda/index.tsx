import { EventSection } from "@/app/beranda/sections/event-section";
import { FooterSection } from "@/app/beranda/sections/footer-section";
import { GallerySection } from "@/app/beranda/sections/gallery-section";
import { GiftSection } from "@/app/beranda/sections/gift-section";
import { HeroSection } from "@/app/beranda/sections/hero-section";
import { RsvpSection } from "@/app/beranda/sections/rsvp-section";
import { StorySection } from "@/app/beranda/sections/story-section";

export function LandingPage() {
  return (
    <main className="bg-surface font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
      <HeroSection />
      <EventSection />
      <StorySection />
      <GallerySection />
      <GiftSection />
      <RsvpSection />
      <FooterSection />
    </main>
  );
}


