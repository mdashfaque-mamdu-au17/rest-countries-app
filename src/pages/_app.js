import { AppProvider } from '../context/context';
import '../styles/globals.css';
import { Nunito_Sans } from 'next/font/google';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunitoSans',
});
export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <main className={`${nunitoSans.variable} font-nunitoSans`}>
        <Component {...pageProps} />
      </main>
    </AppProvider>
  );
}
