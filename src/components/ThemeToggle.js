import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { themeToggle } = useContext(ThemeContext);

  return <button onClick={themeToggle}>Toggle the theme</button>;
};

export default ThemeToggle;
