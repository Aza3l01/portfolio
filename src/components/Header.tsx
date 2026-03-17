import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-zinc-900">
      <div className="max-w-[1200px] mx-auto px-8 pt-8">
        <div className="relative h-[65vh] rounded-3xl overflow-hidden">
          <Image
            src="/bgcat.jpg"
            alt="hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />

          {/* Name centered */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Jeff Emerson Mathew
            </h1>
          </div>

          {/* Links centered at bottom */}
          <nav className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-8">
            <a
              href="mailto:jeff.emerson.mathew@gmail.com"
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="https://github.com/aza3l0309"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/PLACEHOLDER"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;