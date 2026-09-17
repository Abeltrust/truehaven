import { useEffect, useState, useCallback } from 'react';

export type RoutePath =
  | '/'
  | '/about'
  | '/areas-of-focus'
  | '/approach'
  | '/services'
  | '/contact'
  | '/privacy-policy'
  | '/terms';

export function getRouteFromHash(): RoutePath {
  const hash = window.location.hash.replace('#', '');
  const valid: RoutePath[] = [
    '/',
    '/about',
    '/areas-of-focus',
    '/approach',
    '/services',
    '/contact',
    '/privacy-policy',
    '/terms',
  ];
  if (valid.includes(hash as RoutePath)) return hash as RoutePath;
  return '/';
}

export function useHashRoute(): [RoutePath, (path: RoutePath) => void] {
  const [route, setRoute] = useState<RoutePath>(() =>
    typeof window !== 'undefined' ? getRouteFromHash() : '/'
  );

  useEffect(() => {
    const onChange = () => {
      setRoute(getRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  const navigate = useCallback((path: RoutePath) => {
    window.location.hash = path;
  }, []);

  return [route, navigate];
}
