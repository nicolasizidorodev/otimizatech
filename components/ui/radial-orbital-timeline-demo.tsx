"use client";

import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Planning",
    content: "Project planning and requirements gathering phase.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2],
    deliverables: ["Requirements", "Scope", "Timeline", "Stakeholders"],
    energy: 100,
  },
  {
    id: 2,
    title: "Design",
    content: "UI/UX design and system architecture.",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    deliverables: ["Wireframes", "Visual design", "Architecture", "Design system"],
    energy: 90,
  },
  {
    id: 3,
    title: "Development",
    content: "Core features implementation and testing.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    deliverables: ["Core features", "Integrations", "Code review", "Unit tests"],
    energy: 60,
  },
  {
    id: 4,
    title: "Testing",
    content: "User testing and bug fixes.",
    category: "Testing",
    icon: User,
    relatedIds: [3, 5],
    deliverables: ["User testing", "QA", "Bug fixes", "Performance"],
    energy: 30,
  },
  {
    id: 5,
    title: "Release",
    content: "Final deployment and release.",
    category: "Release",
    icon: Clock,
    relatedIds: [4],
    deliverables: ["Deployment", "Monitoring", "Documentation", "Handoff"],
    energy: 10,
  },
];

export function RadialOrbitalTimelineDemo() {
  return <RadialOrbitalTimeline timelineData={timelineData} />;
}

export default RadialOrbitalTimelineDemo;
