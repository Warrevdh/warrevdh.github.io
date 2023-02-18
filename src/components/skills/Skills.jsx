import "./skills.scss";

export default function Skills() {
  return (
    <div
      className="text-center pt-5 cursor-default backgroundSkills"
      id="skills"
    >
      <h1 className="text-6xl font-bold">Skills</h1>
      <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-y-4 text-7xl md:mx-16">
        <div>
          <i className="fa-brands fa-java w-max"></i>
          <div className="text-lg">Java</div>
          <div className="w-1/3 bg-gray-200 rounded-full h-2.5 mt-2 mb-4 mx-auto">
            <div className="bg-blue-600 h-2.5 rounded-full w-2/3"></div>
          </div>
        </div>
        <div>
          <i className="fa-brands fa-js"></i>
          <div className="text-lg">Javascript</div>
          <div className="w-1/3 bg-gray-300 rounded-full h-2.5 mt-2 mb-4 mx-auto">
            <div className="bg-blue-600 h-2.5 rounded-full w-5/6"></div>
          </div>
        </div>
        <div>
          <i className="fa-brands fa-node"></i>
          <div className="text-lg">NodeJS</div>
          <div className="w-1/3 bg-gray-400 rounded-full h-2.5 mt-2 mb-4 mx-auto">
            <div className="bg-blue-600 h-2.5 rounded-full w-2/3"></div>
          </div>
        </div>
        <div className="">
          <i className="fa-brands fa-python"></i>
          <div className="text-lg">Python</div>
          <div className="w-1/3 bg-gray-200 rounded-full h-2.5 mt-2 mb-4 mx-auto">
            <div className="bg-blue-600 h-2.5 rounded-full w-1/2"></div>
          </div>
        </div>
        <div>
          <i className="fa-brands fa-sass"></i>
          <div className="text-lg">Sass</div>
          <div className="w-1/3 bg-gray-300 rounded-full h-2.5 mt-2 mb-4 mx-auto">
            <div className="bg-blue-600 h-2.5 rounded-full w-3/4"></div>
          </div>
        </div>
        <div>
          <i class="fa-solid fa-code"></i>
          <div className="text-lg">HTML/CSS</div>
          <div className="w-1/3 bg-gray-400 rounded-full h-2.5 mt-2 mb-4 mx-auto">
            <div className="bg-blue-600 h-2.5 rounded-full w-10/12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
