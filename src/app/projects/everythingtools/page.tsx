import ProjectPage from "@/components/ProjectPage";

export default function EverythingToolsPage() {
  return (
    <ProjectPage
      title="EverythingTools"
      subtitle="All-in-One Extraction & Conversion Platform"
      githubUrl="https://github.com/PLACEHOLDER/everythingtools"
      websiteUrl="https://PLACEHOLDER.com"
      overview="A blanket utility site covering all types of extraction, PDF conversion, number converting, and more. Designed as a one-stop tool platform."
      problem="Users bounce between dozens of ad-heavy single-purpose converter sites for basic tasks like PDF conversion, number format conversion, and data extraction."
      solution="EverythingTools consolidates all common conversion and extraction utilities into a single clean platform."
      features={[
        {
          title: "PDF Conversion",
          description:
            "Convert between PDF and various formats including Word, Excel, images, and more.",
        },
        {
          title: "Number Converting",
          description:
            "Convert between number systems, units, currencies, and formats.",
        },
        {
          title: "Data Extraction",
          description:
            "Extract text, tables, and metadata from various file formats.",
        },
      ]}
      roadmap={[
        {
          phase: "Status — Retired",
          items: [
            "Huge development time required",
            "Saturated market with established competitors",
            "Only viable with strong SEO",
            "Revenue model (ads, API pricing, subscription) unlikely to justify effort",
          ],
        },
      ]}
      revenue="Planned: ads, API pricing, subscription. Retired due to low feasibility — saturated market and long development time with uncertain returns."
    />
  );
}
