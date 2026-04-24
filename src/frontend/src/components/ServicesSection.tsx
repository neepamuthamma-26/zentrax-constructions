import { SERVICES } from "@/data/constants";
import type { ServiceItem } from "@/types";
import { HardHat, MapPin, Pencil, Wrench, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

const ICON_MAP: Record<string, LucideIcon> = {
  MapPin,
  Pencil,
  HardHat,
  Zap,
  Wrench,
};

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon] ?? MapPin;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -4 }}
      data-ocid={`services.item.${index + 1}`}
      className="group relative flex flex-col rounded-lg p-7 border transition-smooth cursor-default overflow-hidden"
      style={{
        background: "oklch(var(--card))",
        borderColor: "oklch(var(--border))",
      }}
    >
      {/* Gold top border accent — visible on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-lg opacity-0 group-hover:opacity-100 transition-smooth"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(var(--accent)) 40%, oklch(var(--accent)) 60%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle corner highlight */}
      <div
        className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 100% 0%, oklch(var(--accent) / 0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Icon */}
      <motion.div
        className="w-11 h-11 rounded-md flex items-center justify-center mb-5 shrink-0 transition-smooth"
        style={{ background: "oklch(var(--accent) / 0.1)" }}
        whileHover={{ scale: 1.1 }}
      >
        <Icon size={20} style={{ color: "oklch(var(--accent))" }} />
      </motion.div>

      {/* Category label */}
      <p
        className="text-[10px] uppercase tracking-[0.25em] font-body font-semibold mb-1.5 transition-smooth"
        style={{ color: "oklch(var(--accent))" }}
      >
        {service.title}
      </p>

      {/* Description */}
      <p className="text-sm text-muted-foreground font-body leading-relaxed mb-5">
        {service.description}
      </p>

      {/* Feature list */}
      <ul className="mt-auto space-y-2">
        {service.features.map((feat) => (
          <li
            key={feat}
            className="flex items-start gap-2.5 text-xs font-body leading-snug"
            style={{ color: "oklch(var(--foreground) / 0.72)" }}
          >
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-smooth group-hover:shadow-gold-glow"
              style={{ background: "oklch(var(--accent) / 0.7)" }}
              aria-hidden="true"
            />
            {feat}
          </li>
        ))}
      </ul>

      {/* Hover glow shadow overlay */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"
        style={{
          boxShadow:
            "inset 0 0 0 1px oklch(var(--accent) / 0.18), 0 8px 32px oklch(0 0 0 / 0.18)",
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32"
      data-ocid="services.section"
      style={{ background: "oklch(var(--background))" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs uppercase tracking-[0.35em] font-body font-semibold mb-3 text-accent-gold inline-flex items-center gap-2">
            <span
              className="block w-5 h-px"
              style={{ background: "oklch(var(--accent))" }}
              aria-hidden="true"
            />
            What We Do
          </p>

          <h2 className="font-display font-bold text-foreground text-4xl lg:text-5xl leading-tight mb-5 tracking-tight">
            Our Services
          </h2>

          {/* Gold underline accent */}
          <div
            className="w-14 h-0.5 mb-5"
            style={{ background: "oklch(var(--accent))" }}
            aria-hidden="true"
          />

          <p className="text-muted-foreground font-body leading-relaxed text-base lg:text-lg">
            From finding the perfect space to maintaining it — we cover every
            phase of your construction journey.
          </p>
        </motion.div>

        {/* Cards grid — 5 cards: 1 col mobile, 2 col tablet, then 3+2 rows on desktop */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          data-ocid="services.list"
        >
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
