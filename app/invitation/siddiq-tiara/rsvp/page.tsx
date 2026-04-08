import { ProfessionalOneRsvpPage } from "@/app/_components/template-wedding-invitation/professional-1";
import { siddiqTiaraTemplateData } from "@/app/invitation/siddiq-tiara/template-data";

export default function SiddiqTiaraRsvpPage() {
  return (
    <ProfessionalOneRsvpPage
      brandName={siddiqTiaraTemplateData.invitation.brandName}
    />
  );
}
