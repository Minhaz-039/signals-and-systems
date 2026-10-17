import { Metadata } from "next";
import PhaseViewer from "@/components/PhaseViewer";
import { phase6Html, phase6Script } from "@/data/phase6Data";

export const metadata: Metadata = {
  title: "Phase 6: Signals & Systems (EEE 303) — Ultimate Varsity Exam Q&A Guide",
  description:
    "EEE 303 সিগন্যাল ও সিস্টেম কোর্সের ৩০টি পূর্ণাঙ্গ ফাইনাল পরীক্ষার প্রশ্নোত্তর, ৬টি লাইভ ইন্টারঅ্যাক্টিভ ভিজ্যুয়াল ল্যাব, Spring '25 মডুলেশন চেইন এবং ফর্মুলা চিটশিট।",
};

export default function Phase6Page() {
  const initializers = [
    "renderQAList()",
    "updateLab()",
    "drawExamSpring(1)",
    "drawExamCos100()",
  ];

  return (
    <PhaseViewer
      phaseNumber={6}
      htmlContent={phase6Html}
      scriptContent={phase6Script}
      initializers={initializers}
    />
  );
}
