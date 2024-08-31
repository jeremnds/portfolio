/* eslint-disable react/no-unescaped-entities */
import ProjectItem from "./ProjectItem";

export default function ProjectList() {
  return (
    <>
      <ProjectItem
        title="FormGen"
        description="Générateur IA de formulaires personnalisés pour développeurs"
        href="https://formgen-two.vercel.app/"
        githubHref="https://github.com/jeremnds/formgen"
        technologies={[
          "Next.js",
          "Zod",
          "React Hook Form",
          "TypeScript",
          "Prisma",
          "Tailwind",
        ]}
      />
      <ProjectItem
        title="Greenbay"
        description="Plateforme e-commerce avec un tableau de bord administrateur"
        href="https://greenbay-mu.vercel.app/"
        githubHref="https://github.com/jeremnds/greenbay"
        technologies={[
          "Next.js",
          "TypeScript",
          "Zustand",
          "Stripe",
          "Tailwind",
        ]}
      />
      <ProjectItem
        title="Pomodoro"
        description="Minuteur Pomodoro pour améliorer votre productivité quotidienne"
        href="https://pomodoro-react-beige.vercel.app/"
        githubHref="https://github.com/jeremnds/pomodoro-react"
        technologies={["React", "TypeScript", "Tailwind", "Shadcn"]}
      />
      <ProjectItem
        title="Portfolio"
        description="Découvrez le code source de mon portfolio"
        href="https://github.com/jeremnds/portfolio"
        technologies={["Next.js", "TypeScript", "Tailwind"]}
      />
    </>
  );
}
