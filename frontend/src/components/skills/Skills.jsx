import "./skills.scss";
import htmlIcon from "../../images/htmlIcon.png";
import cssIcon from "../../images/cssIcon.png";
import jsIcon from "../../images/jsIcon.png";
import javaIcon from "../../images/javaIcon.png";
import nodejsIcon from "../../images/nodejsIcon.png";
import prismaIcon from "../../images/prismaIcon.png";
import pythonIcon from "../../images/pythonIcon.png";
import sassIcon from "../../images/sassIcon.png";
import tailwindIcon from "../../images/tailwindIcon.png";

export default function Skills() {
  return (
    <div
      className="text-center py-5 cursor-default bg-gradient-to-r from-gray-700 to-gray-300"
      id="skills"
    >
      <h1 className="text-6xl font-bold">Skills</h1>
      <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-y-4 text-md md:mx-16">
        <div className="grid grid-rows-2 justify-center">
          <img className="icon" src={htmlIcon} alt="" />
          <p className="mt-2 text-gray-100">HTML</p>
        </div>
        <div className="grid grid-rows-2 justify-center">
          <img className="icon" src={cssIcon} alt="" />
          <p className="mt-2 text-gray-200">CSS</p>
        </div>
        <div className="grid grid-rows-2 justify-center">
          <img className="icon" src={jsIcon} alt="" />
          <p className="mt-2">Javascript</p>
        </div>
        <div className="grid grid-rows-2 justify-center">
          <img className="icon" src={javaIcon} alt="" />
          <p className="mt-2 text-gray-100">Java</p>
        </div>
        <div className="grid grid-rows-2 justify-center">
          <img className="icon" src={nodejsIcon} alt="" />
          <p className="mt-2 text-gray-200">NodeJS</p>
        </div>
        <div className="grid grid-rows-2 justify-center">
          <img className="icon" src={prismaIcon} alt="" />
          <p className="mt-2">Prisma</p>
        </div>
        <div className="grid grid-rows-2 justify-center">
          <img className="icon" src={pythonIcon} alt="" />
          <p className="mt-2 text-gray-100">Python</p>
        </div>
        <div className="grid grid-rows-2 justify-center">
          <img className="icon" src={sassIcon} alt="" />
          <p className="mt-2 text-gray-200">Sass</p>
        </div>
        <div className="grid grid-rows-2 justify-center">
          <img className="icon" src={tailwindIcon} alt="" />
          <p className="mt-2">TailwindCSS</p>
        </div>
      </div>
    </div>
  );
}
