import { createContext, useContext, useState, useCallback } from 'react';

const CursorContext = createContext(null);

export function CursorProvider({ children }) {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorText, setCursorText] = useState('');

  const enterHover = useCallback((text = '') => {
    setCursorVariant('hover');
    setCursorText(text);
  }, []);

  const enterText = useCallback((text = '') => {
    setCursorVariant('text');
    setCursorText(text);
  }, []);

  const leaveHover = useCallback(() => {
    setCursorVariant('default');
    setCursorText('');
  }, []);

  const hideCursor = useCallback(() => {
    setCursorVariant('hidden');
  }, []);

  return (
    <CursorContext.Provider
      value={{
        cursorVariant,
        cursorText,
        setCursorVariant,
        setCursorText,
        enterHover,
        enterText,
        leaveHover,
        hideCursor,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
}

export default CursorContext;
