import ProjectPage from "@/components/ProjectPage";

export default function InsultBotPage() {
  return (
    <ProjectPage
      title="Insult Bot"
      subtitle="Feature-Rich Sassy Chatbot & Replybot"
      githubUrl="https://github.com/PLACEHOLDER/insultbot"
      websiteUrl="https://top.gg/bot/insultbot"
      overview="A feature-rich sassy chatbot and replybot for Discord. Insult Bot monitors messages for keywords and fires back with insults. When pinged or replied to, it acts as a full chatbot. Rated 4.53 stars, deployed in 4,200+ servers serving 200K+ users."
      problem="Discord servers lack personality-driven engagement bots that combine humor with customizability. Most bots are utility-focused with no entertainment value."
      solution="Insult Bot provides keyword-triggered insult responses, full chatbot capabilities when mentioned, and deep customization for premium users including custom triggers, insults, combos, and unlimited chatbot access."
      features={[
        {
          title: "Keyword-Triggered Responses",
          description:
            "Insult Bot scans messages for keywords and responds with insults automatically. When pinged or replied to, it switches to full chatbot mode for conversation.",
        },
        {
          title: "Channel Restriction",
          description:
            "Use /setchannel_toggle to restrict Insult Bot to specific channels. Use /setchannel_view to see current restrictions. Keeps the bot contained to appropriate channels.",
        },
        {
          title: "Core Commands",
          description:
            "/insult — Send an insult to someone. /setchannel_toggle — Restrict to channel(s). /setchannel_view — View restricted channels.",
        },
        {
          title: "Chatbot Commands (Premium)",
          description:
            "/autorespond — Have Insult Bot respond to every message in set channel(s). /memory — Make Insult Bot remember conversations. /style [set/view/clear] — Set custom chatbot style.",
        },
        {
          title: "Custom Content System (Premium)",
          description:
            "/insult_[add/remove/view] — Custom insults. /trigger_[add/remove/view] — Custom triggers. /combo_[add/remove/view] — Trigger-insult combos. /customonly — Use only custom content, fully personalizing the bot per server.",
        },
        {
          title: "Premium Subscription",
          description:
            "Premium unlocks custom triggers/insults, trigger-insult combos, custom-only mode, autorespond, memory, and unlimited chatbot access. Helps cover running costs.",
        },
      ]}
      roadmap={[
        {
          phase: "Current — Live & Generating Revenue",
          items: [
            "4,200+ servers, 200K+ users",
            "4.53 star rating",
            "Keyword triggers + full chatbot",
            "Custom content system (Premium)",
            "Ko-fi subscription payments",
          ],
        },
        {
          phase: "Next — Optimization",
          items: [
            "Migrate payments from Zapier to Ko-fi webhooks",
            "Upgrade payment infrastructure to capture more revenue",
            "Increase monetization efficiency",
            "[Update: add planned new features]",
          ],
        },
      ]}
      revenue="Ko-fi subscription model for Insult Bot Premium. Currently generating active revenue with optimization opportunities to improve payment capture rates."
      screenshots={[]}
    />
  );
}
