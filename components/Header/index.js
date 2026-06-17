import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const isEditPage = router.pathname === "/edit";
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);
  const closeDrawer = () => setDrawerOpen(false);

  const menuItems = (
    <>
      {!isBlog ? (
        <div className="grid grid-cols-1">
          <Button
            onClick={() => {
              handleWorkScroll();
              closeDrawer();
            }}
          >
            Work
          </Button>
          <Button
            onClick={() => {
              handleAboutScroll();
              closeDrawer();
            }}
          >
            About
          </Button>
          {showBlog && (
            <Button
              onClick={() => {
                router.push("/blog");
                closeDrawer();
              }}
            >
              Blog
            </Button>
          )}
          {showResume && (
            <Button
              onClick={() => {
                router.push("/resume");
                closeDrawer();
              }}
            >
              Resume
            </Button>
          )}
          <Button
            onClick={() => {
              router.push("/contact");
              closeDrawer();
            }}
          >
            Contact
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1">
          <Button
            onClick={() => {
              router.push("/");
              closeDrawer();
            }}
            classes="first:ml-1"
          >
            Home
          </Button>
          {showBlog && (
            <Button
              onClick={() => {
                router.push("/blog");
                closeDrawer();
              }}
            >
              Blog
            </Button>
          )}
          {showResume && (
            <Button
              onClick={() => {
                router.push("/resume");
                closeDrawer();
              }}
              classes="first:ml-1"
            >
              Resume
            </Button>
          )}
          <Button
            onClick={() => {
              router.push("/contact");
              closeDrawer();
            }}
          >
            Contact
          </Button>
        </div>
      )}
    </>
  );

  return (
    <>
      <div className="block tablet:hidden mt-5">
        <div className="flex items-center justify-between p-2 laptop:p-0">
          <h1
            onClick={() => {
              router.push("/");
              closeDrawer();
            }}
            className="font-medium p-2 laptop:p-0 link"
          >
            {name}.
          </h1>

          <div className="flex items-center gap-2">
            {data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
            <button type="button" onClick={toggleDrawer} className="p-2">
              <img
                className="h-5"
                src={`/images/${
                  drawerOpen
                    ? theme === "light"
                      ? "cancel.svg"
                      : "cancel-white.svg"
                    : theme === "dark"
                      ? "menu-white.svg"
                      : "menu.svg"
                }`}
                alt={drawerOpen ? "Close menu" : "Open menu"}
              />
            </button>
          </div>
        </div>

        <div
          className={`fixed inset-0 z-40 transition-opacity duration-300 ${
            drawerOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!drawerOpen}
          onClick={closeDrawer}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>

        <div
          className={`fixed top-0 left-0 z-50 h-full w-11/12 max-w-sm overflow-auto bg-black p-4 shadow-2xl transition-transform duration-300 dark:bg-slate-900 ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-medium">Menu</h2>
            <button type="button" onClick={closeDrawer} className="p-2">
              <img
                className="h-5"
                src={`/images/${
                  theme === "light" ? "cancel.svg" : "cancel-white.svg"
                }`}
                alt="Close menu"
              />
            </button>
          </div>
          {menuItems}
        </div>
      </div>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky container mx-auto z-100 ${
          theme === "light" ? "bg-black" : ""
        } dark:text-white top-0 z-10 tablet:flex bg-opacity-80 backdrop-blur-sm`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}
            <Button onClick={() => router.push("/contact")}>Contact</Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}
            <Button onClick={() => router.push("/contact")}>Contact</Button>
            {isEditPage && (
              <button
                onClick={() => {
                  localStorage.removeItem("admin");
                  router.push("/login");
                }}
                className="px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
              >
                Logout
              </button>
            )}
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
