import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useHashRoute, type RoutePath } from '@/router';

const NAV_LINKS: { label: string; path: RoutePath }[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Areas of Focus', path: '/areas-of-focus' },
  { label: 'Approach', path: '/approach' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [route, navigate] = useHashRoute();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [route]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-ivory-50/95 backdrop-blur-md shadow-[0_1px_30px_rgba(54,50,46,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto max-w-8xl px-6 lg:px-12" aria-label="Main navigation">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <button
              onClick={() => navigate('/')}
              className="text-left group"
              aria-label="Kathy Stowell — home"
            >
              <span className="block font-serif text-2xl lg:text-3xl text-charcoal-800 leading-none tracking-wide transition-colors group-hover:text-sage-600">
                Kathy Stowell
              </span>
              <span className="block text-[0.625rem] lg:text-[0.6875rem] uppercase tracking-wider-2 text-taupe-500 mt-0.5">
                Clinical Hypnotherapist
              </span>
              <span className="block text-[0.6rem] lg:text-[0.625rem] tracking-wider text-sage-500/80 italic mt-0.5">
                Truth Within Therapy
              </span>
            </button>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className={`relative text-sm tracking-wide transition-colors py-2 ${
                      route === link.path
                        ? 'text-sage-600'
                        : 'text-charcoal-600 hover:text-sage-600'
                    }`}
                    aria-current={route === link.path ? 'page' : undefined}
                  >
                    {link.label}
                    <span
                      className={`absolute left-0 right-0 -bottom-0.5 h-px bg-gold-300 transition-all duration-300 ${
                        route === link.path ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={() => navigate('/contact')}
              className="hidden lg:inline-flex items-center px-6 py-3 rounded-full btn-gradient text-white text-sm tracking-wide font-medium"
            >
              Schedule a Consultation
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden p-2 text-charcoal-700"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-charcoal-900/30 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-0 right-0 bg-ivory-50 shadow-xl rounded-b-3xl mx-4 transition-transform duration-400 ${
            menuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <ul className="flex flex-col p-6 gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <button
                  onClick={() => navigate(link.path)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl text-lg font-serif transition-colors ${
                    route === link.path
                      ? 'bg-sage-100 text-sage-700'
                      : 'text-charcoal-700 hover:bg-ivory-200'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="mt-2">
              <button
                onClick={() => navigate('/contact')}
                className="w-full px-4 py-4 rounded-xl btn-gradient text-white text-center tracking-wide font-medium"
              >
                Schedule a Consultation
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
