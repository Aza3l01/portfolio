"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Project {
  slug: string;
  title: string;
  description: string;
  date: string;
  thumbnail?: string;
}

const currentProjects: Project[] = [
  {
    slug: "apisentry",
    title: "APISentry",
    description: "Multi-agent AI framework for API abuse detection",
    date: "2026-02",
  },
  {
    slug: "youcurate",
    title: "YouCurate",
    description: "User-driven YouTube channel ranking & transparency layer",
    date: "2026-01",
  },
  {
    slug: "satquest",
    title: "SatQuest",
    description: "Multiplayer geography game using satellite imagery",
    date: "2025-07",
    thumbnail: "/projects/satquest/thumb.png",
  },
  {
    slug: "aiko",
    title: "Aiko",
    description: "AI waifu chatbot with affection system & 20+ personalities",
    date: "2024-09",
    thumbnail: "/projects/aiko/thumb.png",
  },
  {
    slug: "insultbot",
    title: "Insult Bot",
    description: "Feature-rich sassy chatbot & replybot for Discord",
    date: "2022-08",
    thumbnail: "/projects/insultbot/thumb.png",
  },
];

const retiredProjects: Project[] = [
  {
    slug: "everythingtools",
    title: "EverythingTools",
    description:
      "All-in-one extraction, PDF conversion & number converting tool",
    date: "2024-05",
  },
  {
    slug: "drivemanager",
    title: "DriveManager",
    description:
      "Cross-browser extension for safe, resumable cloud storage uploads",
    date: "2024-03",
  },
  {
    slug: "f1dashstats",
    title: "F1Dash&Stats",
    description: "Open source F1 dashboard for races, stats & predictions",
    date: "2023-11",
  },
  {
    slug: "3dpartpicker",
    title: "3DPartPicker",
    description: "PC part picking website with 3D/2D visualization",
    date: "2023-08",
  },
];

type SortMode = "date" | "alpha";

function sortProjects(projects: Project[], mode: SortMode): Project[] {
  return [...projects].sort((a, b) => {
    if (mode === "alpha") return a.title.localeCompare(b.title);
    return b.date.localeCompare(a.date);
  });
}

function formatDate(date: string): string {
  const [year, month] = date.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[parseInt(month) - 1]} ${year}`;
}

const Projects = () => {
  const [sort, setSort] = useState<SortMode>("date");

  const toggleSort = () => setSort((s) => (s === "date" ? "alpha" : "date"));

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10 md:py-16">
      {/* Filter toggle */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-sm text-zinc-500 uppercase tracking-widest">
          Current Projects
        </h2>
        <button
          onClick={toggleSort}
          className="flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          {sort === "date" ? "Date" : "A–Z"}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="6" x2="16" y2="6" />
            <line x1="4" y1="12" x2="12" y2="12" />
            <line x1="4" y1="18" x2="8" y2="18" />
            <polyline points="18 15 21 18 18 21" />
            <line x1="21" y1="10" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Current projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sortProjects(currentProjects, sort).map((project) => (
          <ProjectCard key={project.slug} project={project} showImage />
        ))}
      </div>

      {/* Retired Projects */}
      <div className="flex items-center justify-between mt-20 mb-10">
        <h2 className="text-sm text-zinc-500 uppercase tracking-widest">
          Retired Projects (May restore based on future viability)
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sortProjects(retiredProjects, sort).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({
  project,
  showImage = false,
}: {
  project: Project;
  showImage?: boolean;
}) => (
  <Link
    href={`/projects/${project.slug}`}
    className="group block bg-zinc-800/50 border border-zinc-700/50 rounded-2xl overflow-hidden hover:border-zinc-600 transition-all duration-300"
  >
    {showImage && (
      project.thumbnail ? (
        <div className="aspect-video bg-zinc-800 relative overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : (
        <div className="aspect-video bg-zinc-800/60 flex items-center justify-center">
          <span className="text-zinc-600 text-xs tracking-wide">In Early Development</span>
        </div>
      )
    )}
    <div className="p-5">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-white font-semibold text-lg group-hover:text-zinc-300 transition-colors">
          {project.title}
        </h3>
        <span className="text-xs text-zinc-600">
          {formatDate(project.date)}
        </span>
      </div>
      <p className="text-zinc-500 text-sm leading-relaxed">
        {project.description}
      </p>
    </div>
  </Link>
);

export default Projects;