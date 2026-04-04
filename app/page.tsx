import { InvitationGate } from "@/app/_components/invitation-gate";
import { LandingPage } from "@/app/landing-page";

export default function Home() {
  return (
    <InvitationGate>
      <LandingPage />
    </InvitationGate>
  );
}
