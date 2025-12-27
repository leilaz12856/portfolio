import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid gap-4 text-center justify-center items-center">
      <div>
        <p className="uppercase tracking-widest text-sm text-muted mb-3">
          UX / UI Designer · Developer
        </p>
        <h2 className="text-[clamp(2rem,3vw+1.4rem,3rem)] mb-4 ">
          LEILA ZAIFIE
        </h2>
        <p className="text-center">Welcome!</p>

        <div className="hero-actions">
          <Link href="/" className="btn primary">
            My projects
          </Link>
          <Link href="/#contact" className="btn ghost">
            Contact me
          </Link>
        </div>
      </div>
    </section>
  );
}
