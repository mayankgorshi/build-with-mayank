import Link from "next/link";

const projects = {
  "restaurant-ordering": {
    category: "Full-Stack Application",
    title: "Restaurant Ordering System",
    description:
      "A QR-based restaurant ordering platform designed to make restaurant ordering faster, simpler and more efficient.",

    image: "/projects/restaurant.webp",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay",
    ],

    overview:
      "A real-world restaurant ordering system designed to replace traditional paper menus with a fast QR-based digital ordering experience. Customers can browse the menu, add items to their cart and place orders directly from their phones.",

    features: [
      "QR-based digital menu",
      "Category-based food browsing",
      "Shopping cart and order summary",
      "Restaurant kitchen order management",
      "Order status tracking",
      "Razorpay payment integration",
    ],

    challenges: [
      "Designing a smooth ordering flow",
      "Managing cart and order state",
      "Connecting frontend and backend APIs",
      "Handling orders reliably",
    ],

    learning:
      "This project helped me understand how a real-world full-stack application is structured and how frontend interfaces communicate with backend APIs and databases.",

    liveUrl: "",
  },

  teamflow: {
    category: "SaaS Platform",
    title: "TeamFlow",
    description:
      "A modern productivity platform focused on projects, tasks, authentication and team workflows.",

    image: "/projects/teamflow.webp",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "JWT",
    ],

    overview:
      "TeamFlow is a productivity platform designed to help teams organize projects, manage tasks and keep their workflow structured in one place.",

    features: [
      "User authentication",
      "Project management",
      "Task management",
      "Protected routes",
      "Team-oriented dashboard",
      "Responsive modern interface",
    ],

    challenges: [
      "Designing reusable components",
      "Planning authentication architecture",
      "Managing protected routes",
      "Structuring the application for future scalability",
    ],

    learning:
      "TeamFlow pushed me toward more structured application architecture and helped me understand how authentication, databases and reusable frontend systems come together in a SaaS product.",

    liveUrl: "",
  },

  ecommerce: {
    category: "E-Commerce",
    title: "E-Commerce Platform",
    description:
      "A modern shopping experience with product discovery, collections, cart functionality and a polished interface.",

    image: "/projects/ecommerce.webp",

    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],

    overview:
      "A modern e-commerce platform focused on creating a smooth shopping experience from product discovery to cart management.",

    features: [
      "Product collections",
      "Product detail pages",
      "Shopping cart",
      "Responsive product grid",
      "Category navigation",
      "Modern checkout experience",
    ],

    challenges: [
      "Building reusable product components",
      "Managing cart state",
      "Creating responsive product layouts",
      "Designing a smooth shopping experience",
    ],

    learning:
      "This project strengthened my understanding of e-commerce workflows, reusable UI components, state management and building interfaces that are both functional and visually polished.",

    liveUrl: "",
  },
};

type ProjectSlug = keyof typeof projects;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug as ProjectSlug];

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/30">
            404
          </p>

          <h1 className="mt-4 text-4xl font-medium">
            Project not found.
          </h1>

          <Link
            href="/#projects"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
          >
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-black px-6 py-28 text-white md:py-36">
      <div className="mx-auto max-w-6xl">
        {/* Back */}

        <Link
          href="/#projects"
          className="inline-flex text-sm text-white/40 transition-colors hover:text-white"
        >
          ← Back to projects
        </Link>

        {/* Header */}

        <div className="mt-20 max-w-5xl">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300/60">
            {project.category}
          </p>

          <h1 className="mt-6 text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-8xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/40 md:text-xl">
            {project.description}
          </p>
        </div>

        {/* Project Preview */}

        <div className="relative mt-20 aspect-video overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Overview */}

        <section className="mt-24 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            The Idea
          </p>

          <p className="mt-6 text-lg leading-8 text-white/50 md:text-xl md:leading-9">
            {project.overview}
          </p>
        </section>

        {/* Features */}

        <section className="mt-24">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Key Features
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm text-white/50 transition-colors duration-300 hover:border-violet-400/20 hover:bg-violet-400/[0.03]"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}

        <section className="mt-24 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Challenges
          </p>

          <ul className="mt-8 space-y-4">
            {project.challenges.map((challenge) => (
              <li
                key={challenge}
                className="flex gap-4 text-base leading-7 text-white/50"
              >
                <span className="text-violet-400">✦</span>

                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Learning */}

        <section className="mt-24 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            What I Learned
          </p>

          <p className="mt-6 text-lg leading-8 text-white/50 md:text-xl md:leading-9">
            {project.learning}
          </p>
        </section>

        {/* Built With */}

        <section className="mt-24">
          <p className="text-xs uppercase tracking-[0.3em] text-white/30">
            Built With
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/50"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Live Project */}

        {project.liveUrl && (
          <section className="mt-20 border-t border-white/10 pt-10">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
            >
              Visit Live Project ↗
            </a>
          </section>
        )}

        {/* Bottom */}

        <div className="mt-24 border-t border-white/10 pt-8">
          <Link
            href="/#projects"
            className="text-sm text-white/30 transition-colors hover:text-white"
          >
            ← Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}