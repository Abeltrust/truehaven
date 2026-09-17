import { Reveal } from '@/components/Reveal';
import { Ornament } from '@/components/Ornament';

export function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-44 lg:pb-20 bg-gradient-to-b from-ivory-100 to-ivory-50 relative overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-sage-100/30 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-wider-2 text-gold-500 mb-4 font-medium">Legal</p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-serif text-4xl sm:text-5xl text-charcoal-800 leading-tight">
              Privacy Policy
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
            <div className="prose-content space-y-10 text-charcoal-600 leading-relaxed">

              <div>
                <h2 className="font-serif text-2xl text-charcoal-800 mb-3">1. Who We Are</h2>
                <p>
                  This website is operated by Kathy Stowell (Katie Jo Stowell), a Clinical Hypnotherapist
                  practising privately in Santa Cruz, California. If you have any questions about this
                  policy or how your data is handled, you may contact Kathy directly at{' '}
                  <a href="mailto:katie.jo.stowell@protonmail.com" className="text-sage-600 underline underline-offset-4 hover:text-sage-700 transition-colors">
                    katie.jo.stowell@protonmail.com
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal-800 mb-3">2. Information We Collect</h2>
                <p className="mb-3">
                  This website does not use cookies, tracking pixels, or third-party analytics services.
                  No personal information is collected automatically when you browse this site.
                </p>
                <p>
                  If you choose to contact Kathy using the contact form or by email, the information you
                  voluntarily provide — such as your name, email address, phone number, and message
                  — will be received directly by Kathy. This information is used solely to respond to
                  your enquiry.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal-800 mb-3">3. How We Use Your Information</h2>
                <p>
                  Any personal information you share is used only to:
                </p>
                <ul className="mt-3 space-y-2 list-none pl-0">
                  {[
                    'Respond to your enquiry or consultation request',
                    'Provide the clinical hypnotherapy services you request',
                    'Communicate relevant information about your care',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3">
                  Your information is never sold, rented, or shared with third parties for marketing
                  purposes.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal-800 mb-3">4. Confidentiality</h2>
                <p>
                  Information shared within a therapeutic context is treated with the strictest
                  confidentiality, in accordance with professional and ethical practice standards.
                  Exceptions may apply only where required by law (for example, where there is a
                  serious risk of harm to yourself or others), and any such exception would be handled
                  with care and disclosed to you where possible.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal-800 mb-3">5. Data Retention</h2>
                <p>
                  Contact enquiries are retained only as long as necessary to respond to your request
                  or to maintain appropriate clinical records. You may request deletion of your personal
                  data at any time by contacting Kathy directly.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal-800 mb-3">6. Third-Party Links</h2>
                <p>
                  This website may contain links to external websites (such as LinkedIn). We are not
                  responsible for the privacy practices or content of those sites and encourage you to
                  review their privacy policies independently.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal-800 mb-3">7. Your Rights</h2>
                <p>
                  You have the right to request access to, correction of, or deletion of any personal
                  information Kathy holds about you. To exercise any of these rights, please contact
                  Kathy at{' '}
                  <a href="mailto:katie.jo.stowell@protonmail.com" className="text-sage-600 underline underline-offset-4 hover:text-sage-700 transition-colors">
                    katie.jo.stowell@protonmail.com
                  </a>.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-charcoal-800 mb-3">8. Changes to This Policy</h2>
                <p>
                  This Privacy Policy may be updated from time to time. Any changes will be reflected
                  on this page with a revised date. Continued use of this website after any changes
                  constitutes your acceptance of the updated policy.
                </p>
              </div>

            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
