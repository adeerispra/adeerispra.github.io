const toolGroups = [
  {
    title: "Web Automation",
    items: ["Playwright", "Selenium"],
  },
  {
    title: "API Testing",
    items: ["Postman", , "Rest Assured", "Playwright API"],
  },
  {
    title: "Mobile Automation",
    items: ["Appium"],
  },
  {
    title: "Performance Testing",
    items: ["k6", "Locust"],
  },
  {
    title: "CI/CD & Dev Tools",
    items: ["GitHub Actions", "Jenkins", "Docker", "Git"],
  },
  {
    title: "Programming",
    items: ["TypeScript", "JavaScript", "Python", "Golang"],
  },
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 border-t border-[#e8e4dc]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Tools & Skills</h2>
        <p className="text-[#666666] mb-12">
          Tools I use to build, run, and integrate automated tests across web, API, mobile, and performance testing.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolGroups.map((group) => (
            <div
              key={group.title}
              className="bg-[#ffffff] border border-[#e8e4dc] rounded-lg p-6"
            >
              <h3 className="text-base font-semibold text-[#1e3a5f] mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 bg-[#F8F6F1] text-[#1e3a5f] text-xs font-medium rounded border border-[#e8e4dc]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
