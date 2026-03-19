import Link from "next/link";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
}

interface RoadmapPhase {
  phase: string;
  items: string[];
}

interface ProjectPageProps {
  title: string;
  subtitle: string;
  githubUrl: string;
  websiteUrl: string;
  overview: string;
  problem: string;
  solution: string;
  features: Feature[];
  roadmap: RoadmapPhase[];
  revenue: string;
  screenshots?: string[];
}

const ProjectPage = ({
  title,
  subtitle,
  githubUrl,
  websiteUrl,
  overview,
  problem,
  solution,
  features,
  roadmap,
  revenue,
  screenshots,
}: ProjectPageProps) => {
  return (
    <main className="bg-zinc-900 min-h-screen text-white">
      {/* Top nav */}
      <nav className="px-8 py-6">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          ← Back
        </Link>
      </nav>

      <div className="max-w-3xl mx-auto px-8 pb-24">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
          <p className="text-zinc-500 text-lg mb-8">{subtitle}</p>
          <div className="flex gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-300 hover:border-zinc-500 hover:text-white transition-all duration-200"
            >
              GitHub
            </a>
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-sm text-zinc-300 hover:border-zinc-500 hover:text-white transition-all duration-200"
            >
              Website
            </a>
          </div>
        </header>

        {/* Overview */}
        <Section title="Overview">
          <p className="text-zinc-400 leading-relaxed">{overview}</p>
        </Section>

        {/* Problem */}
        <Section title="Problem">
          <p className="text-zinc-400 leading-relaxed">{problem}</p>
        </Section>

        {/* Solution */}
        <Section title="Solution">
          <p className="text-zinc-400 leading-relaxed">{solution}</p>
        </Section>

        {/* Features */}
        <Section title="Key Features">
          <div className="space-y-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-zinc-800/40 border border-zinc-700/40 rounded-xl p-5"
              >
                <h4 className="text-white font-medium mb-2">{feature.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Roadmap */}
        <Section title="Roadmap">
          <div className="space-y-8">
            {roadmap.map((phase, i) => (
              <div key={i}>
                <h4 className="text-white font-medium mb-3">{phase.phase}</h4>
                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-zinc-500 text-sm pl-4 border-l border-zinc-700"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Revenue Model */}
        <Section title="Revenue Model">
          <p className="text-zinc-400 leading-relaxed">{revenue}</p>
        </Section>

        {/* Screenshots */}
        {screenshots && screenshots.length > 0 && (
          <Section title="Screenshots">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {screenshots.map((src, i) => (
                <div
                  key={i}
                  className="aspect-video bg-zinc-800 rounded-xl overflow-hidden relative"
                >
                  <Image
                    src={src}
                    alt={`Screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </Section>
        )}
      </div>
    </main>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="mb-14">
      <h3 className="text-xs text-zinc-500 uppercase tracking-widest mb-5">
        {title}
      </h3>
      {children}
    </section>
  );
};

export default ProjectPage;