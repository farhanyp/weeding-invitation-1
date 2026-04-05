import { TopNavbar } from "@/app/beranda/sections/top-navbar";

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopNavbar />
      {children}
    </>
  );
}


