import React from "react";
import { socials } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col gap-5">
          <ul className="flex flex-1 justify-center gap-10 max-md:mt-10">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a
                  target="_blank"
                  //   onClick={() => window.open(url, "_blank")}
                  href={url}
                  className="flex size-10 items-center justify-center rounded-full border-2 border-blue-900 opacity-80 border-s4/25 bg-s1/5 transition-all duration-500 hover:border-sky-800"
                >
                  <img
                    src={icon}
                    alt={title}
                    // className="w-10 object-contain rounded-xl opacity-85"
                    className="size-2/3 rounded-full object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="small-compact flex flex-1 flex-wrap items-center justify-center">
            <a
              target="_blank"
              href="https://github.com/nil1143/nil1143"
              aria-label="readme"
              className="flex p-2 items-center justify-center rounded-full border-2 border-blue-900 opacity-80 border-s4/25 bg-s1/5 transition-all duration-500 hover:border-sky-800"
            >Read Me</a>
          </div>

          <div className="small-compact flex flex-1 flex-wrap items-center justify-center">
            <p className="opacity-50">Copyright, nil1143 </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
