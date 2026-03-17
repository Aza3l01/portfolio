import ProjectPage from "@/components/ProjectPage";

export default function YouCuratePage() {
  return (
    <ProjectPage
      title="YouCurate"
      subtitle="Control Your YouTube Algorithm"
      githubUrl="https://github.com/Aza3l01/youcurate"
      websiteUrl="https://PLACEHOLDER.com"
      overview="A user-driven YouTube channel ranking system that combines community structural signals with personal preferences to create a personalized transparency layer on top of YouTube. Not a universal rating—a personalized ranking layer."
      problem="YouTube's recommendation algorithm optimizes for engagement, not quality or transparency. Users have no way to surface negative quality signals—such as AI voice usage, clickbait intensity, or sponsorship saturation—because surfacing them would hurt YouTube's engagement metrics."
      solution="YouCurate builds an independent scoring and transparency layer. Users submit descriptive observations (not opinions) about channels and videos. These community signals are aggregated globally with trust weighting, then combined with each user's personal preferences to compute a personalized channel grade—all scored locally on the client. The server stores raw signals only and never touches personal scoring."
      features={[
        {
          title: "Community Signal Aggregation",
          description:
            "Users tag videos and channels with descriptive observations: AI voice usage, clickbait thumbnails, reaction content, sponsor segments, shorts spam. Signals are stored as aggregated percentages weighted by user trust. Example: AI Voice → 63%, Clickbait → 48%, Sponsor Density → 22%.",
        },
        {
          title: "Personal Scoring Engine (Client-Side)",
          description:
            "Users set personal preference weights (e.g., AI voice → -40 pts, clickbait → -20 pts, educational long-form → +30 pts, documentary format → +40 pts). The extension computes Channel Score = Community Signals × Your Preferences entirely on the client. Server never stores personal scoring data.",
        },
        {
          title: "Trust-Weighted Normalization",
          description:
            "New and low-trust users have lower influence on aggregated signals. High-trust users carry more weight. Uses weighted average aggregation with planned Bayesian normalization for low-tag channels.",
        },
        {
          title: "Grade Display System",
          description:
            "Normalized 0–100 personal score displayed as a circular badge on thumbnail overlays (top-left), channel pages, and youtube.com/watch pages. Grade is always personal, never universal.",
        },
        {
          title: "Channel Page UI",
          description:
            "Community signal breakdown, personal grade display, and tag submission interface directly on YouTube channel pages.",
        },
        {
          title: "Watch Page UI",
          description:
            "Tags and signal percentages displayed below the player, personal grade, and buttons to submit observations about the channel/video.",
        },
        {
          title: "Extension Preferences & Settings",
          description:
            "Preferences page with sliders for signal weighting (stored locally). Settings page with account deletion, preference reset, and local data clearing.",
        },
      ]}
      roadmap={[
        {
          phase: "V1 — Viewer Layer",
          items: [
            "Channel-level tagging",
            "Aggregated signal percentages",
            "User trust weighting",
            "Local preference scoring",
            "Grade display on channel pages",
            "Basic extension UI",
          ],
        },
        {
          phase: "V2 — Creator Layer",
          items: [
            "Channel claiming for creators",
            "Community signal breakdown dashboard",
            "Personal vs global average comparison",
            "Trust percentile in niche",
            "Trend history & transparency reports",
            "Creator subscription monetization",
          ],
        },
        {
          phase: "V3 — Brand / Sponsor Layer",
          items: [
            "Creator filtering by trust score, AI usage, sponsor density, niche",
            "Sponsorship risk reduction tools",
            "High-margin B2B SaaS model",
          ],
        },
        {
          phase: "Long-Term Vision",
          items: [
            "Public transparency index",
            "Cartesian plane channel mapping (factuality vs production quality)",
            "API access & dataset licensing",
            "Reputation intelligence layer",
          ],
        },
      ]}
      revenue="Free tier for basic usage. Basic tier for deeper customization and expanded analytics. Creator tier for full dashboard, reporting, and transparency tools. Long-term B2B SaaS for brands and sponsor agencies."
      screenshots={[]}
    />
  );
}