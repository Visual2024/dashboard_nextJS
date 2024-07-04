import { inter } from './ui/Fonts';

import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased`}>
       
        {children}
        <footer className='bg-cyan-800 p-2 text-center text-white'>Hecho con amor por facundo</footer>
      </body>
    </html>
  );
}
