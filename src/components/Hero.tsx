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
      <div className="flex items-center gap-1.5 text-sm ">
        <a
          href="https://github.com/jeremnds?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-200"
        >
          github
        </a>
        ·
        <a
          href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-mendes-9984a1129/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-200"
        >
          linkedin
        </a>
        ·
        <a
          href="mailto:jmendescontact@gmail.com"
          className="hover:text-emerald-200"
        >
          jmendescontact@gmail.com
        </a>
      </div>
    </section>
  );
}
