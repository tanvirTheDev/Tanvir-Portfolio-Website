"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
const MobileNav = () => {
  const navData = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "services",
      path: "/services",
    },
    {
      name: "resume",
      path: "/resume",
    },
    {
      name: "work",
      path: "/work",
    },
    {
      name: "blog",
      path: "/blog",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-primary-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Tanvir <span className="text-primary-accent">Ahamed</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8">
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
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
