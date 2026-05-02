import { STATS } from "@/data/constants";
import type { StatItem } from "@/types";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const duration = 2000;
    const step = 16;
    const increment = value / (duration / step);

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, step);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const STAT_DESCRIPTIONS: Record<string, string> = {
  "Projects Completed":
    "Delivered across residential, commercial, and landmark developments.",
  "Years Experience":
    "A legacy of precision-crafted spaces that stand the test of time.",
  "Client Satisfaction":
    "Every client leaves with a space that exceeds their vision.",
};

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      data-ocid={`stats.item.${index + 1}`}
      className="relative group flex flex-col p-8 lg:p-10 rounded-xl overflow-hidden"
      style={{
        background: "oklch(0.99 0.003 60)",
        boxShadow:
          "0 4px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
      }}
    >
      {/* Gold top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, oklch(var(--accent)) 0%, oklch(var(--accent) / 0.3) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Gold glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none rounded-xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(var(--accent) / 0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Counter */}
      <p
        className="font-display font-bold leading-none mb-3"
        style={{
          fontSize: "clamp(3rem, 6vw, 4.5rem)",
          color: "oklch(var(--accent))",
          textShadow: "0 0 40px oklch(var(--accent) / 0.25)",
        }}
      >
        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
      </p>

      {/* Label */}
      <p className="font-body font-semibold text-foreground text-base uppercase tracking-widest mb-3">
        {stat.label}
      </p>

      {/* Divider */}
      <div
        className="w-10 h-px mb-4"
        style={{ background: "oklch(var(--accent) / 0.4)" }}
        aria-hidden="true"
      />

      {/* Description */}
      <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">
        {STAT_DESCRIPTIONS[stat.label] ?? ""}
      </p>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.93 0.01 60) 0%, oklch(0.95 0.008 60) 60%, oklch(0.91 0.012 58) 100%)",
      }}
      data-ocid="stats.section"
    >
      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, oklch(var(--accent) / 0.03) 0px, oklch(var(--accent) / 0.03) 1px, transparent 1px, transparent 100px), repeating-linear-gradient(0deg, oklch(var(--accent) / 0.03) 0px, oklch(var(--accent) / 0.03) 1px, transparent 1px, transparent 100px)",
        }}
        aria-hidden="true"
      />

      {/* Radial glow bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] pointer-events-none opacity-[0.07]"
        style={{
          background:
            "radial-gradient(ellipse, oklch(var(--accent)) 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p
            className="text-xs uppercase tracking-[0.35em] font-body font-semibold mb-4"
            style={{ color: "oklch(var(--accent))" }}
          >
            Our Achievements
          </p>
          <h2
            className="font-display font-bold text-foreground leading-tight mb-5"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Why Choose Zentrax
          </h2>

          {/* Centered gold divider */}
          <div
            className="flex items-center justify-center gap-3 mb-5"
            aria-hidden="true"
          >
            <div
              className="h-px w-12"
              style={{ background: "oklch(var(--accent) / 0.5)" }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "oklch(var(--accent))" }}
            />
            <div
              className="h-px w-12"
              style={{ background: "oklch(var(--accent) / 0.5)" }}
            />
          </div>

          <p className="text-muted-foreground font-body leading-relaxed">
            Numbers that reflect our commitment to excellence and client
            satisfaction.
          </p>
        </motion.div>

        {/* Stats cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-7 mb-20"
          data-ocid="stats.list"
        >
          {STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Why choose us — feature row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {[
            {
              number: "01",
              title: "One-Stop Solution",
              desc: "From finding a space to designing, building, and maintaining — every service under one roof.",
            },
            {
              number: "02",
              title: "Premium Craftsmanship",
              desc: "We never compromise on materials, precision, or attention to detail across every project we undertake.",
            },
            {
              number: "03",
              title: "24/7 Dedicated Support",
              desc: "Our team is available around the clock for emergencies, queries, and ongoing post-completion maintenance.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="flex gap-5 items-start group"
            >
              {/* Number accent */}
              <span
                className="font-display font-bold text-3xl leading-none shrink-0 select-none transition-smooth group-hover:opacity-100 opacity-30"
                style={{ color: "oklch(var(--accent))" }}
              >
                {item.number}
              </span>
              <div>
                <h4 className="font-display font-semibold text-foreground text-base mb-2">
                  {item.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
