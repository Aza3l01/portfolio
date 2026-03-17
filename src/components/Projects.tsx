import Link from "next/link";

const projects = [
	{
		slug: "youcurate",
		title: "YouCurate",
		description: "User-driven YouTube channel ranking & transparency layer",
	},
	{
		slug: "satquest",
		title: "SatQuest",
		description: "Multiplayer geography game using satellite imagery",
	},
	{
		slug: "apisentry",
		title: "APISentry",
		description: "Multi-agent AI framework for API abuse detection",
	},
];

const Projects = () => {
	return (
		<section className="max-w-[1200px] mx-auto px-8 py-16">
			<h2 className="text-sm text-zinc-500 uppercase tracking-widest mb-10">
				Current Projects
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{projects.map((project) => (
					<Link
						key={project.slug}
						href={`/projects/${project.slug}`}
						className="group block bg-zinc-800/50 border border-zinc-700/50 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all duration-300"
					>
						<div className="aspect-video bg-zinc-800 flex items-center justify-center">
							<span className="text-zinc-600 text-sm">
								[Update: add screenshot]
							</span>
						</div>
						<div className="p-5">
							<h3 className="text-white font-semibold text-lg mb-1 group-hover:text-zinc-300 transition-colors">
								{project.title}
							</h3>
							<p className="text-zinc-500 text-sm leading-relaxed">
								{project.description}
							</p>
						</div>
					</Link>
				))}
			</div>
		</section>
	);
};

export default Projects;