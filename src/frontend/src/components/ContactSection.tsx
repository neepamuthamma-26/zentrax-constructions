import { CONTACT_INFO, SERVICES } from "@/data/constants";
import { Clock, Mail, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.phone.trim()) errors.phone = "Phone number is required.";
  if (!form.service) errors.service = "Please select a service.";
  if (!form.message.trim()) errors.message = "Message is required.";
  return errors;
}

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    const next = { ...form, [name]: value };
    setForm(next);
    if (touched[name as keyof FormState]) {
      setErrors(validate(next));
    }
  }

  function handleBlur(
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(form));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.keys(form).map((k) => [k, true]),
    ) as Partial<Record<keyof FormState, boolean>>;
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(EMPTY_FORM);
      setTouched({});
      setErrors({});
    }, 1000);
  }

  const inputBase =
    "w-full px-4 py-3 rounded-md font-body text-sm text-foreground placeholder:text-muted-foreground/50 transition-smooth outline-none border focus-visible:ring-2 focus-visible:ring-ring";

  const inputStyle = {
    background: "oklch(0.99 0.003 60)",
    borderColor: "oklch(var(--border))",
  };

  return (
    <section
      id="contact"
      className="bg-background py-24 lg:py-32 relative"
      data-ocid="contact.section"
    >
      {/* Top gold line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(var(--accent) / 0.5), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent-gold font-body font-semibold mb-3">
            Contact Us
          </p>
          <h2 className="font-display font-bold text-foreground text-4xl lg:text-5xl leading-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            Let's discuss your vision. Our team is ready to bring your project
            to life.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-8"
            data-ocid="contact.info_panel"
          >
            <div>
              <div
                className="w-10 h-0.5 mb-6"
                style={{ background: "oklch(var(--accent))" }}
                aria-hidden="true"
              />
              <h3 className="font-display font-bold text-foreground text-2xl mb-2">
                Zentrax Constructions
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Where Vision Meets Execution. Your trusted partner for
                end-to-end construction, real estate, and design excellence.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Phone */}
              <div
                className="flex items-start gap-4"
                data-ocid="contact.phone_item"
              >
                <div
                  className="mt-0.5 w-9 h-9 rounded-md shrink-0 flex items-center justify-center"
                  style={{ background: "oklch(var(--accent) / 0.12)" }}
                >
                  <Phone size={16} style={{ color: "oklch(var(--accent))" }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-body mb-1">
                    Phone
                  </p>
                  <p className="font-body text-foreground text-sm font-medium">
                    {CONTACT_INFO.phone}
                  </p>
                  <p className="font-body text-foreground text-sm font-medium">
                    {CONTACT_INFO.altPhone}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div
                className="flex items-start gap-4"
                data-ocid="contact.email_item"
              >
                <div
                  className="mt-0.5 w-9 h-9 rounded-md shrink-0 flex items-center justify-center"
                  style={{ background: "oklch(var(--accent) / 0.12)" }}
                >
                  <Mail size={16} style={{ color: "oklch(var(--accent))" }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-body mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="font-body text-foreground text-sm font-medium hover:text-accent-gold transition-smooth"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div
                className="flex items-start gap-4"
                data-ocid="contact.hours_item"
              >
                <div
                  className="mt-0.5 w-9 h-9 rounded-md shrink-0 flex items-center justify-center"
                  style={{ background: "oklch(var(--accent) / 0.12)" }}
                >
                  <Clock size={16} style={{ color: "oklch(var(--accent))" }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-body mb-1">
                    Working Hours
                  </p>
                  <p className="font-body text-foreground text-sm font-medium">
                    {CONTACT_INFO.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div
              className="p-5 rounded-lg border-l-2"
              style={{
                background: "oklch(0.95 0.005 60)",
                borderLeftColor: "oklch(var(--accent) / 0.6)",
              }}
            >
              <p className="font-body text-sm text-muted-foreground leading-relaxed italic">
                "We create spaces that inspire. Every project is a journey where
                innovation meets tradition and your vision becomes reality."
              </p>
              <p className="mt-3 text-xs text-accent-gold font-body font-semibold">
                — Zentrax Constructions
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
            data-ocid="contact.form_panel"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                data-ocid="contact.success_state"
                className="h-full flex flex-col items-center justify-center text-center py-20 px-8 rounded-xl border border-border"
                style={{ background: "oklch(0.96 0.005 60)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "oklch(var(--accent) / 0.15)" }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ stroke: "oklch(var(--accent))" }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-foreground text-2xl mb-3">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xs">
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  data-ocid="contact.send_another_button"
                  className="mt-8 text-sm font-body font-semibold text-accent-gold hover:underline transition-smooth"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-xl border border-border p-8 lg:p-10 flex flex-col gap-5"
                style={{ background: "oklch(0.97 0.003 60)" }}
                data-ocid="contact.form"
              >
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs uppercase tracking-wider font-body font-medium text-muted-foreground mb-2"
                    >
                      Full Name{" "}
                      <span className="text-accent-gold" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John Smith"
                      autoComplete="name"
                      aria-required="true"
                      aria-describedby={
                        touched.name && errors.name
                          ? "contact-name-error"
                          : undefined
                      }
                      data-ocid="contact.name_input"
                      className={`${inputBase} ${
                        touched.name && errors.name
                          ? "border-destructive/70"
                          : "focus:border-accent/60"
                      }`}
                      style={inputStyle}
                    />
                    {touched.name && errors.name && (
                      <p
                        id="contact-name-error"
                        className="mt-1.5 text-xs font-body"
                        style={{ color: "oklch(var(--destructive))" }}
                        data-ocid="contact.name_field_error"
                        role="alert"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs uppercase tracking-wider font-body font-medium text-muted-foreground mb-2"
                    >
                      Email{" "}
                      <span className="text-accent-gold" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="john@example.com"
                      autoComplete="email"
                      aria-required="true"
                      aria-describedby={
                        touched.email && errors.email
                          ? "contact-email-error"
                          : undefined
                      }
                      data-ocid="contact.email_input"
                      className={`${inputBase} ${
                        touched.email && errors.email
                          ? "border-destructive/70"
                          : "focus:border-accent/60"
                      }`}
                      style={inputStyle}
                    />
                    {touched.email && errors.email && (
                      <p
                        id="contact-email-error"
                        className="mt-1.5 text-xs font-body"
                        style={{ color: "oklch(var(--destructive))" }}
                        data-ocid="contact.email_field_error"
                        role="alert"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone + Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs uppercase tracking-wider font-body font-medium text-muted-foreground mb-2"
                    >
                      Phone{" "}
                      <span className="text-accent-gold" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                      aria-required="true"
                      aria-describedby={
                        touched.phone && errors.phone
                          ? "contact-phone-error"
                          : undefined
                      }
                      data-ocid="contact.phone_input"
                      className={`${inputBase} ${
                        touched.phone && errors.phone
                          ? "border-destructive/70"
                          : "focus:border-accent/60"
                      }`}
                      style={inputStyle}
                    />
                    {touched.phone && errors.phone && (
                      <p
                        id="contact-phone-error"
                        className="mt-1.5 text-xs font-body"
                        style={{ color: "oklch(var(--destructive))" }}
                        data-ocid="contact.phone_field_error"
                        role="alert"
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs uppercase tracking-wider font-body font-medium text-muted-foreground mb-2"
                    >
                      Service{" "}
                      <span className="text-accent-gold" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-required="true"
                      aria-describedby={
                        touched.service && errors.service
                          ? "contact-service-error"
                          : undefined
                      }
                      data-ocid="contact.service_select"
                      className={`${inputBase} appearance-none cursor-pointer ${
                        touched.service && errors.service
                          ? "border-destructive/70"
                          : "focus:border-accent/60"
                      }`}
                      style={inputStyle}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICES.map((s) => (
                        <option
                          key={s.title}
                          value={s.title}
                          style={{ background: "oklch(0.97 0.003 60)" }}
                        >
                          {s.title}
                        </option>
                      ))}
                    </select>
                    {touched.service && errors.service && (
                      <p
                        id="contact-service-error"
                        className="mt-1.5 text-xs font-body"
                        style={{ color: "oklch(var(--destructive))" }}
                        data-ocid="contact.service_field_error"
                        role="alert"
                      >
                        {errors.service}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs uppercase tracking-wider font-body font-medium text-muted-foreground mb-2"
                  >
                    Message{" "}
                    <span className="text-accent-gold" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={5}
                    placeholder="Tell us about your project..."
                    aria-required="true"
                    aria-describedby={
                      touched.message && errors.message
                        ? "contact-message-error"
                        : undefined
                    }
                    data-ocid="contact.message_textarea"
                    className={`${inputBase} resize-none ${
                      touched.message && errors.message
                        ? "border-destructive/70"
                        : "focus:border-accent/60"
                    }`}
                    style={inputStyle}
                  />
                  {touched.message && errors.message && (
                    <p
                      id="contact-message-error"
                      className="mt-1.5 text-xs font-body"
                      style={{ color: "oklch(var(--destructive))" }}
                      data-ocid="contact.message_field_error"
                      role="alert"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  data-ocid="contact.submit_button"
                  className="mt-1 w-full sm:w-auto sm:self-start px-10 py-3.5 rounded-md font-body font-semibold text-sm transition-smooth focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none hover:opacity-90 hover:shadow-gold-glow disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    background: "oklch(var(--accent))",
                    color: "oklch(0.10 0.01 260)",
                  }}
                >
                  {loading ? (
                    <span
                      data-ocid="contact.loading_state"
                      className="flex items-center gap-2"
                    >
                      <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
