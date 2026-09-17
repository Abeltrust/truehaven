import { TreePine, Baby, Repeat, ArrowRight, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Ornament } from '@/components/Ornament';
import { CTAButton, SectionHeading } from '@/components/ui';

const EUCALYPTUS_IMAGE =
  'https://images.pexels.com/photos/8795345/pexels-photo-8795345.jpeg?auto=compress&cs=tinysrgb&w=1200';
const FOREST_PATH =
  'https://images.pexels.com/photos/24351804/pexels-photo-24351804.jpeg?auto=compress&cs=tinysrgb&w=1600';

const FOCUS_AREAS = [
  {
    icon: TreePine,
    title: 'Ancestral Healing',
    intro: 'The patterns we inherit often speak louder than the words we choose.',
    text: 'Kathy’s work can help clients explore family patterns, inherited emotional experiences, and unresolved dynamics that may continue to influence present-day thoughts, relationships, and behaviors. Rather than viewing these patterns as fixed, this approach invites curiosity about where they came from — and whether they still serve the person you are becoming.',
    points: [
      'Family dynamics and their lasting influence',
      'Inherited emotional responses and beliefs',
      'Unresolved experiences passed through generations',
      'Gentle exploration without blame or judgment',
    ],
  },
  {
    icon: Baby,
    title: 'Inner-Child Dynamics',
    intro: 'The parts of us that were overlooked still deserve to be met with care.',
    text: 'The work may involve reconnecting with neglected, hurt, or previously overlooked parts of one’s experience and developing greater understanding and compassion toward them. This is not about reliving pain, but about creating space for the younger parts of ourselves to be seen, understood, and integrated with gentleness.',
    points: [
      'Reconnecting with earlier parts of your experience',
      'Developing compassion toward neglected emotions',
      'Understanding how early experiences shape present responses',
      'Creating a gentle, non-judgmental inner dialogue',
    ],
  },
  {
    icon: Repeat,
    title: 'Patterns & Triggers',
    intro: 'When we understand the pattern, we begin to have a choice in it.',
    text: 'Kathy helps clients explore recurring emotional responses, triggers, relationship patterns, and unresolved experiences that may continue to affect their lives. By bringing awareness to these patterns, it becomes possible to respond differently — not by forcing change, but by understanding what drives the response in the first place.',
    points: [
      'Recurring relationship patterns and their roots',
      'Emotional triggers and what they may be pointing to',
      'Unresolved experiences that continue to resurface',
      'Developing greater awareness and personal choice',
    ],
  },
];

export function AreasOfFocusPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 bg-gradient-to-b from-blue-50 to-ivory-50 relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-sage-100/40 blur-3xl animate-float-slow" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-wider-2 text-gold-500 mb-4 font-medium">
              Areas of Focus
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-800 leading-tight text-balance">
              Understanding the patterns beneath the surface
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-lg text-charcoal-500 leading-relaxed max-w-2xl mx-auto">
              Sometimes the experiences shaping our present began long before we were consciously
              aware of them.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <Ornament className="mt-8" />
          </Reveal>
        </div>
      </section>

      {/* Focus areas */}
      <section className="py-24 lg:py-32 bg-ivory-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-12 space-y-24 lg:space-y-32">
          {FOCUS_AREAS.map((area, i) => (
            <div key={area.title} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Alternating layout */}
              <Reveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative">
                  <div className="rounded-[2rem] overflow-hidden shadow-xl shadow-charcoal-200/20">
                    <img
                      src={i === 0 ? FOREST_PATH : i === 1 ? EUCALYPTUS_IMAGE : FOREST_PATH}
                      alt={
                        i === 0
                          ? 'A tranquil forest path illuminated by soft sunrise light'
                          : 'Eucalyptus leaves against a neutral wall, symbolizing tranquility'
                      }
                      className="w-full h-[280px] sm:h-[360px] lg:h-[500px] object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className={`absolute ${i % 2 === 1 ? '-bottom-5 -left-5' : '-bottom-5 -right-5'} w-24 h-24 border-2 border-gold-300/50 ${i % 2 === 1 ? 'rounded-bl-3xl border-r-0 border-t-0' : 'rounded-br-3xl border-l-0 border-t-0'}`}
                    aria-hidden="true"
                  />
                </div>
              </Reveal>

              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <Reveal>
                  <div className="w-14 h-14 rounded-2xl bg-sage-100 flex items-center justify-center mb-5">
                    <area.icon size={26} className="text-sage-600" strokeWidth={1.5} />
                  </div>
                </Reveal>
                <Reveal delay={1}>
                  <p className="font-serif text-xl text-gold-500 italic mb-2">{area.intro}</p>
                </Reveal>
                <Reveal delay={1}>
                  <h2 className="font-serif text-4xl text-charcoal-800 mb-5">{area.title}</h2>
                </Reveal>
                <Reveal delay={2}>
                  <p className="text-lg text-charcoal-600 leading-relaxed">{area.text}</p>
                </Reveal>
                <Reveal delay={3}>
                  <ul className="mt-6 space-y-3">
                    {area.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <Sparkles size={16} className="text-gold-400 mt-1 flex-shrink-0" strokeWidth={1.5} />
                        <span className="text-charcoal-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Important note */}
      <section className="py-20 bg-ivory-100">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-ivory-200 text-center">
              <p className="text-charcoal-600 leading-relaxed text-lg">
                This work is exploratory and supportive in nature. It does not constitute medical
                treatment, and Kathy does not claim to cure, diagnose, or treat specific medical
                conditions. If you have a medical or psychiatric concern, please consult a qualified
                healthcare provider.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 hero-grad relative overflow-hidden">
        <div className="absolute top-1/3 -right-10 w-64 h-64 rounded-full bg-sage-200/30 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <Ornament className="mb-8" />
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal-800 leading-tight text-balance">
              Ready to explore working together?
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <CTAButton to="/contact">Explore Working Together</CTAButton>
              <CTAButton to="/services" variant="secondary">
                Learn About Sessions <ArrowRight size={16} className="inline ml-1" />
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
