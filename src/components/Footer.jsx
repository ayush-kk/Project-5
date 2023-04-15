import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={
            "https://avatars.githubusercontent.com/u/130284259?s=400&u=3cfbe00b379135bdf5bd597d4690d0d18ff1dc32&v=4"
          }
          alt="Founder"
        />

        <h2>Ayush Kumar</h2>
        <p>
          The process is more important than the results. And if you take care
          of the process, you will get the results.
        </p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com/@amprgaming" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/ayush.kumar_37" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/ayush-kk" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
