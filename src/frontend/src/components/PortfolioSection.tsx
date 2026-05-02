import { PORTFOLIO_PROJECTS } from "@/data/constants";
import type { PortfolioProject } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

function PortfolioCard({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.13,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      data-ocid={`portfolio.item.${index + 1}`}
      className="group relative overflow-hidden rounded-xl cursor-pointer"
      style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.15)" }}
    >
      {/* Image wrapper with zoom on hover */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
          style={{ transformOrigin: "center center" }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          loading="lazy"
        />

        {/* Always-visible subtle gradient at bottom for label */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, oklch(0.15 0.01 260 / 0.65) 0%, oklch(0.15 0.01 260 / 0.15) 40%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Hover overlay — slides up, richer gradient */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-7 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          style={{
            background:
              "linear-gradient(to top, oklch(0.12 0.01 260 / 0.94) 0%, oklch(0.12 0.01 260 / 0.55) 50%, transparent 100%)",
          }}
        >
          <span
            className="text-[10px] uppercase tracking-[0.3em] font-body font-semibold mb-2"
            style={{ color: "oklch(var(--accent))" }}
          >
            {project.category}
          </span>
          <div className="flex items-end justify-between gap-3">
            <h3 className="font-display font-bold text-foreground text-2xl leading-tight">
              {project.name}
            </h3>
            <div
              className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center border border-current transition-smooth"
              style={{
                color: "oklch(var(--accent))",
                borderColor: "oklch(var(--accent) / 0.4)",
              }}
            >
              <ArrowUpRight size={16} />
            </div>
          </div>
          <div
            className="mt-3 h-px w-12"
            style={{ background: "oklch(var(--accent))" }}
            aria-hidden="true"
          />
        </motion.div>

        {/* Default label (fades out on hover) */}
        <motion.div
          className="absolute bottom-5 left-6 pointer-events-none"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <h3 className="font-display font-semibold text-foreground text-lg drop-shadow-lg">
            {project.name}
          </h3>
          <p
            className="text-xs font-body"
            style={{ color: "oklch(var(--accent))" }}
          >
            {project.category}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "oklch(var(--background))" }}
      data-ocid="portfolio.section"
    >
      {/* Decorative background detail */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, oklch(var(--accent)) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p
            className="text-xs uppercase tracking-[0.35em] font-body font-semibold mb-4"
            style={{ color: "oklch(var(--accent))" }}
          >
            Our Work
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <h2
              className="font-display font-bold text-foreground leading-tight"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
            >
              Crafting Excellence
              <br />
              <span className="italic font-light">Across Projects</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed max-w-sm lg:text-right">
              A curated selection of landmark projects that define our expertise
              and craftsmanship.
            </p>
          </div>

          {/* Gold accent line */}
          <div className="mt-8 flex items-center gap-4">
            <div
              className="h-px w-16"
              style={{ background: "oklch(var(--accent))" }}
              aria-hidden="true"
            />
            <div
              className="h-px flex-1 opacity-20"
              style={{ background: "oklch(var(--foreground))" }}
              aria-hidden="true"
            />
          </div>
        </motion.div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7"
          data-ocid="portfolio.list"
        >
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <PortfolioCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <a
            href="#contact"
            data-ocid="portfolio.view_all_link"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold transition-smooth group"
            style={{ color: "oklch(var(--accent))" }}
          >
            Discuss your project with us
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
