import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="flex flex-col p-3">
      <p className="text-white text-sm md:text-base text-opacity-70">
        Designed and developed by yours truly. Crafted using
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="text-white font-bold text-opacity-100"
        >
          {" "}
          Next.js
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="text-white font-bold text-opacity-100"
        >
          TailwindCSS
        </a>
        ,{" "}
        <a
          href="https://www.framer.com/motion/"
          target="_blank"
          className="text-white font-bold text-opacity-100"
        >
          Framer Motion
        </a>{" "}
        and{" "}
        <a
          href="https://ui.shadcn.com/"
          target="_blank"
          className="text-white font-bold text-opacity-100"
        >
          shadcn/ui
        </a>
        , deployed on{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          className="text-white font-bold text-opacity-100"
        >
          Vercel
        </a>
        . Also utilized{" "}
        <a
          href="https://developer.spotify.com/documentation/web-api"
          target="_blank"
          className="text-white font-bold text-opacity-100"
        >
          Spotify API
        </a>{" "}
        to feature my currently playing song.
      </p>
    </div>
  );
}

export default Footer;
