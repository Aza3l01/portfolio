import ProjectPage from "@/components/ProjectPage";

export default function F1DashStatsPage() {
  return (
    <ProjectPage
      title="F1Dash & Stats"
      subtitle="Open Source F1 Dashboard"
      githubUrl="https://github.com/PLACEHOLDER/f1dashstats"
      websiteUrl="https://PLACEHOLDER.com"
      overview="An open source Formula 1 dashboard for live race tracking, historical stats, and potentially predictions. A passion project for the F1 community."
      problem="Existing F1 data tools are either paywalled, cluttered, or lack real-time race integration with historical analysis."
      solution="F1Dash provides a clean, open source dashboard combining live race data, historical stats, and prediction models in one interface."
      features={[
        {
          title: "Live Race Dashboard",
          description:
            "Real-time race tracking with lap times, positions, pit stops, and gap analysis.",
        },
        {
          title: "Historical Stats",
          description:
            "Browse and compare driver and team statistics across seasons.",
        },
        {
          title: "Predictions",
          description:
            "ML-based race outcome predictions using historical data and current season performance. [Update: add prediction model details]",
        },
      ]}
      roadmap={[
        {
          phase: "Status — Retired",
          items: [
            "Low revenue potential",
            "Open source fun/passion project",
            "Donations + subscription to remove rate limits",
            "Retired — may revisit as a hobby project",
          ],
        },
      ]}
      revenue="Planned: donations, optional subscription to remove API rate limits. Retired due to low revenue potential."
      screenshots={[]}
    />
  );
}
