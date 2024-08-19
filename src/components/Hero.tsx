import Links from "./Links";

/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <section className="mt-10 mb-20 ">
      <h1 className="text-3xl font-extrabold mb-10">
        <span className="block sm:inline">Hello, moi c'est</span>
        <span className="block sm:inline"> Jérémy 👋</span>
      </h1>
      <div className="text-zinc-400 max-w-lg mb-4">
        <p>
          Je suis un{" "}
          <span className="text-emerald-500">développeur front-end</span>{" "}
          passionné par la création d'interfaces web modernes et performantes.
          J'utilise des technologies telles que{" "}
          <span className="text-emerald-200">React</span>,{" "}
          <span className="text-emerald-200">Next.js</span> et{" "}
          <span className="text-emerald-200">TypeScript </span>
          pour concevoir des applications dynamiques et intuitives. En dehors du
          code, la musique est aussi une de mes grandes passions.
        </p>
        <p>
          {" "}
          N'hésitez pas à explorer mon travail et à me contacter pour discuter
          de nouveaux projets.
        </p>
      </div>
      <Links />
    </section>
  );
}
