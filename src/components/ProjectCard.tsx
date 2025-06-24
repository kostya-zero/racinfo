import Badge from "@/components/Badge";
import Link from "next/link";

type ProjectProps = {
  name: string;
  authorId: string;
  projectGit: string;
  description: string;
  externalLink?: string;
  externalDownload?: boolean;
  tags: string[];
};

function ProjectCard({
  name,
  externalDownload,
  projectGit,
  externalLink,
  description,
  authorId,
  tags,
}: ProjectProps) {
  return (
    <Link
      target={"_blank"}
      href={
        externalDownload && externalDownload ? externalLink || "" : projectGit
      }
      className={
        "w-full flex flex-col gap-1  bg-stone-900 border select-none cursor-pointer border-stone-800 transition-all duration-200 hover:border-neutral-600 hover:bg-stone-800 rounded-lg p-4 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)]"
      }
    >
      <div className={"flex flex-row justify-between items-center"}>
        <h4 className={"text-2xl text-stone-300 font-rokkitt font-semibold"}>
          {name}
        </h4>
        <p className={"text-stone-500"}>
          {externalDownload ? `external@${authorId}` : `@${authorId}`}
        </p>
      </div>

      <p className={"text-stone-400 mb-1"}>{description}</p>

      <div className={"flex flex-row mt-auto gap-1 items-center"}>
        {tags.map((tag) => (
          <Badge text={tag} key={tag} />
        ))}
      </div>
    </Link>
  );
}

export { ProjectCard, type ProjectProps };
