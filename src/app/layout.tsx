import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Govedina",
  description: "Premium Govedina - Premium Beef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen w-screen justify-center items-center overflow-hidden md:bg-[url('/assets/images/stefangospic_premium_baked_beef_stake_on_a_dark_plate_with_cl_1cee20bd-5a36-4781-88e1-90b9d02f78f5_2.webp')] md:bg-cover md:bg-center md:bg-no-repeat text-black">
        <div className="w-[80dvw] h-[80dvh]">
        {children}
        </div>
      </body>
    </html>
  );
}
