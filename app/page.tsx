import ProjectCardSmall from "./components/project-card-small";
import { projects } from "./data/projects";
import Hero from "./components/hero";
import Link from "next/link";

export default function Home() {
  const contactList = [
    {
      method: "LinkedIn",
      url: "https://www.linkedin.com/in/leila-zaifie-a91bb6295/",
    },
  ];
  return (
    <main className="grid mx-auto w-full gap-8 max-w-6xl py-12 px-4">
      <Hero />

      <section id="projects" className="grid gap-6">
        {projects.map((p) => (
          <ProjectCardSmall key={p.id} {...p} />
        ))}
      </section>

      <section id="contact" className="grid mx-auto gap-4">
        <h2 className="text-2xl ">Contact Information</h2>
        <p className="text-muted ">Feel free to check out my Linkedin!</p>

        {contactList.map((contact) => (
          <Link
            key={contact.method}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary w-fit"
          >
            {contact.method}
          </Link>
        ))}
      </section>
    </main>
  );
}
