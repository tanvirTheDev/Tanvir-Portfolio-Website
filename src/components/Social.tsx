import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";
type TSocialProps = {
  containerStyles: string;
  iconStyles: string;
};
const Social = ({ containerStyles, iconStyles }: TSocialProps) => {
  const socials = [
    { icon: <FaGithub />, path: "https://github.com/tanvirTheDev" },
    { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/tanvirthedev" },
    // { icon: <FaYoutube />, path: "" },
    { icon: <FaTwitter />, path: "https://x.com/tanvirTheDev" },
    { icon: <FaMedium />, path: "https://medium.com/@tanvirTheDev" },
  ];
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            className={iconStyles}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
