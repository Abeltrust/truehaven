import { ArrowRight, Award, HeartHandshake, Clock, Building2 } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Ornament } from '@/components/Ornament';
import { CTAButton, SectionHeading } from '@/components/ui';
import { PortraitPlaceholder } from '@/components/PortraitPlaceholder';

const EXPERIENCE_ITEMS = [
  {
    icon: Award,
    title: 'Clinical Hypnotherapist',
    text: 'Graduated from the Institute of Neurosomatic Sciences and has practiced continuously since 2003.',
  },
  {
    icon: HeartHandshake,
    title: 'Psychiatric Nursing',
    text: 'Supported adults and adolescents across hospitals and private clinics before establishing her practice.',
  },
  {
    icon: Clock,
    title: 'Two Decades of Practice',
    text: 'Working in private practice without interruption since June 2003 — more than twenty years of experience.',
  },
  {
    icon: Building2,
    title: 'Diverse Clinical Settings',
    text: 'Worked with individuals affected by eating disorders, substance abuse, emotional and behavioral difficulties.',
  },
];

export function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 sage-grad relative overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl animate-float-slow" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-wider-2 text-gold-500 mb-4 font-medium">
              About Kathy
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-800 leading-tight text-balance">
              Meet Kathy
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-lg text-charcoal-500 leading-relaxed max-w-2xl mx-auto">
              A clinician with the heart of a healer and the experience of two decades in private
              practice.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <Ornament className="mt-8" />
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 bg-ivory-50">
        <div className="mx-auto max-w-8xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal>
              <div className="relative">
                <PortraitPlaceholder
                  className="rounded-[2rem] shadow-xl shadow-charcoal-200/30 w-full h-[360px] sm:h-[480px] lg:h-[560px]"
                />
                <div className="absolute -bottom-6 -left-6 w-28 h-28 border-l-2 border-b-2 border-gold-300/60 rounded-bl-3xl" aria-hidden="true" />
                <div className="absolute -top-6 -right-6 w-28 h-28 border-r-2 border-t-2 border-sage-300/60 rounded-tr-3xl" aria-hidden="true" />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <h2 className="font-serif text-4xl md:text-5xl text-charcoal-800 leading-tight">
                  The story behind the practice
                </h2>
              </Reveal>
              <Reveal delay={1}>
                <div className="mt-6 space-y-5 text-lg text-charcoal-600 leading-relaxed">
                  <p>
                    Kathy Stowell became a Clinical Hypnotherapist in 2003, graduating from the
                    Institute of Neurosomatic Sciences. Her path into this work, however, began long
                    before.
                  </p>
                  <p>
                    Before establishing her private practice, Kathy worked as a psychiatric nurse. She
                    supported adults and adolescents experiencing a range of mental health and
                    behavioral concerns — including eating disorders, substance abuse, emotional and
                    behavioral difficulties, and complex personal circumstances.
                  </p>
                  <p>
                    Working across various hospitals and private clinics gave Kathy a deep
                    appreciation for the complexity of each person's story. It also shaped the
                    compassionate, unhurried approach that defines her practice today.
                  </p>
                  <p>
                    Since June 2003, Kathy has worked continuously in private practice, bringing more
                    than two decades of experience to her work with adults and adolescents who are
                    ready to explore what lies beneath the surface.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={2}>
                <div className="mt-8 flex items-center gap-4 flex-wrap">
                  <CTAButton to="/approach" variant="ghost">
                    Explore Her Approach <ArrowRight size={16} className="inline ml-1" />
                  </CTAButton>
                  <a
                    href="https://www.linkedin.com/in/kathy-s-624332259/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Kathy Stowell on LinkedIn"
                    className="group flex items-center justify-center w-10 h-10 rounded-full border border-sage-300 text-sage-500 hover:bg-sage-500 hover:border-sage-500 hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {/* LinkedIn SVG icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Experience grid */}
      <section className="py-24 lg:py-32 bg-ivory-100">
        <div className="mx-auto max-w-8xl px-6 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="Experience & Background"
              title="Two decades of dedicated practice"
            />
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
            {EXPERIENCE_ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="group flex gap-5 bg-white rounded-2xl p-8 border border-ivory-200 hover:shadow-lg hover:shadow-sage-100/50 transition-all duration-400 hover:-translate-y-0.5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center transition-colors group-hover:bg-sage-200">
                    <item.icon size={22} className="text-sage-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-charcoal-800 mb-2">{item.title}</h3>
                    <p className="text-charcoal-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy quote */}
      <section className="py-28 lg:py-40 bg-gradient-to-b from-ivory-50 to-sage-50 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gold-100/20 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <Ornament className="mb-8" />
          </Reveal>
          <Reveal delay={1}>
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal-700 leading-relaxed italic text-balance">
              “The most meaningful work happens when someone feels safe enough to look honestly at
              what has shaped them — and gentle enough to meet it with understanding.”
            </blockquote>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-sm uppercase tracking-wider-2 text-taupe-500">Kathy Stowell</p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-ivory-50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal-800 leading-tight text-balance">
              Curious about working together?
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-5 text-lg text-charcoal-500 leading-relaxed">
              Learn about Kathy’s areas of focus or reach out to begin a conversation.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <CTAButton to="/areas-of-focus">Areas of Focus</CTAButton>
              <CTAButton to="/contact" variant="secondary">Get in Touch</CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
