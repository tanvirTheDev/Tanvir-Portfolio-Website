import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
type TSocialProps = {
  containerStyles: string;
  iconStyles: string;
};
const Social = ({ containerStyles, iconStyles }: TSocialProps) => {
  const socials = [
    { icon: <FaGithub />, path: "" },
    { icon: <FaLinkedin />, path: "" },
    { icon: <FaYoutube />, path: "" },
    { icon: <FaTwitter />, path: "" },
  ];
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} className={iconStyles} href={item.path}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
