import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Background image with layered overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-construction.dim_1920x1080.jpg"
          alt="Zentrax Constructions — luxury architecture"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Multi-layer dark gradient for premium depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.07 0.01 260 / 0.55) 0%, oklch(0.09 0.01 260 / 0.75) 50%, oklch(0.07 0.01 260 / 0.90) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, oklch(0.08 0.01 260 / 0.65) 0%, transparent 50%, oklch(0.08 0.01 260 / 0.65) 100%)",
          }}
        />
        {/* Gold accent line at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(var(--accent) / 0.7), transparent)",
          }}
        />
      </div>

      {/* Decorative vertical accent lines */}
      <div
        className="absolute top-28 left-8 w-px h-36 opacity-25 hidden lg:block"
        style={{
          background:
            "linear-gradient(180deg, transparent, oklch(var(--accent)), transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-28 right-8 w-px h-36 opacity-25 hidden lg:block"
        style={{
          background:
            "linear-gradient(180deg, transparent, oklch(var(--accent)), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Decorative corner bracket top-left */}
      <div
        className="absolute top-24 left-8 opacity-20 hidden lg:block"
        aria-hidden="true"
      >
        <div
          className="w-8 h-px"
          style={{ background: "oklch(var(--accent))" }}
        />
        <div
          className="w-px h-8"
          style={{ background: "oklch(var(--accent))" }}
        />
      </div>
      {/* Decorative corner bracket bottom-right */}
      <div
        className="absolute bottom-20 right-8 opacity-20 hidden lg:block"
        aria-hidden="true"
      >
        <div
          className="w-px h-8 ml-auto"
          style={{ background: "oklch(var(--accent))" }}
        />
        <div
          className="w-8 h-px"
          style={{ background: "oklch(var(--accent))" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-xs uppercase tracking-[0.35em] text-accent-gold font-body font-semibold mb-6 inline-flex items-center gap-3"
        >
          <span
            className="block w-6 h-px"
            style={{ background: "oklch(var(--accent))" }}
            aria-hidden="true"
          />
          Zentrax Constructions
          <span
            className="block w-6 h-px"
            style={{ background: "oklch(var(--accent))" }}
            aria-hidden="true"
          />
        </motion.p>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="font-display font-bold text-foreground mb-6 leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)" }}
        >
          Where Vision
          <br />
          <span className="text-accent-gold italic">Meets Execution</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.52, ease: "easeOut" }}
          className="font-body text-foreground/65 text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          From concept to completion, we build excellence. One-stop solution for
          construction, real estate, design, and maintenance.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.72, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            type="button"
            onClick={() => scrollToSection("portfolio")}
            data-ocid="hero.view_projects_button"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="px-9 py-3.5 rounded-sm font-body font-semibold text-sm tracking-wide focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none hover:shadow-gold-glow"
            style={{
              background: "oklch(var(--accent))",
              color: "oklch(0.1 0.01 260)",
            }}
          >
            View Projects
          </motion.button>

          <motion.button
            type="button"
            onClick={() => scrollToSection("contact")}
            data-ocid="hero.contact_button"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="px-9 py-3.5 rounded-sm font-body font-semibold text-sm tracking-wide focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none border text-foreground transition-smooth hover:border-accent/70 hover:text-accent-gold"
            style={{ borderColor: "oklch(var(--foreground) / 0.28)" }}
          >
            Contact Us
          </motion.button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
        >
          {[
            { value: "50+", label: "Projects Completed" },
            { value: "15+", label: "Years of Excellence" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1"
              style={{
                borderLeft:
                  i > 0 ? "1px solid oklch(var(--foreground) / 0.12)" : "none",
                paddingLeft: i > 0 ? "3rem" : 0,
              }}
            >
              <span className="font-display font-bold text-2xl text-accent-gold">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-foreground/50 font-body">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={() => scrollToSection("services")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        data-ocid="hero.scroll_down_button"
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-foreground/40 hover:text-accent-gold transition-smooth focus-visible:outline-none"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-body">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.6,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.button>
    </section>
  );
}
