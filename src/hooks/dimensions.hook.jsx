import { useEffect, useState } from 'react';

const useResize = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { width, height };
};

export default useResize;
