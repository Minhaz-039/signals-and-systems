import { Metadata } from "next";
import PhaseViewer from "@/components/PhaseViewer";
import { phase4Html, phase4Script } from "@/data/phase4Data";

export const metadata: Metadata = {
  title: "Phase 4: ফুরিয়ার সিরিজ, হারমোনিকস ও স্পেকট্রাম মাস্টারক্লাস",
  description:
    "Fourier Series, অর্থাগোনালিটি, Cn ফর্মুলা, Square Wave ও Rectifier-এর হারমোনিক স্পেকট্রাম সিনথেসাইজার এবং Parseval's Power Theorem।",
};

export default function Phase4Page() {
  const initializers = [
    "drawOrthoSim()",
    "updateCnCalc()",
    "selectWaveLab('square')",
    "selectRectLab('half')",
  ];

  return (
    <PhaseViewer
      phaseNumber={4}
      htmlContent={phase4Html}
      scriptContent={phase4Script}
      initializers={initializers}
    />
  );
}
