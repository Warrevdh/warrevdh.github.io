import "./projects.scss";
import QuizMaker from "../../images/QuizMaker.png";

export default function Projects() {
  return (
    <div
      className="text-center pt-5 cursor-default backgroundProjects"
      id="projects"
    >
      <h1 className="text-6xl font-bold">Projects</h1>
      <QuizMakerProject />
      <div className="text-sm mt-3">
        I currently don't have any other ongoing or finished projects
      </div>
    </div>
  );
}

function QuizMakerProject() {
  return (
    <div className="grid md:grid-cols-2 mx-auto mt-5">
      <img
        className="rounded-full mx-auto my-5  QuizMakerImg"
        src={QuizMaker}
        alt=""
      />
      <div className="flex flex-col mr-5">
        <h2 className="text-xl font-bold">QuizMaker</h2>
        <p className="curs">
          This was my first project that I made for two courses of my education,
          Front End Development and Web Services. <br /> This project is a web
          application made for people who want to make and play quizzes. <br />
          The application is made with React and NodeJS. I used bootstrap for
          the styling. I used a MySQL database and used Prisma as an ORM to make
          the backend easier to work with.
          <br />
          <div className="font-bold mt-1">Important:</div> The database is not
          hosted on the internet, so you will not be able to use the
          application.
        </p>
      </div>
    </div>
  );
}
