import ProjectPage from "@/components/ProjectPage";

export default function APISentryPage() {
  return (
    <ProjectPage
      title="APISentry"
      subtitle="Multi-Agent AI Framework for API Abuse Detection"
      githubUrl="https://github.com/Aza3l01/abuse-engine"
      websiteUrl="https://PLACEHOLDER.com"
      overview="A four-agent AI framework designed to detect and report multiple API abuse vectors simultaneously. Instead of relying on a single large ML model, APISentry decomposes abuse detection into specialized agents that independently analyze different dimensions of API traffic—behavioral patterns, endpoint semantics, spatio-temporal graphs—and aggregates their outputs through a coordinator agent. On-track to publish peer-reviewed research validating accuracy."
      problem="Traditional API security tools rely on static rules or monolithic models that struggle to detect diverse, evolving abuse patterns. A single detection approach cannot simultaneously handle bot automation, API scraping, endpoint enumeration, and semantic misuse with high accuracy and explainability."
      solution="APISentry uses a multi-agent architecture where each agent has a clearly defined responsibility, processes normalized canonical API events, outputs a risk score with explainable flags, and operates independently. Agents share the same input pipeline (raw logs → normalizer → canonical events → sessionizer → agents) but never communicate directly. A coordinator agent aggregates all outputs for final risk assessment."
      features={[
        {
          title: "Behavioral Analysis Agent",
          description:
            "Analyzes user sessions to detect anomalous behavioral patterns such as bot automation, rapid-fire requests, and unusual navigation sequences. Operates on sessionized canonical events. Accepts List[CanonicalEvent], outputs AgentResult with risk score and explainable flags.",
        },
        {
          title: "Semantic Guard Agent",
          description:
            "Analyzes endpoint semantics and API specification compliance to detect misuse such as parameter fuzzing, endpoint enumeration, and unauthorized resource access patterns. Operates on endpoint semantics and API spec. Accepts List[CanonicalEvent], outputs AgentResult.",
        },
        {
          title: "Spatio-Temporal Graph Agent (Future)",
          description:
            "Will analyze spatial and temporal relationships between API events to detect coordinated attacks, distributed abuse campaigns, and geographic anomalies.",
        },
        {
          title: "Coordinator Agent (Future)",
          description:
            "Will aggregate risk scores and explainable flags from all agents into a unified threat assessment, enabling multi-vector abuse detection in a single pass.",
        },
        {
          title: "Normalized Data Pipeline",
          description:
            "Raw API logs → Normalizer → Canonical Events → Sessionizer → Agents. Canonical event schema: timestamp, ip, user_id, endpoint, method, status_code, user_agent, response_time, request_params. All agents consume the same schema.",
        },
        {
          title: "Synthetic Data Generation",
          description:
            "Purpose-built synthetic API traffic simulating normal user sessions, bot automation, API scraping, and endpoint enumeration for agent validation. Public datasets (CICIDS2017, UNSW-NB15, HTTP access logs) converted to canonical format for later evaluation.",
        },
      ]}
      roadmap={[
        {
          phase: "Phase 1 — Data & Schema Foundation",
          items: [
            "Create synthetic API logs with normal and attack traffic",
            "Define canonical event schema",
            "Build log normalizer",
            "Build sessionizer",
          ],
        },
        {
          phase: "Phase 2 — Core Agents",
          items: [
            "Implement Behavioral Analysis Agent",
            "Implement Semantic Guard Agent",
            "Independent agent testing and validation",
          ],
        },
        {
          phase: "Phase 3 — Coordination & Evaluation",
          items: [
            "Build Coordinator Agent for multi-agent aggregation",
            "Add Spatio-Temporal Graph Agent",
            "Evaluate against public datasets (CICIDS2017, UNSW-NB15)",
            "Peer-reviewed research publication",
          ],
        },
        {
          phase: "Phase 4 — Productization",
          items: [
            "Build B2B SaaS platform",
            "API integration layer for customer deployments",
            "Dashboard for real-time threat monitoring",
            "[Update: add more productization details]",
          ],
        },
      ]}
      revenue="On-track for peer-reviewed publication first. Post-validation, productize into a B2B SaaS security platform targeting companies with API-heavy architectures. Subscription-based pricing by API volume and agent coverage."
      screenshots={[]}
    />
  );
}