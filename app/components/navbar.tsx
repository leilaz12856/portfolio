import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky text-muted top-0 z-20  px-6 py-4 backdrop-blur-md color-bg nav-gradient">
      <div className="flex items-center gap-4 justify-between max-w-7xl mx-auto">
        <h1 className="text-md font-semibold tracking-wider uppercase ml-5">
          <Link
            className="text-md ease-in-out hover:underline hover:text-white"
            href="/">
            LZ
          </Link>
        </h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link
                className="transition-colors ease-in-out hover:underline hover:text-white"
                href="/">
                My projects
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors ease-in-out hover:underline hover:text-white"
                href="/#contact">
                Contact me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
