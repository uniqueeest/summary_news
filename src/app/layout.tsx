import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import '../styles';

const workSans = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SNews',
  description: 'summary news app',
  manifest: '/manifest.json',
  themeColor: '#ffffff',
  viewport: 'width=device-width, initial-scale=1',
  icons: [
    { rel: 'icon', url: '/icons/icon.png' },
    { rel: 'apple-touch-icon', url: '/icons/icon.png' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
