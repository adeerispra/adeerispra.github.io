function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 6.5L10 11L17.5 6.5M3 4.5H17C17.8284 4.5 18.5 5.17157 18.5 6V14C18.5 14.8284 17.8284 15.5 17 15.5H3C2.17157 15.5 1.5 14.8284 1.5 14V6C1.5 5.17157 2.17157 4.5 3 4.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 11.5353 1.91375 12.9745 2.63875 14.2115L1.5 18.5L5.93 17.3988C7.12875 18.059 8.52125 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5 7.5C7.5 7.5 7.25 9.25 9 11C10.75 12.75 12.5 12.5 12.5 12.5L13 11.5L11.5 10.75L11 11.25C11 11.25 9.75 10.5 9 9.75C8.25 9 8.75 7.75 8.75 7.75L7.5 7.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function UpworkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.8 10.2C13.8 10.2 12.9 9.8 12.2 9.1L11.7 8.6C11.4 8.2 10.9 8 10.4 8C9.4 8 8.6 8.8 8.6 9.8V14.5H6.5V9.8C6.5 7.6 8.3 5.8 10.5 5.8C11.6 5.8 12.6 6.3 13.3 7L13.8 7.5C14.1 7.8 14.4 8 14.8 8C15.7 8 16.5 7.2 16.5 6.3V5.8H18.6V6.3C18.6 8.4 16.9 10.2 14.8 10.2Z" fill="currentColor"/>
      <path d="M7.9 5.8L5.5 12.2L3.1 5.8H1L4.4 14.5H6.6L10 5.8H7.9Z" fill="currentColor"/>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 13.7 3.79375 16.8625 7.02125 17.9856C7.42125 18.0594 7.57 17.8156 7.57 17.6031C7.57 17.4113 7.5625 16.8344 7.5625 16.2188C5.5 16.5869 4.9675 15.7044 4.8075 15.2431C4.71813 15.0088 4.315 14.28 3.96875 14.0881C3.68375 13.9356 3.28375 13.5675 3.96 13.5594C4.595 13.5519 5.04813 14.1369 5.20063 14.38C5.935 15.5906 7.14438 15.2538 7.60063 15.0419C7.67438 14.5106 7.89313 14.1494 8.135 13.9413C6.29125 13.7331 4.365 13.03 4.365 9.92563C4.365 9.02375 4.68875 8.27938 5.22125 7.70125C5.13938 7.49313 4.84688 6.64438 5.30313 5.50625C5.30313 5.50625 5.98688 5.29063 7.57 6.35938C8.23 6.17125 8.93 6.07688 9.63 6.07688C10.33 6.07688 11.03 6.17125 11.69 6.35938C13.2731 5.28313 13.9569 5.50625 13.9569 5.50625C14.4131 6.64438 14.1206 7.49313 14.0388 7.70125C14.5713 8.27938 14.895 9.01625 14.895 9.92563C14.895 13.0381 12.9606 13.7331 11.1169 13.9413C11.42 14.2006 11.6806 14.6981 11.6806 15.47C11.6806 16.58 11.6731 17.4775 11.6731 17.6031C11.6731 17.8156 11.8219 18.0675 12.2219 17.9856C15.4325 16.8625 17.5 13.6919 17.5 10C17.5 5.30558 13.6944 1.5 10 1.5Z" fill="currentColor"/>
    </svg>
  );
}

const contacts = [
  {
    label: "Email",
    value: "Send an Email",
    href: "mailto:adesembiring61@gmail.com",
    icon: <EmailIcon />,
  },
  {
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/6281397624806",
    icon: <WhatsAppIcon />,
  },
  {
    label: "Upwork",
    value: "View my profile",
    href: "https://www.upwork.com/freelancers/~0112701c8ab1ae324a",
    icon: <UpworkIcon />,
  },
  {
    label: "GitHub",
    value: "adeerispra",
    href: "https://github.com/adeerispra",
    icon: <GitHubIcon />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-[#e8e4dc]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Get in Touch</h2>
        <p className="text-[#666666] mb-12 max-w-lg">
          Have a project in mind or want to explore a retainer? Reach out through any of these channels and I'll get back to you within 24 hours.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 p-5 border border-[#e8e4dc] rounded-lg bg-[#ffffff] hover:border-[#1e3a5f] transition-colors"
            >
              <span className="text-[#1e3a5f] group-hover:text-[#D4862A] transition-colors">
                {c.icon}
              </span>
              <div>
                <p className="text-xs text-[#666666] mb-0.5">{c.label}</p>
                <p className="text-sm font-medium text-[#1a1a1a] group-hover:text-[#1e3a5f] transition-colors break-all">
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
