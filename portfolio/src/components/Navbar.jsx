import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import logo from "../assets/RohanLogo1.png"
import { FaSquareXTwitter } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} className="-ml-7" width={140} height={33} alt="Logo" />
            </a>
        </div>
        <div className="flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/your-linkedin-profile" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
                <FaLinkedin />
            </a>
            <a href="https://github.com/orbit-ronny" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub">
                <FaGithub />
            </a>
            <a href="https://www.instagram.com/in/your-instagram-profile" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram">
                <FaInstagram />
            </a>
            <a href="https://www.twitter.com/in/your-twitter-profile" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter">
                <FaSquareXTwitter />
            </a>
        </div>
    </nav>
  )
}

export default Navbar