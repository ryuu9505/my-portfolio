import { useEffect, useState } from 'react';

export default function useSearchOpen() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const root = document.getElementById('root');
    if (isSearchOpen) {
      document.body.classList.add('blur-active');
      if (root) root.classList.add('blur-active');
    } else {
      document.body.classList.remove('blur-active');
      if (root) root.classList.remove('blur-active');
    }
    return () => {
      document.body.classList.remove('blur-active');
      if (root) root.classList.remove('blur-active');
    };
  }, [isSearchOpen]);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);
  const toggleSearch = () => setIsSearchOpen((open) => !open);

  return {
    isSearchOpen,
    setIsSearchOpen,
    openSearch,
    closeSearch,
    toggleSearch,
  };
}
