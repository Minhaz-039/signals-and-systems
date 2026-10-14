import { Metadata } from "next";
import PhaseViewer from "@/components/PhaseViewer";
import { phase0Html, phase0Script } from "@/data/phase0Data";

export const metadata: Metadata = {
  title: "Phase 0: সিগন্যাল ও সিস্টেমের মূল ভিত্তি (Zero to Hero Basics)",
  description:
    "ক্যালকুলাস, সাইন-কোসাইন ঢেউ, জটিল সংখ্যা, Euler's Formula ও Partial Fractions-এর সহজ বাংলা ইন্টারঅ্যাক্টিভ ফাউন্ডেশন।",
};

export default function Phase0Page() {
  const initializers = [
    "drawSigSys",
    "drawCalcSim",
    "drawWave0",
    "drawComplexPlane",
    "drawEulerCircle",
    "updatePfCalc",
  ];

  return (
    <PhaseViewer
      phaseNumber={0}
      htmlContent={phase0Html}
      scriptContent={phase0Script}
      initializers={initializers}
    />
  );
}
