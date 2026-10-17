import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, CheckCircle2 } from "lucide-react";

interface PhaseFooterProps {
  currentPhase: number;
}

const PHASES = [
  { id: 0, title: "Phase 0: মূল ভিত্তি (Basics)", path: "/phase0" },
  { id: 1, title: "Phase 1: ৪টি বিশেষ সিগন্যাল", path: "/phase1" },
  { id: 2, title: "Phase 2: LTI ও কনভলিউশন", path: "/phase2" },
  { id: 3, title: "Phase 3: ব্লক ডায়াগ্রাম ও স্টেট", path: "/phase3" },
  { id: 4, title: "Phase 4: ফুরিয়ার সিরিজ", path: "/phase4" },
  { id: 5, title: "Phase 5: ফুরিয়ার ট্রান্সফর্ম", path: "/phase5" },
  { id: 6, title: "Phase 6: ফাইনাল এক্সাম Q&A", path: "/phase6" },
];

export default function PhaseFooter({ currentPhase }: PhaseFooterProps) {
  const prevPhase = currentPhase > 0 ? PHASES[currentPhase - 1] : null;
  const nextPhase = currentPhase < PHASES.length - 1 ? PHASES[currentPhase + 1] : null;
  const progressPercent = Math.round(((currentPhase + 1) / PHASES.length) * 100);

  return (
    <footer className="max-w-6xl mx-auto px-4 mt-16 mb-12">
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center text-xs md:text-sm font-semibold text-slate-600 mb-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              কোর্স অগ্রগতি (Progress): {progressPercent}% সম্পন্ন
            </span>
            <span className="bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full font-mono text-xs">
              Phase {currentPhase} / 6
            </span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
          {prevPhase ? (
            <Link
              href={prevPhase.path}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all hover:-translate-x-0.5 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>পূর্ববর্তী: {prevPhase.title}</span>
            </Link>
          ) : (
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all shadow-sm"
            >
              <Home className="w-4 h-4 text-sky-600" />
              <span>মূল সিলেবাস / হোমপেজ</span>
            </Link>
          )}

          <Link
            href="/"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 font-medium transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>সকল ফেজ তালিকা</span>
          </Link>

          {nextPhase ? (
            <Link
              href={nextPhase.path}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white font-semibold text-sm transition-all hover:translate-x-0.5 shadow-md shadow-indigo-200"
            >
              <span>পরবর্তী: {nextPhase.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-semibold text-sm shadow-md"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>অভিনন্দন! কোর্স সম্পন্ন 🎉</span>
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
