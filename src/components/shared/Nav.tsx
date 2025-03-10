"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const navData = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "services",
      path: "#services",
    },
    {
      name: "resume",
      path: "#resume",
    },
    {
      name: "work",
      path: "#work",
    },
    {
      name: "contact",
      path: "#contact",
    },
  ];
  const pathName = usePathname();
  return (
    <nav className="flex gap-8">
      {navData.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className={`${
            item.path === pathName &&
            " text-primary-accent border-b-2 border-primary-accent"
          } capitalize font-medium hover:text-primary-accent transition-all`}
        >
          <p>{item.name}</p>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
