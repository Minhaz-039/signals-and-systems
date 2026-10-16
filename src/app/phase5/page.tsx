import { Metadata } from "next";
import PhaseViewer from "@/components/PhaseViewer";
import { phase5Html, phase5Script } from "@/data/phase5Data";

export const metadata: Metadata = {
  title: "Phase 5: Fourier Transform (ফুরিয়ার ট্রান্সফর্ম) – বাংলা ইন্টারঅ্যাক্টিভ টিউটোরিয়াল",
  description:
    "সহজ বাংলা ব্যাখ্যা, টাইম বনাম ফ্রিকোয়েন্সি ডোমেইনের লাইভ ইন্টারঅ্যাক্টিভ গ্রাফ, মডুলেশন সিমুলেটর এবং নোটের ভুলগুলোর নিখুঁত সমাধান।",
};

export default function Phase5Page() {
  const initializers = [
    "drawTInfGraph()",
    "updatePairView()",
  ];

  return (
    <PhaseViewer
      phaseNumber={5}
      htmlContent={phase5Html}
      scriptContent={phase5Script}
      initializers={initializers}
    />
  );
}
