import { Phone, Mail, Shield, Heart, HandHeart, Clock, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Ornament } from '@/components/Ornament';
import { CTAButton, SectionHeading } from '@/components/ui';
import type { RoutePath } from '@/router';

const CURTAIN_IMAGE =
  'https://images.pexels.com/photos/8358607/pexels-photo-8358607.jpeg?auto=compress&cs=tinysrgb&w=1200';

const SERVICES: {
  badge: string;
  title: string;
  price: string;
  detail: string;
  features: string[];
  cta: string;
  ctaLink: RoutePath;
  highlight: boolean;
}[] = [
  {
    badge: 'Complimentary',
    title: '15-Minute Consultation',
    price: 'No cost',
    detail: 'Phone or in person',
    features: [
      'A gentle, no-pressure introduction',
      'Space to ask questions about Kathy’s approach',
      'Opportunity to explore whether this work feels right for you',
    ],
    cta: 'Schedule a Consultation',
    ctaLink: '/contact',
    highlight: false,
  },
  {
    badge: 'Starting Point',
    title: 'Initial Session',
    price: '$225',
    detail: '1.5 hours',
    features: [
      'Intake and personal history',
      'Beginning the therapeutic process',
      'Time to explore your story at a comfortable pace',
    ],
    cta: 'Schedule a Consultation',
    ctaLink: '/contact',
    highlight: true,
  },
  {
    badge: 'Ongoing',
    title: 'Hourly Sessions',
    price: '$150',
    detail: 'Per hour',
    features: [
      'Standard ongoing session rate',
      'Continued exploration at your pace',
      'Building on the work established in your initial session',
    ],
    cta: 'Schedule a Consultation',
    ctaLink: '/contact',
    highlight: false,
  },
];

const TRUST_PRINCIPLES = [
  {
    icon: Shield,
    title: 'Confidentiality',
    text: 'Your personal experiences are treated with care and respect.',
  },
  {
    icon: Heart,
    title: 'Safety',
    text: 'The practice is intended to provide a supportive environment where clients can explore their experiences at their own pace.',
  },
  {
    icon: HandHeart,
    title: 'Trust',
    text: 'Meaningful therapeutic work begins with a relationship built on respect, openness, and trust.',
  },
];

