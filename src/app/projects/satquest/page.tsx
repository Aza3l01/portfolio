import ProjectPage from "@/components/ProjectPage";

export default function SatQuestPage() {
  return (
    <ProjectPage
      title="SatQuest"
      subtitle="Multiplayer Geography Game"
      githubUrl="https://github.com/Aza3l01/satquest"
      websiteUrl="https://www.satquest.app/"
      overview="A web-based multiplayer geography game using satellite and terrain imagery with Elo-based ranking systems for competitive leaderboards."
      problem="Existing geography games lack deep competitive multiplayer infrastructure, diverse imagery sources, and game economy mechanics that drive long-term retention."
      solution="SatQuest combines satellite imagery with real-time multiplayer gameplay and an Elo ranking system. Designed for both casual and competitive play, with monetization through subscriptions, cosmetics, and competitive access."
      features={[
        {
          title: "Satellite & Terrain Imagery",
          description:
            "Game rounds use diverse satellite and terrain imagery sources to challenge players with varying difficulty levels and geographic contexts.",
        },
        {
          title: "Elo Ranking System",
          description:
            "Competitive matches use an Elo-based rating system for fair matchmaking and leaderboard progression.",
        },
        {
          title: "Multiplayer Infrastructure",
          description:
            "Real-time multiplayer with matchmaking, lobbies, and competitive seasons. [Update: add more detail on multiplayer architecture]",
        },
        {
          title: "Game Economy",
          description:
            "Subscription access for competitive modes, paid cosmetic skins, and other engagement-driving rewards. [Update: finalize economy design]",
        },
      ]}
      roadmap={[
        {
          phase: "Phase 1 — Core Game",
          items: [
            "Basic satellite imagery rounds",
            "Single-player practice mode",
            "Core guessing mechanics",
            "[Update: add more Phase 1 items]",
          ],
        },
        {
          phase: "Phase 2 — Multiplayer & Competitive",
          items: [
            "Real-time multiplayer",
            "Elo matchmaking",
            "Leaderboards and seasons",
            "[Update: add more Phase 2 items]",
          ],
        },
        {
          phase: "Phase 3 — Monetization & Scale",
          items: [
            "Subscription tier for competitive",
            "Cosmetic store",
            "Dedicated game development team expansion",
            "[Update: add more Phase 3 items]",
          ],
        },
      ]}
      revenue="Full-scale game revenue model: subscription for competitive game access, paid skins and cosmetics, and engagement-based rewards."
      screenshots={["/projects/satquest/screenshot-1.png"]}
    />
  );
}