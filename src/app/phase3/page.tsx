import { Metadata } from "next";
import PhaseViewer from "@/components/PhaseViewer";
import { phase3Html, phase3Script } from "@/data/phase3Data";

export const metadata: Metadata = {
  title: "Phase 3: ব্লক ডায়াগ্রাম, ক্যানোনিকাল ফর্ম ও স্টেট ইকুয়েশন",
  description:
    "ব্লক ডায়াগ্রামের ৪টি বেসিক ব্লক, 1/D ইন্টিগ্রেটর অপারেটর, ক্যানোনিকাল ফর্ম I & II, এক্সারসাইজ 2.28 ও 2.30 এবং স্টেট ইকুয়েশনের সমাধান।",
};

export default function Phase3Page() {
  const initializers = [
    "drawNoiseSim()",
    "setReadStep(1)",
    "selectForm1Ex('253')",
    "selectForm2Ex('253')",
    "selectEx35('228a')",
  ];

  return (
    <PhaseViewer
      phaseNumber={3}
      htmlContent={phase3Html}
      scriptContent={phase3Script}
      initializers={initializers}
    />
  );
}
