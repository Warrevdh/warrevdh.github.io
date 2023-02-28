import "./contact.scss";

export default function Contact() {
  return (
    <div className="text-center pt-5 backgroundContact">
      <h1 className="text-6xl font-bold cursor-default">Contact me</h1>
      <div className="flex py-5 text-5xl justify-center" id="contact">
        <div className="flex flex-col text-center">
          <a
            href="https://www.discordapp.com/users/337521371414396928"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-discord"></i>
            <p className="text-sm">Discord</p>
          </a>
        </div>
        <div className="flex flex-col text-center mx-5">
          <a
            href="https://www.instagram.com/warre_vandenhoucke/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
            <p className="text-sm">Instagram</p>
          </a>
        </div>
        <div className="flex flex-col text-center mr-5">
          <a
            href="https://www.linkedin.com/in/warre-vandenhoucke-27398b21a/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
            <p className="text-sm">Linkedin</p>
          </a>
        </div>
        <div className="flex flex-col text-center">
          <a
            href="https://github.com/Warrevdh"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
            <p className="text-sm">Github</p>
          </a>
        </div>
      </div>
    </div>
  );
}
