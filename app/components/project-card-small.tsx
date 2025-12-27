import Link from "next/link";

type ProjectProps = {
  id?: string;
  link: string;
  title: string;
  description: string;
  tags: string[];
};

export default function ProjectCardSmall({
  id,
  link,
  title,
  description,
  tags,
}: ProjectProps) {
  const cardClass = id ? `card card-${id}` : "card";

  return (
    <article className={cardClass}>
      <Link href={link} className="color-inherit flex">
        <div className="card-accent"></div>
        <div className="grid gap-2 p-4">
          <h1>{title}</h1>
          <p className="text-muted">{description}</p>
          <div className="flex gap-2 flex-wrap">
            {tags
              ? tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))
              : ""}
          </div>
        </div>
      </Link>
    </article>
  );
}
