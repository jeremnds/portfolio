import React from "react";

export default function Links() {
  return (
    <div className="flex flex-col gap-1 sm:flex-row   text-sm ">
      <div className="flex gap-1">
        <a
          href="https://github.com/jeremnds?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-200"
        >
          github
        </a>
        <span className="">·</span>
        <a
          href="https://www.linkedin.com/in/j%C3%A9r%C3%A9my-mendes-9984a1129/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-200"
        >
          linkedin
        </a>
      </div>
      <span className="hidden sm:block">·</span>
      <a
        href="mailto:jmendescontact@gmail.com"
        className="hover:text-emerald-200"
      >
        jmendescontact@gmail.com
      </a>
    </div>
  );
}
