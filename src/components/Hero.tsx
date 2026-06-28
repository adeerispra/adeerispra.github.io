export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-14 bg-[#ffffff]"
    >
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1e3a5f] leading-tight mb-6">
          Ade Sembiring
        </h1>
        <p className="text-xl sm:text-2xl text-[#1a1a1a] font-normal mb-4 max-w-2xl">
          I make sure your product works — before your users find out it doesn&apos;t.
        </p>
        <p className="text-[#666666] text-base mb-10 max-w-2xl whitespace-pre-line">
          QA Automation Engineer for Web, API, Mobile, and Performance Testing.
          {"\n\n"}
          I build automated tests, regression suites, and testing workflows using
          Playwright, Selenium, Appium, Postman, RestAssured, k6, Locust, and
          CI/CD tools.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-[#1e3a5f] text-white font-medium rounded hover:bg-[#162d4a] transition-colors"
        >
          Hire Me for QA Automation
        </a>
      </div>
    </section>
  );
}
