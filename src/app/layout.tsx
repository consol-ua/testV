import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vyriy'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="font-default antialiased relative"
      >
        <div className="font-extra absolute bottom-12 left-8 sm:left-14 text-[10px] uppercase leading-[20.6px] tracking-[0.4em] text-[#B0B0B0] font-light">
          © 2024 vyriy.com
        </div>
        {children}
      </body>
    </html>
  );
}
