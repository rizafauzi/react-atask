'use client';
import { useState, useEffect } from 'react';

function getWindowDimensions({
  height,
  width,
}: {
  height: number;
  width: number;
}) {
  if (typeof window !== 'undefined') {
    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;
    return {
      isMobile: windowWidth <= 880,
      windowHeight,
      windowWidth,
    };
  }
  return {
    isMobile: false,
    windowHeight: height,
    windowWidth: width,
  };
}

export default function useWindowDimensions(
  defaultSize: { height: number; width: number } = { height: 0, width: 0 }
) {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(defaultSize)
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions(defaultSize));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
