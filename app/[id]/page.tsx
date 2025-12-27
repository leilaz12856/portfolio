import Link from "next/link";
import ProjectCard from "../components/project-card";

type Props = {
  params: Promise<{ id: string }> | { id: string };
};

export default async function ProjectPage({ params }: Props) {
  // `params` can be a Promise in some Next versions — await to be safe.
  const resolved = await params;

  return (
    <main className="grid mx-auto content-start gap-4 max-w-6xl py-12 px-4">
      <Link href="/" className="btn ghost text-muted size-fit">
        ← Go back to homepage
      </Link>
      <ProjectCard id={resolved.id} />
    </main>
  );
}
