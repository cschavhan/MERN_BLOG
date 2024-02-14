import {
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsFacebook,
  BsGithub,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <>
      <footer className="relative left-0 bottom-0 mt-5  lg:h-[10vh] py-5 flex flex-col sm:flex-row items-center justify-between bg-gray-800 text-white sm:px-20 sm:h-[20vh]">
        <section className="text-lg ">
          copyright {year} | all rights reserved
        </section>
        {/* link */}
        <section className="flex items-center justify-center gap-5 text-2xl text-white">
          <Link className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsFacebook />
          </Link>

          <Link className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsLinkedin />
          </Link>

          <Link className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsInstagram />
          </Link>

          <Link className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsTwitter />
          </Link>

          <Link
            to={"https://github.com/cschavhan/MERN_BLOG"}
            className="hover:text-yellow-500 transition-all ease-in-out duration-300"
          >
            <BsGithub />
          </Link>
        </section>
      </footer>
    </>
  );
}

export default Footer;
