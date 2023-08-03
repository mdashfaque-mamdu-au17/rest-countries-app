import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const AppContext = createContext();

const getInitialDarkMode = () => {
  if (typeof window !== 'undefined') {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme:dark)'
    ).matches;
    const storedDarkMode = localStorage.getItem('darkTheme');
    if (storedDarkMode) {
      return storedDarkMode === 'true' ? true : false;
    } else {
      return prefersDarkMode;
    }
  }
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState();

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDarkTheme(getInitialDarkMode());
    }
  }, []);

  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
