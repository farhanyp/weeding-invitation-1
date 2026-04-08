import type { Metadata } from "next";
import {
  buildProfessionalOneMetadata,
  ProfessionalOneLayout,
} from "@/app/_components/template-wedding-invitation/professional-1";
import { siddiqTiaraTemplateData } from "@/app/invitation/siddiq-tiara/template-data";

export const metadata: Metadata = buildProfessionalOneMetadata(
  siddiqTiaraTemplateData.metadata,
);

export default function SiddiqTiaraLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProfessionalOneLayout
      basePath="/invitation/siddiq-tiara"
      brandLabel={siddiqTiaraTemplateData.invitation.brandName}
    >
      {children}
    </ProfessionalOneLayout>
  );
}
