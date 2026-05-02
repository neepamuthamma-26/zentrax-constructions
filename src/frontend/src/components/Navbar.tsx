import { NAV_LINKS } from "@/data/constants";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 },
      );
      obs.observe(el);
      observers.push(obs);
    }

    return () => {
      for (const o of observers) o.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-card/98 backdrop-blur-md border-b border-border shadow-card"
            : "bg-card/90 backdrop-blur-sm border-b border-border/50"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#hero")}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            aria-label="Zentrax Constructions - Go to top"
            data-ocid="nav.logo"
          >
            <img
              src="/assets/logo.png"
              alt="Zentrax Constructions"
              className="h-16 w-auto object-contain max-w-[220px]"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const fallback =
                  target.nextElementSibling as HTMLElement | null;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <span
              style={{ display: "none" }}
              className="font-display font-black text-xl tracking-[0.12em] uppercase text-accent-gold flex items-center"
            >
              ZENTRAX CONSTRUCTIONS
            </span>
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  type="button"
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  data-ocid={`nav.${link.label.toLowerCase().replace(" ", "_")}.link`}
                  className={`px-4 py-2 rounded-md text-sm font-body font-medium transition-smooth focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${
                    isActive
                      ? "text-accent-gold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="h-px mt-0.5 mx-auto"
                      style={{
                        background: "oklch(var(--accent))",
                        width: "60%",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              data-ocid="nav.cta_button"
              className="hidden md:inline-flex items-center px-5 py-2 rounded-md text-sm font-body font-semibold transition-smooth focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none border border-accent/60 text-accent-gold hover:bg-accent/10 hover:shadow-gold-glow"
            >
              Get a Consultation
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              data-ocid="nav.hamburger_button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground transition-smooth focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-40 w-72 bg-card border-l border-border shadow-card flex flex-col pt-20 pb-8 px-6"
            data-ocid="nav.mobile_drawer"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    type="button"
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    data-ocid={`nav.mobile_${link.label.toLowerCase().replace(" ", "_")}.link`}
                    className={`px-4 py-3 rounded-md text-left text-base font-body font-medium transition-smooth ${
                      isActive
                        ? "text-accent-gold bg-accent/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>
            <div className="mt-auto">
              <button
                type="button"
                onClick={() => handleNavClick("#contact")}
                data-ocid="nav.mobile_cta_button"
                className="w-full py-3 rounded-md font-body font-semibold text-sm border border-accent/60 text-accent-gold hover:bg-accent/10 transition-smooth"
              >
                Get a Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-30 bg-background/60 backdrop-blur-sm md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
