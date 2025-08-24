import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-zinc-800 text-white min-h-screen flex flex-col">
      <div className="relative flex-1 flex items-center justify-center">
        <Image 
          src="/bgcat.jpg" 
          alt="cat" 
          fill
          className="object-cover opacity-50"
          priority
        />
        
        <div className="relative z-10 text-center p-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Azael</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10">
            Under Construction, please wait :(
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;