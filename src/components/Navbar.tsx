import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  Bell,
  Sun,
  Moon,
  Laptop,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const themes = [
  { name: "Light", value: "light", icon: Sun },
  { name: "Dark", value: "dark", icon: Moon },
  { name: "System", value: "system", icon: Laptop },
] as const;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");
  const isMobile = useIsMobile();

  // Theme handling
  useEffect(() => {
    const storedTheme =
      (localStorage.getItem("theme") as typeof theme) || "system";
    setTheme(storedTheme);
    updateTheme(storedTheme);
  }, []);

  const updateTheme = (newTheme: typeof theme) => {
    const root = document.documentElement;

    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.toggle("dark", systemTheme === "dark");
    } else {
      root.classList.toggle("dark", newTheme === "dark");
    }
  };

  const onThemeChange = (newTheme: typeof theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    updateTheme(newTheme);
  };

  // Watch for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        updateTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when switching to desktop
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    // Reset search visibility when switching between mobile and desktop
    setIsSearchVisible(false);
  }, [isMobile]);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest("[data-mobile-menu]")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-black shadow-md"
          : "bg-white dark:bg-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/pickandbuy.png"
                alt="Logo"
                width={120}
                height={100}
              />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-foreground">
                    Categories
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white dark:bg-black absolute left-0 top-10">
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary/50 to-primary p-6 no-underline outline-none focus:shadow-md"
                            href="/category/all"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium text-primary-foreground">
                              Browse All Categories
                            </div>
                            <p className="text-sm leading-tight text-primary-foreground/90">
                              Explore our entire collection of products across
                              all categories
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <Link
                          href="/category/electronics"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Electronics
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Smartphones, Laptops, Gadgets and more
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/category/fashion"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Fashion
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Clothing, Footwear, Accessories for all
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/category/home"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Home & Kitchen
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Furniture, Appliances, Decor and more
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/category/sports"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Sports & Outdoors
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Sports equipment, Outdoor gear and activities
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-foreground">
                    New Arrivals
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white dark:bg-black absolute  left-16 top-full">
                    <ul className="grid gap-3 p-4 w-[200px]">
                      <li>
                        <Link
                          href="/new/today"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Just Added Today
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/new/week"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            This Week's Arrivals
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/new/trending"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Trending Now
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/vendors"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent focus:bg-transparent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Sellers
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-10">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products, brands, categories..."
                className="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-black dark:text-white"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center justify-center">
            {/* Theme Toggle Dropdown - Fixed width to prevent shifting */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-10 h-10 p-0">
                  <div className="w-5 h-5 flex items-center justify-center">
                    {theme === "light" && <Sun size={20} />}
                    {theme === "dark" && <Moon size={20} />}
                    {theme === "system" && <Laptop size={20} />}
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" sideOffset={4}>
                {themes.map(({ name, value, icon: Icon }) => (
                  <DropdownMenuItem
                    key={value}
                    onClick={() => onThemeChange(value)}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Icon size={16} />
                    <span>{name}</span>
                    {theme === value && (
                      <span className="ml-auto text-xs text-brand-600">✓</span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/wishlist"
              className="hidden md:flex p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Heart size={20} />
            </Link>

            <Link
              href="/notifications"
              className="hidden md:flex p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Bell size={20} />
            </Link>

            <Link
              href="/cart"
              className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-brand-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link
              href="/account"
              className="hidden md:flex p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <User size={20} />
            </Link>

            {/* <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <button className="hidden md:flex p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <User size={20} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/account">My Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders">My Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wishlist">Wishlist</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/logout">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}

            {/* Become a Seller Button */}
            <Link href="/vendor/register" className="hidden md:block">
              <Button size="sm" variant="outline">
                Become a Seller
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          data-mobile-menu
          className={`fixed inset-0 z-40 bg-white/90 dark:bg-black/90 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } md:hidden`}
        >
          <div
            className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-black shadow-xl transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close button - Repositioned to top right corner */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="h-[calc(100vh-4rem)] overflow-y-auto">
              <div className="flex flex-col space-y-4 py-4">
                {/* Rest of mobile menu content */}
                <div className="flex flex-col space-y-2 px-4">
                  <Link
                    href="/category/all"
                    className="py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    All Categories
                  </Link>
                  <Link
                    href="/category/electronics"
                    className="py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    Electronics
                  </Link>
                  <Link
                    href="/category/fashion"
                    className="py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    Fashion
                  </Link>
                  <Link
                    href="/category/home"
                    className="py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    Home & Kitchen
                  </Link>
                  <Link
                    href="/category/sports"
                    className="py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    Sports & Outdoors
                  </Link>
                </div>

                <div className="flex flex-col space-y-2 px-4">
                  <Link
                    href="/deals"
                    className="py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    Deals & Offers
                  </Link>
                  <Link
                    href="/new/trending"
                    className="py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    New Arrivals
                  </Link>
                  <Link
                    href="/vendors"
                    className="py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    Top Sellers
                  </Link>
                </div>

                <div className="flex flex-col space-y-2 px-4">
                  <Link
                    href="/account"
                    className="flex items-center space-x-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    <User size={18} />
                    <span>My Account</span>
                  </Link>
                  <Link
                    href="/wishlist"
                    className="flex items-center space-x-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    <Heart size={18} />
                    <span>Wishlist</span>
                  </Link>
                  <Link
                    href="/notifications"
                    className="flex items-center space-x-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    <Bell size={18} />
                    <span>Notifications</span>
                  </Link>
                </div>

                <Link
                  href="/vendor/register"
                  className="flex items-center justify-center space-x-2 py-3 px-4 bg-primary text-primary-foreground rounded-lg"
                >
                  <ShoppingCart size={18} />
                  <span>Become a Seller</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search Overlay */}
        {isMobile && isSearchVisible && (
          <div className="fixed inset-0 z-50 bg-white dark:bg-black">
            <div className="container p-4 mt-16">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products, brands, categories..."
                  className="w-full px-4 py-3 pr-10 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:bg-black dark:text-white text-base"
                  autoFocus
                />
                <button
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2"
                  onClick={toggleSearch}
                >
                  <X size={20} className="text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
