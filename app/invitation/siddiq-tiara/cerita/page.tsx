import { ProfessionalOneCeritaPage } from "@/app/_components/template-wedding-invitation/professional-1";
import { siddiqTiaraTemplateData } from "@/app/invitation/siddiq-tiara/template-data";

export default function SiddiqTiaraCeritaPage() {
  return (
    <ProfessionalOneCeritaPage
      basePath="/invitation/siddiq-tiara"
      brandName={siddiqTiaraTemplateData.invitation.brandName}
    />
  );
}
