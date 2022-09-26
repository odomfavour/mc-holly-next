import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { headerLinks } from "./appData";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handelScroll);
    console.log(router.pathname);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="w-11/12 mx-auto">
        <div className="header-inner">
          <div>
            <h3
              className={`(${
                router.pathname !== "/" && isScrolled
                  ? "text-xl text-white"
                  : router.pathname !== "/" && !isScrolled
                  ? "text-xl text-black"
                  : "text-xl text-white"
              }`}
            >
              Logo
            </h3>
          </div>
          <ul className="hidden space-x-4 lg:flex">
            {headerLinks.map((item) => {
              const { id, name, url } = item;
              return (
                <li
                  key={id}
                  className={`${
                    router.pathname !== "/" && isScrolled
                      ? "headerLink text-white"
                      : router.pathname !== "/" && !isScrolled
                      ? "headerLink text-black"
                      : "headerLink text-white"
                  }`}
                >
                  <Link href={url}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