export function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 bg-gradient-to-b from-ivory-100 to-ivory-50 relative overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-gold-100/25 blur-3xl animate-float-slow" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-wider-2 text-gold-500 mb-4 font-medium">
              Services &amp; Fees
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-800 leading-tight text-balance">
              Ways to begin, simply and transparently
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-lg text-charcoal-500 leading-relaxed max-w-2xl mx-auto">
              Every journey starts with a conversation. Here is a clear outline of what to expect —
              without surprises.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <Ornament className="mt-8" />
          </Reveal>
        </div>
      </section>

      {/* Complimentary consultation highlight */}
      <section className="py-16 lg:py-20 bg-ivory-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <Reveal>
            <div className="relative rounded-[2rem] bg-gradient-to-br from-sage-600 to-sage-700 p-8 sm:p-10 lg:p-14 text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-sage-500/30 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <Sparkles size={28} className="text-gold-300 mx-auto mb-4" strokeWidth={1.5} />
                <p className="text-sm uppercase tracking-wider-2 text-gold-200 mb-3">
                  Complimentary
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory-50 leading-tight">
                  15-Minute Consultation
                </h2>
                <p className="mt-5 text-lg text-ivory-100/90 leading-relaxed max-w-xl mx-auto">
                  A complimentary 15-minute consultation is available by phone or in person. This is
                  the simplest, lowest-friction way to discover whether Kathy’s approach feels right
                  for you.
                </p>
                <div className="mt-8">
                  <CTAButton to="/contact" variant="secondary" className="bg-ivory-50 text-sage-700 border-transparent hover:bg-white">
                    Schedule a Consultation
                  </CTAButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20 lg:py-28 bg-ivory-100">
        <div className="mx-auto max-w-8xl px-6 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="Sessions &amp; Fees"
              title="Clear, transparent pricing"
              subtitle="No hidden costs. No pressure. Just clear information to help you decide."
            />
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-8 items-stretch">
            {SERVICES.map((svc, i) => (
              <Reveal key={svc.title} delay={(i + 1) as 1 | 2 | 3}>
                <div
                  className={`h-full rounded-3xl p-8 lg:p-10 border transition-all duration-400 hover:-translate-y-1 flex flex-col ${
                    svc.highlight
                      ? 'bg-white border-gold-300 shadow-xl shadow-gold-100/40 relative'
                      : 'bg-white border-ivory-200 shadow-sm hover:shadow-lg'
                  }`}
                >
                  {svc.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-400 text-white text-xs uppercase tracking-wider px-4 py-1 rounded-full">
                      Most Common Starting Point
                    </span>
                  )}
                  <p className="text-xs uppercase tracking-wider-2 text-gold-500 font-medium mb-2">
                    {svc.badge}
                  </p>
                  <h3 className="font-serif text-2xl text-charcoal-800 mb-1">{svc.title}</h3>
                  <p className="text-sm text-taupe-500 mb-5">{svc.detail}</p>
                  <p className="font-serif text-4xl text-sage-600 mb-6">{svc.price}</p>
                  <ul className="space-y-3 flex-1 mb-8">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-charcoal-600">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-sage-100 flex items-center justify-center mt-0.5">
                          <Sparkles size={11} className="text-sage-600" strokeWidth={2} />
                        </span>
                        <span className="text-base">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <CTAButton to={svc.ctaLink} variant="secondary" className="w-full">
                    {svc.cta}
                  </CTAButton>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Confidentiality */}
      <section className="py-24 lg:py-32 bg-ivory-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-blue-100/30 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-8xl px-6 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="Trust &amp; Confidentiality"
              title="A foundation of safety and respect"
            />
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {TRUST_PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={(i + 1) as 1 | 2 | 3}>
                <div className="h-full bg-white rounded-3xl p-10 border border-ivory-200 text-center hover:shadow-lg hover:shadow-sage-100/40 transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-6">
                    <p.icon size={26} className="text-sage-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal-800 mb-4">{p.title}</h3>
                  <p className="text-charcoal-600 leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={3}>
            <p className="mt-10 text-center text-sm text-taupe-500 max-w-2xl mx-auto leading-relaxed">
              This information is provided to reassure and inform. It is not a legal guarantee.
              Professional and ethical guidelines regarding confidentiality are followed in
 accordance with established practice standards.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact section — Begin With a Conversation */}
      <section className="py-24 lg:py-32 sage-grad relative overflow-hidden">
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 rounded-full bg-gold-100/30 blur-3xl animate-float-slow" aria-hidden="true" />
        <div className="relative mx-auto max-w-8xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-wider-2 text-gold-500 mb-3 font-medium">
                  Begin With a Conversation
                </p>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="font-serif text-4xl md:text-5xl text-charcoal-800 leading-tight text-balance">
                  Let’s begin with a conversation.
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-6 text-lg text-charcoal-600 leading-relaxed">
                  If you have questions about Kathy’s approach, services, or would simply like to
                  explore whether working together feels right for you, you are welcome to get in
                  touch.
                </p>
              </Reveal>

              <Reveal delay={3}>
                <div className="mt-8 space-y-4">
                  <p className="font-serif text-2xl text-charcoal-800">Katie Jo Stowell</p>
                  <a
                    href="mailto:katie.jo.stowell@protonmail.com"
                    className="flex items-center gap-3 text-charcoal-600 hover:text-sage-600 transition-colors group"
                  >
                    <Mail size={18} strokeWidth={1.5} className="text-sage-500" />
                    <span className="break-all group-hover:underline underline-offset-4">
                      katie.jo.stowell@protonmail.com
                    </span>
                  </a>
                  <a
                    href="tel:7602719994"
                    className="flex items-center gap-3 text-charcoal-600 hover:text-sage-600 transition-colors group"
                  >
                    <Phone size={18} strokeWidth={1.5} className="text-sage-500" />
                    <span className="group-hover:underline underline-offset-4">760-271-9994</span>
                  </a>
                  <div className="flex items-center gap-3 text-charcoal-600">
                    <MapPin size={18} strokeWidth={1.5} className="text-sage-500" />
                    <span>San Diego, CA 92024</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={4}>
                <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                  <CTAButton to="/contact">Schedule a Complimentary Consultation</CTAButton>
                  <a
                    href="mailto:katie.jo.stowell@protonmail.com"
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 bg-white/80 text-sage-700 border border-sage-300 hover:bg-white hover:shadow-md backdrop-blur-sm"
                  >
                    Send an Email <ArrowRight size={15} className="inline ml-2" />
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={2}>
              <div className="relative rounded-[2rem] overflow-hidden shadow-xl">
                <img
                  src={CURTAIN_IMAGE}
                  alt="Sunlight casting soft shadows through a lace curtain in a cozy room"
                  className="w-full h-[480px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-5 flex items-center gap-4">
                  <Clock size={24} className="text-sage-600" strokeWidth={1.5} />
                  <p className="text-charcoal-700 text-sm leading-relaxed">
                    Availability and scheduling details are shared directly during your consultation
                    request.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
