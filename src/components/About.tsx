const stats = [
  { value: "5+", label: "Years in QA" },
  { value: "4", label: "Testing Areas" },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[#e8e4dc]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">About</h2>
            <p className="text-[#1a1a1a] leading-relaxed mb-4">
              I&apos;m a QA Automation Engineer with 5+ years of experience in manual testing, web automation, mobile automation, API testing, and performance testing for e-commerce and SaaS products.
            </p>
            <p className="text-[#1a1a1a] leading-relaxed mb-4">
              I build maintainable automated tests, regression suites, and CI/CD testing workflows to help teams catch issues earlier and release with more confidence.
            </p>
            <p className="text-[#1a1a1a] leading-relaxed">
              My work covers web, mobile, API, regression, performance, and release validation testing across fast-moving product teams.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="text-center p-4 border border-[#1e3a5f] rounded-lg">
                  <div className="text-3xl font-bold text-[#1e3a5f] mb-1">{s.value}</div>
                  <div className="text-xs text-[#666666]">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="border border-[#e8e4dc] rounded-lg p-6 bg-[#ffffff]">
              <p className="text-sm font-medium text-[#666666] uppercase tracking-widest mb-3">
                Core focus
              </p>
              <ul className="space-y-2 text-sm text-[#1a1a1a]">
                <li>Web, API, mobile, and performance testing</li>
                <li>Regression suite design and automation maintenance</li>
                <li>CI/CD integration and release confidence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
