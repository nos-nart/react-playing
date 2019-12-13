import React from 'react';
import storage from 'local-storage-fallback';

export default function useTheme() {
  const initialTheme = storage.getItem('theme') || 'light';
  const [theme, _setTheme] = React.useState(initialTheme);

  React.useEffect(() => {
    storage.setItem('theme', theme)
  }, [theme]);

  return {
    theme,
    setTheme: (theme) => _setTheme(theme)
  };
};
