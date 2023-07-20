import classNames from 'classnames';
import { useGlobalContext } from '@/context/context';
import { Header } from '../components';

export default function Home() {
  const { isDarkTheme } = useGlobalContext();
  const themeStyle = isDarkTheme
    ? 'bg-light-grey-secondary'
    : 'bg-creame-white';
  return (
    <main
      className={classNames(
        themeStyle,
        'min-h-screen transition duration-300'
      )}
    >
      <Header />
    </main>
  );
}
