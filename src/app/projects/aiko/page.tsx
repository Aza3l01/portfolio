import ProjectPage from "@/components/ProjectPage";

export default function AikoPage() {
  return (
    <ProjectPage
      title="Aiko"
      subtitle="The Only Waifu Chatbot You Need"
      githubUrl="https://github.com/PLACEHOLDER/aiko"
      websiteUrl="https://top.gg/bot/aiko"
      overview="Aiko is a waifu chatbot for Discord with 20+ dere-type personalities and a deep affection system. She responds when mentioned or replied to, remembers conversations, and evolves her behavior based on your bond level. Currently in 800+ servers serving 50K+ users."
      problem="Most Discord chatbots are generic and lack personality, emotional engagement, or long-term retention mechanics. Users want companions that feel unique and reward consistent interaction."
      solution="Aiko combines personality archetypes (dere types) with a point-based affection system, daily streaks, gifting, and bond levels that change how she responds over time. Premium features unlock deeper interaction (unlimited DM, memory, streak restores) while free users can access premium via voting."
      features={[
        {
          title: "20+ Dere-Type Personalities",
          description:
            "Choose from Yandere, Tsundere, Kuudere, Himedere, Bakadere, Sadodere, Dorodere, Hinedere, Kamidere, Nyandere, Bodere, Erodere, Mayadere, Fushidere, Hikandere, and more. Each personality has distinct speech patterns and behavioral traits across 6 bond levels.",
        },
        {
          title: "Affection & Bond System",
          description:
            "Earn points through daily interaction, streak maintenance, and voting. Use /gift to improve Aiko's mood. Bond level (1–6) influences response warmth, personality expression, and available interactions. Mood gradually declines without streak maintenance.",
        },
        {
          title: "Daily Streaks & Rewards",
          description:
            "Daily interaction streaks earn gift points. Voting gives 50 bonus points. Missed streaks cause bond decay. Premium users get /restore for streak recovery and 2× point boost.",
        },
        {
          title: "Memory System",
          description:
            "Aiko remembers your conversations and references past interactions. Use /memory_clear to reset. Premium unlocks unlimited memory.",
        },
        {
          title: "Premium Tier ($1.99/month)",
          description:
            "Unlocks 2× point boost, unlimited DM text, unlimited memory, unlimited streak restores, and exclusive support server perks. Free users can access premium features temporarily by voting.",
        },
        {
          title: "Leaderboard & Social",
          description:
            "Use /top to view the server leaderboard. Use /profile to check your stats, bond level, streak, and points.",
        },
      ]}
      roadmap={[
        {
          phase: "Current — Live & Growing",
          items: [
            "800+ servers, 50K+ users",
            "20+ personality types with 6 bond levels each",
            "Affection system with streaks, gifting, and decay",
            "Premium via Ko-fi subscription",
          ],
        },
        {
          phase: "Next — Expansion",
          items: [
            "Migrate payment handling to Ko-fi webhooks",
            "New personality types",
            "Voice interaction capabilities",
            "[Update: add planned features]",
          ],
        },
      ]}
      revenue="Ko-fi subscription at $1.99/month for Aiko Premium. Free users can temporarily unlock premium via voting. Currently generating active revenue."
      screenshots={[]}
    />
  );
}
