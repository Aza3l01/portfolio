import ProjectPage from "@/components/ProjectPage";

export default function ThreeDPartPickerPage() {
  return (
    <ProjectPage
      title="3DPartPicker"
      subtitle="PC Part Picking with 3D Visualization"
      githubUrl="https://github.com/PLACEHOLDER/3dpartpicker"
      websiteUrl="https://PLACEHOLDER.com"
      overview="A PC part picking website with interactive 3D/2D visualization of builds. Users can select components, see them rendered in a virtual case, and check compatibility."
      problem="Existing PC part picker sites like PCPartPicker are purely list-based with no visual representation of how components fit together physically."
      solution="3DPartPicker adds a 3D visualization layer on top of PC part selection, letting users see their build take shape visually while checking compatibility."
      features={[
        {
          title: "3D Build Visualization",
          description:
            "Interactive 3D rendering of selected components inside a virtual PC case.",
        },
        {
          title: "2D Fallback View",
          description:
            "Clean 2D layout view for quick part comparison and selection.",
        },
        {
          title: "Compatibility Checking",
          description:
            "Automatic checks for component compatibility (socket, power, size, etc.).",
        },
      ]}
      roadmap={[
        {
          phase: "Status: Retired",
          items: [
            "Low feasibility: hard to implement 3D models for all components",
            "Existing competitors (PCPartPicker) are deeply entrenched",
            "No clear revenue stream",
            "Retired due to high effort, low return",
          ],
        },
      ]}
      revenue="No viable revenue model apart from subscriptions. Retired due to low feasibility (low conversion rate) and saturated market."
    />
  );
}
