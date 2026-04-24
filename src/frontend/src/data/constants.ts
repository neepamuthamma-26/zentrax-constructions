import type {
  ContactInfo,
  NavLink,
  PortfolioProject,
  ServiceItem,
  StatItem,
} from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About Us", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Find a Space",
    description:
      "We connect you with the perfect property — residential, commercial, or investment.",
    features: [
      "Residential & Commercial Properties",
      "Luxury Apartment Rentals",
      "Flexible Property Leasing",
      "Property Management",
    ],
    icon: "MapPin",
  },
  {
    title: "Design a Space",
    description:
      "Our architects and designers translate your vision into blueprints and reality.",
    features: [
      "Architectural Planning & 3D Models",
      "Interior Design & Styling",
      "Landscape & Outdoor Design",
    ],
    icon: "Pencil",
  },
  {
    title: "Build a Space",
    description:
      "End-to-end construction services with precision, quality, and reliability.",
    features: [
      "General Contracting",
      "Civil Engineering & Structural Work",
      "Renovation & Remodeling",
      "Building Materials Supply",
    ],
    icon: "HardHat",
  },
  {
    title: "Specialize a Space",
    description:
      "Transform spaces into intelligent, sustainable, and personalized environments.",
    features: [
      "Smart Home Integration",
      "Modular Kitchen & Wardrobe",
      "Sustainability Consulting",
      "Electrical & Plumbing Kits",
    ],
    icon: "Zap",
  },
  {
    title: "Maintain a Space",
    description:
      "Comprehensive post-completion care to protect your investment long-term.",
    features: [
      "Facility Management",
      "Post-Completion Services",
      "Emergency Repairs (24/7)",
    ],
    icon: "Wrench",
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "vertex-tower",
    name: "Vertex Tower",
    category: "Luxury Project",
    image: "/assets/generated/portfolio-vertex-tower.dim_800x600.jpg",
  },
  {
    id: "coastal-residence",
    name: "Coastal Residence",
    category: "Luxury Project",
    image: "/assets/generated/portfolio-coastal-residence.dim_800x600.jpg",
  },
  {
    id: "innovation-center",
    name: "Innovation Center",
    category: "Luxury Project",
    image: "/assets/generated/portfolio-innovation-center.dim_800x600.jpg",
  },
  {
    id: "residential-township",
    name: "Residential Township",
    category: "Luxury Project",
    image: "/assets/generated/portfolio-residential-township.dim_800x600.jpg",
  },
];

export const STATS: StatItem[] = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export const CONTACT_INFO: ContactInfo = {
  phone: "+91 72046 56119",
  altPhone: "+91 70194 36720",
  email: "zentrax1234@gmail.com",
  hours: "Mon–Sat, 9 AM – 7 PM",
};
