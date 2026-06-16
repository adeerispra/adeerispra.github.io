const services = [
  {
    title: "Manual Testing",
    description:
      "Plan, execute, and document thorough manual tests across your product — covering functional, regression, and UAT scenarios, with clear bug reports and QA documentation delivered.",
    deliverables: [
      "Test plan & test cases",
      "Bug reports",
      "Regression testing",
      "UAT support",
      "QA report documentation",
    ],
  },
  {
    title: "Web Automation Testing",
    description:
      "Build a maintainable web automation framework using Playwright — covering UI and regression test suites, integrated with your CI/CD pipeline, with test reports delivered on completion.",
    deliverables: [
      "Playwright test suite",
      "CI/CD integration (optional)",
      "Test execution report",
      "Framework documentation",
    ],
  },
  {
    title: "Mobile Automation Testing",
    description:
      "Build a mobile automation framework using Appium — covering Android and iOS, with UI and regression test suites, integrated with your CI/CD pipeline, with test reports delivered on completion.",
    deliverables: [
      "Appium test suite (Android & iOS)",
      "CI/CD integration (optional)",
      "Test execution report",
      "Framework documentation",
    ],
  },
  {
    title: "API Testing",
    description:
      "Design and execute API test suites covering functional, regression, and edge-case scenarios — using Postman, RestAssured, or Playwright depending on your stack, with full test reports and documentation delivered.",
    deliverables: [
      "API test suite",
      "Test execution report",
      "Documentation",
    ],
  },
  {
    title: "Performance Testing",
    description:
      "Identify system bottlenecks through load and stress testing — using Locust or k6 depending on your stack, with detailed performance reports and recommendations delivered.",
    deliverables: [
      "Load & stress test scenarios",
      "Performance test report",
      "Bottleneck analysis & recommendations",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-[#e8e4dc] bg-[#ffffff]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Services</h2>
        <p className="text-[#666666] mb-12">What I can do for you.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-[#ffffff] border border-[#e8e4dc] rounded-lg p-6 flex flex-col"
            >
              <h3 className="text-base font-semibold text-[#1e3a5f] mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-[#666666] text-sm leading-relaxed mb-5 flex-1">
                {s.description}
              </p>
              <ul className="space-y-1.5">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm text-[#1a1a1a]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4862A] shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
