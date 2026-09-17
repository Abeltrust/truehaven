import { useHashRoute, type RoutePath } from '@/router';

const FOOTER_LINKS: { label: string; path: RoutePath }[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Areas of Focus', path: '/areas-of-focus' },
  { label: 'Approach', path: '/approach' },
  { label: 'Services & Fees', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export function Footer() {
  const [, navigate] = useHashRoute();

  return (
    <footer className="bg-charcoal-800 text-ivory-100">
      <div className="mx-auto max-w-8xl px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-3 lg:gap-16">
          {/* Brand */}
          <div>
            <p className="font-serif text-3xl text-ivory-50">Kathy Stowell</p>
            <p className="text-sm uppercase tracking-wider-2 text-taupe-300 mt-2">
              Clinical Hypnotherapist
            </p>
            <p className="mt-6 text-ivory-200/80 italic font-serif text-lg leading-relaxed max-w-xs">
              Compassionate support. Deeper understanding. Greater choice.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm uppercase tracking-wider-2 text-taupe-400 mb-5">Explore</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-ivory-200/80 hover:text-gold-300 transition-colors text-base"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-wider-2 text-taupe-400 mb-5">Contact</h3>
            <ul className="space-y-3 text-ivory-200/80">
              <li>
                <span className="block text-taupe-400 text-xs uppercase tracking-wider mb-0.5">Name</span>
                Katie Jo Stowell
              </li>
              <li>
                <a
                  href="mailto:katie.jo.stowell@protonmail.com"
                  className="hover:text-gold-300 transition-colors break-all"
                >
                  katie.jo.stowell@protonmail.com
                </a>
              </li>
              <li>
                <a href="tel:7602719994" className="hover:text-gold-300 transition-colors">
                  760-271-9994
                </a>
              </li>
              <li>Santa Cruz, USA</li>
            </ul>
          </div>
        </div>

        <div className="ornament-line w-full mt-14 mb-8" aria-hidden="true" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-taupe-400">
          <p>&copy; {new Date().getFullYear()} Kathy Stowell. All rights reserved.</p>
          <div className="flex gap-6">
            <button
              onClick={() => navigate('/privacy-policy')}
              className="hover:text-gold-300 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigate('/terms')}
              className="hover:text-gold-300 transition-colors"
            >
              Terms &amp; Disclaimer
            </button>
          </div>
        </div>

        <p className="mt-8 text-xs text-taupe-500/70 leading-relaxed max-w-3xl">
          The content on this website is for informational purposes only and does not constitute
          medical advice, diagnosis, or treatment. Hypnotherapy is a complementary approach and is
          not a substitute for professional medical or psychological care. Please consult a qualified
          healthcare provider for any medical concerns.
        </p>
      </div>
    </footer>
  );
}
