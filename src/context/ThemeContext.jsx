import React, { createContext, useState } from 'react';

// Cria o contexto para o tema
export const ThemeContext = createContext();

// ThemeProvider é responsável por fornecer o estado do tema
export const ThemeProvider = ({ children }) => {
  // Estado para controlar o modo (false = claro, true = escuro)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Função para alternar o tema
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
