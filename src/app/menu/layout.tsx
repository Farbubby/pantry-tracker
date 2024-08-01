import Navbar from "@/components/navbar";

export default function MenuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="lg:px-16 md:px-8 px-4 pb-8">{children}</div>
    </>
  );
}
