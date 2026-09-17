import {
  Sparkles,
  Heart,
  Compass,
  Shield,
  TreePine,
  Baby,
  Repeat,
  Target,
  MessageSquare,
  HandHeart,
  Users,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  MapPin,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Ornament } from '@/components/Ornament';
import { CTAButton, SectionHeading } from '@/components/ui';
import { PortraitPlaceholder } from '@/components/PortraitPlaceholder';

const HERO_IMAGE =
  'https://images.pexels.com/photos/30175898/pexels-photo-30175898.jpeg?auto=compress&cs=tinysrgb&w=1600';
const FOREST_IMAGE =
  'https://images.pexels.com/photos/35191135/pexels-photo-35191135.jpeg?auto=compress&cs=tinysrgb&w=1600';
const LAKE_IMAGE =
  'https://images.pexels.com/photos/2301172/pexels-photo-2301172.jpeg?auto=compress&cs=tinysrgb&w=1600';
const TEA_IMAGE =
  'https://images.pexels.com/photos/15738056/pexels-photo-15738056.jpeg?auto=compress&cs=tinysrgb&w=1000';

const FOCUS_CARDS = [
  {
    icon: TreePine,
    title: 'Ancestral Healing',
    text: 'Explore family patterns, inherited emotional experiences, and unresolved dynamics that may continue to influence present-day thoughts, relationships, and behaviors.',
  },
  {
    icon: Baby,
    title: 'Inner-Child Dynamics',
    text: 'Reconnect with neglected, hurt, or previously overlooked parts of your experience — developing greater understanding and compassion toward them.',
  },
  {
    icon: Repeat,
    title: 'Patterns & Triggers',
    text: 'Explore recurring emotional responses, triggers, relationship patterns, and unresolved experiences that may continue to affect your life today.',
  },
];

const APPROACH_STEPS = [
  {
    num: '01',
    title: 'Explore',
    text: 'Begin by creating space to understand what is happening beneath the surface.',
  },
  {
    num: '02',
    title: 'Understand',
    text: 'Explore emotional wounds, family patterns, memories, and triggers that may be influencing current experiences.',
  },
  {
    num: '03',
    title: 'Reconnect',
    text: 'Reconnect with parts of yourself and your experience that may have been neglected, overlooked, or left unresolved.',
  },
  {
    num: '04',
    title: 'Move Forward',
    text: 'Develop greater self-awareness and begin releasing patterns that no longer serve you.',
  },
];

const TEAM_PRINCIPLES = [
  {
    num: '01',
    icon: Target,
    title: 'Your Goals',
    text: 'Your goals help shape the direction of our work together.',
  },
  {
    num: '02',
    icon: MessageSquare,
    title: 'Open Communication',
    text: 'Honest and open communication creates the foundation for meaningful work.',
  },
  {
    num: '03',
    icon: HandHeart,
    title: 'Shared Commitment',
    text: 'Progress is supported by the time, effort, and follow-through invested both during and between sessions.',
  },
  {
    num: '04',
    icon: Users,
    title: 'Working Together',
    text: 'Meaningful change is a collaborative process. We work best as a team.',
  },
];

const READY_ITEMS = [
  'You notice patterns in your relationships that keep repeating.',
  'Certain situations trigger strong emotional responses.',
  'You feel affected by experiences from earlier in life.',
  'You want to understand yourself more deeply.',
  'You are curious about family patterns and their influence on your present.',
  'You feel ready to reconnect with parts of yourself you’ve previously overlooked.',
  'You want to develop greater emotional awareness and personal choice.',
];

const SERVICES_PREVIEW = [
  {
    label: 'Complimentary Consultation',
    detail: '15 minutes · Phone or in person',
  },
  {
    label: 'Initial Session',
    detail: '1.5 hours · $225',
  },
  {
    label: 'Ongoing Sessions',
    detail: '$150 / hour',
  },
];

