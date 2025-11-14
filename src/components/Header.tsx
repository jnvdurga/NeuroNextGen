"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import { navItems } from "@/utilities/data";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  let closeTimeout: any;

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    setActiveMenu(null);
    router.push(path);
  };

  const handleMouseEnter = (title: string) => {
    clearTimeout(closeTimeout);
    setActiveMenu(title);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => setActiveMenu(null), 200);
  };

  useEffect(() => {
    return () => clearTimeout(closeTimeout);
  }, []);

  return (
    <header
      className={`absolute top-0 left-0 w-full z-[9999] px-5 py-3 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${isMenuOpen ? "backdrop-blur-2xl h-full" : ""}`}
    >
      <div className="max-w-screen-xl mx-auto">
        <nav className="flex items-center justify-between rounded-xl p-4 backdrop-blur-xl">
          {/* ✅ Left: Logo */}
<div className="flex items-center space-x-3">
  <div className="flex items-center justify-center">
    <Link href="/">
      <Image
        src="https://res.cloudinary.com/dohksngyi/image/upload/v1763050438/neuro1_ecdiy9.png"
        alt="newuro logo"
        width={160}
        height={60}
        className="object-contain transition-all duration-300 
                   w-[100px] h-auto sm:w-[120px] md:w-[140px] lg:w-[170px] xl:w-[190px]"
      />
    </Link>
  </div>
</div>


          {/* ✅ Middle: Nav Links (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-8 relative">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              const hasSubmenu = item.submenu && item.submenu.length > 0;

              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span
                    onClick={() => !hasSubmenu && handleNavigation(item.path)}
                    className={`relative text-base font-medium transition-colors duration-300 cursor-pointer after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-blue-300 after:transition-all after:duration-300 ${
                      isActive
                        ? "text-blue-300 after:w-full"
                        : "text-gray-300 hover:text-blue-300 after:w-0 hover:after:w-full"
                    }`}
                  >
                    {item.title}
                  </span>

                  {/* ✅ Submenu */}
                  {hasSubmenu && activeMenu === item.title && (
                    <div className="fixed left-1/2 top-[80px] -translate-x-1/2 opacity-100 visible transition-all duration-300 z-50 w-[80%]">
                      <div className="bg-black/90 backdrop-blur-xl border border-gray-800 rounded-xl py-6 px-10 text-white shadow-2xl animate-slideDown flex justify-start gap-10 w-auto">
                        {item.submenu?.map((column, colIdx) => (
                          <div key={colIdx} className="flex-1 min-w-[220px]">
                            <h4 className="uppercase text-gray-400 text-xs mb-4 tracking-wider">
                              {column.heading}
                            </h4>

                            <div className="space-y-3">
                              {column.items?.map((subItem, subIdx) => (
                                <span
                                  key={subIdx}
                                  onClick={() =>
                                    handleNavigation(subItem.path || "#")
                                  }
                                  className="flex items-start gap-3 hover:bg-white/10 p-2 rounded-md transition-all duration-200 cursor-pointer"
                                >
                                  {typeof subItem.icon === "string" ? (
                                    <img
                                      src={subItem.icon}
                                      alt={subItem.title}
                                      className="w-6 h-6 opacity-90"
                                    />
                                  ) : (
                                    subItem.icon && (
                                      <span className="text-lg text-white opacity-90">
                                        <subItem.icon size={20} />
                                      </span>
                                    )
                                  )}

                                  <div>
                                    <h5 className="text-sm font-medium">
                                      {subItem.title}
                                    </h5>
                                    {subItem.desc && (
                                      <p className="text-xs text-gray-400">
                                        {subItem.desc}
                                      </p>
                                    )}
                                  </div>
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ✅ Right: Button (Desktop Only) */}
          <div className="hidden lg:block">
            <Link
              href="/form"
              className="bg-white text-black text-base font-bold px-6 py-2 rounded-3xl hover:bg-white"
            >
              Book a Demo →
            </Link>
          </div>

          {/* ✅ Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <MdOutlineClose className="w-6 h-6" />
            ) : (
              <MdOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* ✅ Mobile Menu */}
       {isMenuOpen && (
  <nav className="flex flex-col items-center gap-4 mt-6 text-center">
    {navItems.map((link) => {
      const hasSubmenu = !!link.submenu?.length;
      const isExpanded = activeMenu === link.title;

      // Hide other headings when one submenu is open
      if (activeMenu && !isExpanded) return null;

      return (
        <div key={link.title} className="w-full">
          {/* ✅ Main Heading */}
          <button
            onClick={() => {
              if (hasSubmenu) {
                setActiveMenu(isExpanded ? null : link.title);
              } else {
                setIsMenuOpen(false);
                router.push(link.path);
              }
            }}
            className={`w-full flex justify-center items-center gap-2 text-lg transition-colors duration-200 ${
              isExpanded
                ? "text-blue-300  font-semibold"
                : "text-white hover:text-blue-300"
            }`}
          >
            {link.title}
            {hasSubmenu && (
              <span className="text-gray-400 text-sm">
                {isExpanded ? "▲" : "▼"}
              </span>
            )}
          </button>

          {/* ✅ Submenu (expand/collapse below main heading) */}
          {hasSubmenu && isExpanded && (
            <div className="mt-3 space-y-3 bg-black/30 p-4 rounded-lg animate-slideDown">
              {link.submenu?.map((column, colIdx) => (
                <div key={colIdx}>
                  <h4 className="uppercase text-gray-400 text-xs mb-2">
                    {column.heading}
                  </h4>
                  <div className="space-y-2">
                    {column.items?.map((subItem, subIdx) => (
                      <button
                        key={subIdx}
                        onClick={() => {
                          setIsMenuOpen(false);
                          router.push(subItem.path || "#");
                        }}
                        className="w-full text-white text-sm hover:text-blue-300 "
                      >
                        {subItem.title}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    })}

    {/* ✅ "Book a Demo" button stays visible */}
    <Link
      href="/form"
      onClick={() => setIsMenuOpen(false)}
      className="bg-white text-black text-base font-normal px-6 py-2 rounded-2xl mt-4 hover:bg-white"
    >
      Book a Demo →
    </Link>
  </nav>
)}

      </div>
    </header>
  );
};

export default Header;
