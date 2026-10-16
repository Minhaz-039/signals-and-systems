import Link from "next/link";
import {
  BookOpen,
  Layers,
  GitBranch,
  Cpu,
  Radio,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Sliders,
  Award,
  Zap,
  Waves,
} from "lucide-react";

const PHASES = [
  {
    id: 0,
    number: "Phase 0",
    title: "সিগন্যাল ও সিস্টেমের মূল ভিত্তি",
    englishTitle: "Zero to Hero Basics",
    description:
      "পুরো কোর্সটি পানির মতো সহজ করার জন্য প্রয়োজনীয় গাণিতিক ভিত্তি—ক্যালকুলাস (ডিফারেন্সিয়েশন ও ইন্টিগ্রেশন), সাইন-কোসাইন ঢেউ, জটিল সংখ্যার পোলার রূপ, Euler's Formula এবং Partial Fractions।",
    badge: "গণিত ফাউন্ডেশন",
    color: "from-sky-700 to-blue-800",
    accentBg: "bg-sky-50 text-sky-800 border-sky-200",
    buttonBg: "bg-sky-600 hover:bg-sky-700",
    icon: BookOpen,
    href: "/phase0",
    topics: [
      "সিগন্যাল ও সিস্টেমের সংজ্ঞা এবং x(t), y(t)",
      "Derivative (ঢাল) ও Integral (ক্ষেত্রফল) এবং D অপারেটর",
      "Sine ও Cosine ঢেউ, পর্যায়কাল T এবং কম্পাঙ্ক ω",
      "জটিল সংখ্যা (Complex Numbers) ও পোলার রূপ",
      "Euler's Formula ও কেন e^(-jnπ) = (-1)ⁿ",
      "Partial Fractions ও রুট বের করার টেকনিক",
    ],
  },
  {
    id: 1,
    number: "Phase 1",
    title: "৪টি বিশেষ সিগন্যাল ও টাইম শিফটিং",
    englishTitle: "Special Signals & Operations",
    description:
      "সিগন্যাল অ্যান্ড সিস্টেমের বিল্ডিং ব্লক—Unit Step u(t), টাইম শিফটিং u(t-t₀), আয়তাকার পালস তৈরি, Unit Impulse δ(t), Rectangular Pulse rect(t), এবং Sampling ফাংশন Sa(t)।",
    badge: "সিগন্যাল মডেলিং",
    color: "from-blue-700 to-indigo-800",
    accentBg: "bg-blue-50 text-blue-800 border-blue-200",
    buttonBg: "bg-blue-600 hover:bg-blue-700",
    icon: Layers,
    href: "/phase1",
    topics: [
      "ইউনিট স্টেপ ফাংশন u(t) ও ভোল্টেজ সুইচ অন উপমা",
      "Time Shifting: ডান ও বামে শিফটিং-এর বাস্তব নিয়ম",
      "দুটি স্টেপ বিয়োগ করে আয়তাকার পালস তৈরি",
      "Unit Impulse ফাংশন δ(t) ও এর ধর্মাবলী",
      "Rectangular Pulse rect(t/T) ও পালস ওয়াইডথ",
      "Sampling ফাংশন Sa(t) ও sinc(t)-এর সম্পর্ক",
    ],
  },
  {
    id: 2,
    number: "Phase 2",
    title: "LTI সিস্টেম ও কনভলিউশন মাস্টারক্লাস",
    englishTitle: "LTI Systems & Convolution",
    description:
      "কোর্সের সবচেয়ে বড় এবং গুরুত্বপূর্ণ অধ্যায়—Linear Time-Invariant (LTI) সিস্টেম, Impulse Response h(t), স্লাইডিং উইন্ডো ভিজ্যুয়াল কনভলিউশন, এবং ক্লাসের ৩টি কঠিন অংকের (A, B, C) নির্ভুল সমাধান।",
    badge: "কোর মেথডোলজি",
    color: "from-indigo-800 to-purple-900",
    accentBg: "bg-indigo-50 text-indigo-800 border-indigo-200",
    buttonBg: "bg-indigo-600 hover:bg-indigo-700",
    icon: GitBranch,
    href: "/phase2",
    topics: [
      "Linearity ও Time Invariance-এর শর্ত",
      "Impulse Response h(t) কী ও কেন এটি সিস্টেমের ডিএনএ",
      "কনভলিউশন কেন প্রয়োজন? বাস্তব সাউন্ড ইফেক্ট উপমা",
      "স্লাইডিং উইন্ডো (Flip & Shift) গ্রাফিক্যাল ইন্টারঅ্যাকশন",
      "নোটের ৩টি কঠিন অংক (র‍্যাম্প, ত্রিভুজ ও পালস কনভলিউশন)",
      "কনভলিউশনের ৫টি যাদুকরী শর্টকাট কৌশল",
    ],
  },
  {
    id: 3,
    number: "Phase 3",
    title: "ব্লক ডায়াগ্রাম, ক্যানোনিকাল ফর্ম ও স্টেট ইকুয়েশন",
    englishTitle: "Block Diagrams & State Equations",
    description:
      "Class 1, CT-2 এবং বড় PDF-এর প্রতিটি ডায়াগ্রাম—৪টি বেসিক ব্লক, 1/D ইন্টিগ্রেটর অপারেটর, ক্যানোনিকাল ফর্ম I & II, এক্সারসাইজ 2.28 ও 2.30, স্টেট স্পেস ইকুয়েশন এবং নোটের চিহ্নের ভুল সংশোধন।",
    badge: "সিস্টেম রিপ্রেজেন্টেশন",
    color: "from-teal-800 to-emerald-900",
    accentBg: "bg-teal-50 text-teal-800 border-teal-200",
    buttonBg: "bg-teal-600 hover:bg-teal-700",
    icon: Cpu,
    href: "/phase3",
    topics: [
      "ব্লক ডায়াগ্রামের ৪টি মৌলিক উপাদান (Adder, Gain, 1/D, Pickoff)",
      "কেন D এর বদলে 1/D (Integrator) ব্যবহার করা হয়?",
      "ডায়াগ্রাম দেখে ডিফারেনশিয়াল ইকুয়েশন লেখার স্টেপ-বাই-স্টেপ নিয়ম",
      "Canonical Form I (Direct Form I) ডিজাইন ও স্টেপস",
      "Canonical Form II (Direct Form II) মিনিমাম ইন্টিগ্রেটর আর্কিটেকচার",
      "নোটের ৭টি ভুল চিহ্নিতকরণ ও স্টেট স্পেস ইকুয়েশন",
    ],
  },
  {
    id: 4,
    number: "Phase 4",
    title: "ফুরিয়ার সিরিজ, হারমোনিকস ও স্পেকট্রাম মাস্টারক্লাস",
    englishTitle: "Fourier Series & Frequency Spectrum",
    description:
      "Class 2 এবং বড় PDF-এর ফুরিয়ার সিরিজ—ভেক্টর উপমা, সিমেট্রি রুলস, স্কয়ার ও সটুথ ওয়েভ সিনথেসাইজার, হাফ ও ফুল-ওয়েভ রেক্টিফায়ারের স্পেকট্রাম, Parseval's Power Theorem এবং নোটের ফেজের ভুল সংশোধন।",
    badge: "ফ্রিকোয়েন্সি ডোমেন",
    color: "from-purple-800 to-violet-950",
    accentBg: "bg-purple-50 text-purple-800 border-purple-200",
    buttonBg: "bg-purple-600 hover:bg-purple-700",
    icon: Radio,
    href: "/phase4",
    topics: [
      "ফুরিয়ার সিরিজের মূল দর্শন ও কালার প্যালেট উপমা",
      "অর্থাগোনালিটি ও Cₙ সহগ বের করার ইন্টিগ্রাল",
      "Even, Odd ও Half-Wave Symmetry শর্টকাট রুলস",
      "Square ও Sawtooth ওয়েভের লাইভ হারমোনিক সিনথেসাইজার",
      "Half-Wave ও Full-Wave Rectifiers-এর স্পেকট্রাম",
      "Parseval's Theorem দিয়ে পাওয়ার বের করার ম্যাথ",
    ],
  },
  {
    id: 5,
    number: "Phase 5",
    title: "ফুরিয়ার ট্রান্সফর্ম ও কন্টিনিউয়াস স্পেকট্রাম",
    englishTitle: "Fourier Transform & Continuous Spectrum",
    description:
      "অ-পর্যায়বৃত্ত (Aperiodic) সিগন্যালের ফ্রিকোয়েন্সি বিশ্লেষণ—T→∞ ট্রানজিশন, ৭টি মৌলিক ফুরিয়ার রূপান্তর জোড়া, মডুলেশন ও ডুয়ালিটি প্রপার্টি, Spring 2025 ফাইনাল পরীক্ষার অংক এবং নোটের ভুল সংশোধন।",
    badge: "কন্টিনিউয়াস স্পেকট্রাম",
    color: "from-blue-800 via-indigo-800 to-purple-900",
    accentBg: "bg-indigo-50 text-indigo-800 border-indigo-200",
    buttonBg: "bg-indigo-600 hover:bg-indigo-700",
    icon: Waves,
    href: "/phase5",
    topics: [
      "Fourier Series থেকে Transform: T→∞ ট্রানজিশন ও কন্টিনিউয়াস স্পেকট্রাম",
      "৭টি মৌলিক জোড়া (Impulse, DC, Step, Signum, Sinc, Rect, Exponential)",
      "মডুলেশন ও ফ্রিকোয়েন্সি শিফটিং থিওরেম লাইভ সিমুলেটর",
      "ডুয়ালিটি, টাইম স্কেলিং ও ডিফারেনশিয়েশন প্রপার্টি",
      "Spring 2025 ফাইনালের cos(100t)/(πt) ও x²(t) ম্যাথ সমাধান",
      "নোটের ভুল সংশোধন ও ৫টি ইন্টারঅ্যাক্টিভ কুইজ",
    ],
  },
];

