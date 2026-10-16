// Generated data for Phase5.html
export const phase5Html: string = `<header class="bg-gradient-to-r from-indigo-800 via-blue-800 to-purple-900 text-white py-8 px-4 shadow-lg">
        <div class="max-w-6xl mx-auto text-center">
            <span
                class="bg-indigo-500/30 border border-indigo-300/40 text-indigo-100 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Signals
                & Systems • PDF pp. 70–92</span>
            <h1 class="text-3xl md:text-4xl font-bold mt-3 mb-2">Phase 5: Fourier Transform (ফুরিয়ার ট্রান্সফর্ম)</h1>
            <p class="text-indigo-100 text-base md:text-lg max-w-3xl mx-auto">সহজ বাংলা ব্যাখ্যা, টাইম বনাম ফ্রিকোয়েন্সি
                ডোমেইনের লাইভ ইন্টারঅ্যাক্টিভ গ্রাফ, মডুলেশন সিমুলেটর এবং আপনার নোটের ভুলগুলোর নিখুঁত সমাধান।</p>
        </div>
    </header>

    <!-- Sticky Navigation Tabs -->
    <div class="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div class="max-w-6xl mx-auto px-3 py-2.5 flex flex-wrap gap-1.5 justify-center">
            <button onclick="switchTab('basics')" id="tab-basics"
                class="tab-btn tab-active px-3.5 py-2 rounded-lg font-semibold text-xs md:text-sm transition-all">৫.০-৫.১
                মূল ধারণা ও T→∞</button>
            <button onclick="switchTab('pairs')" id="tab-pairs"
                class="tab-btn bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-2 rounded-lg font-semibold text-xs md:text-sm transition-all">৫.২
                ৭টি মৌলিক জোড়া (Pairs)</button>
            <button onclick="switchTab('props')" id="tab-props"
                class="tab-btn bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-2 rounded-lg font-semibold text-xs md:text-sm transition-all">৫.৩-৫.৪
                প্রপার্টি ও মডুলেশন</button>
            <button onclick="switchTab('spring25')" id="tab-spring25"
                class="tab-btn bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-2 rounded-lg font-semibold text-xs md:text-sm transition-all">৫.৫-৫.৬
                ফাইনাল পরীক্ষার অংক</button>
            <button onclick="switchTab('errors')" id="tab-errors"
                class="tab-btn bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 px-3.5 py-2 rounded-lg font-semibold text-xs md:text-sm transition-all">⚠️
                ৫.৭ নোটের ভুল সংশোধন</button>
            <button onclick="switchTab('quiz')" id="tab-quiz"
                class="tab-btn bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-2 rounded-lg font-semibold text-xs md:text-sm transition-all">🎯
                নিজেকে যাচাই করুন</button>
        </div>
    </div>

    <main class="max-w-6xl mx-auto px-4 mt-8">

        <!-- ==================== TAB 1: 5.0 & 5.1 BASICS & SERIES TO TRANSFORM ==================== -->
        <!-- STREAMING_CHUNK:Building Section 5.0 & 5.1 (Basics and T -> infinity transition)... -->
        <section id="sec-basics" class="topic-section space-y-6">
            <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-indigo-600 text-white px-3 py-1 rounded-lg font-bold text-lg">5.0 – 5.1</span>
                    <h2 class="text-2xl font-bold text-slate-900">কেন নতুন টুল দরকার? (Fourier Series থেকে Fourier
                        Transform)</h2>
                </div>

                <div class="grid lg:grid-cols-2 gap-6">
                    <div class="space-y-4">
                        <div class="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-r-xl">
                            <h3 class="font-bold text-indigo-950 text-lg mb-1">💡 মূল গল্প (একবার হাততালি বনাম ঘড়ির
                                টিকটিক):</h3>
                            <p class="text-slate-700 leading-relaxed text-sm md:text-base">
                                <strong>Fourier Series</strong> কাজ করে শুধু <strong>পর্যায়বৃত্ত (Periodic)</strong>
                                সিগন্যালের জন্য—যা বারবার ফিরে আসে (যেমন ঘড়ির টিকটিক বা ECG পালস)। কিন্তু বাস্তব জীবনের
                                বেশিরভাগ সিগন্যালই <strong>অপর্যায়বৃত্ত (Aperiodic)</strong>—যা একবার ঘটেই শেষ হয়ে যায়
                                (যেমন একবার হাততালি দেওয়া, বজ্রপাত বা একটি সিঙ্গেল পালস)।
                            </p>
                            <p class="text-slate-700 leading-relaxed text-sm md:text-base mt-2">
                                <strong>কৌশল (The Trick):</strong> আমরা কল্পনা করি যে ওই সিঙ্গেল পালসটিও আসলে
                                পর্যায়বৃত্ত, কিন্তু এর পরের পালসটি আসবে <strong>অসীম সময় পরে (<span class="math-font">T
                                        → ∞</span>)</strong>!
                            </p>
                        </div>

                        <!-- Step-by-step mathematical evolution -->
                        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2.5 text-sm">
                            <h4 class="font-bold text-slate-900 text-base">কীভাবে <span class="math-font">T → ∞</span>
                                হলে যোগফল (Σ) ইন্টিগ্রাল (∫) হয়ে যায়? (pp. 70–71)</h4>
                            <ul class="space-y-2 text-slate-700">
                                <li><strong>ধাপ ১ (Series):</strong> যখন পর্যায়কাল <span class="math-font">T</span>, তখন
                                    স্পেকট্রামের লাইনগুলোর দূরত্ব থাকে <span class="math-font">ω₀ = 2π/T</span>।</li>
                                <li><strong>ধাপ ২ (<span class="math-font">T → ∞</span>):</strong> <span
                                        class="math-font">T</span> যত বড় হয়, <span class="math-font">ω₀ = 2π/T</span> তত
                                    ছোট হতে হতে অতি ক্ষুদ্র <span class="math-font text-indigo-700">dω</span>-তে পরিণত
                                    হয়! ফলে <span class="math-font">1/T = ω₀/2π</span> হয়ে যায় <span
                                        class="math-font text-indigo-700">dω / 2π</span>।</li>
                                <li><strong>ধাপ ৩ (Continuous Spectrum):</strong> আলাদা আলাদা ফ্রিকোয়েন্সি <span
                                        class="math-font">nω₀</span>গুলো একসাথে মিশে একটি অবিচ্ছিন্ন (Continuous) চলক
                                    <span class="math-font text-indigo-700">ω</span> হয়ে যায় এবং যোগফল (<span
                                        class="math-font">Σ</span>) রূপ নেয় ইন্টিগ্রালে (<span
                                        class="math-font">∫</span>)!</li>
                            </ul>
                        </div>

                        <!-- Formula Box -->
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div class="bg-blue-50 border border-blue-200 p-3.5 rounded-xl">
                                <span class="text-xs font-bold uppercase text-blue-800">Forward Transform (Time →
                                    Freq)</span>
                                <p class="math-font text-base text-blue-950 mt-1">X(ω) = ∫<sub>-∞</sub><sup>∞</sup> x(t)
                                    e<sup>-jωt</sup> dt</p>
                                <p class="text-xs text-slate-600 mt-1">সিগন্যালের ভেতর কোন ফ্রিকোয়েন্সি কতটুকু আছে তা
                                    বের করে।</p>
                            </div>
                            <div class="bg-purple-50 border border-purple-200 p-3.5 rounded-xl">
                                <span class="text-xs font-bold uppercase text-purple-800">Inverse Transform (Freq →
                                    Time)</span>
                                <p class="math-font text-base text-purple-950 mt-1">x(t) = (1/2π)
                                    ∫<sub>-∞</sub><sup>∞</sup> X(ω) e<sup>jωt</sup> dω</p>
                                <p class="text-xs text-slate-600 mt-1">এখানে <span class="math-font">1/2π</span> এসেছে
                                    <span class="math-font">dω/2π</span> থেকে।</p>
                            </div>
                        </div>
                    </div>

                    <!-- Interactive Visualizer: T -> Infinity -->
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-bold text-slate-800 text-sm">📊 সিমুলেটর: পর্যায়কাল <span
                                        class="math-font">T</span> বাড়ালে স্পেকট্রাম কীভাবে অবিচ্ছিন্ন হয়</span>
                                <span id="t-inf-badge"
                                    class="bg-indigo-600 text-white text-xs px-2.5 py-1 rounded font-mono">T = 6, ω₀ =
                                    1.05</span>
                            </div>
                            <canvas id="canvas-t-inf" width="480" height="270"></canvas>
                        </div>

                        <div class="mt-3 bg-white p-3.5 rounded-lg border border-slate-200">
                            <label class="text-sm font-semibold text-slate-700 flex justify-between">
                                <span>পর্যায়কাল (<span class="math-font">T</span>) বাড়িয়ে অসীমের দিকে নিন:</span>
                                <span id="t-inf-label" class="text-indigo-600 font-bold">T = 6 (ফাঁকা ফাঁকা লাইন)</span>
                            </label>
                            <input type="range" id="t-inf-slider" min="1" max="4" step="1" value="1"
                                oninput="drawTInfGraph()" class="w-full accent-indigo-600 mt-1">
                            <p class="text-xs text-slate-500 mt-1">স্লাইডার ডানে টানলে দেখবেন স্পেকট্রামের লাইনগুলো ঘন
                                হতে হতে একসময় মসৃণ কার্ভ <span class="math-font">X(ω)</span> হয়ে যাচ্ছে!</p>
                        </div>
                    </div>
                </div>

                <!-- Convergence Rule (Dirichlet Condition) -->
                <div class="mt-6 pt-6 border-t border-slate-200">
                    <h3 class="text-lg font-bold text-slate-900 mb-3">🔍 কখন সাধারণ ফুরিয়ার ট্রান্সফর্ম নির্ণয় করা যায়?
                        (Convergence / Existence Rule)</h3>
                    <p class="text-sm text-slate-700 mb-4">
                        যেহেতু আমরা <span class="math-font">-∞</span> থেকে <span class="math-font">+∞</span> পর্যন্ত
                        ইন্টিগ্রেশন করি, তাই সিগন্যালটির মোট ক্ষেত্রফল সসীম হতে হবে: <span
                            class="math-font text-indigo-700">∫ |x(t)| dt &lt; ∞</span>। নিচের ৩টি উদাহরণ দেখলে বিষয়টি
                        পানির মতো পরিষ্কার হয়ে যাবে:
                    </p>
                    <div class="grid md:grid-cols-3 gap-4">
                        <div class="bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
                            <span class="bg-emerald-200 text-emerald-900 text-xs font-bold px-2 py-0.5 rounded">✅
                                ক্ষয়প্রাপ্ত সিগন্যাল (Converges)</span>
                            <h4 class="math-font text-base text-slate-900 mt-2">x(t) = e<sup>-3t</sup> u(t)</h4>
                            <p class="text-xs text-slate-700 mt-1">সময় বাড়ার সাথে সাথে এটি <span
                                    class="math-font">0</span>-তে মিলিয়ে যায়। এর ক্ষেত্রফল <span
                                    class="math-font">1/3</span> (সসীম)। তাই এর ট্রান্সফর্ম খুব সহজেই বের করা যায়: <span
                                    class="math-font">1/(3 + jω)</span>।</p>
                        </div>
                        <div class="bg-amber-50 border border-amber-200 p-4 rounded-xl">
                            <span class="bg-amber-200 text-amber-900 text-xs font-bold px-2 py-0.5 rounded">⚠️ ধ্রুবক
                                সিগন্যাল (Needs Impulse δ)</span>
                            <h4 class="math-font text-base text-slate-900 mt-2">x(t) = 1 বা u(t) বা cos(ω₀t)</h4>
                            <p class="text-xs text-slate-700 mt-1">এগুলো কখনোই <span class="math-font">0</span> হয় না,
                                তাই সাধারণ ইন্টিগ্রাল কাজ করে না। কিন্তু <strong>Dirac Delta <span
                                        class="math-font">δ(ω)</span></strong> ব্যবহার করে এদের ট্রান্সফর্ম লেখা যায়
                                (যেমন <span class="math-font">1 ↔ 2πδ(ω)</span>)।</p>
                        </div>
                        <div class="bg-rose-50 border border-rose-200 p-4 rounded-xl">
                            <span class="bg-rose-200 text-rose-900 text-xs font-bold px-2 py-0.5 rounded">❌ ক্রমবর্ধমান
                                সিগন্যাল (Does Not Exist!)</span>
                            <h4 class="math-font text-base text-slate-900 mt-2">x(t) = e<sup>+3t</sup> u(t) বা
                                e<sup>10t</sup> u(t)</h4>
                            <p class="text-xs text-slate-700 mt-1">সময়ের সাথে এটি বিস্ফোরিত হয়ে <span
                                    class="math-font">∞</span> হয়ে যায়! এর কোনো ফুরিয়ার ট্রান্সফর্ম নেই (আপনার নোটের
                                পৃষ্ঠা ৭৪-এ এটি ভুল ছিল)।</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==================== TAB 2: 5.2 BASIC TRANSFORM PAIRS ==================== -->
        <section id="sec-pairs" class="topic-section hidden space-y-6">
            <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div class="flex items-center gap-3">
                        <span class="bg-indigo-600 text-white px-3 py-1 rounded-lg font-bold text-lg">5.2</span>
                        <h2 class="text-2xl font-bold text-slate-900">৭টি মৌলিক ট্রান্সফর্ম জোড়া (Interactive Pair
                            Explorer)</h2>
                    </div>
                    <select id="pair-selector" onchange="updatePairView()"
                        class="bg-indigo-50 border-2 border-indigo-300 text-indigo-950 rounded-xl px-4 py-2 font-bold text-sm md:text-base shadow-sm">
                        <option value="rect">(i) Rectangular Pulse: rect(t/τ) ↔ τ·Sa(ωτ/2)</option>
                        <option value="exp">(ii) Decaying Exponential: e^(-at)u(t) ↔ 1/(a + jω)</option>
                        <option value="impulse">(iii) Unit Impulse: δ(t) ↔ 1</option>
                        <option value="const">(iv) Constant DC: 1 ↔ 2π·δ(ω) [Final Exam Item!]</option>
                        <option value="complex">(v) Complex Exponential: e^(jω₀t) ↔ 2π·δ(ω - ω₀)</option>
                        <option value="cos_sin">(vi) Cosine & Sine: cos(ω₀t) এবং sin(ω₀t)</option>
                        <option value="step">(vii) Unit Step: u(t) ↔ π·δ(ω) + 1/(jω) [নোটের সংশোধন]</option>
                    </select>
                </div>

                <!-- Dual Graph Canvas: Left = Time Domain x(t), Right = Frequency Domain X(ω) -->
                <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div class="grid md:grid-cols-2 gap-4">
                        <div>
                            <div class="flex justify-between items-center mb-1.5">
                                <span
                                    class="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded">Time
                                    Domain: x(t)</span>
                                <span id="pair-time-formula" class="math-font text-sm text-slate-800">rect(t / 2)</span>
                            </div>
                            <canvas id="canvas-pair-time" width="440" height="210"></canvas>
                        </div>
                        <div>
                            <div class="flex justify-between items-center mb-1.5">
                                <span
                                    class="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded">Frequency
                                    Domain: X(ω)</span>
                                <span id="pair-freq-formula" class="math-font text-sm text-slate-800">2 · Sa(ω)</span>
                            </div>
                            <canvas id="canvas-pair-freq" width="440" height="210"></canvas>
                        </div>
                    </div>

                    <!-- Dynamic Parameter Slider for selected pair -->
                    <div id="pair-param-box" class="mt-4 bg-white p-3.5 rounded-xl border border-slate-200">
                        <label class="text-sm font-semibold text-slate-700 flex justify-between">
                            <span id="pair-param-label">পালসের প্রস্থ (Width τ) পরিবর্তন করুন:</span>
                            <span id="pair-param-val" class="text-indigo-600 font-bold">τ = 2</span>
                        </label>
                        <input type="range" id="pair-param-slider" min="2" max="10" step="2" value="2"
                            oninput="updatePairView()" class="w-full accent-indigo-600 mt-1">
                    </div>
                </div>

                <!-- Detailed Bangla Derivation & Intuition Card -->
                <div id="pair-explanation-card"
                    class="mt-6 bg-indigo-50/60 border border-indigo-200 p-5 rounded-2xl space-y-3">
                    <!-- Populated dynamically by JS -->
                </div>

                <!-- Summary Reference Table -->
                <div class="mt-8 pt-6 border-t border-slate-200">
                    <h3 class="font-bold text-lg text-slate-900 mb-3">📋 এক নজরে সব মৌলিক ট্রান্সফর্ম জোড়া (Summary
                        Table)</h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead>
                                <tr class="bg-slate-100 text-slate-800 border-b border-slate-300">
                                    <th class="p-3 font-bold">টাইম সিগন্যাল <span class="math-font">x(t)</span></th>
                                    <th class="p-3 font-bold">ফুরিয়ার ট্রান্সফর্ম <span class="math-font">X(ω)</span>
                                    </th>
                                    <th class="p-3 font-bold">মনে রাখার সহজ ক্লু (বাংলায়)</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200">
                                <tr>
                                    <td class="p-2.5 math-font">rect(t / τ)</td>
                                    <td class="p-2.5 math-font text-indigo-700">τ · Sa(ωτ / 2)</td>
                                    <td class="p-2.5">চারকোনা বক্স ট্রান্সফর্ম হয়ে ঢেউ খেলানো <span
                                            class="math-font">Sa</span> হয়ে যায়।</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 math-font">Sa(a·t)</td>
                                    <td class="p-2.5 math-font text-indigo-700">(π / a) · rect(ω / 2a)</td>
                                    <td class="p-2.5"><strong>Duality (পৃষ্ঠা ৮৬-এর হিন্ট):</strong> টাইমে ঢেউ থাকলে
                                        ফ্রিকোয়েন্সিতে চারকোনা বক্স হয়!</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 math-font">e<sup>-at</sup> u(t) , (a &gt; 0)</td>
                                    <td class="p-2.5 math-font text-indigo-700">1 / (a + jω)</td>
                                    <td class="p-2.5">ল্যাপ্লাসে <span class="math-font">1/(s+a)</span> ছিল, এখানে <span
                                            class="math-font">s = jω</span> বসালেই হয়ে যায়।</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 math-font">δ(t)</td>
                                    <td class="p-2.5 math-font text-indigo-700">1</td>
                                    <td class="p-2.5">শূন্য সময়ের তীব্র আঘাতে সব ফ্রিকোয়েন্সি সমানভাবে (<span
                                            class="math-font">1</span>) থাকে।</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 math-font">1 (Constant DC)</td>
                                    <td class="p-2.5 math-font text-indigo-700">2π · δ(ω)</td>
                                    <td class="p-2.5">ধ্রুবকের কোনো কম্পন নেই, তাই সব শক্তি <span class="math-font">ω =
                                            0</span> বিন্দুতে জমা থাকে।</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 math-font">e<sup>jω₀t</sup></td>
                                    <td class="p-2.5 math-font text-indigo-700">2π · δ(ω − ω₀)</td>
                                    <td class="p-2.5"><span class="math-font">1</span>-এর স্পাইকটি ডানে <span
                                            class="math-font">ω₀</span> ফ্রিকোয়েন্সিতে সরে গেছে।</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 math-font">cos(ω₀t)</td>
                                    <td class="p-2.5 math-font text-indigo-700">π [ δ(ω − ω₀) + δ(ω + ω₀) ]</td>
                                    <td class="p-2.5"><span class="math-font">±ω₀</span> বিন্দুতে দুটি সমান পজিটিভ
                                        স্পাইক।</td>
                                </tr>
                                <tr>
                                    <td class="p-2.5 math-font">sin(ω₀t)</td>
                                    <td class="p-2.5 math-font text-indigo-700">jπ [ δ(ω + ω₀) − δ(ω − ω₀) ]</td>
                                    <td class="p-2.5">অসমান চিহ্নযুক্ত দুটি ইমপালস (<span class="math-font">1/2j</span>
                                        থাকার কারণে <span class="math-font">j</span> আসে)।</td>
                                </tr>
                                <tr class="bg-amber-50/70">
                                    <td class="p-2.5 math-font">u(t)</td>
                                    <td class="p-2.5 math-font text-rose-700">π·δ(ω) + 1/(jω)</td>
                                    <td class="p-2.5"><span class="math-font">u(t) = ½ + ½sgn(t)</span>; গড় মান <span
                                            class="math-font">½</span> এর জন্য <span class="math-font">πδ(ω)</span> যোগ
                                        হয়।</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==================== TAB 3: 5.3 & 5.4 PROPERTIES & MODULATION ==================== -->
        <section id="sec-props" class="topic-section hidden space-y-6">
            <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                <div class="flex items-center gap-3 mb-4">
                    <span class="bg-indigo-600 text-white px-3 py-1 rounded-lg font-bold text-lg">5.3 – 5.4</span>
                    <h2 class="text-2xl font-bold text-slate-900">ট্রান্সফর্মের ৯টি প্রপার্টি, Duality এবং Modulation
                        (রেডিও ট্রান্সমিশন)</h2>
                </div>

                <!-- Interactive Modulation & Duality Visualizer -->
                <div class="grid lg:grid-cols-2 gap-6 pb-8 border-b border-slate-200">
                    <div class="space-y-4">
                        <div class="bg-teal-50 border-l-4 border-teal-600 p-4 rounded-r-xl">
                            <h3 class="font-bold text-teal-950 text-lg mb-1">📻 সবচেয়ে গুরুত্বপূর্ণ প্রপার্টি:
                                Modulation (গুণ করলে কী হয়?)</h3>
                            <p
                                class="math-font text-base bg-white p-2 rounded border border-teal-200 text-teal-900 my-2 text-center">
                                x(t) · cos(ω₀t) ↔ ½ [ X(ω − ω₀) + X(ω + ω₀) ]
                            </p>
                            <p class="text-slate-700 text-sm leading-relaxed">
                                <strong>সহজ বাংলায়:</strong> কোনো সিগন্যাল <span class="math-font">x(t)</span>-কে যখন
                                একটি ক্যারিয়ার ওয়েভ <span class="math-font">cos(ω₀t)</span> দিয়ে গুণ করা হয়, তখন
                                ফ্রিকোয়েন্সি ডোমেইনে মূল স্পেকট্রাম <span class="math-font">X(ω)</span> দুটি ফটোকপি হয়ে
                                <strong>উচ্চতা অর্ধেক (<span class="math-font">½</span>)</strong> হয়ে ডানে <span
                                    class="math-font">+ω₀</span> এবং বামে <span class="math-font">−ω₀</span> বিন্দুতে
                                চলে যায়! এভাবেই আমাদের কথা (কম ফ্রিকোয়েন্সি) রেডিও টাওয়ারের উচ্চ ফ্রিকোয়েন্সিতে চড়ে দূরে
                                যায়।
                            </p>
                        </div>

                        <div class="bg-purple-50 border border-purple-200 p-4 rounded-xl text-sm space-y-2">
                            <h4 class="font-bold text-purple-950 text-base">🔄 Duality Property (আয়না প্রপার্টি - পৃষ্ঠা
                                ৮১ ও ৮৬): <span class="math-font">X(t) ↔ 2π · x(−ω)</span></h4>
                            <p class="text-slate-700">
                                টাইম আর ফ্রিকোয়েন্সির সূত্র প্রায় একই রকম দেখতে! তাই আপনি যদি জানেন:
                            </p>
                            <ul class="list-disc list-inside text-slate-700 space-y-1">
                                <li><strong>জোড়া ১:</strong> টাইমে চারকোনা বক্স <span class="math-font">rect(t/2)</span>
                                    হলে ফ্রিকোয়েন্সিতে হয় <span class="math-font">2·Sa(ω)</span>।</li>
                                <li><strong>Duality প্রয়োগ:</strong> তাহলে উল্টোভাবে টাইমে যদি ঢেউ <span
                                        class="math-font">Sa(at)</span> থাকে, তবে ফ্রিকোয়েন্সিতে অবশ্যই চারকোনা বক্স
                                    <span class="math-font font-bold text-purple-800">(π/a) · rect(ω / 2a)</span> হবে!
                                    (এটি দিয়েই আপনার ফাইনালের দুটি অংক করা হয়েছে)।</li>
                                <li><strong>পৃষ্ঠা ৮১-এর এক্সপোনেনশিয়াল Duality:</strong> যেহেতু <span
                                        class="math-font">e<sup>-at</sup>u(t) ↔ 1/(a+jω)</span>, তাই <span
                                        class="math-font">1/(a+jt) ↔ 2π·e<sup>aω</sup>u(−ω)</span>। (কারণ <span
                                        class="math-font">x(t)</span>-এ <span class="math-font">t</span>-এর বদলে <span
                                        class="math-font">−ω</span> বসালে <span
                                        class="math-font">e<sup>-a(-ω)</sup>u(-ω) = e<sup>aω</sup>u(-ω)</span> হয়)।</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Interactive Modulation Graph (Example x: rect(t/2)*cos(5t)) -->
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-bold text-slate-800 text-sm">📊 Example (x) সিমুলেটর: <span
                                        class="math-font text-teal-700">rect(t/2) · cos(ω₀t)</span></span>
                                <span id="mod-badge"
                                    class="bg-teal-600 text-white text-xs px-2.5 py-1 rounded font-mono">Sa(ω-5) +
                                    Sa(ω+5)</span>
                            </div>
                            <canvas id="canvas-mod" width="460" height="225"></canvas>
                        </div>
                        <div class="mt-3 bg-white p-3.5 rounded-lg border border-slate-200">
                            <label class="text-sm font-semibold text-slate-700 flex justify-between">
                                <span>ক্যারিয়ার ফ্রিকোয়েন্সি (<span class="math-font">ω₀</span>) পরিবর্তন করুন:</span>
                                <span id="mod-w0-val" class="text-teal-700 font-bold">ω₀ = 5 rad/s</span>
                            </label>
                            <input type="range" id="mod-w0" min="0" max="8" step="1" value="5" oninput="drawModGraph()"
                                class="w-full accent-teal-600 mt-1">
                            <p class="text-xs text-slate-500 mt-1">লক্ষ্য করুন: মূল <span
                                    class="math-font">2Sa(ω)</span>-এর উচ্চতা ছিল 2। <span class="math-font">½</span>
                                দিয়ে গুণ হওয়ায় দুটি কপির উচ্চতা হয়ে গেছে <span class="math-font">½ × 2 = 1</span>
                                (পৃষ্ঠা ৮৪-তে ভুল করে <span class="math-font">2π</span> রয়ে গিয়েছিল, পৃষ্ঠা ৮৫-তে ঠিক
                                আছে)।</p>
                        </div>
                    </div>
                </div>

                <!-- Solved Example (xi) from page 85 -->
                <div class="mt-6 bg-amber-50/70 border border-amber-200 p-5 rounded-2xl">
                    <span class="bg-amber-200 text-amber-950 text-xs font-bold px-2.5 py-1 rounded uppercase">পৃষ্ঠা
                        ৮৫-এর ফাঁকা অংকের পূর্ণাঙ্গ সমাধান — Example (xi)</span>
                    <h3 class="text-lg font-bold text-slate-900 mt-2">প্রশ্ন: <span
                            class="math-font text-indigo-700">z(t) = e<sup>-5t</sup>u(t) · sin(5t)</span> এর Fourier
                        Transform নির্ণয় করুন।</h3>
                    <div class="grid md:grid-cols-3 gap-4 mt-3 text-sm text-slate-700">
                        <div class="bg-white p-3.5 rounded-xl border border-amber-200">
                            <p class="font-bold text-slate-900">ধাপ ১: মূল সিগন্যালের FT</p>
                            <p class="mt-1">ধরি <span class="math-font">x(t) = e<sup>-5t</sup>u(t)</span>।<br>তাহলে আমরা
                                জানি,<br><span class="math-font text-indigo-700">X(ω) = 1 / (5 + jω)</span></p>
                        </div>
                        <div class="bg-white p-3.5 rounded-xl border border-amber-200">
                            <p class="font-bold text-slate-900">ধাপ ২: <span class="math-font">sin(5t)</span> দিয়ে
                                ফ্রিকোয়েন্সি শিফট</p>
                            <p class="mt-1"><span class="math-font">sin(5t) = (e<sup>j5t</sup> − e<sup>-j5t</sup>) /
                                    2j</span><br>তাই <span class="math-font">Z(ω) = (1/2j) [ X(ω−5) − X(ω+5)
                                    ]</span><br><span class="math-font">= (1/2j) [ 1/(5+j(ω−5)) − 1/(5+j(ω+5)) ]</span>
                            </p>
                        </div>
                        <div class="bg-white p-3.5 rounded-xl border border-amber-200">
                            <p class="font-bold text-slate-900">ধাপ ৩: লসাগু করে সরলীকরণ</p>
                            <p class="mt-1">উপরে বিয়োগ করলে থাকে <span class="math-font">(5+jω+j5) − (5+jω−j5) =
                                    j10</span>।<br>বাইরের <span class="math-font">2j</span> দিয়ে <span
                                    class="math-font">j10</span> কাটলে হয় <span class="math-font">5</span>:<br><span
                                    class="math-font text-emerald-700 text-base">Z(ω) = 5 / [ (5 + jω)² + 25 ]</span>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- All 9 Properties Reference Grid -->
                <div class="mt-6 pt-6 border-t border-slate-200">
                    <h3 class="font-bold text-lg text-slate-900 mb-3">📚 ফুরিয়ার ট্রান্সফর্মের ৯টি প্রপার্টি ও উদাহরণ
                        (pp. 79–81)</h3>
                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                        <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                            <span class="font-bold text-indigo-700">1. Linearity (রৈখিকতা)</span>
                            <p class="math-font text-xs mt-1">a·x₁(t) + b·x₂(t) ↔ a·X₁(ω) + b·X₂(ω)</p>
                            <p class="text-xs text-slate-600 mt-1">উদা: <span class="math-font">2·rect(t/2) ↔
                                    4·Sa(ω)</span></p>
                        </div>
                        <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                            <span class="font-bold text-indigo-700">2. Symmetry (প্রতিসাম্য)</span>
                            <p class="math-font text-xs mt-1">X(−ω) = X*(ω) ⇒ |X(ω)| জোড়, ∠X(ω) বিজোড়</p>
                            <p class="text-xs text-slate-600 mt-1">বাস্তব সিগন্যালের ম্যাগনিচিউড গ্রাফ সবসময় দুপাশে
                                সমান।</p>
                        </div>
                        <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                            <span class="font-bold text-indigo-700">3. Time Shifting (টাইম শিফট)</span>
                            <p class="math-font text-xs mt-1">x(t − t₀) ↔ X(ω) · e<sup>-jωt₀</sup></p>
                            <p class="text-xs text-slate-600 mt-1">উদা: <span class="math-font">rect((t−3)/2) ↔
                                    2Sa(ω)·e<sup>-j3ω</sup></span></p>
                        </div>
                        <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                            <span class="font-bold text-indigo-700">4. Frequency Shifting</span>
                            <p class="math-font text-xs mt-1">x(t) · e<sup>jω₀t</sup> ↔ X(ω − ω₀)</p>
                            <p class="text-xs text-slate-600 mt-1">উদা: <span
                                    class="math-font">e<sup>j5t</sup>·rect(t/2) ↔ 2Sa(ω − 5)</span></p>
                        </div>
                        <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                            <span class="font-bold text-indigo-700">5. Time Scaling (সংকোচন/প্রসারণ)</span>
                            <p class="math-font text-xs mt-1">x(a·t) ↔ (1/|a|) · X(ω / a)</p>
                            <p class="text-xs text-slate-600 mt-1">টাইমে চ্যাপ্টা করলে ফ্রিকোয়েন্সিতে ছড়িয়ে যায়! (<span
                                    class="math-font">a=½</span> হলে <span class="math-font">2Sa(ω)</span>)।</p>
                        </div>
                        <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                            <span class="font-bold text-indigo-700">6. Differentiation (অন্তরীকরণ)</span>
                            <p class="math-font text-xs mt-1">d/dt x(t) ↔ jω · X(ω)</p>
                            <p class="text-xs text-slate-600 mt-1">একবার ডেরিভেটিভ মানে শুধু <span
                                    class="math-font">jω</span> দিয়ে গুণ করা!</p>
                        </div>
                        <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                            <span class="font-bold text-indigo-700">7. Convolution (কনভলিউশন)</span>
                            <p class="math-font text-xs mt-1">x₁(t) * x₂(t) ↔ X₁(ω) · X₂(ω)</p>
                            <p class="text-xs text-slate-600 mt-1">টাইমের কঠিন কনভলিউশন ফ্রিকোয়েন্সিতে সাধারণ গুণ হয়ে
                                যায়!</p>
                        </div>
                        <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                            <span class="font-bold text-indigo-700">8. Duality (দ্বৈততা)</span>
                            <p class="math-font text-xs mt-1">X(t) ↔ 2π · x(−ω)</p>
                            <p class="text-xs text-slate-600 mt-1">উদা: <span class="math-font">Sa(at) ↔
                                    (π/a)·rect(ω/2a)</span></p>
                        </div>
                        <div class="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                            <span class="font-bold text-indigo-700">9. Multiplication (মডুলেশন)</span>
                            <p class="math-font text-xs mt-1">x₁(t)·x₂(t) ↔ (1/2π) [X₁(ω) * X₂(ω)]</p>
                            <p class="text-xs text-slate-600 mt-1">নোটের পৃষ্ঠা ৮১-এ <span class="math-font">1/2</span>
                                লেখা মনে হয়, আসলে <span class="math-font">1/2π</span> হবে।</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==================== TAB 4: 5.5 & 5.6 EXAM PROBLEMS ==================== -->
        <section id="sec-spring25" class="topic-section hidden space-y-8">

            <!-- Problem 5.5: Spring 25 Final Problem -->
            <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                <div class="flex items-center gap-3 mb-3">
                    <span class="bg-teal-600 text-white px-3 py-1 rounded-lg font-bold text-lg">5.5</span>
                    <h2 class="text-2xl font-bold text-slate-900">Spring '25 Final Exam Problem (রেডিও ট্রান্সমিটার ও
                        রিসিভার সিস্টেম, pp. 86–90)</h2>
                </div>
                <p class="text-slate-600 text-sm mb-4">
                    সিস্টেম চেইন: <span class="math-font bg-slate-100 px-2 py-0.5 rounded text-slate-800">x(t) → [×
                        cos(ω₀t)] → [H₁ Bandpass] → z(t) → [× cos(ω₀t)] → [H₂ Low-pass] → y(t)</span><br>
                    দেওয়া আছে: <span class="math-font">x(t) = Sa(ω<sub>b</sub>t / 2)</span>, ক্যারিয়ার <span
                        class="math-font">P(t) = cos(ω₀t)</span> যেখানে <span class="math-font">ω₀ ≫
                        ω<sub>b</sub></span>, এবং <span class="math-font">h₂(t) = Sa(ω<sub>b</sub>t / 2)</span>। নিচের
                    বাটনগুলোতে ক্লিক করে প্রতিটি ধাপে সিগন্যালের স্পেকট্রাম কীভাবে বদলায় তা নিজের চোখে দেখুন!
                </p>

                <!-- Step Selector Buttons -->
                <div class="flex flex-wrap gap-2 mb-4">
                    <button onclick="setSpringStep(1)" id="sp-btn-1"
                        class="sp-step-btn step-active px-3.5 py-2 rounded-lg font-bold text-xs md:text-sm border border-teal-700 transition">ধাপ
                        ১: মূল ইনপুট X(ω)</button>
                    <button onclick="setSpringStep(2)" id="sp-btn-2"
                        class="sp-step-btn bg-slate-100 text-slate-700 px-3.5 py-2 rounded-lg font-bold text-xs md:text-sm border border-slate-300 transition">ধাপ
                        ২ ও ৩: প্রথম গুণন ও H₁ ফিল্টার → Z(ω)</button>
                    <button onclick="setSpringStep(3)" id="sp-btn-3"
                        class="sp-step-btn bg-slate-100 text-slate-700 px-3.5 py-2 rounded-lg font-bold text-xs md:text-sm border border-slate-300 transition">ধাপ
                        ৪: দ্বিতীয়বার cos(ω₀t) গুণন (৩টি বক্স!)</button>
                    <button onclick="setSpringStep(4)" id="sp-btn-4" id="sp-btn-4"
                        class="sp-step-btn bg-slate-100 text-slate-700 px-3.5 py-2 rounded-lg font-bold text-xs md:text-sm border border-slate-300 transition">ধাপ
                        ৫: H₂ লো-পাস ফিল্টার ও চূড়ান্ত আউটপুট y(t)</button>
                </div>

                <div class="grid lg:grid-cols-2 gap-6 items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div>
                        <canvas id="canvas-spring25" width="480" height="240"></canvas>
                    </div>
                    <div id="spring25-step-desc"
                        class="bg-white p-5 rounded-xl border border-slate-200 space-y-3 text-sm">
                        <!-- Dynamically populated by setSpringStep() -->
                    </div>
                </div>
            </div>

            <!-- Problem 5.6: The cos 100t Problem & Note Error -->
            <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                <div class="flex items-center gap-3 mb-3">
                    <span class="bg-rose-600 text-white px-3 py-1 rounded-lg font-bold text-lg">5.6</span>
                    <h2 class="text-2xl font-bold text-slate-900"><span class="math-font">cos(100t)</span> অংক এবং
                        পৃষ্ঠা ৯২-এর মারাত্মক ভুল সংশোধন (pp. 91–92)</h2>
                </div>

                <div class="grid lg:grid-cols-2 gap-6">
                    <div class="space-y-4 text-sm">
                        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                            <h3 class="font-bold text-slate-900 text-base">অংকটি কী ছিল?</h3>
                            <p class="text-slate-700">
                                ইনপুট <span class="math-font">x(t) = Sa(2t)</span> কে <span class="math-font">m(t) =
                                    cos(100t)</span> দিয়ে গুণ করে একটি Bandpass ফিল্টার <span
                                    class="math-font">H₁(ω)</span> (যার পাসব্যান্ড <span class="math-font">98 &lt; |ω|
                                    &lt; 102</span> এবং উচ্চতা <span class="math-font">1</span>)-এর ভেতর দিয়ে পাঠানো
                                হলো। আউটপুট <span class="math-font">Y(ω)</span> এবং <span class="math-font">y(t)</span>
                                কত?
                            </p>
                            <ul class="list-disc list-inside text-slate-700 space-y-1">
                                <li><span class="math-font">Sa(2t) ↔ (π/2)·rect(ω/4)</span> (যা <span
                                        class="math-font">-2</span> থেকে <span class="math-font">+2</span> পর্যন্ত
                                    বিস্তৃত)।</li>
                                <li><span class="math-font">cos(100t)</span> দিয়ে গুণ করলে এটি অর্ধেক হয়ে (<span
                                        class="math-font">π/4</span>) ঠিক <span class="math-font">98..102</span> এবং
                                    <span class="math-font">-102..-98</span> এ চলে যায়।</li>
                                <li>ফিল্টার <span class="math-font">H₁</span> ওইটুকু জায়গাকেই হুবহু পাস করে দেয়! তাই
                                    <span class="math-font font-bold text-indigo-700">Y(ω) = (π/4)[rect((ω−100)/4) +
                                        rect((ω+100)/4)]</span> (আপনার নোটে এ পর্যন্ত ১০০% সঠিক!)</li>
                            </ul>
                        </div>

                        <div class="bg-rose-50 border-l-4 border-rose-600 p-4 rounded-r-xl space-y-2">
                            <h4 class="font-bold text-rose-950 text-base">❌ পৃষ্ঠা ৯২-এ আপনার নোটে কোথায় ভুল হয়েছে?</h4>
                            <p class="text-slate-700">
                                Inverse করার সময় আপনার নোটে লেখা হয়েছে: <span
                                    class="math-font line-through text-rose-700">y(t) = 2Sa(2(t − 100)) + 2Sa(2(t +
                                    100))</span>।<br>
                                <strong>কেন এটি ভুল?</strong> আপনি ফ্রিকোয়েন্সির শিফট (<span class="math-font">ω ±
                                    100</span>)-কে ভুল করে টাইমের শিফট (<span class="math-font">t ± 100</span>) বানিয়ে
                                ফেলেছেন! ফ্রিকোয়েন্সিতে শিফট থাকা মানে টাইমে <span class="math-font">cos(100t)</span>
                                গুণ হওয়া, টাইম সরে যাওয়া নয়!
                            </p>
                            <p class="text-emerald-900 font-bold bg-emerald-100 p-2.5 rounded-lg">
                                ✅ সঠিক উত্তর: যেহেতু ফিল্টার কিছুই কাটেনি, তাই যা ঢুকেছিল তাই বের হবে: <span
                                    class="math-font">y(t) = Sa(2t) · cos(100t)</span>। (যার মান <span
                                    class="math-font">t=0</span> তে <span class="math-font">1</span>, কিন্তু আপনার ভুল
                                সূত্রে বসালে আসে <span class="math-font">−0.017</span>!)
                            </p>
                        </div>
                    </div>

                    <!-- Interactive Comparison Graph: Correct Envelope vs Wrong Time-Shift -->
                    <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                        <div>
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-bold text-slate-800 text-sm">📊 গ্রাফে পার্থক্য দেখুন: সঠিক <span
                                        class="math-font">y(t)</span> বনাম নোটের ভুল <span
                                        class="math-font">y(t)</span></span>
                                <select id="cos100-view" onchange="drawCos100Graph()"
                                    class="bg-white border border-slate-300 rounded px-2 py-1 text-xs font-bold text-slate-800">
                                    <option value="correct">✅ সঠিক: Sa(2t)·cos(100t) [Envelope]</option>
                                    <option value="wrong">❌ নোটের ভুল: দুই পাশে সরে যাওয়া পালস</option>
                                </select>
                            </div>
                            <canvas id="canvas-cos100" width="460" height="230"></canvas>
                        </div>
                        <p class="text-xs text-slate-600 mt-2 bg-white p-2.5 rounded border border-slate-200">
                            💡 <strong>পরীক্ষায় যেভাবে ছবি আঁকবেন:</strong> প্রথমে হালকা ডট লাইন দিয়ে <span
                                class="math-font">Sa(2t)</span> এর খোলস (Envelope) আঁকবেন যার শূন্য বিন্দু <span
                                class="math-font">±π/2, ±π</span>-তে। এরপর তার ভেতরে ঘন করে <span
                                class="math-font">cos(100t)</span>-এর দ্রুত কম্পন এঁকে দেবেন!
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==================== TAB 5: 5.7 CORRECTIONS TO NOTES ==================== -->
        <section id="sec-errors" class="topic-section hidden space-y-6">
            <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                <div class="flex items-center gap-3 mb-2">
                    <span class="bg-rose-600 text-white px-3 py-1 rounded-lg font-bold text-lg">5.7</span>
                    <h2 class="text-2xl font-bold text-slate-900">আপনার খাতার/নোটের ভুলগুলোর তালিকা ও সংশোধনী (pp.
                        73–92)</h2>
                </div>
                <p class="text-slate-600 text-sm mb-6">পরীক্ষার আগে আপনার নোটের এই জায়গাগুলো পেন্সিল বা কলম দিয়ে ঠিক করে
                    নিন যাতে পূর্ণ নম্বর পান:</p>

                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse text-sm">
                        <thead>
                            <tr class="bg-rose-50 text-rose-950 border-b-2 border-rose-200">
                                <th class="p-3 font-bold">পৃষ্ঠা নং</th>
                                <th class="p-3 font-bold">আপনার নোটে যা লেখা আছে (ভুল/অসম্পূর্ণ)</th>
                                <th class="p-3 font-bold">সঠিক উত্তর যা হবে</th>
                                <th class="p-3 font-bold">কেন ভুল হয়েছে? (সহজ বাংলা ব্যাখ্যা)</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200">
                            <tr>
                                <td class="p-3 font-bold text-slate-800">p. 73</td>
                                <td class="p-3 math-font text-rose-600">u(t) ↔ 1 / (jω)</td>
                                <td class="p-3 math-font text-emerald-700">π·δ(ω) + 1 / (jω)</td>
                                <td class="p-3 text-slate-700"><span class="math-font">e<sup>-jω·∞</sup></span> শূন্য হয়
                                    না, শুধু দুলতে থাকে। এছাড়া <span class="math-font">u(t)</span>-এর গড় মান <span
                                        class="math-font">½</span> হওয়ায় একটি <span class="math-font">πδ(ω)</span> থাকে।
                                    (ল্যাপ্লাসের শর্টকাট নিলে শুধু <span class="math-font">1/jω</span> আসে)।</td>
                            </tr>
                            <tr class="bg-rose-50/40">
                                <td class="p-3 font-bold text-slate-800">p. 74</td>
                                <td class="p-3 math-font text-rose-600">e<sup>10t</sup>u(t) ↔ 1 / (−10 + jω)</td>
                                <td class="p-3 font-bold text-emerald-700">Fourier Transform নেই (Does not exist!)</td>
                                <td class="p-3 text-slate-700"><span class="math-font">a &gt; 0</span> হলে <span
                                        class="math-font">e<sup>at</sup></span> অসীমে বিস্ফোরিত হয়, তাই ইন্টিগ্রাল
                                    কনভার্জ করে না। এটি কেবল Laplace-এ কাজ করে।</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-bold text-slate-800">pp. 75–78</td>
                                <td class="p-3 math-font text-rose-600">e<sup>j5t</sup>u(t), sin(5t)u(t), cos(10t)u(t)
                                    [δ ছাড়া]</td>
                                <td class="p-3 math-font text-emerald-700">সাথে π·δ(ω ± ω₀) পদ যুক্ত হবে</td>
                                <td class="p-3 text-slate-700"><span class="math-font">u(t)</span> গুণ থাকায় এগুলো আসলে
                                    <span class="math-font">u(t)</span>-এর ফ্রিকোয়েন্সি শিফট। তাই <span
                                        class="math-font">πδ</span> পদও থাকে। (স্যার ক্লাসে শর্ট ফর্ম করালে পরীক্ষার
                                    জন্য স্যারের সাথে কথা বলে নিন)।</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-bold text-slate-800">p. 79</td>
                                <td class="p-3 math-font text-rose-600">a·x₁ + a·x₂ এবং e<sup>jωt₀</sup></td>
                                <td class="p-3 math-font text-emerald-700">a·x₁ + b·x₂ এবং e<sup>jω₀t</sup></td>
                                <td class="p-3 text-slate-700">লেখার সময় সামান্য টাইপো (সাবস্ক্রিপ্ট <span
                                        class="math-font">0</span> টি <span class="math-font">t</span> এর বদলে <span
                                        class="math-font">ω</span>-তে বসবে)।</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-bold text-slate-800">p. 81</td>
                                <td class="p-3 math-font text-rose-600">Modulation-এ 1/2 এবং 2πe<sup>-aω</sup>u(−ω)</td>
                                <td class="p-3 math-font text-emerald-700">1/(2π) এবং 2πe<sup>+aω</sup>u(−ω)</td>
                                <td class="p-3 text-slate-700">গুণের সূত্রে <span class="math-font">1/2π</span> থাকে। আর
                                    Duality-তে <span class="math-font">t</span>-এর জায়গায় <span
                                        class="math-font">−ω</span> বসালে মাইনাসে মাইনাসে <span
                                        class="math-font">+aω</span> হয়।</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-bold text-slate-800">p. 83 & 84</td>
                                <td class="p-3 math-font text-rose-600">e<sup>5t</sup> (p.83) এবং 2π[Sa(ω−5)+Sa(ω+5)]
                                    (p.84)</td>
                                <td class="p-3 math-font text-emerald-700">e<sup>j5t</sup> এবং Sa(ω−5) + Sa(ω+5)</td>
                                <td class="p-3 text-slate-700">অয়লারের সূত্রে <span class="math-font">j</span> ছুটে
                                    গিয়েছিল। আর পৃষ্ঠা ৮৪-তে <span class="math-font">2π</span> ও <span
                                        class="math-font">1/2π</span> কাটাকাটি গিয়ে শুধু <span
                                        class="math-font">Sa</span> থাকবে (পৃষ্ঠা ৮৫-তে ঠিক করেছেন)।</td>
                            </tr>
                            <tr class="bg-rose-50/40">
                                <td class="p-3 font-bold text-slate-800">p. 92</td>
                                <td class="p-3 math-font text-rose-600">y(t) = 2Sa(2(t−100)) + 2Sa(2(t+100))</td>
                                <td class="p-3 math-font text-emerald-700">y(t) = Sa(2t) · cos(100t)</td>
                                <td class="p-3 text-slate-700">ফ্রিকোয়েন্সি শিফটকে টাইম শিফট ভেবে ভুল করা হয়েছিল।</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- ==================== TAB 6: CHECK YOURSELF (5 SOLVED QUESTIONS) ==================== -->
        <section id="sec-quiz" class="topic-section hidden space-y-6">
            <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
                <h2 class="text-2xl font-bold text-slate-900 mb-2">🎯 নিজেকে যাচাই করুন (৫টি প্রশ্নের ধাপে ধাপে বাংলা
                    সমাধান)</h2>
                <p class="text-slate-600 text-sm mb-6">নিজে আগে খাতায় চেষ্টা করুন, তারপর বাটনে ক্লিক করে বিস্তারিত উত্তর
                    ও শর্টকাট মিলিয়ে নিন।</p>

                <div class="space-y-4">
                    <!-- Q1 -->
                    <div class="border border-slate-200 rounded-xl p-5 bg-slate-50">
                        <h3 class="font-bold text-base md:text-lg text-slate-900">প্রশ্ন ১: <span
                                class="math-font text-indigo-700">x(t) = rect((t − 3) / 2)</span> এর Fourier Transform
                            বের করুন।</h3>
                        <button onclick="toggleQuiz('q1')"
                            class="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-lg transition">উত্তর
                            ও ব্যাখ্যা দেখুন</button>
                        <div id="q1"
                            class="hidden mt-3 pt-3 border-t border-slate-200 text-sm text-slate-700 space-y-1.5">
                            <p>✅ <strong>ধাপ ১:</strong> শিফট ছাড়া মূল পালসটি হলো <span class="math-font">rect(t /
                                    2)</span>, যার ট্রান্সফর্ম আমরা জানি <span class="math-font">2·Sa(ω)</span>।</p>
                            <p>✅ <strong>ধাপ ২ (Time-Shift Property):</strong> এখানে <span class="math-font">t</span>-এর
                                জায়গায় <span class="math-font">t − 3</span> আছে (অর্থাৎ ডানে ৩ ঘর শিফট)। টাইম শিফট
                                প্রপার্টি অনুযায়ী শুধু একটি <span class="math-font">e<sup>-j3ω</sup></span> গুণ হবে!</p>
                            <p class="font-bold text-emerald-700">👉 চূড়ান্ত উত্তর: X(ω) = 2·Sa(ω) · e<sup>−j3ω</sup>
                            </p>
                        </div>
                    </div>

                    <!-- Q2 -->
                    <div class="border border-slate-200 rounded-xl p-5 bg-slate-50">
                        <h3 class="font-bold text-base md:text-lg text-slate-900">প্রশ্ন ২: <span
                                class="math-font text-indigo-700">x(t) = e<sup>−2t</sup>u(t)</span> এর জন্য <span
                                class="math-font">X(ω)</span> বের করুন, এবং <span class="math-font">ω = 2</span>
                            বিন্দুতে এর মান (<span class="math-font">|X|</span>) ও কোণ (<span
                                class="math-font">∠X</span>) কত?</h3>
                        <button onclick="toggleQuiz('q2')"
                            class="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-lg transition">উত্তর
                            ও ব্যাখ্যা দেখুন</button>
                        <div id="q2"
                            class="hidden mt-3 pt-3 border-t border-slate-200 text-sm text-slate-700 space-y-1.5">
                            <p>✅ <strong>ট্রান্সফর্ম:</strong> সূত্র <span class="math-font">1/(a + jω)</span> অনুযায়ী
                                এখানে <span class="math-font">a = 2</span>, তাই <span class="math-font font-bold">X(ω) =
                                    1 / (2 + jω)</span>।</p>
                            <p>✅ <strong><span class="math-font">ω = 2</span> বসিয়ে:</strong> <span
                                    class="math-font">X(2) = 1 / (2 + j2)</span>।</p>
                            <p>• <strong>ম্যাগনিচিউড <span class="math-font">|X(2)|</span>:</strong> <span
                                    class="math-font">1 / √(2² + 2²) = 1 / √8 = 1 / (2√2) ≈
                                    <strong>0.354</strong></span>।</p>
                            <p>• <strong>ফেজ কোণ <span class="math-font">∠X(2)</span>:</strong> <span
                                    class="math-font">0° − tan<sup>-1</sup>(2/2) = <strong>−45°</strong></span> (বা
                                <span class="math-font">−π/4</span> rad)।</p>
                        </div>
                    </div>

                    <!-- Q3 -->
                    <div class="border border-slate-200 rounded-xl p-5 bg-slate-50">
                        <h3 class="font-bold text-base md:text-lg text-slate-900">প্রশ্ন ৩: <span
                                class="math-font text-indigo-700">cos(3t)</span> এর Fourier Transform কত?</h3>
                        <button onclick="toggleQuiz('q3')"
                            class="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-lg transition">উত্তর
                            ও ব্যাখ্যা দেখুন</button>
                        <div id="q3"
                            class="hidden mt-3 pt-3 border-t border-slate-200 text-sm text-slate-700 space-y-1.5">
                            <p>✅ আমরা জানি <span class="math-font">cos(ω₀t) ↔ π [ δ(ω − ω₀) + δ(ω + ω₀) ]</span>। এখানে
                                <span class="math-font">ω₀ = 3</span>।</p>
                            <p class="font-bold text-emerald-700">👉 চূড়ান্ত উত্তর: X(ω) = π [ δ(ω − 3) + δ(ω + 3) ]</p>
                        </div>
                    </div>

                    <!-- Q4 -->
                    <div class="border border-slate-200 rounded-xl p-5 bg-slate-50">
                        <h3 class="font-bold text-base md:text-lg text-slate-900">প্রশ্ন ৪: <span
                                class="math-font text-indigo-700">Sa(t) · cos(10t)</span> এর ট্রান্সফর্ম বের করুন।
                            (হিন্ট: <span class="math-font">Sa(t) ↔ π·rect(ω/2)</span>)</h3>
                        <button onclick="toggleQuiz('q4')"
                            class="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-lg transition">উত্তর
                            ও ব্যাখ্যা দেখুন</button>
                        <div id="q4"
                            class="hidden mt-3 pt-3 border-t border-slate-200 text-sm text-slate-700 space-y-1.5">
                            <p>✅ <strong>Modulation Rule:</strong> কোনো সিগন্যালকে <span
                                    class="math-font">cos(10t)</span> দিয়ে গুণ করলে তার স্পেকট্রাম অর্ধেক (<span
                                    class="math-font">½</span>) হয়ে <span class="math-font">ω = +10</span> এবং <span
                                    class="math-font">ω = −10</span> এ চলে যায়।</p>
                            <p class="font-bold text-emerald-700">👉 চূড়ান্ত উত্তর: (π / 2) [ rect((ω − 10)/2) + rect((ω
                                + 10)/2) ]</p>
                        </div>
                    </div>

                    <!-- Q5 -->
                    <div class="border border-slate-200 rounded-xl p-5 bg-slate-50">
                        <h3 class="font-bold text-base md:text-lg text-slate-900">প্রশ্ন ৫: Differentiation প্রপার্টি
                            ব্যবহার করে <span class="math-font text-indigo-700">d/dt [ rect(t / 2) ]</span> এর
                            ট্রান্সফর্ম বের করুন এবং বাস্তবে এর মানে কী তা ব্যাখ্যা করুন।</h3>
                        <button onclick="toggleQuiz('q5')"
                            class="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-lg transition">উত্তর
                            ও ব্যাখ্যা দেখুন</button>
                        <div id="q5"
                            class="hidden mt-3 pt-3 border-t border-slate-200 text-sm text-slate-700 space-y-1.5">
                            <p>✅ <strong>সূত্র দিয়ে:</strong> আমরা জানি <span class="math-font">rect(t/2) ↔ 2·Sa(ω) =
                                    2·sin(ω)/ω</span>। এখন <span class="math-font">d/dt</span> থাকার কারণে <span
                                    class="math-font">jω</span> দিয়ে গুণ হবে:<br>
                                <span class="math-font font-bold text-emerald-700">jω · [2·sin(ω)/ω] = j2·sin(ω)</span>
                                (কারণ <span class="math-font">ω</span> ও <span class="math-font">ω</span> কেটে যায়!)।
                            </p>
                            <p>✅ <strong>বাস্তব ছবিতে মিলিয়ে দেখা:</strong> <span class="math-font">rect(t/2)</span>
                                পালসটি <span class="math-font">t = −1</span> এ হঠাৎ <span class="math-font">0</span>
                                থেকে লাফ দিয়ে <span class="math-font">1</span> এ ওঠে (তাই ঢাল হলো পজিটিভ ইমপালস <span
                                    class="math-font">+δ(t+1)</span>) এবং <span class="math-font">t = +1</span> এ হঠাৎ
                                <span class="math-font">1</span> থেকে <span class="math-font">0</span> তে নামে (তাই ঢাল
                                হলো নেগেটিভ ইমপালস <span class="math-font">−δ(t−1)</span>)। আর <span
                                    class="math-font">δ(t+1) − δ(t−1)</span> এর ট্রান্সফর্ম হলো <span
                                    class="math-font">e<sup>jω</sup> − e<sup>-jω</sup> = j2·sin(ω)</span>! দুভাবেই একদম
                                মিলে গেল!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>`;

