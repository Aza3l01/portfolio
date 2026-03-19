import ProjectPage from "@/components/ProjectPage";

export default function DriveManagerPage() {
  return (
    <ProjectPage
      title="DriveManager"
      subtitle="Safe, Resumable Cloud Storage Uploads"
      githubUrl="https://github.com/PLACEHOLDER/drivemanager"
      websiteUrl="https://PLACEHOLDER.com"
      overview="A cross-browser extension (Firefox + Chromium) that makes uploading and downloading files to cloud storage safe, resumable, and user-friendly without needing heavy native clients."
      problem="Cloud storage providers require heavy desktop clients for reliable file transfers. Browser-based uploads are unreliable, non-resumable, and lack progress transparency."
      solution="DriveManager provides a lightweight browser extension that intercepts cloud storage transfers and adds resumability, safety checks, and a clean progress UI — no native client needed."
      features={[
        {
          title: "Cross-Browser Support",
          description:
            "Works on both Firefox and Chromium-based browsers (Chrome, Edge, Brave, etc.).",
        },
        {
          title: "Resumable Transfers",
          description:
            "Upload and download files with automatic resume on connection interruption.",
        },
        {
          title: "No Native Client Required",
          description:
            "Lightweight browser extension replaces the need for heavy desktop apps from cloud providers.",
        },
      ]}
      roadmap={[
        {
          phase: "Status — Retired",
          items: [
            "Medium development difficulty",
            "Low expected user adoption",
            "Open source with donation-based revenue",
            "Retired due to low usage potential",
          ],
        },
      ]}
      revenue="Planned: open source with donation-based support. Retired due to low projected usage."
      screenshots={[]}
    />
  );
}
