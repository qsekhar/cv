export interface Service {
  id: string;
  /** react-icons Fa* export name, e.g. "FaCode". */
  icon: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  tech: string[];
}

export const services: Service[] = [
  {
    id: "web-app",
    icon: "FaCode",
    title: "Web App Development",
    tagline: "Production-ready apps built with modern tech",
    description:
      "I design and build full-featured web applications using React, Next.js, and TypeScript — optimised for performance, SEO, and accessibility. From MVPs to enterprise dashboards, I deliver clean, maintainable code.",
    deliverables: [
      "Responsive, mobile-first UI",
      "SEO & Core Web Vitals optimised",
      "Auth, roles, and permissions",
      "CI/CD-ready codebase",
      "Ongoing maintenance available",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  {
    id: "api-backend",
    icon: "FaServer",
    title: "API & Backend Development",
    tagline: "Scalable, secure, and well-documented APIs",
    description:
      "Need a backend that can grow with you? I build REST APIs and server-side systems with Node.js, Python, or PHP — with proper authentication, error handling, and documentation included as standard.",
    deliverables: [
      "REST or GraphQL API design",
      "JWT / OAuth authentication",
      "Database design & optimisation",
      "Swagger / OpenAPI docs",
      "Cloud deployment (AWS, GCP, Vercel)",
    ],
    tech: ["Node.js", "Python", "PHP", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    id: "mobile",
    icon: "FaMobile",
    title: "Mobile App Development",
    tagline: "One codebase — iOS and Android",
    description:
      "Cross-platform mobile apps that feel native. Using Flutter or React Native, I build apps that are fast, smooth, and ready for both app stores — saving you the cost of two separate development teams.",
    deliverables: [
      "iOS & Android from one codebase",
      "Native look and feel",
      "App Store & Play Store submission",
      "Push notifications",
      "Offline-first support",
    ],
    tech: ["Flutter", "React Native", "Dart", "Firebase", "REST APIs"],
  },
  {
    id: "ecommerce",
    icon: "FaShoppingCart",
    title: "E-Commerce Solutions",
    tagline: "Online stores that convert browsers into buyers",
    description:
      "From custom storefronts to WooCommerce customisations — I build e-commerce experiences optimised for conversion. Payment gateways, inventory management, and admin dashboards included.",
    deliverables: [
      "Custom storefront UI",
      "Stripe / Razorpay / PayPal integration",
      "Cart, checkout, and order management",
      "Product & inventory CMS",
      "Performance & SEO optimisation",
    ],
    tech: ["Next.js", "WooCommerce", "Stripe", "Shopify", "PostgreSQL"],
  },
  {
    id: "consulting",
    icon: "FaBrain",
    title: "Tech Consulting",
    tagline: "Expert guidance — save months of wrong decisions",
    description:
      "Architecture reviews, tech stack selection, code audits, and team mentoring. If you're building something and want an experienced second opinion before committing to a direction, I'm here to help.",
    deliverables: [
      "Architecture review & recommendations",
      "Tech stack selection advice",
      "Code quality & security audit",
      "Team onboarding & mentoring",
      "Written report with action items",
    ],
    tech: ["System Design", "Code Review", "Security", "Performance", "Best Practices"],
  },
  {
    id: "mvp",
    icon: "FaRocket",
    title: "MVP Development",
    tagline: "From idea to launch — fast",
    description:
      "Have a startup idea but need to validate it quickly? I've launched 100+ MVPs and know exactly what to build — and what to skip — to get you in front of real users as fast as possible.",
    deliverables: [
      "Scoped feature set for launch",
      "Working product in weeks, not months",
      "User feedback integration",
      "Scalable foundation for growth",
      "Investor-ready demo",
    ],
    tech: ["React", "Next.js", "Node.js", "Supabase", "Vercel"],
  },
];
