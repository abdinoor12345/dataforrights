 export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-6 py-4">

        <div className="font-bold text-xl">
          CivicSignal
        </div>

        <div className="hidden md:flex gap-6 text-gray-600 text-sm">
          <a href="#home" className="hover:text-black">Home</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#projects" className="hover:text-black">Projects</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </div>

        <a
          href="#contact"
          className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800"
        >
          Contact
        </a>

      </div>
    </nav>
  )
}