import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const AppContext = createContext();

const getInitialDarkMode = () => {
  if (typeof window === 'undefined') {
    return;
  }
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;
  const storedDarkMode = localStorage.getItem('darkTheme') === 'true';
  console.log(storedDarkMode, 'stored dark mode');
  return storedDarkMode || prefersDarkMode;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    getInitialDarkMode()
  );

  console.log(isDarkTheme, 'current state');
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    console.log(newDarkTheme, 'new dark theme');
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
