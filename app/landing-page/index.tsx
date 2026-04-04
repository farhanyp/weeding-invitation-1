import { EventSection } from "@/app/landing-page/sections/event-section";
import { FooterSection } from "@/app/landing-page/sections/footer-section";
import { GallerySection } from "@/app/landing-page/sections/gallery-section";
import { GiftSection } from "@/app/landing-page/sections/gift-section";
import { HeroSection } from "@/app/landing-page/sections/hero-section";
import { RsvpSection } from "@/app/landing-page/sections/rsvp-section";
import { StorySection } from "@/app/landing-page/sections/story-section";
import { TopNavbar } from "@/app/landing-page/sections/top-navbar";

export function LandingPage() {
  return (
    <main className="bg-surface font-body text-on-surface selection:bg-secondary-container selection:text-on-secondary-container">
      <TopNavbar />
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
