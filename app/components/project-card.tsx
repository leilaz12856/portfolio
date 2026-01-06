import { Project, projects } from "../data/projects";
import Image from "next/image";

type Props = {
  id?: string;
};

export default function ProjectCard({ id }: Props) {
  const project: Project | undefined = projects.find((p) => p.id === id);

  if (!project) {
    return <p>{id} not found</p>;
  }

  return (
    <article className="grid gap-4 ">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="grid gap-4 md:mt-10">
          <h1 className="font-bold text-2xl">{project.title}</h1>
          {project.intro && (
            <p className="text-muted max-w-">{project.intro}</p>
          )}

          {project.meta && (
            <div className="flex text-sm gap-2 flex-wrap">
              {project.meta.role && (
                <span className="">Roll: {project.meta.role}</span>
              )}
              {project.meta.year && (
                <span className="">År: {project.meta.year}</span>
              )}
              {project.meta.tools && (
                <span className="">
                  Verktyg: {project.meta.tools.join(", ")}
                </span>
              )}
            </div>
          )}
        </div>
        <div className="max-w-30  max-h-30 flex-shrink-0">
          {project.logo && (
            <Image
              width={project.logow || 500}
              height={project.logoh || 500}
              className="mb-auto rounded"
              src={project.logo.replace("@/public/", "/")}
              alt={`${project.title} logo`}
            />
          )}
        </div>
      </div>

      <div className="grid gap-8">
        {project.contentSections?.map((sec, i) => (
          <section key={i}>
            <h2 className="text-lg font-semibold">{sec.heading}</h2>
            <p className="text-muted">{sec.body}</p>
            {project.images && project.images[i] && (
              <Image
                width={400}
                height={300}
                className="object-cover rounded mt-4"
                src={project.images[i].replace("@/public/", "/")}
                alt={`${project.title} ${i}`}
              />
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
