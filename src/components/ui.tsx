import { useHashRoute, type RoutePath } from '@/router';

type CTAButtonProps = {
  children: React.ReactNode;
  to: RoutePath;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

export function CTAButton({ children, to, variant = 'primary', className = '' }: CTAButtonProps) {
  const [, navigate] = useHashRoute();

  const base =
    'inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm tracking-wide transition-all duration-300 font-medium';

  const styles = {
    primary: 'btn-gradient text-white',
    secondary:
      'bg-white text-sage-700 border-2 border-sage-400 hover:bg-sage-50 hover:border-sage-500 hover:shadow-md hover:shadow-sage-200/60 hover:-translate-y-0.5 backdrop-blur-sm',
    ghost: 'text-sage-600 hover:text-sage-500 underline-offset-4 hover:underline px-2 py-1 font-semibold',
  };

  return (
    <button onClick={() => navigate(to)} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-2xl ${
        align === 'center' ? 'mx-auto' : ''
      } ${className}`}
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-wider-2 text-gold-500 mb-3 font-semibold">{eyebrow}</p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl text-charcoal-800 leading-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg text-charcoal-500 leading-relaxed text-balance">{subtitle}</p>
      )}
    </div>
  );
}
