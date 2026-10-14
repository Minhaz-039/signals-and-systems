import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "সিগন্যাল ও সিস্টেম | Signals & Systems (বাংলা ইন্টারঅ্যাক্টিভ কোর্স)",
  description:
    "সিগন্যাল ও সিস্টেমের পূর্ণাঙ্গ কোর্স — Phase 0 থেকে Phase 4 পর্যন্ত সহজ বাংলা উপমা, লাইভ অ্যানিমেশন ও ইন্টারঅ্যাক্টিভ ক্যানভাস গ্রাফিক্সের মাধ্যমে।",
  keywords: [
    "Signals and Systems",
    "সিগন্যাল ও সিস্টেম",
    "Convolution",
    "Fourier Series",
    "Block Diagrams",
    "ECE",
    "EEE",
    "Bengali Tutorial",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