export const phase5Script: string = `let currentSpringStep = 1;

        function switchTab(tabId) {
            document.querySelectorAll('.topic-section').forEach(sec => sec.classList.add('hidden'));
            document.getElementById('sec-' + tabId).classList.remove('hidden');

            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('tab-active');
                if (btn.id !== 'tab-errors' && btn.id !== 'tab-quiz') {
                    btn.classList.add('bg-slate-100', 'text-slate-700');
                }
            });

            const activeBtn = document.getElementById('tab-' + tabId);
            activeBtn.classList.remove('bg-slate-100', 'text-slate-700');
            activeBtn.classList.add('tab-active');

            if (tabId === 'basics') drawTInfGraph();
            if (tabId === 'pairs') updatePairView();
            if (tabId === 'props') drawModGraph();
            if (tabId === 'spring25') { setSpringStep(currentSpringStep); drawCos100Graph(); }
        }

        function toggleQuiz(id) {
            document.getElementById(id).classList.toggle('hidden');
        }

        // Helper to draw clean coordinate axes
        function drawAxes(ctx, w, h, ox, oy, xLabel, yLabel) {
            ctx.clearRect(0, 0, w, h);
            ctx.strokeStyle = '#e2e8f0';
            ctx.lineWidth = 1;
            for (let x = ox % 40; x < w; x += 40) {
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
            }
            for (let y = oy % 35; y < h; y += 35) {
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
            }

            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(0, oy); ctx.lineTo(w, oy);
            ctx.moveTo(ox, 0); ctx.lineTo(ox, h);
            ctx.stroke();

            ctx.fillStyle = '#475569';
            ctx.font = 'bold 12px sans-serif';
            ctx.fillText(xLabel, w - 18, oy - 6);
            ctx.fillText(yLabel, ox + 8, 16);
        }

        // Helper to draw upward Dirac Delta arrow
        function drawArrow(ctx, x, y0, yTop, color, label = '') {
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(x, y0);
            ctx.lineTo(x, yTop);
            ctx.stroke();

            const dir = yTop < y0 ? 1 : -1;
            ctx.beginPath();
            ctx.moveTo(x, yTop);
            ctx.lineTo(x - 6, yTop + dir * 10);
            ctx.lineTo(x + 6, yTop + dir * 10);
            ctx.closePath();
            ctx.fill();

            if (label) {
                ctx.font = 'bold 11px monospace';
                ctx.textAlign = 'center';
                ctx.fillText(label, x, yTop - dir * 8);
            }
        }

        function drawTInfGraph() {
            const canvas = document.getElementById('canvas-t-inf');
            const ctx = canvas.getContext('2d');
            const w = canvas.width, h = canvas.height;
            const stepVal = parseInt(document.getElementById('t-inf-slider').value);

            const configs = {
                1: { T: 6, w0: 1.05, desc: 'T = 6 (স্পেকট্রামের লাইনগুলো দূরে দূরে)' },
                2: { T: 12, w0: 0.52, desc: 'T = 12 (লাইনগুলো ঘন হচ্ছে)' },
                3: { T: 28, w0: 0.22, desc: 'T = 28 (প্রায় অবিচ্ছিন্ন দেখাচ্ছে)' },
                4: { T: Infinity, w0: 0, desc: 'T → ∞ (অবিচ্ছিন্ন Fourier Transform কার্ভ X(ω)!)' }
            };
            const cfg = configs[stepVal];
            document.getElementById('t-inf-label').innerText = cfg.desc;
            document.getElementById('t-inf-badge').innerText = cfg.T === Infinity ? 'T → ∞, ω₀ → dω' : \`T = \${cfg.T}, ω₀ = \${cfg.w0}\`;

            const ox = w / 2, oy = h - 45;
            const scaleW = 28, scaleY = 165;
            drawAxes(ctx, w, h, ox, oy, 'ω', 'X(ω)');

            // Envelope 2*Sa(w)
            ctx.strokeStyle = cfg.T === Infinity ? '#4f46e5' : '#cbd5e1';
            ctx.lineWidth = cfg.T === Infinity ? 3.5 : 2;
            if (cfg.T !== Infinity) ctx.setLineDash([5, 4]);
            ctx.beginPath();
            for (let px = 0; px <= w; px++) {
                let om = (px - ox) / scaleW;
                let val = Math.abs(om) < 1e-4 ? 1 : Math.sin(om) / om;
                let py = oy - val * scaleY;
                if (px === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.stroke();
            ctx.setLineDash([]);

            // Discrete harmonic stems if T is finite
            if (cfg.T !== Infinity) {
                ctx.strokeStyle = '#4f46e5';
                ctx.fillStyle = '#4f46e5';
                ctx.lineWidth = 2;
                for (let n = -35; n <= 35; n++) {
                    let om = n * cfg.w0;
                    let px = ox + om * scaleW;
                    if (px < 10 || px > w - 10) continue;
                    let val = Math.abs(om) < 1e-4 ? 1 : Math.sin(om) / om;
                    let py = oy - val * scaleY;
                    ctx.beginPath();
                    ctx.moveTo(px, oy);
                    ctx.lineTo(px, py);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(px, py, 2.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            } else {
                ctx.fillStyle = 'rgba(79, 70, 229, 0.12)';
                ctx.beginPath();
                ctx.moveTo(0, oy);
                for (let px = 0; px <= w; px++) {
                    let om = (px - ox) / scaleW;
                    let val = Math.abs(om) < 1e-4 ? 1 : Math.sin(om) / om;
                    ctx.lineTo(px, oy - val * scaleY);
                }
                ctx.lineTo(w, oy);
                ctx.fill();
            }
        }

        function updatePairView() {
            const pair = document.getElementById('pair-selector').value;
            const cTime = document.getElementById('canvas-pair-time');
            const cFreq = document.getElementById('canvas-pair-freq');
            const ctxT = cTime.getContext('2d');
            const ctxF = cFreq.getContext('2d');
            const w = cTime.width, h = cTime.height;
            const ox = w / 2, oy = h - 45;

            const paramBox = document.getElementById('pair-param-box');
            const slider = document.getElementById('pair-param-slider');
            const expCard = document.getElementById('pair-explanation-card');

            if (pair === 'rect') {
                paramBox.classList.remove('hidden');
                document.getElementById('pair-param-label').innerText = 'পালসের মোট প্রস্থ (Width τ) পরিবর্তন করুন:';
                let tau = parseInt(slider.value);
                let half = tau / 2;
                document.getElementById('pair-param-val').innerText = \`τ = \${tau} (সীমানা: -\${half} থেকে +\${half})\`;
                document.getElementById('pair-time-formula').innerText = \`rect(t / \${tau})\`;
                document.getElementById('pair-freq-formula').innerText = \`\${tau} · Sa(\${half}ω)\`;

                // Time graph
                drawAxes(ctxT, w, h, ox, oy, 't', 'x(t)');
                let sx = 32, sy = 110;
                ctxT.fillStyle = 'rgba(37, 99, 235, 0.15)';
                ctxT.fillRect(ox - half * sx, oy - sy, tau * sx, sy);
                ctxT.strokeStyle = '#2563eb'; ctxT.lineWidth = 3;
                ctxT.beginPath();
                ctxT.moveTo(0, oy); ctxT.lineTo(ox - half * sx, oy);
                ctxT.lineTo(ox - half * sx, oy - sy); ctxT.lineTo(ox + half * sx, oy - sy);
                ctxT.lineTo(ox + half * sx, oy); ctxT.lineTo(w, oy);
                ctxT.stroke();
                ctxT.fillStyle = '#1e40af'; ctxT.font = 'bold 11px sans-serif';
                ctxT.fillText(\`-\${half}\`, ox - half * sx, oy + 15);
                ctxT.fillText(\`+\${half}\`, ox + half * sx, oy + 15);

                // Freq graph
                drawAxes(ctxF, w, h, ox, oy, 'ω', 'X(ω)');
                let fScaleX = 24, fScaleY = 120;
                ctxF.strokeStyle = '#e11d48'; ctxF.lineWidth = 3;
                ctxF.beginPath();
                for (let px = 0; px <= w; px++) {
                    let om = (px - ox) / fScaleX;
                    let arg = half * om;
                    let val = Math.abs(arg) < 1e-4 ? 1 : Math.sin(arg) / arg;
                    let py = oy - val * fScaleY;
                    if (px === 0) ctxF.moveTo(px, py); else ctxF.lineTo(px, py);
                }
                ctxF.stroke();
                ctxF.fillStyle = '#be123c';
                ctxF.fillText(\`Peak = \${tau}\`, ox + 30, oy - fScaleY + 8);

                expCard.innerHTML = \`
                    <h4 class="font-bold text-indigo-950 text-base">📘 (i) Rectangular Pulse ডেরিভেশন ও মূল রহস্য:</h4>
                    <p class="text-sm text-slate-700">যখন <span class="math-font">rect(t/2)</span> থাকে, তখন এটি <span class="math-font">-1</span> থেকে <span class="math-font">1</span> পর্যন্ত <span class="math-font">1</span>। তাই ইন্টিগ্রেশন হবে: <span class="math-font">X(ω) = ∫<sub>-1</sub><sup>1</sup> e<sup>-jωt</sup> dt = [e<sup>-jωt</sup> / (-jω)]<sub>-1</sub><sup>1</sup> = (e<sup>jω</sup> - e<sup>-jω</sup>) / (jω)</span>। অয়লারের সূত্র <span class="math-font">sin(ω) = (e<sup>jω</sup> - e<sup>-jω</sup>)/2j</span> বসালেই পাই <span class="math-font font-bold text-indigo-700">2 sin(ω)/ω = 2·Sa(ω)</span>!</p>
                    <p class="text-sm text-slate-700">💡 <strong>ম্যাজিক নিয়ম:</strong> স্লাইডার বাড়িয়ে <span class="math-font">τ = 10</span> করে দেখুন! টাইমে বক্সটি যত চওড়া হবে, ফ্রিকোয়েন্সিতে <span class="math-font">Sa</span> ঢেউটি তত চ্যাপ্টা ও উঁচু হবে (যেমন আপনার নোটের ২য় উদাহরণ: <span class="math-font">5·rect(t/10) ↔ 50·Sa(5ω)</span>)।</p>
                \`;
            } else if (pair === 'exp') {
                paramBox.classList.remove('hidden');
                document.getElementById('pair-param-label').innerText = 'ক্ষয়ের হার (Decay rate a > 0) পরিবর্তন করুন:';
                let a = parseInt(slider.value);
                document.getElementById('pair-param-val').innerText = \`a = \${a}\`;
                document.getElementById('pair-time-formula').innerText = \`e^(-\${a}t) · u(t)\`;
                document.getElementById('pair-freq-formula').innerText = \`|X(ω)| = 1 / √(\${a}² + ω²)\`;

                drawAxes(ctxT, w, h, ox, oy, 't', 'x(t)');
                ctxT.strokeStyle = '#2563eb'; ctxT.lineWidth = 3;
                ctxT.beginPath();
                ctxT.moveTo(0, oy); ctxT.lineTo(ox, oy);
                for (let px = ox; px <= w; px++) {
                    let t = (px - ox) / 45;
                    let y = Math.exp(-a * 0.4 * t);
                    ctxT.lineTo(px, oy - y * 120);
                }
                ctxT.stroke();

                drawAxes(ctxF, w, h, ox, oy, 'ω', '|X(ω)|');
                ctxF.strokeStyle = '#e11d48'; ctxF.lineWidth = 3;
                ctxF.beginPath();
                for (let px = 0; px <= w; px++) {
                    let om = (px - ox) / 25;
                    let mag = 1 / Math.sqrt((a * 0.5) ** 2 + om * om);
                    let py = oy - Math.min(mag * 110, 140);
                    if (px === 0) ctxF.moveTo(px, py); else ctxF.lineTo(px, py);
                }
                ctxF.stroke();

                expCard.innerHTML = \`
                    <h4 class="font-bold text-indigo-950 text-base">📘 (ii) Decaying Exponential: <span class="math-font">e<sup>-at</sup>u(t) ↔ 1 / (a + jω)</span> (যেখানে <span class="math-font">a &gt; 0</span>)</h4>
                    <p class="text-sm text-slate-700">যেহেতু <span class="math-font">u(t)</span> আছে, তাই ইন্টিগ্রেশন হবে <span class="math-font">0</span> থেকে <span class="math-font">∞</span> পর্যন্ত: <span class="math-font">∫<sub>0</sub><sup>∞</sup> e<sup>-(a+jω)t</sup> dt</span>। যেহেতু <span class="math-font">a &gt; 0</span>, তাই <span class="math-font">t = ∞</span> বসালে <span class="math-font">e<sup>-∞</sup> = 0</span> হয়ে ভ্যানিশ হয়ে যায়! আর <span class="math-font">t = 0</span> বসালে পাওয়া যায় <span class="math-font font-bold text-indigo-700">1 / (a + jω)</span>। (যেমন <span class="math-font">e<sup>-6t</sup>u(t) ↔ 1/(6+jω)</span>)।</p>
                \`;
            } else if (pair === 'impulse') {
                paramBox.classList.add('hidden');
                document.getElementById('pair-time-formula').innerText = 'δ(t)';
                document.getElementById('pair-freq-formula').innerText = 'X(ω) = 1 (সব ফ্রিকোয়েন্সি সমান)';

                drawAxes(ctxT, w, h, ox, oy, 't', 'δ(t)');
                drawArrow(ctxT, ox, oy, oy - 125, '#2563eb', 'Area = 1');

                drawAxes(ctxF, w, h, ox, oy, 'ω', 'X(ω)');
                ctxF.strokeStyle = '#e11d48'; ctxF.lineWidth = 3.5;
                ctxF.beginPath(); ctxF.moveTo(0, oy - 90); ctxF.lineTo(w, oy - 90); ctxF.stroke();
                ctxF.fillStyle = '#be123c'; ctxF.fillText('1', ox - 14, oy - 95);

                expCard.innerHTML = \`
                    <h4 class="font-bold text-indigo-950 text-base">📘 (iii) Unit Impulse: <span class="math-font">δ(t) ↔ 1</span></h4>
                    <p class="text-sm text-slate-700">Phase 1-এর Sifting প্রপার্টি মনে আছে? <span class="math-font">∫ δ(t) e<sup>-jωt</sup> dt</span> ইন্টিগ্রালে <span class="math-font">δ(t)</span> শুধু <span class="math-font">t = 0</span> বিন্দুর মানটুকু ছেঁকে বের করে আনে: <span class="math-font">e<sup>-jω(0)</sup> = e<sup>0</sup> = 1</span>! এর মানে হলো শূন্য সময়ের একটি তীক্ষ্ণ আঘাতের ভেতর দুনিয়ার সব ফ্রিকোয়েন্সি সমান পরিমাণে (<span class="math-font">1</span>) লুকিয়ে থাকে।</p>
                \`;
            } else if (pair === 'const') {
                paramBox.classList.add('hidden');
                document.getElementById('pair-time-formula').innerText = 'x(t) = 1 (DC Constant)';
                document.getElementById('pair-freq-formula').innerText = 'X(ω) = 2π · δ(ω)';

                drawAxes(ctxT, w, h, ox, oy, 't', 'x(t)');
                ctxT.strokeStyle = '#2563eb'; ctxT.lineWidth = 3.5;
                ctxT.beginPath(); ctxT.moveTo(0, oy - 90); ctxT.lineTo(w, oy - 90); ctxT.stroke();
                ctxT.fillStyle = '#1d4ed8'; ctxT.fillText('1', ox - 14, oy - 95);

                drawAxes(ctxF, w, h, ox, oy, 'ω', 'X(ω)');
                drawArrow(ctxF, ox, oy, oy - 125, '#e11d48', '2π·δ(ω)');

                expCard.innerHTML = \`
                    <h4 class="font-bold text-indigo-950 text-base">⭐ (iv) Constant DC: <span class="math-font">1 ↔ 2π · δ(ω)</span> [পৃষ্ঠা ৭৬-এ ফাইনাল পরীক্ষার জন্য মার্ক করা!]</h4>
                    <p class="text-sm text-slate-700"><strong>কীভাবে প্রমাণ করবেন?</strong> আমরা একটু আগেই দেখলাম <span class="math-font">δ(t) ↔ 1</span>। তাহলে Inverse Transform-এর সূত্রে বসালে পাই: <span class="math-font">δ(t) = (1/2π) ∫ e<sup>jωt</sup> dω</span>। এবার <span class="math-font">2π</span> কে বামে গুণ করুন: <span class="math-font">∫ e<sup>jωt</sup> dω = 2π·δ(t)</span>। এখন শুধু চলক <span class="math-font">t</span> এবং <span class="math-font">ω</span> এর নাম অদলবদল করলেই প্রমাণ হয়ে যায়: <span class="math-font font-bold text-indigo-700">∫ 1 · e<sup>-jωt</sup> dt = 2π·δ(ω)</span>! কারণ ধ্রুবক সিগন্যালের কোনো কম্পন নেই, তাই এর পুরো শক্তি <span class="math-font">ω = 0</span> বিন্দুতে জমা থাকে।</p>
                \`;
            } else if (pair === 'complex') {
                paramBox.classList.remove('hidden');
                document.getElementById('pair-param-label').innerText = 'ফ্রিকোয়েন্সি (ω₀) পরিবর্তন করুন:';
                let w0 = parseInt(slider.value);
                document.getElementById('pair-param-val').innerText = \`ω₀ = \${w0}\`;
                document.getElementById('pair-time-formula').innerText = \`e^(j\${w0}t)\`;
                document.getElementById('pair-freq-formula').innerText = \`2π · δ(ω - \${w0})\`;

                drawAxes(ctxT, w, h, ox, oy, 't', 'Re{x(t)}');
                ctxT.strokeStyle = '#2563eb'; ctxT.lineWidth = 2.5;
                ctxT.beginPath();
                for (let px = 0; px <= w; px++) {
                    let t = (px - ox) / 35;
                    let py = oy - Math.cos(w0 * 0.5 * t) * 70;
                    if (px === 0) ctxT.moveTo(px, py); else ctxT.lineTo(px, py);
                }
                ctxT.stroke();

                drawAxes(ctxF, w, h, ox, oy, 'ω', 'X(ω)');
                let spikeX = ox + w0 * 14;
                drawArrow(ctxF, spikeX, oy, oy - 125, '#e11d48', \`2πδ(ω-\${w0})\`);
                ctxF.fillText(\`+\${w0}\`, spikeX, oy + 15);

                expCard.innerHTML = \`
                    <h4 class="font-bold text-indigo-950 text-base">📘 (v) Complex Exponential: <span class="math-font">e<sup>jω₀t</sup> ↔ 2π · δ(ω − ω₀)</span></h4>
                    <p class="text-sm text-slate-700">এটি ঠিক আগের <span class="math-font">1 ↔ 2πδ(ω)</span>-এর মতোই, শুধু ফ্রিকোয়েন্সি শিফট হয়ে স্পাইকটি <span class="math-font">0</span> থেকে ডানে <span class="math-font">ω = ω₀</span> বিন্দুতে সরে গেছে! এই একটি সূত্র দিয়েই আমরা নিচের <span class="math-font">cos</span> এবং <span class="math-font">sin</span> বের করি।</p>
                \`;
            } else if (pair === 'cos_sin') {
                paramBox.classList.remove('hidden');
                document.getElementById('pair-param-label').innerText = 'কম্পাঙ্ক (ω₀) পরিবর্তন করুন:';
                let w0 = parseInt(slider.value);
                document.getElementById('pair-param-val').innerText = \`ω₀ = \${w0} rad/s\`;
                document.getElementById('pair-time-formula').innerText = \`cos(\${w0}t)\`;
                document.getElementById('pair-freq-formula').innerText = \`π [ δ(ω - \${w0}) + δ(ω + \${w0}) ]\`;

                drawAxes(ctxT, w, h, ox, oy, 't', 'cos(ω₀t)');
                ctxT.strokeStyle = '#2563eb'; ctxT.lineWidth = 2.5;
                ctxT.beginPath();
                for (let px = 0; px <= w; px++) {
                    let t = (px - ox) / 35;
                    let py = oy - Math.cos(w0 * 0.5 * t) * 75;
                    if (px === 0) ctxT.moveTo(px, py); else ctxT.lineTo(px, py);
                }
                ctxT.stroke();

                drawAxes(ctxF, w, h, ox, oy, 'ω', 'X(ω)');
                let dx = w0 * 14;
                drawArrow(ctxF, ox + dx, oy, oy - 115, '#e11d48', 'π');
                drawArrow(ctxF, ox - dx, oy, oy - 115, '#e11d48', 'π');
                ctxF.fillText(\`+\${w0}\`, ox + dx, oy + 15);
                ctxF.fillText(\`-\${w0}\`, ox - dx, oy + 15);

                expCard.innerHTML = \`
                    <h4 class="font-bold text-indigo-950 text-base">📘 (vi) Cosine এবং Sine (pp. 82–83):</h4>
                    <p class="text-sm text-slate-700">অয়লারের সূত্র অনুযায়ী <span class="math-font">cos(ω₀t) = ½ (e<sup>jω₀t</sup> + e<sup>-jω₀t</sup>)</span>। যেহেতু প্রতিটি এক্সপোনেনশিয়াল দেয় <span class="math-font">2πδ</span>, তাই সামনে <span class="math-font">½</span> গুণ থাকায় <span class="math-font">2</span> কেটে গিয়ে থাকে শুধু <span class="math-font font-bold text-indigo-700">π [ δ(ω − ω₀) + δ(ω + ω₀) ]</span>।</p>
                    <p class="text-sm text-slate-700">একইভাবে <span class="math-font">sin(ω₀t) = (1/2j)(e<sup>jω₀t</sup> − e<sup>-jω₀t</sup>)</span> থেকে পাই <span class="math-font font-bold text-indigo-700">(π/j)[δ(ω − ω₀) − δ(ω + ω₀)] = jπ[δ(ω + ω₀) − δ(ω − ω₀)]</span>।</p>
                \`;
            } else if (pair === 'step') {
                paramBox.classList.add('hidden');
                document.getElementById('pair-time-formula').innerText = 'u(t) = ½ + ½·sgn(t)';
                document.getElementById('pair-freq-formula').innerText = 'π·δ(ω) + 1/(jω)';

                drawAxes(ctxT, w, h, ox, oy, 't', 'u(t)');
                ctxT.strokeStyle = '#2563eb'; ctxT.lineWidth = 3.5;
                ctxT.beginPath();
                ctxT.moveTo(0, oy); ctxT.lineTo(ox, oy);
                ctxT.lineTo(ox, oy - 100); ctxT.lineTo(w, oy - 100);
                ctxT.stroke();

                drawAxes(ctxF, w, h, ox, oy, 'ω', 'X(ω)');
                drawArrow(ctxF, ox, oy, oy - 125, '#e11d48', 'π·δ(ω)');
                ctxF.strokeStyle = '#0d9488'; ctxF.lineWidth = 2.5;
                ctxF.beginPath();
                for (let px = 0; px <= w; px++) {
                    let om = (px - ox) / 25;
                    if (Math.abs(om) < 0.35) continue;
                    let py = oy - (1 / Math.abs(om)) * 30;
                    if (px === 0 || Math.abs(om - 0.36) < 0.08) ctxF.moveTo(px, py);
                    else ctxF.lineTo(px, py);
                }
                ctxF.stroke();

                expCard.innerHTML = \`
                    <h4 class="font-bold text-rose-950 text-base">⚠️ (vii) Unit Step <span class="math-font">u(t)</span> — আপনার নোটের পৃষ্ঠা ৭৩ কেন অসম্পূর্ণ?</h4>
                    <p class="text-sm text-slate-700">আপনার নোটে শুধু <span class="math-font">1/(jω)</span> লেখা আছে। কিন্তু <span class="math-font">u(t)</span>-কে লেখা যায় <span class="math-font">u(t) = ½ + ½·sgn(t)</span> হিসেবে (অর্থাৎ এর ভেতর একটি <span class="math-font">½</span> মানের DC ধ্রুবক লুকিয়ে আছে)। ওই ধ্রুবক <span class="math-font">½</span>-এর ট্রান্সফর্ম হলো <span class="math-font">½ × 2πδ(ω) = πδ(ω)</span>, আর <span class="math-font">½·sgn(t)</span> দেয় <span class="math-font">1/(jω)</span>। তাই সম্পূর্ণ সঠিক উত্তর হলো: <span class="math-font font-bold text-rose-700">u(t) ↔ π·δ(ω) + 1/(jω)</span>।</p>
                \`;
            }
        }

        function drawModGraph() {
            const canvas = document.getElementById('canvas-mod');
            const ctx = canvas.getContext('2d');
            const w = canvas.width, h = canvas.height;
            const ox = w / 2, oy = h - 45;
            const scaleX = 20, scaleY = 120;

            const w0 = parseInt(document.getElementById('mod-w0').value);
            document.getElementById('mod-w0-val').innerText = \`ω₀ = \${w0} rad/s\`;
            document.getElementById('mod-badge').innerText = w0 === 0 ? '2·Sa(ω)' : \`Sa(ω-\${w0}) + Sa(ω+\${w0})\`;

            drawAxes(ctx, w, h, ox, oy, 'ω', 'Z(ω)');

            // Original dashed 2*Sa(w)
            ctx.strokeStyle = '#cbd5e1';
            ctx.setLineDash([4, 4]);
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            for (let px = 0; px <= w; px++) {
                let om = (px - ox) / scaleX;
                let val = Math.abs(om) < 1e-4 ? 2 : 2 * Math.sin(om) / om;
                let py = oy - (val / 2) * scaleY;
                if (px === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
            }
            ctx.stroke();
            ctx.setLineDash([]);

            // Modulated spectrum: Sa(w - w0) + Sa(w + w0)
            ctx.strokeStyle = '#0d9488';
            ctx.lineWidth = 3;
            ctx.beginPath();
            for (let px = 0; px <= w; px++) {
                let om = (px - ox) / scaleX;
                let s1 = Math.abs(om - w0) < 1e-4 ? 1 : Math.sin(om - w0) / (om - w0);
                let s2 = Math.abs(om + w0) < 1e-4 ? 1 : Math.sin(om + w0) / (om + w0);
                let total = s1 + s2;
                let py = oy - (total / 2) * scaleY;
                if (px === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
            }
            ctx.stroke();

            ctx.fillStyle = '#0f766e';
            ctx.font = 'bold 11px sans-serif';
            ctx.textAlign = 'center';
            if (w0 > 0) {
                ctx.fillText(\`+ω₀ (+\${w0})\`, ox + w0 * scaleX, oy + 16);
                ctx.fillText(\`-ω₀ (-\${w0})\`, ox - w0 * scaleX, oy + 16);
                ctx.fillText('উচ্চতা = 1', ox + w0 * scaleX, oy - scaleY / 2 - 8);
            } else {
                ctx.fillText('উচ্চতা = 2 (কপি দুটি একসাথে যোগ হয়েছে)', ox, oy - scaleY - 8);
            }
        }

        function setSpringStep(step) {
            currentSpringStep = step;
            document.querySelectorAll('.sp-step-btn').forEach(btn => {
                btn.classList.remove('step-active');
                btn.classList.add('bg-slate-100', 'text-slate-700');
            });
            const active = document.getElementById('sp-btn-' + step);
            active.classList.remove('bg-slate-100', 'text-slate-700');
            active.classList.add('step-active');

            const canvas = document.getElementById('canvas-spring25');
            const ctx = canvas.getContext('2d');
            const w = canvas.width, h = canvas.height;
            const ox = w / 2, oy = h - 45;
            const descBox = document.getElementById('spring25-step-desc');

            drawAxes(ctx, w, h, ox, oy, 'ω', 'Spectrum');

            const drawRectBox = (centerX, boxW, boxH, color, topLabel, botLabel) => {
                ctx.fillStyle = color + '33';
                ctx.fillRect(centerX - boxW / 2, oy - boxH, boxW, boxH);
                ctx.strokeStyle = color;
                ctx.lineWidth = 3;
                ctx.strokeRect(centerX - boxW / 2, oy - boxH, boxW, boxH);
                ctx.fillStyle = color;
                ctx.font = 'bold 11px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(topLabel, centerX, oy - boxH - 8);
                if (botLabel) ctx.fillText(botLabel, centerX, oy + 16);
            };

            if (step === 1) {
                drawRectBox(ox, 70, 120, '#2563eb', '2π / ω_b', '0 (-ω_b/2 .. +ω_b/2)');
                descBox.innerHTML = \`
                    <span class="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-1 rounded">ধাপ ১: ইনপুট সিগন্যালের স্পেকট্রাম X(ω)</span>
                    <p class="text-slate-700">আমাদের ইনপুট সিগন্যাল হলো <span class="math-font">x(t) = Sa(ω<sub>b</sub>t / 2)</span>।</p>
                    <p class="text-slate-700">পৃষ্ঠা ৮৬-এর Duality হিন্ট <span class="math-font">Sa(at) ↔ (π/a)·rect(ω/2a)</span>-এ <span class="math-font">a = ω<sub>b</sub>/2</span> বসালে পাই:</p>
                    <p class="math-font text-base text-blue-700 bg-blue-50 p-2 rounded">X(ω) = (2π / ω<sub>b</sub>) · rect(ω / ω<sub>b</sub>)</p>
                    <p class="text-slate-600 text-xs">অর্থাৎ এটি <span class="math-font">0</span> কেন্দ্রিক একটি চারকোনা বক্স যার চওড়া <span class="math-font">ω<sub>b</sub></span> এবং উচ্চতা <span class="math-font">2π/ω<sub>b</sub></span>।</p>
                \`;
            } else if (step === 2) {
                drawRectBox(ox - 105, 60, 85, '#0d9488', 'π / ω_b', '-ω₀');
                drawRectBox(ox + 105, 60, 85, '#0d9488', 'π / ω_b', '+ω₀');
                descBox.innerHTML = \`
                    <span class="bg-teal-100 text-teal-800 text-xs font-bold px-2.5 py-1 rounded">ধাপ ২ ও ৩: প্রথম মডুলেশন এবং Bandpass Filter H₁</span>
                    <p class="text-slate-700">প্রথমে <span class="math-font">cos(ω₀t)</span> দিয়ে গুণ করার ফলে মূল বক্সটি অর্ধেক উচ্চতা (<span class="math-font">π/ω<sub>b</sub></span>) হয়ে <span class="math-font">−ω₀</span> এবং <span class="math-font">+ω₀</span> বিন্দুতে দুটি কপি হয়ে চলে গেল।</p>
                    <p class="text-slate-700">এরপর Bandpass ফিল্টার <span class="math-font">H₁(ω)</span>-এর পাসব্যান্ডও ঠিক ওই জায়গাতেই (<span class="math-font">±ω₀</span>) এবং উচ্চতা <span class="math-font">1</span> হওয়ায় বক্স দুটি কোনো পরিবর্তন ছাড়াই পাস হয়ে গেল:</p>
                    <p class="math-font text-xs text-teal-800 bg-teal-50 p-2 rounded">Z(ω) = (π/ω<sub>b</sub>) [ rect((ω−ω₀)/ω<sub>b</sub>) + rect((ω+ω₀)/ω<sub>b</sub>) ]</p>
                \`;
            } else if (step === 3) {
                drawRectBox(ox, 55, 85, '#7e22ce', 'π / ω_b', '0 (Baseband)');
                drawRectBox(ox - 175, 50, 45, '#94a3b8', 'π / 2ω_b', '-2ω₀');
                drawRectBox(ox + 175, 50, 45, '#94a3b8', 'π / 2ω_b', '+2ω₀');
                descBox.innerHTML = \`
                    <span class="bg-purple-100 text-purple-800 text-xs font-bold px-2.5 py-1 rounded">ধাপ ৪: রিসিভারে দ্বিতীয়বার cos(ω₀t) দিয়ে গুণ (Demodulation)</span>
                    <p class="text-slate-700">এবার <span class="math-font">Z(ω)</span>-এর দুটি বক্স আবার অর্ধেক (<span class="math-font">π/2ω<sub>b</sub></span>) হয়ে ডানে ও বামে <span class="math-font">ω₀</span> ঘর সরবে!</p>
                    <ul class="list-disc list-inside text-slate-700 text-xs space-y-1">
                        <li>ডানের বক্স বামে সরে এবং বামের বক্স ডানে সরে ঠিক মাঝখানে (<span class="math-font">ω = 0</span>) এসে একে অপরের ওপর বসে যোগ হয়ে উচ্চতা আবার <span class="math-font font-bold">π/ω<sub>b</sub></span> হয়ে যায়!</li>
                        <li>আর বাকি দুটি অর্ধেক টুকরো চলে যায় অনেক দূরে <span class="math-font">−2ω₀</span> এবং <span class="math-font">+2ω₀</span> বিন্দুতে। (<span class="math-font">ω₀ ≫ ω<sub>b</sub></span> হওয়ায় এরা ওভারল্যাপ করে না)।</li>
                    </ul>
                \`;
            } else if (step === 4) {
                drawRectBox(ox, 65, 130, '#059669', '2π² / ω_b²', '0 (Final Y(ω))');
                descBox.innerHTML = \`
                    <span class="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded">ধাপ ৫: Low-Pass Filter H₂ এবং চূড়ান্ত আউটপুট y(t)</span>
                    <p class="text-slate-700">ফিল্টার <span class="math-font">H₂(ω) = (2π/ω<sub>b</sub>)·rect(ω/ω<sub>b</sub>)</span> শুধু মাঝখানের (<span class="math-font">ω = 0</span>) বক্সটিকে রাখে এবং দূরের <span class="math-font">±2ω₀</span> বক্স দুটিকে কেটে বাদ দিয়ে দেয়!</p>
                    <p class="math-font text-xs text-emerald-900 bg-emerald-50 p-2 rounded">Y(ω) = (π/ω<sub>b</sub>) × (2π/ω<sub>b</sub>)·rect(ω/ω<sub>b</sub>) = (2π²/ω<sub>b</sub>²)·rect(ω/ω<sub>b</sub>)</p>
                    <p class="text-slate-700 text-xs"><strong>Inverse Transform (আপনার নোটের শেষ লাইন):</strong> আবার Duality খাটালে আমরা আমাদের মূল মেসেজ সিগন্যাল ফেরত পাই: <span class="math-font font-bold text-emerald-700">y(t) = (π/ω<sub>b</sub>)·Sa(ω<sub>b</sub>t/2) = (π/ω<sub>b</sub>)·x(t)</span>!</p>
                \`;
            }
        }

        function drawCos100Graph() {
            const canvas = document.getElementById('canvas-cos100');
            const ctx = canvas.getContext('2d');
            const w = canvas.width, h = canvas.height;
            const ox = w / 2, oy = h / 2 + 15;
            const mode = document.getElementById('cos100-view').value;

            drawAxes(ctx, w, h, ox, oy, 't', 'y(t)');

            if (mode === 'correct') {
                const sx = 55, sy = 85;
                // Envelope +/- Sa(2t)
                ctx.strokeStyle = '#94a3b8';
                ctx.setLineDash([4, 4]);
                ctx.lineWidth = 1.5;
                for (let sign of [1, -1]) {
                    ctx.beginPath();
                    for (let px = 0; px <= w; px++) {
                        let t = (px - ox) / sx;
                        let env = Math.abs(2 * t) < 1e-4 ? 1 : Math.sin(2 * t) / (2 * t);
                        let py = oy - sign * env * sy;
                        if (px === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                    }
                    ctx.stroke();
                }
                ctx.setLineDash([]);

                // Fast cosine carrier inside envelope
                ctx.strokeStyle = '#059669';
                ctx.lineWidth = 2;
                ctx.beginPath();
                for (let px = 0; px <= w; px++) {
                    let t = (px - ox) / sx;
                    let env = Math.abs(2 * t) < 1e-4 ? 1 : Math.sin(2 * t) / (2 * t);
                    let val = env * Math.cos(18 * t); // scaled visually for clear oscillation
                    let py = oy - val * sy;
                    if (px === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                }
                ctx.stroke();

                ctx.fillStyle = '#065f46';
                ctx.font = 'bold 11px sans-serif';
                ctx.fillText('Peak y(0) = 1 (Sa(2t) খোলসের ভেতর দ্রুত কম্পন)', ox - 110, oy - sy - 10);
            } else {
                const sx = 1.6, sy = 75;
                ctx.strokeStyle = '#e11d48';
                ctx.lineWidth = 2.5;
                ctx.beginPath();
                for (let px = 0; px <= w; px++) {
                    let t = (px - ox) / sx;
                    let a1 = 2 * (t - 100);
                    let a2 = 2 * (t + 100);
                    let s1 = Math.abs(a1) < 1e-4 ? 2 : 2 * Math.sin(a1) / a1;
                    let s2 = Math.abs(a2) < 1e-4 ? 2 : 2 * Math.sin(a2) / a2;
                    let py = oy - (s1 + s2) * (sy / 2);
                    if (px === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
                }
                ctx.stroke();

                ctx.fillStyle = '#be123c';
                ctx.font = 'bold 11px sans-serif';
                ctx.fillText('❌ t = -100 এবং t = +100 এ দুটি আলাদা পালস (t=0 তে মান প্রায় 0!)', ox - 140, oy - sy - 10);
            }
        }

        window.onload = function () {
            drawTInfGraph();
            updatePairView();
        };`;
