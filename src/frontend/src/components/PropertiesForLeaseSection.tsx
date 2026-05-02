import { MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function PropertiesForLeaseSection() {
  return (
    <section
      id="properties-for-lease"
      className="py-24 lg:py-32"
      style={{ background: "oklch(var(--secondary))" }}
      data-ocid="properties.section"
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
            Real Estate
          </p>

          <h2 className="font-display font-bold text-foreground text-4xl lg:text-5xl leading-tight mb-4 tracking-tight">
            Properties for Lease
          </h2>

          {/* Gold underline accent */}
          <div
            className="w-14 h-0.5 mb-5"
            style={{ background: "oklch(var(--accent))" }}
            aria-hidden="true"
          />

          <p className="text-muted-foreground font-body leading-relaxed text-base lg:text-lg">
            Explore our available rental and lease properties — premium
            locations with flexible terms tailored to your needs.
          </p>
        </motion.div>

        {/* Property card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
          data-ocid="properties.item.1"
          className="group max-w-lg rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-gold-glow transition-smooth"
          style={{ background: "oklch(var(--card))" }}
        >
          {/* Property image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <motion.img
              src="/assets/property-lease.jpg"
              alt="#44, Hombelaku, Ilavala Hobli, Mysuru, Karnataka"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              loading="lazy"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes("/assets/generated/")) {
                  target.src =
                    "/assets/generated/property-lease.dim_800x600.jpg";
                }
              }}
            />
            {/* For Lease badge */}
            <div
              className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-body font-bold uppercase tracking-wider"
              style={{
                background: "oklch(var(--accent))",
                color: "oklch(0.98 0 0)",
              }}
              data-ocid="properties.badge.1"
            >
              For Lease
            </div>
          </div>

          {/* Card body */}
          <div className="p-6">
            {/* Property type */}
            <p
              className="text-[11px] uppercase tracking-[0.25em] font-body font-semibold mb-2"
              style={{ color: "oklch(var(--accent))" }}
            >
              Residential Property
            </p>

            {/* Address */}
            <div className="flex items-start gap-2 mb-4">
              <MapPin
                size={16}
                className="mt-0.5 shrink-0"
                style={{ color: "oklch(var(--accent))" }}
              />
              <h3 className="font-display font-bold text-foreground text-lg leading-snug">
                #44, Hombelaku, Ilavala Hobli,
                <br />
                Mysuru, Karnataka
              </h3>
            </div>

            {/* Divider */}
            <div
              className="w-12 h-px mb-5"
              style={{ background: "oklch(var(--accent) / 0.4)" }}
              aria-hidden="true"
            />

            {/* Feature tags */}
            <ul className="flex flex-wrap gap-2 mb-6">
              {[
                "Residential",
                "Prime Location",
                "Mysuru",
                "Flexible Terms",
              ].map((tag) => (
                <li
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-body font-medium border border-border text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                data-ocid="properties.enquire_button.1"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md font-body font-semibold text-sm transition-smooth focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none hover:opacity-90 hover:shadow-gold-glow"
                style={{
                  background: "oklch(var(--accent))",
                  color: "oklch(0.98 0 0)",
                }}
              >
                <Phone size={14} />
                Enquire Now
              </button>
              <span className="text-xs text-muted-foreground font-body">
                Contact us for pricing
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
