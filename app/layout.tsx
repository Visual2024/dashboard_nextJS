import { fonts_1, nunito, } from './ui/Fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fonts_1.className}  antialiased bg-gray-400`}>
        <h1 className={`${nunito.className} text-3xl  mt-10 ml-10 text-center font-[800]`}>Bienvenido</h1>
        {children}
      </body>
    </html>
  );
}