export function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-grad pt-24 pb-16">
        {/* Floating organic shapes */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-sage-300/25 blur-3xl animate-float-slow" aria-hidden="true" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-blue-300/20 blur-3xl animate-float-slow" style={{ animationDelay: '3s' }} aria-hidden="true" />

        <div className="relative mx-auto max-w-8xl px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <Reveal>
                <p className="text-xs uppercase tracking-wider-2 text-gold-500 mb-5 font-medium">
                  Clinical Hypnotherapist · Since 2003
                </p>
              </Reveal>
              <Reveal delay={1}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl text-charcoal-800 leading-[1.08] text-balance">
                  A gentler way forward begins with understanding where you came from.
                </h1>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-7 text-lg lg:text-xl text-charcoal-500 leading-relaxed max-w-xl">
                  I help adults and adolescents explore the emotional patterns, experiences, and
                  family dynamics that can continue to shape the way we think, relate, and respond
                  today.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div className="mt-9 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <CTAButton to="/approach">Explore My Approach</CTAButton>
                  <CTAButton to="/contact" variant="secondary">
                    Get in Touch
                  </CTAButton>
                </div>
              </Reveal>
            </div>

            <div className="order-1 lg:order-2 relative">
              <Reveal delay={2}>
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-sage-200/40">
                  <img
                    src={HERO_IMAGE}
                    alt="Sunlight filtering through a peaceful forest of mature trees"
                    className="w-full h-[300px] sm:h-[420px] lg:h-[600px] object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/15 to-transparent" />
                </div>
              </Reveal>
              {/* Decorative frame */}
              <div className="absolute -bottom-5 -left-5 w-28 h-28 border-l-2 border-b-2 border-gold-300/60 rounded-bl-3xl" aria-hidden="true" />
              <div className="absolute -top-5 -right-5 w-28 h-28 border-r-2 border-t-2 border-sage-300/60 rounded-tr-3xl" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / EXPERIENCE */}
      <section className="bg-gradient-to-br from-sage-100 to-blue-100 py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-6 lg:px-12">
          <Reveal>
            <Ornament className="mb-10" />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { num: '20+', label: 'Years of Private Practice' },
              { num: '2003', label: 'Clinical Hypnotherapist Since' },
              { num: 'LPT', label: 'Background in Psychiatric Nursing' },
            ].map((item, i) => (
              <Reveal key={item.label} delay={(i + 1) as 1 | 2 | 3}>
                <div className="text-center">
                  <p className="font-serif text-5xl lg:text-6xl text-sage-600">{item.num}</p>
                  <p className="mt-3 text-charcoal-700 text-sm uppercase tracking-wider-2 font-semibold">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={3}>
            <p className="mt-14 text-center text-lg text-charcoal-500 max-w-2xl mx-auto leading-relaxed">
              Kathy has worked continuously in private practice since June 2003, bringing more than
              two decades of experience to her work with adults and adolescents.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MEET KATHY */}
      <section className="py-24 lg:py-32 bg-ivory-50">
        <div className="mx-auto max-w-8xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal>
              <div className="relative">
                <PortraitPlaceholder
                  className="rounded-[2rem] shadow-xl shadow-charcoal-200/30 w-full h-[320px] sm:h-[420px] lg:h-[500px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
                  <p className="font-serif text-xl text-sage-600">San Diego, CA 92024</p>
                  <p className="text-sm text-taupe-500 mt-1">Private Practice</p>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-wider-2 text-gold-500 mb-3 font-medium">
                  Meet Kathy
                </p>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="font-serif text-4xl md:text-5xl text-charcoal-800 leading-tight">
                  A warm, experienced guide for the work beneath the surface.
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <div className="mt-6 space-y-4 text-charcoal-600 leading-relaxed text-lg">
                  <p>
                    Kathy Stowell has been a Clinical Hypnotherapist since 2003, having graduated
                    from the Institute of Neurosomatic Sciences.
                  </p>
                  <p>
                    Before entering private practice, Kathy worked as a psychiatric nurse supporting
                    adults and adolescents experiencing a range of mental health and behavioral
                    concerns — including eating disorders, substance abuse, emotional and behavioral
                    difficulties, and complex personal circumstances.
                  </p>
                  <p>
                    She worked across various hospitals and private clinics before establishing her
                    private practice, which she has maintained continuously since June 2003.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={3}>
                <div className="mt-8">
                  <CTAButton to="/about" variant="ghost">
                    Learn More About Kathy <ArrowRight size={16} className="inline ml-1" />
                  </CTAButton>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS OF FOCUS */}
      <section className="py-24 lg:py-32 sage-grad">
        <div className="mx-auto max-w-8xl px-6 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="Areas of Focus"
              title="Understanding the patterns beneath the surface"
              subtitle="Sometimes the experiences shaping our present began long before we were consciously aware of them."
            />
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {FOCUS_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={(i + 1) as 1 | 2 | 3}>
                <article className="group h-full bg-white rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-xl hover:shadow-sage-200/30 transition-all duration-500 hover:-translate-y-1 border border-ivory-200">
                  <div className="w-14 h-14 rounded-2xl bg-sage-100 flex items-center justify-center mb-6 transition-colors group-hover:bg-sage-200">
                    <card.icon size={26} className="text-sage-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal-800 mb-4">{card.title}</h3>
                  <p className="text-charcoal-600 leading-relaxed">{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={2}>
            <div className="mt-12 text-center">
              <CTAButton to="/areas-of-focus" variant="secondary">
                Explore Working Together
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW — Ways to Begin */}
      <section className="py-24 lg:py-32 bg-ivory-50">
        <div className="mx-auto max-w-8xl px-6 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="Ways to Begin"
              title="Simple, transparent ways to start."
              subtitle="Every journey begins with a single, unhurried conversation."
            />
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {SERVICES_PREVIEW.map((svc, i) => (
              <Reveal key={svc.label} delay={(i + 1) as 1 | 2 | 3}>
                <div className="text-center bg-gradient-to-b from-white to-ivory-100 rounded-3xl p-10 border border-ivory-200 hover:border-gold-200 transition-colors">
                  <Sparkles size={24} className="text-gold-400 mx-auto mb-5" strokeWidth={1.5} />
                  <h3 className="font-serif text-2xl text-charcoal-800">{svc.label}</h3>
                  <p className="mt-3 text-sage-600 text-sm tracking-wide">{svc.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={3}>
            <div className="mt-14 text-center">
              <CTAButton to="/services">Take the First Step</CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE APPROACH */}
      <section className="py-24 lg:py-32 bg-ivory-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-8xl px-6 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="The Approach"
              title="A compassionate process of understanding"
              subtitle="Kathy’s approach is grounded in compassion, curiosity, and respect. Together, you can explore the experiences and patterns that may be influencing your present without judgment."
            />
          </Reveal>

          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {APPROACH_STEPS.map((step, i) => (
              <Reveal key={step.num} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="relative">
                  {/* Connector line */}
                  {i < APPROACH_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-gradient-to-r from-gold-200 to-transparent" aria-hidden="true" />
                  )}
                  <div className="relative bg-white rounded-2xl p-7 shadow-sm border border-ivory-200 hover:shadow-md transition-shadow">
                    <p className="font-serif text-5xl text-gold-300 mb-4">{step.num}</p>
                    <h3 className="font-serif text-2xl text-charcoal-800 mb-3">{step.title}</h3>
                    <p className="text-charcoal-600 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={3}>
            <div className="mt-14 text-center">
              <CTAButton to="/approach" variant="secondary">
                Learn About Sessions
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WE WORK BEST AS A TEAM */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-sage-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-sage-200/60 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-8xl px-6 lg:px-12">
          <Reveal>
            <div className="text-center">
              <p className="text-xs uppercase tracking-wider-2 text-gold-500 mb-3 font-medium">
                Working Together
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal-800 leading-tight text-balance">
                We work best as a team.
              </h2>
              {/* Gold accent line */}
              <div className="flex justify-center mt-5">
                <span className="h-px w-20 bg-gradient-to-r from-transparent via-gold-300 to-transparent" aria-hidden="true" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="mt-8 max-w-3xl mx-auto text-center space-y-4 text-charcoal-600 leading-relaxed text-lg">
              <p>
                I am committed to providing thoughtful guidance, professional expertise, and practical
                support tailored to each client&apos;s goals. However, meaningful and lasting results
                depend on a shared commitment.
              </p>
              <p>
                The success of our work together is influenced by the accuracy and honesty of the
                information you provide, your willingness to communicate openly, and the time, effort,
                and follow-through you invest in the process.
              </p>
              <p>
                The strongest results usually come when clients are engaged, responsive, open to
                feedback, and willing to carry out agreed-upon steps between sessions or
                consultations.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {TEAM_PRINCIPLES.map((principle, i) => (
              <Reveal key={principle.num} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="group h-full bg-white rounded-2xl p-7 lg:p-8 border border-sage-100 hover:border-gold-200 hover:shadow-lg hover:shadow-sage-100/40 transition-all duration-400 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center transition-colors group-hover:bg-sage-200">
                      <principle.icon size={22} className="text-sage-600" strokeWidth={1.5} />
                    </div>
                    <span className="font-serif text-3xl text-gold-200 group-hover:text-gold-300 transition-colors">
                      {principle.num}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl text-charcoal-800 mb-3">{principle.title}</h3>
                  <p className="text-charcoal-600 leading-relaxed text-base">{principle.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EMOTIONAL FREEDOM */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <img
          src={LAKE_IMAGE}
          alt="A serene lake reflecting trees and sky"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/65 via-charcoal-900/55 to-charcoal-900/75" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <Ornament className="mb-8" />
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory-50 leading-tight text-balance">
              You are not defined by the patterns you inherited.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-7 text-lg lg:text-xl text-ivory-100/90 leading-relaxed max-w-2xl mx-auto">
              The goal is not to erase your past, but to understand it differently — creating
              greater awareness, emotional freedom, and the possibility of responding from a place of
              choice.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-10">
              <CTAButton to="/contact">Begin Your Conversation</CTAButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHO THIS WORK MAY BE FOR */}
      <section className="py-24 lg:py-32 bg-ivory-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <Reveal>
            <SectionHeading
              eyebrow="Is This Right for You?"
              title="You may be ready to explore this work if..."
            />
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {READY_ITEMS.map((item, i) => (
              <Reveal key={i} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-ivory-200 hover:border-sage-200 transition-colors">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-sage-100 flex items-center justify-center mt-0.5">
                    <Compass size={15} className="text-sage-600" strokeWidth={2} />
                  </span>
                  <p className="text-charcoal-600 leading-relaxed">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A SAFE SPACE */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-ivory-100 to-sage-100">
        <div className="mx-auto max-w-8xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal>
              <div className="relative">
                <div className="rounded-[2rem] overflow-hidden shadow-xl">
                  <img
                    src={TEA_IMAGE}
                    alt="A warm cup of tea surrounded by green foliage in a cozy, sunlit space"
                    className="w-full h-[480px] object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Botanical accent */}
                <svg className="absolute -top-8 -left-8 w-24 h-24 text-sage-300/50" viewBox="0 0 100 100" fill="none" aria-hidden="true">
                  <path d="M50 10 Q70 30 50 50 Q30 70 50 90" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M50 25 Q65 35 50 45" stroke="currentColor" strokeWidth="1" />
                  <path d="M50 45 Q35 55 50 65" stroke="currentColor" strokeWidth="1" />
                  <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.5" />
                </svg>
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-wider-2 text-gold-500 mb-3 font-medium">
                  A Safe Space
                </p>
              </Reveal>
              <Reveal delay={1}>
                <h2 className="font-serif text-4xl md:text-5xl text-charcoal-800 leading-tight">
                  A space without judgment
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-6 text-lg text-charcoal-600 leading-relaxed">
                  Exploring personal experiences requires trust. Kathy’s work is grounded in
                  creating a respectful, compassionate environment where you can explore your
                  experiences at your own pace.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { icon: Shield, label: 'Confidentiality' },
                    { icon: Heart, label: 'Compassion' },
                    { icon: Sparkles, label: 'Respect' },
                  ].map((principle) => (
                    <div
                      key={principle.label}
                      className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-4 py-3 border border-ivory-200"
                    >
                      <principle.icon size={18} className="text-sage-500" strokeWidth={1.5} />
                      <span className="text-sm text-charcoal-700">{principle.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 lg:py-40 hero-grad relative overflow-hidden">
        <div className="absolute top-1/3 -left-10 w-64 h-64 rounded-full bg-gold-100/30 blur-3xl animate-float-slow" aria-hidden="true" />
        <div className="absolute bottom-1/4 -right-10 w-72 h-72 rounded-full bg-sage-200/25 blur-3xl animate-float-slow" style={{ animationDelay: '4s' }} aria-hidden="true" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <Ornament className="mb-8" />
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal-800 leading-tight text-balance">
              Perhaps this is the time to begin looking beneath the surface.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-7 text-lg text-charcoal-500 leading-relaxed max-w-xl mx-auto">
              If you’re ready to explore the patterns, experiences, and emotional dynamics that may
              be influencing your life today, Kathy welcomes you to get in touch.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-10 flex flex-col items-center gap-4">
              <CTAButton to="/contact" className="px-9 py-4 text-base">
                Get in Touch
              </CTAButton>
              <p className="text-sage-600 italic font-serif text-lg">A conversation is a simple place to begin.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quick contact bar */}
      <section className="bg-gradient-to-r from-sage-700 to-sage-800 py-10">
        <div className="mx-auto max-w-8xl px-6 lg:px-12">
          <div className="grid sm:grid-cols-3 gap-6 text-center sm:text-left">
            <a href="tel:7602719994" className="flex items-center justify-center sm:justify-start gap-3 text-ivory-100 hover:text-gold-200 transition-colors">
              <Phone size={18} strokeWidth={1.5} />
              <span>760-271-9994</span>
            </a>
            <a href="mailto:katie.jo.stowell@protonmail.com" className="flex items-center justify-center sm:justify-start gap-3 text-ivory-100 hover:text-gold-200 transition-colors break-all">
              <Mail size={18} strokeWidth={1.5} />
              <span>katie.jo.stowell@protonmail.com</span>
            </a>
            <div className="flex items-center justify-center sm:justify-start gap-3 text-ivory-100">
              <MapPin size={18} strokeWidth={1.5} />
              <span>San Diego, CA 92024</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
