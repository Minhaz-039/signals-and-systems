import { Metadata } from "next";
import PhaseViewer from "@/components/PhaseViewer";
import { phase2Html, phase2Script } from "@/data/phase2Data";

export const metadata: Metadata = {
  title: "Phase 2: LTI সিস্টেম ও কনভলিউশন (Convolution) মাস্টারক্লাস",
  description:
    "LTI সিস্টেম, Impulse Response h(t), স্লাইডিং উইন্ডো ভিজ্যুয়াল কনভলিউশন, এবং ক্লাসের জটিল অংকগুলোর নির্ভুল সমাধান।",
};

export default function Phase2Page() {
  const initializers = ["drawLtiGraph", "drawHDelayGraph", "renderHardProblemDetails"];

  return (
    <PhaseViewer
      phaseNumber={2}
      htmlContent={phase2Html}
      scriptContent={phase2Script}
      initializers={initializers}
    />
  );
}
