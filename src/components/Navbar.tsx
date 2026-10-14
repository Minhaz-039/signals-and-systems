"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Activity, BookOpen, Layers, GitBranch, Cpu, Radio } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "হোম", icon: Activity, tag: "Hub" },
  { href: "/phase0", label: "Phase 0: মূল ভিত্তি", icon: BookOpen, color: "text-sky-400", tag: "Basics" },
  { href: "/phase1", label: "Phase 1: বিশেষ সিগন্যাল", icon: Layers, color: "text-blue-400", tag: "Signals" },
  { href: "/phase2", label: "Phase 2: কনভলিউশন", icon: GitBranch, color: "text-indigo-400", tag: "LTI & Conv" },
  { href: "/phase3", label: "Phase 3: ব্লক ডায়াগ্রাম", icon: Cpu, color: "text-teal-400", tag: "Diagrams" },
  { href: "/phase4", label: "Phase 4: ফুরিয়ার সিরিজ", icon: Radio, color: "text-purple-400", tag: "Fourier" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base md:text-lg tracking-tight bg-gradient-to-r from-sky-200 via-white to-slate-200 bg-clip-text text-transparent">
                  সিগন্যাল ও সিস্টেম
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-sky-500/20 border border-sky-400/30 text-sky-300">
                  Phases 0–4
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block font-normal">
                বাংলা ইন্টারঅ্যাক্টিভ লার্নিং প্ল্যাটফর্ম
              </p>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-slate-800 text-white shadow-sm ring-1 ring-slate-700/80"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-sky-400" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-sky-600 text-white font-bold"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/20 text-slate-300">
                  {item.tag}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
