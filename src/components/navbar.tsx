"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Category",
    href: "#",
    submenu: [
      { name: "Foods", href: "/category/foods" },
      { name: "Drinks", href: "/category/drinks" },
      { name: "Desserts", href: "/category/desserts" },
    ],
  },
  { name: "Services", href: "/services" },
  { name: "About us", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 md:px-[60px] mt-8 md:mt-[60px]"
    >
      <div className="flex justify-between items-center max-w-[1320px] mx-auto h-14">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-[30px]">
            {navigation.map((item) =>
              item.submenu ? (
                <li key={item.name} className="flex items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-base leading-6 font-medium cursor-pointer hover:text-secondary transition-colors">
                      {item.name}
                      <Image
                        src="/assets/images/icons/arrow_bottom.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="transition-transform"
                      />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.submenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link href={subItem.href}>{subItem.name}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
              ) : (
                <li key={item.name} className="group flex flex-col justify-between h-[28px]">
                  <Link href={item.href} className="text-base leading-6 font-medium">
                    {item.name}
                  </Link>
                  <span className="transition-all duration-300 h-0.5 w-full rounded-full bg-secondary opacity-0 group-hover:opacity-100" />
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8">
                <ul className="flex flex-col gap-4">
                  {navigation.map((item) =>
                    item.submenu ? (
                      <li key={item.name}>
                        <p className="text-base font-semibold mb-2">{item.name}</p>
                        <ul className="ml-4 flex flex-col gap-2">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base text-muted hover:text-secondary transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-base font-medium hover:text-secondary transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </nav>
              <div className="mt-8">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="secondary" className="w-full">
                    Log In
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none">
          <Image
            src="/assets/images/icons/logo.svg"
            alt="Resto Logo"
            width={120}
            height={38}
            className="h-[38px] w-auto"
            priority
          />
        </Link>

        {/* Search and Login */}
        <div className="hidden lg:flex gap-5">
          <form className="group flex w-[322px] gap-2.5 py-4 px-7 bg-white rounded-xl transition-all duration-300 focus-within:ring-2 focus-within:ring-secondary hover:ring-2 hover:ring-secondary">
            <Search className="h-6 w-6 text-muted shrink-0" />
            <Input
              type="text"
              placeholder="Search your favorite food"
              className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </form>
          <Link href="/login">
            <Button variant="secondary" className="w-[104px]">
              Log In
            </Button>
          </Link>
        </div>

        {/* Mobile Search Icon */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon">
            <Search className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
