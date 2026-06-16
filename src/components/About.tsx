const stats = [
  { value: "5+", label: "Years in QA" },
  { value: "3", label: "Notable Companies" },
];

const companies = ["Tokopedia", "ByteDance", "Liven"];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[#e8e4dc]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">About</h2>
            <p className="text-[#1a1a1a] leading-relaxed mb-4">
              I'm a QA Engineer with 5+ years of experience at Tokopedia, ByteDance, and Liven — working across manual testing, automation, and API/performance testing for high-traffic products.
            </p>
            <p className="text-[#1a1a1a] leading-relaxed mb-4">
              I've built automation frameworks from scratch, designed end-to-end test strategies, and worked closely with cross-functional teams across Indonesia and globally. My background in backend engineering helps me understand systems at a deeper level — which makes me a more effective tester.
            </p>
            <p className="text-[#1a1a1a] leading-relaxed">
              These days I'm also actively exploring AI-assisted QA workflows, building agents that automate repetitive parts of the testing cycle so teams can focus on what matters.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center p-4 border border-[#1e3a5f] rounded-lg">
                  <div className="text-3xl font-bold text-[#1e3a5f] mb-1">{s.value}</div>
                  <div className="text-xs text-[#666666]">{s.label}</div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-sm font-medium text-[#666666] uppercase tracking-widest mb-4">
                Previously at
              </p>
              <div className="flex flex-wrap gap-3">
                {companies.map((c) => (
                  <span
                    key={c}
                    className="px-4 py-2 border border-[#1e3a5f] text-[#1e3a5f] text-sm font-medium rounded"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
