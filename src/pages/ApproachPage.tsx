import { Compass, Lightbulb, Link2, Forward, Heart, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Ornament } from '@/components/Ornament';
import { CTAButton, SectionHeading } from '@/components/ui';

const STEPS = [
  {
    num: '01',
    icon: Compass,
    title: 'Explore',
    text: 'Begin by creating space to understand what is happening beneath the surface. This is a gentle, unrushed process of noticing — without pressure to arrive at answers quickly.',
  },
  {
    num: '02',
    icon: Lightbulb,
    title: 'Understand',
    text: 'Explore emotional wounds, family patterns, memories, and triggers that may be influencing current experiences. Understanding comes not from analyzing, but from allowing.',
  },
  {
    num: '03',
    icon: Link2,
    title: 'Reconnect',
    text: 'Reconnect with parts of yourself and your experience that may have been neglected, overlooked, or left unresolved. These parts often carry wisdom that was dismissed too early.',
  },
  {
    num: '04',
    icon: Forward,
    title: 'Move Forward',
    text: 'Develop greater self-awareness and begin releasing patterns that no longer serve you. Movement happens naturally when understanding is deep enough to hold it.',
  },
];

const PRINCIPLES = [
  {
    icon: Heart,
    title: 'Compassion',
    text: 'Every experience is met with gentleness, not judgment. You are never asked to go faster than feels right.',
  },
  {
    icon: Lightbulb,
    title: 'Curiosity',
    text: 'Rather than pathologizing what you feel, the work invites curiosity about what it might be pointing to.',
  },
  {
    icon: Heart,
    title: 'Respect',
    text: 'Your pace, your boundaries, and your understanding of your own experience are always respected.',
  },
];

export function ApproachPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 sage-grad relative overflow-hidden">
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-gold-100/30 blur-3xl animate-float-slow" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-wider-2 text-gold-500 mb-4 font-medium">
              The Approach
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-800 leading-tight text-balance">
              A compassionate process of understanding
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-lg text-charcoal-500 leading-relaxed max-w-2xl mx-auto">
              Kathy’s approach is grounded in compassion, curiosity, and respect. Together, you can
              explore the experiences and patterns that may be influencing your present without
              judgment.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <Ornament className="mt-8" />
          </Reveal>
        </div>
      </section>

      {/* Journey steps */}
      <section className="py-24 lg:py-32 bg-ivory-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="The Journey"
              title="Four gentle stages of exploration"
              subtitle="This is not a rigid program. These stages describe the spirit of the work — a natural unfolding rather than a fixed sequence."
            />
          </Reveal>

          <div className="mt-20 space-y-8 lg:space-y-12">
            {STEPS.map((step, i) => (
              <Reveal key={step.num} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
                  {/* Number circle */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-white border-2 border-gold-200 flex items-center justify-center shadow-sm">
                      <span className="font-serif text-3xl text-gold-400">{step.num}</span>
                    </div>
                    {/* Vertical connector */}
                    {i < STEPS.length - 1 && (
                      <div className="hidden lg:block absolute left-1/2 top-20 -translate-x-1/2 w-px h-full lg:h-24 bg-gradient-to-b from-gold-200 to-transparent" aria-hidden="true" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-3xl p-8 lg:p-10 border border-ivory-200 hover:shadow-lg hover:shadow-sage-100/40 transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-sage-100 flex items-center justify-center">
                        <step.icon size={20} className="text-sage-600" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-serif text-3xl text-charcoal-800">{step.title}</h3>
                    </div>
                    <p className="text-lg text-charcoal-600 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 lg:py-32 bg-ivory-100">
        <div className="mx-auto max-w-8xl px-6 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="Guiding Principles"
              title="The values that shape every session"
            />
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={(i + 1) as 1 | 2 | 3}>
                <div className="h-full text-center bg-gradient-to-b from-white to-ivory-100 rounded-3xl p-10 border border-ivory-200 hover:border-gold-200 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mx-auto mb-6">
                    <p.icon size={26} className="text-sage-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal-800 mb-4">{p.title}</h3>
                  <p className="text-charcoal-600 leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote section */}
      <section className="py-28 lg:py-40 bg-sage-700 relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-sage-600/40 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <Ornament className="mb-8" />
          </Reveal>
          <Reveal delay={1}>
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory-50 leading-relaxed italic text-balance">
              “The goal is not to erase your past, but to understand it differently — creating greater
              awareness, emotional freedom, and the possibility of responding from a place of choice.”
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-ivory-50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal-800 leading-tight text-balance">
              Learn about sessions and fees
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-5 text-lg text-charcoal-500 leading-relaxed">
              Transparent, simple ways to begin — starting with a complimentary consultation.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <CTAButton to="/services">Learn About Sessions</CTAButton>
              <CTAButton to="/contact" variant="secondary">
                Get in Touch <ArrowRight size={16} className="inline ml-1" />
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
