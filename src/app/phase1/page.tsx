import { Metadata } from "next";
import PhaseViewer from "@/components/PhaseViewer";
import { phase1Html, phase1Script } from "@/data/phase1Data";

export const metadata: Metadata = {
  title: "Phase 1: ৪টি বিশেষ সিগন্যাল ও টাইম শিফটিং (Special Signals)",
  description:
    "Unit Step u(t), Time Shifting & Pulse, Unit Impulse δ(t), Rect Pulse rect(t), এবং Sampling Sa(t)-এর সহজ বাংলা ব্যাখ্যা ও ভিজ্যুয়াল গ্রাফ।",
};

export default function Phase1Page() {
  const initializers = ["drawStepGraph"];

  return (
    <PhaseViewer
      phaseNumber={1}
      htmlContent={phase1Html}
      scriptContent={phase1Script}
      initializers={initializers}
    />
  );
}
