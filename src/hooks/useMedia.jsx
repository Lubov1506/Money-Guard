import { useMediaQuery } from 'react-responsive';

export const useMedia = () => {
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  return {
    isDesktop,
    isTablet,
  };
};
