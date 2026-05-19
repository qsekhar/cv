export interface Project {
  name: string;
  /** Qualitative outcome sentence — no invented metrics. */
  summary: string;
  description: string;
  role: string;
  tech: string[];
  year: string;
  location: string;
  category: string;
  urls: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "WiFi Management Platform",
    summary:
      "A production platform for public-WiFi providers — real-time network monitoring, authentication and analytics, used by an operator in the UK.",
    description:
      "A comprehensive management platform for public WiFi providers, featuring real-time network monitoring, user authentication, and detailed analytics. Built with Django REST Framework for robust backend operations and React.js for a dynamic frontend experience.",
    role: "Full-stack engineer",
    tech: ["Django", "React", "PostgreSQL", "Redis"],
    year: "2024",
    location: "London, United Kingdom",
    category: "Full Stack",
    urls: ["https://app.b-connect.co.uk"],
    featured: true,
  },
  {
    name: "Net Zero Initiative",
    summary:
      "A sustainability platform helping organisations track and act on net-zero goals, with intuitive dashboards and a scalable architecture.",
    description:
      "A sophisticated sustainability platform supporting environmental initiatives with tools and resources for achieving net-zero carbon emissions. Features intuitive dashboards and scalable architecture for organizations worldwide.",
    role: "Full-stack engineer",
    tech: ["Laravel", "Vue.js", "MySQL", "AWS"],
    year: "2024",
    location: "London, United Kingdom",
    category: "Web Application",
    urls: ["https://netzeronow.org"],
    featured: true,
  },
  {
    name: "Medical Exam Preparation Suite",
    summary:
      "Five exam-prep platforms for medical students — large question banks, progress tracking and instant feedback, maintained over seven years.",
    description:
      "Five advanced medical exam preparation platforms enabling real-time practice with vast question databases. Features progress tracking, instant feedback, and comprehensive analytics for medical students.",
    role: "Full-stack engineer",
    tech: ["Laravel", "Angular", "MySQL", "Docker"],
    year: "2017 - 2024",
    location: "London, United Kingdom",
    category: "Education Platform",
    urls: [
      "https://mrcemexamprep.net",
      "https://frcrexamprep.co.uk",
      "https://mrcgpexamprep.co.uk",
      "https://plabprep.co.uk",
      "https://anatomyprep.co.uk",
    ],
    featured: true,
  },
  {
    name: "E-commerce Solutions",
    summary:
      "Industrial-equipment storefronts with secure payments, inventory management and bulk-order support.",
    description:
      "Specialized e-commerce platforms for industrial equipment sales, featuring secure payment processing, inventory management, and customer service integration. Optimized for both individual and bulk purchases.",
    role: "Full-stack engineer",
    tech: ["PrestaShop", "PHP", "MySQL", "PayPal"],
    year: "2015 - 2017",
    location: "Ontario, Canada",
    category: "E-commerce",
    urls: ["https://www.bluedogwirestripper.com/", "https://reddogzone.com/"],
  },
  {
    name: "Nature House Booking",
    summary:
      "An eco-friendly vacation-rental platform connecting travellers with unique nature stays.",
    description:
      "Eco-friendly vacation rental platform connecting users with unique nature accommodations. Promotes sustainable tourism with comprehensive property listings and a seamless booking experience.",
    role: "Full-stack engineer",
    tech: ["Core PHP", "MySQL", "jQuery", "CSS3"],
    year: "2012 - 2014",
    location: "Netherlands",
    category: "Travel & Tourism",
    urls: ["https://www.natuurhuisje.nl"],
  },
  {
    name: "Corpus Setup Helper for G-Suite",
    summary:
      "A published Chrome extension that streamlines Google Workspace account setup for organisations.",
    description:
      "A specialized tool for setting up Google Workspace (formerly G Suite) accounts, streamlining the process of configuring user accounts, email settings, and security features for organizations.",
    role: "Engineer",
    tech: ["Chrome Extension", "TypeScript", "JavaScript", "HTML", "CSS"],
    year: "2025",
    location: "Remote",
    category: "Productivity Tool",
    urls: [
      "https://chromewebstore.google.com/detail/corpus-setup-helper-for-g/lnhbffdmnngondikaagohfjjhgjbdioi",
    ],
    featured: true,
  },
  {
    name: "AI-Powered Face Detection",
    summary:
      "An AI face-detection system that automates tagging and organisation of visual content for photographers and videographers.",
    description:
      "An advanced face detection system utilizing AI algorithms for real-time recognition and analysis. Made for photographers and videographers to enhance their workflow with automated tagging and organization of visual content.",
    role: "Engineer",
    tech: ["Python", "TensorFlow", "OpenCV", "Next.js"],
    year: "2025",
    location: "Remote",
    category: "AI & Machine Learning",
    urls: ["http://soorti.com"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
