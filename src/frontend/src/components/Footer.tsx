import { CONTACT_INFO, NAV_LINKS } from "@/data/constants";
import { Clock, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const SOCIAL_LINKS = [
  { icon: SiInstagram, label: "Instagram", href: "#" },
  { icon: SiFacebook, label: "Facebook", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: SiX, label: "X (Twitter)", href: "#" },
] as const;

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer
      className="relative"
      style={{ background: "oklch(0.93 0.01 60)" }}
      data-ocid="footer.section"
    >
      {/* Gold accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(var(--accent) / 0.7), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pt-16 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          {/* Brand column */}
          <div>
            <h2
              className="font-display font-bold text-foreground text-xl mb-1 tracking-tight"
              data-ocid="footer.brand_name"
            >
              Zentrax Constructions
            </h2>
            <p
              className="text-xs uppercase tracking-[0.25em] mb-5 font-body font-medium"
              style={{ color: "oklch(var(--accent))" }}
            >
              Where Vision Meets Execution
            </p>
            <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6 max-w-xs">
              One-stop solution for construction, real estate, design, and
              maintenance. Building excellence since day one.
            </p>

            {/* Social icons */}
            <div
              className="flex items-center gap-3"
              data-ocid="footer.social_links"
            >
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  data-ocid="footer.social_link"
                  className="w-9 h-9 rounded-md flex items-center justify-center text-muted-foreground hover:text-accent-gold transition-smooth border border-border hover:border-accent/40"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] font-body font-semibold text-muted-foreground mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3" data-ocid="footer.nav_links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    data-ocid="footer.nav_link"
                    className="text-sm font-body text-muted-foreground hover:text-accent-gold transition-smooth text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] font-body font-semibold text-muted-foreground mb-6">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: "oklch(var(--accent))" }}
                />
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm text-muted-foreground font-body">
                    {CONTACT_INFO.phone}
                  </span>
                  <span className="text-sm text-muted-foreground font-body">
                    {CONTACT_INFO.altPhone}
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  size={14}
                  className="shrink-0"
                  style={{ color: "oklch(var(--accent))" }}
                />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm text-muted-foreground font-body hover:text-accent-gold transition-smooth"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock
                  size={14}
                  className="shrink-0"
                  style={{ color: "oklch(var(--accent))" }}
                />
                <span className="text-sm text-muted-foreground font-body">
                  {CONTACT_INFO.hours}
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t"
          style={{ borderColor: "oklch(var(--border))" }}
        >
          <p className="text-xs text-muted-foreground font-body text-center sm:text-left">
            © {year} Zentrax Constructions. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-body text-center sm:text-right">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-gold transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
