import { Reveal } from '@/components/Reveal';
import { Ornament } from '@/components/Ornament';

export function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-44 lg:pb-20 bg-gradient-to-b from-ivory-100 to-ivory-50 relative overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-72 h-72 rounded-full bg-gold-100/20 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-wider-2 text-gold-500 mb-4 font-medium">Legal</p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-serif text-4xl sm:text-5xl text-charcoal-800 leading-tight">
              Terms &amp; Disclaimer
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 text-charcoal-500 text-sm">Last updated: September 2026</p>
          </Reveal>
          <Reveal delay={3}>
            <Ornament className="mt-8" />
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-ivory-50">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="space-y-10 text-charcoal-600 leading-relaxed">

              <div>
                <h2 className="font-serif text-2xl text-charcoal-800 mb-3">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using this website, you agree to be bound by these Terms &amp;
                  Disclaimer. If you do not agree with any part of these terms, please do not use this
                  website. Kathy Stowell (Katie Jo Stowell) reserves the right to update these terms at
                  any time without prior notice.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal-800 mb-3">2. Not Medical Advice</h2>
                <p className="mb-3">
                  The content provided on this website — including all text, descriptions of services,
                  areas of focus, and approach — is for <strong className="text-charcoal-700 font-semibold">informational purposes only</strong>.
                  It does not constitute medical advice, psychological advice, diagnosis, or treatment.
                </p>
                <p>
                  Hypnotherapy is a complementary approach and is not a substitute for professional
                  medical or psychological care. If you have a medical condition, mental health concern,
                  or are experiencing a psychiatric emergency, please consult a qualified healthcare
                  provider or contact emergency services immediately.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal-800 mb-3">3. No Guarantee of Results</h2>
                <p>
                  Results from hypnotherapy vary from person to person. Kathy Stowell makes no
                  guarantees, express or implied, regarding outcomes from any session, course of
                  sessions, or therapeutic process described on this website. Individual results depend
                  on many factors, including personal circumstances, commitment, and the nature of the
                  concerns being explored.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal-800 mb-3">4. Professional Qualifications</h2>
                <p>
                  Kathy Stowell is a Clinical Hypnotherapist, having graduated from the Institute of
                  Neurosomatic Sciences in 2003. She is not a licensed physician, psychologist,
                  psychiatrist, or other regulated healthcare professional unless otherwise stated.
                  Hypnotherapy services are provided within the scope of her training and qualifications.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal-800 mb-3">5. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by applicable law, Kathy Stowell shall not be liable
                  for any direct, indirect, incidental, consequential, or punitive damages arising out
                  of your use of this website or your participation in any session or service. Your use
                  of this website and any services is at your sole risk.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal-800 mb-3">6. Intellectual Property</h2>
                <p>
                  All content on this website — including text, design, layout, and imagery — is the
                  property of Kathy Stowell and is protected by copyright. You may not reproduce,
                  distribute, or republish any content from this website without prior written
                  permission.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal-800 mb-3">7. External Links</h2>
                <p>
                  This website may contain links to external websites for informational purposes.
                  Kathy Stowell is not responsible for the content, accuracy, or practices of any
                  linked external sites.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal-800 mb-3">8. Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of the
                  State of California, United States of America, without regard to its conflict of law
                  provisions.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal-800 mb-3">9. Contact</h2>
                <p>
                  If you have any questions about these Terms &amp; Disclaimer, please contact Kathy at{' '}
                  <a
                    href="mailto:katie.jo.stowell@protonmail.com"
                    className="text-sage-600 underline underline-offset-4 hover:text-sage-700 transition-colors"
                  >
                    katie.jo.stowell@protonmail.com
                  </a>.
                </p>
              </div>

            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
