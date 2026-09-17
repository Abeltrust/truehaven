import { useState, useEffect, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { Ornament } from '@/components/Ornament';
import { CTAButton } from '@/components/ui';

const EUCALYPTUS_IMAGE =
  'https://images.pexels.com/photos/6168329/pexels-photo-6168329.jpeg?auto=compress&cs=tinysrgb&w=1200';

const EMAIL = 'katie.jo.stowell@protonmail.com';
const PHONE = '17602719994'; // E.164 format for WhatsApp API
const PHONE_DISPLAY = '760-271-9994';

const PACKAGES = [
  '15-Minute Consultation (Complimentary)',
  'Initial Session — $225 / 1.5 hrs',
  'Hourly Sessions — $150 / hr',
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sentVia, setSentVia] = useState<'email' | 'whatsapp'>('email');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferred: '',
    package: '',
  });

  // Pre-fill package from ?package= query param (linked from Services page)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pkg = params.get('package');
    if (pkg) {
      const match = PACKAGES.find((p) => p.toLowerCase().startsWith(pkg.toLowerCase()));
      if (match) setForm((prev) => ({ ...prev, package: match }));
    }
  }, []);

  const buildSubject = () =>
    `Website enquiry from ${form.name || 'a visitor'}`;

  const buildBody = () => {
    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.preferred ? `Preferred contact: ${form.preferred}` : null,
      form.package ? `Service / Package: ${form.package}` : null,
      '',
      'Message:',
      form.message,
    ].filter(Boolean);
    return lines.join('\n');
  };

  const buildWhatsAppText = () => {
    const parts = [
      `Hello Kathy,`,
      form.package ? `I'm interested in: ${form.package}` : null,
      '',
      form.message,
      '',
      `— ${form.name}`,
      form.email ? `Email: ${form.email}` : null,
      form.phone ? `Phone: ${form.phone}` : null,
    ].filter(Boolean);
    return parts.join('\n');
  };

  const handleSubmit = (e: FormEvent, method: 'email' | 'whatsapp') => {
    e.preventDefault();
    setSentVia(method);

    if (method === 'email') {
      const subject = encodeURIComponent(buildSubject());
      const body = encodeURIComponent(buildBody());
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    } else {
      const text = encodeURIComponent(buildWhatsAppText());
      window.open(`https://wa.me/${PHONE}?text=${text}`, '_blank', 'noopener,noreferrer');
    }

    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 bg-gradient-to-b from-blue-50 to-ivory-50 relative overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-72 h-72 rounded-full bg-sage-100/40 blur-3xl animate-float-slow" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-wider-2 text-gold-500 mb-4 font-medium">
              Contact
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal-800 leading-tight text-balance">
              Let's begin with a conversation.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-lg text-charcoal-500 leading-relaxed max-w-2xl mx-auto">
              If you would like to learn more about Kathy's approach or discuss whether this work may
              be right for you, please get in touch.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <Ornament className="mt-8" />
          </Reveal>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-16 lg:py-28 bg-ivory-50">
        <div className="mx-auto max-w-8xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Contact info — appears first on mobile, second column on desktop */}
            <div className="lg:col-span-2 lg:order-2">
              <Reveal delay={1}>
                <div className="lg:sticky lg:top-28 space-y-5">
                  {/* Image — desktop only */}
                  <div className="hidden lg:block rounded-[2rem] overflow-hidden shadow-lg">
                    <img
                      src={EUCALYPTUS_IMAGE}
                      alt="Minimalist photo of eucalyptus leaves against a clean white background"
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-ivory-200">
                    <h3 className="font-serif text-2xl text-charcoal-800 mb-5">Contact Details</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-taupe-400 mb-1">Name</p>
                        <p className="text-charcoal-700 font-medium">Katie Jo Stowell</p>
                      </div>

                      <a href={`mailto:${EMAIL}`} className="block group">
                        <p className="text-xs uppercase tracking-wider text-taupe-400 mb-1 flex items-center gap-2">
                          <Mail size={13} className="text-sage-500" /> Email
                        </p>
                        <p className="text-charcoal-700 group-hover:text-sage-600 group-hover:underline underline-offset-4 transition-colors break-all">
                          {EMAIL}
                        </p>
                      </a>

                      <a href={`tel:${PHONE}`} className="block group">
                        <p className="text-xs uppercase tracking-wider text-taupe-400 mb-1 flex items-center gap-2">
                          <Phone size={13} className="text-sage-500" /> Phone
                        </p>
                        <p className="text-charcoal-700 group-hover:text-sage-600 group-hover:underline underline-offset-4 transition-colors">
                          {PHONE_DISPLAY}
                        </p>
                      </a>

                      <a
                        href={`https://wa.me/${PHONE}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                      >
                        <p className="text-xs uppercase tracking-wider text-taupe-400 mb-1 flex items-center gap-2">
                          <MessageCircle size={13} className="text-sage-500" /> WhatsApp
                        </p>
                        <p className="text-charcoal-700 group-hover:text-sage-600 group-hover:underline underline-offset-4 transition-colors">
                          Chat on WhatsApp
                        </p>
                      </a>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-taupe-400 mb-1 flex items-center gap-2">
                          <MapPin size={13} className="text-sage-500" /> Location
                        </p>
                        <p className="text-charcoal-700">San Diego, CA 92024</p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-taupe-400 mb-1 flex items-center gap-2">
                          <Clock size={13} className="text-sage-500" /> Availability
                        </p>
                        <p className="text-charcoal-700 text-sm leading-relaxed">
                          Shared directly during your consultation request.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-sage-700 rounded-3xl p-6 sm:p-8 text-center">
                    <p className="font-serif text-xl text-ivory-50 mb-4">
                      Prefer to talk directly?
                    </p>
                    <div className="flex flex-col gap-3">
                      <a
                        href={`tel:${PHONE}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-ivory-50 text-sage-700 text-sm tracking-wide hover:bg-white transition-colors"
                      >
                        <Phone size={15} /> Call {PHONE_DISPLAY}
                      </a>
                      <a
                        href={`https://wa.me/${PHONE}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-sage-600 text-ivory-50 text-sm tracking-wide hover:bg-sage-500 transition-colors border border-sage-500"
                      >
                        <MessageCircle size={15} /> Message on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Form — second on mobile, first column on desktop */}
            <div className="lg:col-span-3 lg:order-1">
              <Reveal>
                <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg shadow-charcoal-200/10 border border-ivory-200">
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle2 size={56} className="text-sage-500 mx-auto mb-6" strokeWidth={1.5} />
                      <h2 className="font-serif text-3xl text-charcoal-800 mb-3">Thank you.</h2>
                      <p className="text-lg text-charcoal-600 leading-relaxed max-w-md mx-auto">
                        {sentVia === 'email'
                          ? "Your message has been prepared in your email app. Simply press send and it will go straight to Kathy's inbox. If your email app didn't open, you can reach her directly using the details above."
                          : "Your message has been prepared in WhatsApp. Simply press send and it will go straight to Kathy. If WhatsApp didn't open, you can reach her directly using the details above."}
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ name: '', email: '', phone: '', message: '', preferred: '', package: '' });
                        }}
                        className="mt-8 text-sage-600 hover:text-sage-700 underline underline-offset-4 transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-serif text-3xl text-charcoal-800 mb-2">Send a Message</h2>
                      <p className="text-charcoal-500 mb-8">
                        Fields marked with * are required. Choose how you'd like to send your message below.
                      </p>
                      <form className="space-y-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-1.5">
                            Name *
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            className="w-full rounded-xl border border-ivory-300 bg-ivory-50 px-4 py-3 text-charcoal-800 placeholder-charcoal-300 focus:border-sage-400 focus:bg-white focus:outline-none transition-colors"
                            placeholder="Your name"
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-1.5">
                              Email *
                            </label>
                            <input
                              id="email"
                              type="email"
                              required
                              value={form.email}
                              onChange={(e) => handleChange('email', e.target.value)}
                              className="w-full rounded-xl border border-ivory-300 bg-ivory-50 px-4 py-3 text-charcoal-800 placeholder-charcoal-300 focus:border-sage-400 focus:bg-white focus:outline-none transition-colors"
                              placeholder="you@example.com"
                            />
                          </div>
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-1.5">
                              Phone <span className="text-taupe-400 font-normal">(optional)</span>
                            </label>
                            <input
                              id="phone"
                              type="tel"
                              value={form.phone}
                              onChange={(e) => handleChange('phone', e.target.value)}
                              className="w-full rounded-xl border border-ivory-300 bg-ivory-50 px-4 py-3 text-charcoal-800 placeholder-charcoal-300 focus:border-sage-400 focus:bg-white focus:outline-none transition-colors"
                              placeholder="(000) 000-0000"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="package" className="block text-sm font-medium text-charcoal-700 mb-1.5">
                            Service / Package *
                          </label>
                          <select
                            id="package"
                            required
                            value={form.package}
                            onChange={(e) => handleChange('package', e.target.value)}
                            className="w-full rounded-xl border border-ivory-300 bg-ivory-50 px-4 py-3 text-charcoal-800 focus:border-sage-400 focus:bg-white focus:outline-none transition-colors"
                          >
                            <option value="">Select a service…</option>
                            {PACKAGES.map((pkg) => (
                              <option key={pkg} value={pkg}>{pkg}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="preferred" className="block text-sm font-medium text-charcoal-700 mb-1.5">
                            Preferred way to be contacted <span className="text-taupe-400 font-normal">(optional)</span>
                          </label>
                          <select
                            id="preferred"
                            value={form.preferred}
                            onChange={(e) => handleChange('preferred', e.target.value)}
                            className="w-full rounded-xl border border-ivory-300 bg-ivory-50 px-4 py-3 text-charcoal-800 focus:border-sage-400 focus:bg-white focus:outline-none transition-colors"
                          >
                            <option value="">No preference</option>
                            <option value="email">Email</option>
                            <option value="phone">Phone</option>
                            <option value="whatsapp">WhatsApp</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-1.5">
                            Message *
                          </label>
                          <textarea
                            id="message"
                            required
                            rows={5}
                            value={form.message}
                            onChange={(e) => handleChange('message', e.target.value)}
                            className="w-full rounded-xl border border-ivory-300 bg-ivory-50 px-4 py-3 text-charcoal-800 placeholder-charcoal-300 focus:border-sage-400 focus:bg-white focus:outline-none transition-colors resize-none"
                            placeholder="Share a little about what brings you here, or any questions you may have."
                          />
                        </div>

                        {/* Send buttons */}
                        <div className="pt-2">
                          <p className="text-sm text-charcoal-500 mb-3">Choose how to send:</p>
                          <div className="flex flex-col sm:flex-row gap-3">
                            <button
                              type="button"
                              onClick={(e) => handleSubmit(e as unknown as FormEvent, 'email')}
                              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-sage-500 text-white text-sm tracking-wide hover:bg-sage-600 transition-all duration-300 hover:shadow-lg hover:shadow-sage-200/50 hover:-translate-y-0.5"
                            >
                              <Send size={16} /> Send via Email
                            </button>
                            <button
                              type="button"
                              onClick={(e) => handleSubmit(e as unknown as FormEvent, 'whatsapp')}
                              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white text-sage-700 border border-sage-300 text-sm tracking-wide hover:bg-sage-50 hover:border-sage-400 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                            >
                              <MessageCircle size={16} /> Send via WhatsApp
                            </button>
                          </div>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 hero-grad relative overflow-hidden">
        <div className="absolute top-1/3 -left-10 w-64 h-64 rounded-full bg-sage-200/30 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <Ornament className="mb-8" />
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-800 leading-tight text-balance">
              A conversation is a simple place to begin.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-5 text-lg text-charcoal-500 leading-relaxed">
              You don't need to have everything figured out before reaching out.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 bg-white/80 text-sage-700 border border-sage-300 hover:bg-white hover:shadow-md backdrop-blur-sm"
              >
                Send an Email <ArrowRight size={15} className="inline ml-2" />
              </a>
              <CTAButton to="/services" variant="secondary">
                View Services &amp; Fees
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
