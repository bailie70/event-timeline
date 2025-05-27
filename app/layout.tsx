import type { Metadata } from 'next';
import { Inter, Permanent_Marker } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-permanent-marker',
});

export const metadata: Metadata = {
  title: 'Our Romantic Timeline',
  description: 'A journey of love, laughter, and countless memories',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${permanentMarker.variable}`}>{children}</body>
    </html>
  );
} 