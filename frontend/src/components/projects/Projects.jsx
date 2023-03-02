import "./projects.scss";
import QuizMaker from "../../images/QuizMaker.png";
import Zatre from "../../images/zatre.jpg";
import Delaware from "../../images/Logo_of_delaware.svg.png";

export default function Projects() {
  return (
    <div
      className="text-center py-5 cursor-default bg-gradient-to-r from-gray-300 to-gray-700"
      id="projects"
    >
      <h1 className="text-6xl font-bold">Projects</h1>
      <QuizMakerProject />
      <ZatreProject />
      <DelawareProject />
    </div>
  );
}

function QuizMakerProject() {
  return (
    <div className="grid md:grid-cols-2 md:h-[21rem] mx-auto mt-5 bg-gradient-to-r from-gray-300 to-gray-700">
      <a
        href="https://quizmaker-wv.onrender.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="rounded-full mx-auto my-5 imgProjects"
          src={QuizMaker}
          alt=""
        />
      </a>
      <div className="flex flex-col mr-5">
        <h2 className="text-xl font-bold text-gray-50">QuizMaker</h2>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-50">
          This was my first project that I made for two courses of my education,
          Front End Development and Web Services. <br /> This project is a web
          application made for people who want to make and play quizzes. <br />
          The application is made with React and NodeJS. I used bootstrap for
          the styling. I used a MySQL database and used Prisma as an ORM to make
          the backend easier to work with.
          <br />
          <div className="font-bold mt-1">Important:</div> The database is
          currently not hosted on the internet, so the application might not
          work anymore.
        </p>
      </div>
    </div>
  );
}

function ZatreProject() {
  return (
    <div className="grid md:grid-cols-2 md:h-[21rem] pr-5 bg-gradient-to-r from-gray-700 to-gray-300">
      <div className="flex flex-col ml-5 justify-center">
        <h2 className="text-xl font-bold text-gray-50">Zatre</h2>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-gray-50 to-gray-200">
          In the second semester of my first year of my bachelor we were tasked
          to make a german boardgame called ZATRE. <br />
          We had to make this game in a group of 5 people. <br />
          We had to use Java and JavaFX for the frontend and Java for the
          backend. We connected this application to a MySQL database.
        </p>
      </div>
      <img
        className="rounded-full mx-auto my-5 imgProjects"
        src={Zatre}
        alt=""
      />
    </div>
  );
}

function DelawareProject() {
  return (
    <div className="grid md:grid-cols-2 md:h-[21rem] pr-5 pt-7 bg-gradient-to-r from-gray-300 to-gray-700">
      <a
        className="flex justify-center"
        href="https://www.delaware.pro/en-be"
        target="_blank"
        rel="noreferrer"
      >
        <img className="w-1/2 self-center" src={Delaware} alt="" />
      </a>
      <div className="flex flex-col ml-5 justify-center">
        <h2 className="text-xl font-bold text-gray-50">Delaware</h2>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-50">
          In the second semester of my second year of my bachelor we were tasked
          to make a website and java application for a company called Delaware.
          <br />
          We had to make this website and application in a group of 5 people.{" "}
          <br />
          For the website we had to use ReactJS with a NodeJS backend and for
          the application we had to use Java and JavaFX.
        </p>
      </div>
    </div>
  );
}