export default function Home() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white pt-14 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs md:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-sky-400 animate-pulse" />
            <span>ইন্টারঅ্যাক্টিভ বাংলা লার্নিং প্ল্যাটফর্ম • ECE & EEE সিলেবাস</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-tight">
            সিগন্যাল ও সিস্টেমের{" "}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              পূর্ণাঙ্গ বাংলা মাস্টারক্লাস
            </span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-normal leading-relaxed">
            Phase 0 থেকে Phase 5 পর্যন্ত সহজ বাংলা উপমা, লাইভ ইন্টারঅ্যাক্টিভ ক্যানভাস অ্যানিমেশন, স্লাইডিং কনভলিউশন, এবং ক্লাস নোটের কঠিন অংকগুলোর স্টেপ-বাই-স্টেপ নির্ভুল সমাধান।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <Link
              href="/phase0"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold text-sm md:text-base shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02]"
            >
              <span>Phase 0 থেকে শুরু করুন</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#phases"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm md:text-base transition-all"
            >
              <span>সকল ফেজের বিবরণ দেখুন</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto pt-8">
            <div className="bg-slate-800/60 backdrop-blur border border-slate-700/60 rounded-xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-sky-400 font-mono">৬টি</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">সম্পূর্ণ ফেজ (0–5)</div>
            </div>
            <div className="bg-slate-800/60 backdrop-blur border border-slate-700/60 rounded-xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-indigo-400 font-mono">৩০+</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">লাইভ ক্যানভাস সিমুলেটর</div>
            </div>
            <div className="bg-slate-800/60 backdrop-blur border border-slate-700/60 rounded-xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-teal-400 font-mono">১০০%</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">সিলেবাস ও নোট অক্ষত</div>
            </div>
            <div className="bg-slate-800/60 backdrop-blur border border-slate-700/60 rounded-xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-extrabold text-purple-400 font-mono">১০+</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">নোটের ভুল সংশোধন</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Phases Grid */}
      <section id="phases" className="max-w-6xl mx-auto px-4 sm:px-6 mt-16 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full">
            Curriculum Breakdown
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            সম্পূর্ণ কোর্সের রোডম্যাপ ও ৬টি ফেজ
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            প্রতিটি ফেজে রয়েছে বাস্তব জীবনের উপমা, ইন্টারঅ্যাক্টিভ অ্যানিমেটেড গ্রাফ, থিওরি ও কুইজ।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHASES.map((phase) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                <div>
                  {/* Phase Header Banner */}
                  <div className={`bg-gradient-to-r ${phase.color} p-5 text-white relative`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/20 border border-white/20 uppercase tracking-wider">
                        {phase.number}
                      </span>
                      <Icon className="w-5 h-5 text-white/80" />
                    </div>
                    <h3 className="text-xl font-bold leading-tight">{phase.title}</h3>
                    <div className="text-xs text-white/70 font-mono mt-0.5">{phase.englishTitle}</div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-4">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {phase.description}
                    </p>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        মূল আলোচিত বিষয়সমূহ:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {phase.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-slate-400 mt-0.5">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-5 pt-0">
                  <Link
                    href={phase.href}
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl ${phase.buttonBg} text-white font-semibold text-sm transition-all shadow-sm group-hover:shadow`}
                  >
                    <span>এই ফেজে প্রবেশ করুন</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-20">
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-xl">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-400/20 px-3 py-1 rounded-full">
              Platform Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              এই কোর্সের বিশেষত্ব কী?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              গতানুগতিক মুখস্থ করার বদলে প্রতিটি কনসেপ্টের পেছনের ফিজিক্যাল মিনিং অনুধাবন করুন।
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Sliders className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">লাইভ স্লাইডার ও ইন্টারঅ্যাক্টিভ ক্যানভাস</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                প্যারামিটার (t, τ, k, amplitude, frequency) পরিবর্তন করুন এবং চোখের সামনে গ্রাফ ও ওয়েভের রূপান্তর দেখুন।
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <GitBranch className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">স্লাইডিং কনভলিউশন অ্যানিমেটর</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                উইন্ডো স্লাইড করে কীভাবে প্রতিটি কেসে (Overlap, Full, Exit) ইন্টিগ্রাল ক্যালকুলেট হয় তা লাইভ দেখুন।
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">নোটের ভুল সংশোধন গাইড</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                লেকচার নোট ও স্লাইডের সাইন মিসটেক, রেক্টিফায়ারের ফেজ অ্যাঙ্গেল ও স্টেট ইকুয়েশনের ভুলগুলোর সঠিক সমাধান।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
