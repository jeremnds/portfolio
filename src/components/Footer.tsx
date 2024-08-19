export default function Footer() {
  return (
    <footer className=" w-full flex items-center gap-1.5 text-sm h-20 ">
      <a
        href="https://github.com/jeremnds?tab=repositories"
        target="_blank"
        className="hover:text-emerald-200"
        rel="noopener noreferrer"
      >
        github
      </a>
      ·
      <a
        href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-mendes-9984a1129/"
        target="_blank"
        className="hover:text-emerald-200"
        rel="noopener noreferrer"
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
    </footer>
  );
}
