
export type ProjectStatus = "Live" | "Completed" | "In Development";

export type ProjectFeature = {
  title: string;
  description: string;
  icon: string;
};

export type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  thumbnailPosition?: string;
  status: ProjectStatus;
  liveUrl?: string;
  githubUrl?: string;
  demoVideo?: string;

  // Showcase details
  idea?: string;
  features?: string[];
  showcaseFeatures?: ProjectFeature[];
  challenges?: string[];
  learning?: string;
  timeline?: string;
  role?: string;
  screenshots?: string[];
};

export const projects: Project[] = [
  {
    number: "01",
    category: "Full-Stack Application",
    title: "Restaurant Ordering System",
    description:
      "A QR-based restaurant ordering platform designed to make restaurant ordering faster, simpler and more efficient.",

    technologies: ["React", "Node.js", "MongoDB", "Razorpay"],

    // Restaurant
    image: "/projects/restaurant/customer-table.png",
    thumbnailPosition: "center 35%",

    status: "Live",

    liveUrl:
      "https://qr-code-restaurant-tex7.vercel.app/portal/dashboard",

    githubUrl:
      "https://github.com/mayankgorshi/qr-code-restaurant",

    demoVideo: "/videos/Restaurant-demo.mp4",

    idea:
      "A real-world restaurant ordering system designed to replace traditional paper menus with a digital QR-based ordering experience. Customers can browse the menu, add items to their cart and place orders directly from their phones.",

    features: [
      "QR-based digital menu",
      "Category-based food browsing",
      "Shopping cart and order summary",
      "Restaurant kitchen order management",
      "Order status tracking",
      "Razorpay payment integration",
    ],

    showcaseFeatures: [
      {
        title: "Customer Ordering",
        description: "QR-based menu access",
        icon: "⌘",
      },
      {
        title: "Restaurant Dashboard",
        description: "Manage orders in real-time",
        icon: "▣",
      },
      {
        title: "Real-time Updates",
        description: "Live order tracking",
        icon: "↗",
      },
      {
        title: "Secure Payments",
        description: "Razorpay integration",
        icon: "▤",
      },
    ],

    challenges: [
      "Designing a smooth ordering flow",
      "Managing cart and order state",
      "Connecting frontend and backend APIs",
      "Handling restaurant orders reliably",
    ],

    learning:
      "This project helped me understand how a real-world full-stack application is structured and how frontend interfaces communicate with backend APIs and databases.",

    timeline: "2 Months",

    role: "Full-Stack Developer",

    screenshots: [
      "/projects/restaurant/login.png",
      "/projects/restaurant/cart.png",
      "/projects/restaurant/kitchen-dashboard.png",
      "/projects/restaurant/restaurant-settings.png",
      "/projects/restaurant/owner-control.png",
      "/projects/restaurant/customer-table.png",
    ],
  },

  {
    number: "02",
    category: "SaaS Platform",
    title: "TeamFlow",
    description:
      "A modern productivity platform focused on projects, tasks, authentication and team workflows.",

    technologies: ["React", "TypeScript", "PostgreSQL", "JWT"],

    // TeamFlow
    image: "/projects/teamflow/dashboard.png",
    thumbnailPosition: "center top",
    status: "Completed",

    liveUrl: "",

    githubUrl: "https://github.com/mayankgorshi/teamflow",

    demoVideo: "/videos/Teamflow-demo.mp4",

    idea:
      "A productivity platform designed to help teams organize projects, manage tasks and collaborate through a structured workspace.",

    features: [
      "User authentication",
      "Project management",
      "Task organization",
      "Protected routes",
      "PostgreSQL database integration",
      "Responsive dashboard",
    ],

    showcaseFeatures: [
      {
        title: "Project Management",
        description: "Organize team projects",
        icon: "▣",
      },
      {
        title: "Task Workflows",
        description: "Track project progress",
        icon: "✓",
      },
      {
        title: "Authentication",
        description: "JWT-based user access",
        icon: "⌘",
      },
      {
        title: "Team Dashboard",
        description: "Centralized workspace",
        icon: "▤",
      },
    ],

    challenges: [
      "Building a structured dashboard",
      "Implementing authentication",
      "Connecting frontend and backend",
      "Managing database relationships",
    ],

    learning:
      "This project improved my understanding of authentication, API integration, database design and building structured SaaS interfaces.",

    timeline: "Development Project",

    role: "Full-Stack Developer",

    screenshots: [
      "/projects/teamflow/dashboard.png",
      "/projects/teamflow/projects.png",
      "/projects/teamflow/chat-section.png",
      "/projects/teamflow/account-center.png",
    ],
  },

  {
    number: "03",
    category: "E-Commerce",
    title: "E-Commerce Platform",
    description:
      "A modern shopping experience with product discovery, collections, cart functionality and a polished interface.",

    technologies: [
      "React",
      "JavaScript",
      "MongoDB",
      "Tailwind CSS",
    ],

    // Fashion Store
    image: "/projects/fashion-store/home.png",
    thumbnailPosition: "center 42%",

    status: "Completed",

    liveUrl: "",

    githubUrl: "https://github.com/mayankgorshi/fashion-store-",

    demoVideo: "/videos/Fashion-store-demo.mp4",

    idea:
      "A modern e-commerce experience focused on product discovery, organized collections and a smooth shopping journey.",

    features: [
      "Product discovery",
      "Collection-based browsing",
      "Responsive product grid",
      "Shopping cart functionality",
      "Modern user interface",
      "Mobile-friendly layout",
    ],

    showcaseFeatures: [
      {
        title: "Product Discovery",
        description: "Explore products easily",
        icon: "⌕",
      },
      {
        title: "Product Collections",
        description: "Organized shopping experience",
        icon: "▣",
      },
      {
        title: "Shopping Cart",
        description: "Manage selected products",
        icon: "▤",
      },
      {
        title: "Responsive Design",
        description: "Built for different screens",
        icon: "↗",
      },
    ],

    challenges: [
      "Creating a smooth shopping experience",
      "Designing reusable product components",
      "Managing cart interactions",
      "Building responsive layouts",
    ],

    learning:
      "This project strengthened my frontend development skills and helped me practice reusable components, responsive layouts and user-focused interfaces.",

    timeline: "Development Project",

    role: "Frontend Developer",

    screenshots: [
      "/projects/fashion-store/home.png",
      "/projects/fashion-store/product.png",
      "/projects/fashion-store/details.png",
      "/projects/fashion-store/store-cart.png",
      "/projects/fashion-store/checkout.png",
    ],
  },
];