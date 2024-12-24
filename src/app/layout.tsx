//@3rd Party
import React from 'react';
import localFont from 'next/font/local';
import Script from 'next/script';
//______________________________________________________________

//@Components
import { ProviderLayout } from '@/app/components/ProviderLayout';
//______________________________________________________________

//@Styles
import '../styles/globals.css';
//______________________________________________________________

//@Types
import type { Metadata } from 'next';
//______________________________________________________________

const iranSans = localFont({
  src: [
    {
      path: './fonts/IranSans/iran-sans-mobile-fa-num-light.ttf',
      weight: '300',
    },
    {
      path: './fonts/IranSans/iran-sans-mobile-fa-num.ttf',
      weight: '400',
    },
    {
      path: './fonts/IranSans/iran-sans-mobile-fa-num-medium.ttf',
      weight: '500',
    },
    {
      path: './fonts/IranSans/iran-sans-mobile-fa-num-bold.ttf',
      weight: '700',
    },
    {
      path: './fonts/IranSans/iran-sans-mobile-fa-num-black.ttf',
      weight: '900',
    },
  ],
  display: 'fallback',
  variable: '--font-iran-sans',
});

export const metadata: Metadata = {
  title: 'Adilar addon',
  description: "Adilar's addon for employer and candidate",
  icons: {
    icon: [
      {
        type: 'image/png',
        sizes: '32x32',
        url: '/images/manifest/favicon-32x32.png',
      },
      {
        type: 'image/png',
        sizes: '16x16',
        url: '/images/manifest/favicon-16x16.png',
      },
    ],
    apple: {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/images/manifest/apple-touch-icon.png',
    },
    other: [
      {
        rel: 'mask-icon',
        url: '/images/manifest/safari-pinned-tab.svg',
        color: '#5352ED',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={iranSans.className}
        style={{
          maxHeight: '100vh',
          height: '100%',
          margin: '0 auto',
        }}
      >
        <ProviderLayout>{children}</ProviderLayout>
        <Script id="clarity-script" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");`}
        </Script>
      </body>
    </html>
  );
}
