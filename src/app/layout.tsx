import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header/>
        <main className='px-5 flex justify-center w-full py-10' style={{ minHeight: 'calc(100vh - 56px - 56px - 2px)' }}>
          <section className='max-w-screen-xl w-full'>
            <AntdRegistry>{children}</AntdRegistry>
          </section>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
