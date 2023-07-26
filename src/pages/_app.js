import { AppProvider } from '../context/context';
import '../styles/globals.css';
import { Inter } from 'next/font/google';

const nunitoSans = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <main className={`${nunitoSans.variable} font-inter`}>
        <Component {...pageProps} />
      </main>
    </AppProvider>
  );
}
