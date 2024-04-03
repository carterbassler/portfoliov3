import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col space-y-8 p-3 text-sm md:text-base text-white text-opacity-70">
      <p>
        I’m a recent graduate from the{" "}
        <a
          href="https://www.virginia.edu/"
          target="_blank"
          className="font-bold text-white text-opacity-100 hover:text-opacity-100"
        >
          University of Virginia
        </a>{" "}
        with a Computer Science degree. My interest with computers started when
        I was very young but discovered my passion for{" "}
        <a
          href="https://processing.org/"
          target="_blank"
          className="font-bold text-white text-opacity-100 hover:text-opacity-100"
        >
          programming
        </a>{" "}
        during high school. Since then I’ve taught myself a lot love to hack
        together cool projects in my free time. I love creating and developing
        things that I’m passionate about like my workout tracking app{" "}
        <a
          href="https://apps.apple.com/us/app/imperiumfit/id6449546227?platform=iphone"
          target="_blank"
          className="font-bold text-white text-opacity-100 hover:text-opacity-100"
        >
          Imperium
        </a>
        .
      </p>
      <p>
        Currently, I’m working on building out the{" "}
        <a
          href="https://www.crowdvolt.com/app/about"
          target="_blank"
          className="font-bold text-white text-opacity-100 hover:text-opacity-100"
        >
          Frontend
        </a>{" "}
        of CrowdVolt, a YC backed peer-to-peer, bid-ask style marketplace that
        allows fans to exchange tickets to live events. Go check it out!
      </p>
      <p>
        When I’m not at the computer, I’m usually playing{" "}
        <a
          href="https://www.theonion.com/things-to-never-say-to-someone-who-loves-pickleball-1850540860"
          target="_blank"
          className="font-bold text-white text-opacity-100 hover:text-opacity-100"
        >
          Pickleball
        </a>
        , Sports Betting, or watching{" "}
        <a
          href="https://www.avfc.co.uk/"
          target="_blank"
          className="font-bold text-white text-opacity-100 hover:text-opacity-100"
        >
          Aston Villa
        </a>{" "}
        attempt to regain their former glory.
      </p>
    </div>
  );
}

export default About;
