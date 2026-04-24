export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface PortfolioProject {
  id: string;
  name: string;
  category: string;
  image: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  phone: string;
  altPhone: string;
  email: string;
  hours: string;
}
