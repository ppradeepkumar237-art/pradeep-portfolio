export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-white/10 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <h1 className="text-white text-2xl font-bold">
          Pradeep.
        </h1>

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li><a href="#about" className="hover:text-white">About</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#experience" className="hover:text-white">Experience</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}