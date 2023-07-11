import { useEffect, useState } from 'react';

const usePlatform = () => {
  const [platform, setPlatform] = useState<string>('');
  const [isIos, setIsIos] = useState<boolean>(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase(),
      macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i,
      windowsPlatforms = /(win32|win64|windows|wince)/i,
      iosPlatforms = /(iphone|ipad|ipod)/i,
      os = null;

    if (macosPlatforms.test(userAgent)) {
      setPlatform('macos');
      setIsIos(true);
    } else if (iosPlatforms.test(userAgent)) {
      setPlatform('ios');
      setIsIos(true);
    } else if (windowsPlatforms.test(userAgent)) {
      setPlatform('windows');
      setIsIos(false);
    } else if (/android/.test(userAgent)) {
      setPlatform('android');
      setIsIos(false);
    } else if (!os && /linux/.test(userAgent)) {
      setPlatform('linux');
      setIsIos(false);
    }
  }, []);

  return {
    isIos,
    platform,
  };
};

export default usePlatform;
