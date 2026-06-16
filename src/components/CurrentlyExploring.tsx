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

export default function CurrentlyExploring() {
  return (
    <section id="currently-exploring" className="py-24 border-t border-[#e8e4dc] bg-[#ffffff]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Currently Exploring</h2>
        <div className="max-w-2xl">
          <p className="text-[#1a1a1a] leading-relaxed mb-8">
            I'm actively building and expanding AI-assisted QA workflows — exploring how AI agents can take over repetitive parts of the testing cycle, from test case generation to execution and reporting. This is an ongoing area of interest that continues to evolve.
          </p>
          <a
            href="https://www.linkedin.com/in/adeerispra"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#1e3a5f] hover:text-[#D4862A] transition-colors"
          >
            Follow along on LinkedIn
            <span className="group-hover:text-[#D4862A] transition-colors">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
