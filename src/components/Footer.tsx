export default function Footer() {
  return (
    <footer className="border-t border-[#e8e4dc] py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-[#666666]">
          © {new Date().getFullYear()} Ade Sembiring. All rights reserved.
        </p>
        <p className="text-sm text-[#666666]">
          Tangerang, Indonesia
        </p>
      </div>
    </footer>
  );
}
