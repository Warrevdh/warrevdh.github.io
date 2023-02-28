import "./aboutme.scss";
import AboutMeImg from "../../images/AboutMeImg.jpeg";
import AboutMeImg2 from "../../images/AboutMeImg2.jpeg";

export default function AboutMe() {
  return (
    <div
      className="md:flex md:flex-row w-auto md:h-1/2 relative bg-gradient-to-r from-gray-300 to-gray-700"
      id="aboutme"
    >
      <AboutMeImage />
      <AboutMeText />
    </div>
  );
}

function AboutMeText() {
  return (
    <div className="flex flex-col justify-center p-3 absolute bottom-0 md:relative backdrop-blur md:backdrop-blur-none md:w-1/2 cursor-default">
      <h1 className="text-4xl font-bold mb-3 text-gray-50">About me</h1>
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-50">
        Hi, my name is <span className="font-semibold hoverText">Warre</span>,
        I'm a 19 year old student at HOGENT University of Applied Sciences and
        Arts. <br /> I'm currently in my second year of the bachelor's degree,
        Applied computer science . <br />
        Apart from my studies, I love to play video games, watch movies and hang
        out with friends.
      </p>
      <p className="text-gray-100">
        Here you can view my <span className="font-semibold">CV</span>:
      </p>
      <a
        href="https://github.com/Warrevdh/warrevdh.github.io/raw/main/frontend/src/downloads/CV%20-%20Warre%20Vandenhoucke.pdf"
        target="_blank"
        rel="noreferrer"
        download
        className="text-center text-cyan-900 border border-cyan-900 bg-gray-300 w-2/5 sm:w-1/5 md:w-[150px] lg:w-1/5 rounded-2xl mt-3 py-3 px-5 transition duration-500 ease-linear select-none hover:bg-gray-400 hover:text-white"
      >
        View
      </a>
    </div>
  );
}

function AboutMeImage() {
  return (
    <picture className="md:rounded-3xl flex justify-center md:py-3 md:max-h-[600px] md:w-1/2">
      <source
        className="AboutMeImg"
        media="(min-width: 500px)"
        srcSet={AboutMeImg}
      />
      <img className="AboutMeImg" src={AboutMeImg2} alt="" />
    </picture>
  );
}
