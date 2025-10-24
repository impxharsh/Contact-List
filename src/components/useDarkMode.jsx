import React, { useState, useEffect } from 'react';

function useDarkMode() {
  // 1. Check localStorage for a saved theme, default to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // 2. 'colorTheme' is the opposite theme, used for toggling
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    
    // 3. Update the <html> tag's class
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    
    // 4. Save the user's choice to localStorage
    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]); // Re-run this effect when the theme changes

  // 5. This function will be called by the button
  const toggleTheme = () => {
    setTheme(colorTheme);
  };

  // 6. Return the *next* theme and the function to change it
  return [colorTheme, toggleTheme];
}

export default useDarkMode;
