const services = [
  {
    title: "Manual Testing",
    description:
      "I can plan, execute, and document manual functional, regression, and UAT testing with clear bug reports and test documentation.",
    deliverables: [
      "Test cases and test execution",
      "Functional and regression testing",
      "UAT support",
      "Clear bug reports",
      "Test execution summary",
    ],
  },
  {
    title: "Web Automation Testing",
    description:
      "I create automated UI tests for web applications using Playwright or Selenium — covering login, forms, dashboards, checkout flows, and regression scenarios.",
    deliverables: [
      "Playwright or Selenium test scripts",
      "Page Object Model structure",
      "Regression test suite",
      "Test execution report",
      "Optional CI/CD integration",
    ],
  },
  {
    title: "Mobile Automation Testing",
    description:
      "I create mobile UI automation tests for Android and iOS applications using Appium, covering core user flows and regression scenarios.",
    deliverables: [
      "Appium test scripts",
      "Android and iOS support",
      "Basic framework structure",
      "Test execution report",
      "Setup documentation",
    ],
  },
  {
    title: "API Automation Testing",
    description:
      "I create API automation tests for REST APIs using Postman/Newman, RestAssured, or Playwright API — including authentication, positive cases, negative cases, and response validation.",
    deliverables: [
      "API test scripts",
      "Authentication/token handling",
      "Positive and negative scenarios",
      "Response validation",
      "Test report and documentation",
    ],
  },
  {
    title: "Performance Testing",
    description:
      "I create basic load and performance testing scripts using k6 or Locust to help teams understand how their application behaves under traffic.",
    deliverables: [
      "Load test scripts",
      "Traffic simulation scenarios",
      "Basic performance summary",
      "Response time observations",
      "k6 or Locust setup",
    ],
  },
  {
    title: "CI/CD Test Integration",
    description:
      "I help integrate automated tests into GitHub Actions, Jenkins, or existing CI/CD pipelines so tests can run automatically before release.",
    deliverables: [
      "GitHub Actions or Jenkins setup",
      "Automated test execution",
      "Test report artifacts",
      "Basic pipeline documentation",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-[#e8e4dc] bg-[#ffffff]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">
          Test automation services I can help with
        </h2>
        <p className="text-[#666666] mb-12">
          Practical QA support for teams that need better coverage, faster
          regression checks, and clearer release confidence.
        </p>
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
