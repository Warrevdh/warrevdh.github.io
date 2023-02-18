import "./aboutme.scss";
import AboutMeImg from "../../images/AboutMeImg.jpeg";
import AboutMeImg2 from "../../images/AboutMeImg2.jpeg";

export default function AboutMe() {
  return (
    <div
      className="md:flex md:flex-row w-auto md:h-1/2 relative backgroundAboutMe"
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
      <h1 className="text-4xl font-bold mb-3">About me</h1>
      <p className="text-xl text-black">
        Hi, my name is <span class="font-semibold hoverText">Warre</span>, I'm a
        19 year old student at HOGENT University of Applied Sciences and Arts.{" "}
        <br /> I'm currently in my second year of the bachelor's degree,
        <span className="font-semibold hoverText">
          {" "}
          Applied computer science
        </span>
        . <br />
        Apart from my studies, I love to play video games, watch movies and hang
        out with friends.
      </p>
      <p>
        Here you can download my <span className="font-semibold">CV</span>:
      </p>
      <a
        href="#"
        className="text-center text-cyan-900 border border-cyan-900 bg-cyan-200 w-2/5 sm:w-1/5 rounded-2xl mt-3 py-3 px-5 transition duration-500 ease-linear select-none hover:bg-cyan-400"
      >
        Coming soon
      </a>
    </div>
  );
}

function AboutMeImage() {
  return (
    <picture className="md:rounded-3xl flex justify-center md:py-3 md:w-1/2">
      <source className="AboutMeImg" media="(min-width: 500px)" srcset={AboutMeImg} />
      <img className="AboutMeImg" src={AboutMeImg2} alt="" />
    </picture>
  );
}
