import { ReactComponent as Logo } from "./images/alex-genin-logo.svg";
import AlexGeninPhoto from "./images/alex-genin-w-circle.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  FaRegPaperPlane,
  FaGithub,
  FaLinkedin,
  FaVk,
  FaFacebookF,
} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <Logo />
          <nav>
            <div></div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">About me</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="lang">EN</div>
        </header>
        <main>
          <img src={AlexGeninPhoto} className="photo" alt="Alex Genin" />
          <div className="heading-container">
            <h1>
              <span className="first-word">Alex</span>
              <br />
              Genin
            </h1>
            <h2>Full stack Web Developer who loves his job!</h2>
            <div className="buttons">
              <a id="projects-button" href="#">
                Projects
                <HiArrowNarrowRight size={30} />
              </a>
              <a id="contact-button" href="#">
                Contact
                <FaRegPaperPlane size={24} />
              </a>
            </div>
          </div>
          <div className="social-networks">
            <div className="social-networks-line"></div>
            <FaGithub size={20} />
            <FaLinkedin size={20} />
            <FaVk size={20} />
            <FaFacebookF size={20} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
