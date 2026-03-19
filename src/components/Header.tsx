import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-zinc-900">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 pt-4 md:pt-8">
        <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[5/2] rounded-3xl overflow-hidden">
          <Image
            src="/bgcat-hires.jpg"
            alt="hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />

          {/* Name top-center */}
          <div className="relative z-10 flex flex-col items-center pt-[20%] md:pt-[15%]">
            <h1 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
              azael
            </h1>
            <p className="text-xs md:text-sm text-white/50 mt-2 tracking-wide">
              Jeff Emerson Mathew
            </p>
          </div>

          {/* Links centered at bottom */}
          <nav className="absolute bottom-4 md:bottom-6 left-0 right-0 z-20 flex justify-center gap-6 md:gap-8">
            <a
              href="mailto:jeffem0309@gmail.com"
              className="text-xs md:text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              Email
            </a>
            <a
              href="https://github.com/Aza3l01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jeffmathew03/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://discordapp.com/users/364400063281102852"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              Discord
            </a>
            <a
              href="https://ko-fi.com/azaelbots"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm text-white/60 hover:text-white transition-colors duration-200"
            >
              Ko-fi
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;