import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ade Sembiring — QA Engineer",
  description:
    "Freelance QA Engineer specializing in manual testing, automation frameworks, and AI-assisted workflows. Available for retainer and project-based engagements.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='4' fill='%231e3a5f'/><text x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='system-ui,sans-serif' font-weight='700' font-size='13' fill='white'>AS</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
