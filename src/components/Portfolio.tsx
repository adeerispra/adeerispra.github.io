const projects = [
  {
    title: "AI-Assisted Test Case Generator Experiment",
    description:
      "Built an experiment for generating draft test cases from Jira tickets to speed up repetitive QA preparation work. The generated test cases are intended as a starting point and still require human review before execution.",
    tags: [
      "AI-Assisted QA",
      "Test Case Generation",
      "Jira Workflow",
      "QA Productivity",
    ],
    link: "https://www.linkedin.com/posts/adeerispra_qualityassurance-ai-mcp-activity-7461802541463474176-dSdd",
    cta: "View LinkedIn Demo",
  },
  {
    title: "End-to-End QA Automation Agent Experiment",
    description:
      "Built an experiment around automating parts of the QA workflow: reading Jira tickets, generating draft test cases, executing browser flows, and preparing test results with supporting evidence.",
    tags: ["QA Automation", "AI Agent", "E2E Testing", "Browser Automation"],
    link: "https://www.linkedin.com/posts/adeerispra_qa-softwaretesting-automation-activity-7458043097529327616-ZCwh",
    cta: "View LinkedIn Demo",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M1 13L13 1M13 1H5M13 1V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 border-t border-[#e8e4dc] bg-[#ffffff]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Portfolio</h2>
        <p className="text-[#666666] mb-12 max-w-3xl">
          A collection of QA automation projects, workflow experiments, and
          technical demos around web testing, API testing, test case generation,
          and QA productivity.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#ffffff] border border-[#e8e4dc] rounded-lg p-6 flex flex-col hover:border-[#1e3a5f] transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg font-semibold text-[#1e3a5f] leading-snug group-hover:text-[#D4862A] transition-colors">
                  {p.title}
                </h3>
                <span className="text-[#666666] group-hover:text-[#D4862A] transition-colors mt-1">
                  <ArrowIcon />
                </span>
              </div>
              <p className="text-[#666666] text-sm leading-relaxed mb-5 flex-1">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-[#F8F6F1] text-[#1e3a5f] text-xs font-medium rounded border border-[#e8e4dc]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#1e3a5f] group-hover:text-[#D4862A] transition-colors">
                {p.cta}
                <ArrowIcon />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
