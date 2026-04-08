import { ProfessionalOneLandingPage } from "@/app/_components/template-wedding-invitation/professional-1";
import { siddiqTiaraTemplateData } from "@/app/invitation/siddiq-tiara/template-data";

export default function SiddiqTiaraPage() {
  return (
    <ProfessionalOneLandingPage
      basePath="/invitation/siddiq-tiara"
      invitation={siddiqTiaraTemplateData.invitation}
    />
  );
}
