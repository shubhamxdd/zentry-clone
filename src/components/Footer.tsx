import {
  FaDiscord,
  FaInstagram,
  FaProductHunt,
  FaReddit,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const links = [
    {
      href: "#",
      icon: <FaDiscord />,
    },
    {
      href: "#",
      icon: <FaInstagram />,
    },
    {
      href: "#",
      icon: <FaReddit />,
    },
    {
      href: "#",
      icon: <FaTwitter />,
    },
    {
      href: "#",
      icon: <FaProductHunt />,
    },
  ];
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; Shubham 2025. All rights reserved
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-black transition-colors duration-500 ease-in-out hover:text-white "
              onClick={(e) => e.preventDefault()}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href="#"
          className="text-center text-sm hover:underline md:text-right"
          onClick={(e) => e.preventDefault()}
        >Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
