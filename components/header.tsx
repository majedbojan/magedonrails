"use client"

import { useState } from "react"
import Link from "next/link"
import Image from 'next/image';

import { MenuIcon } from "lucide-react"

import { ThemeSwitcher } from "./theme-switcher"

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen)
  const logoSrc = '/logo.png';

  return (
    <nav className="mb-12">
      <div className="mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link href="/" legacyBehavior>
                <a className="flex items-center">
                  <Image
                    src={logoSrc}
                    alt={'Site Logo'}
                    width={100} // Adjust width as per your design requirements
                    height={50} // Adjust height as per your design requirements
                    priority // Optimize for faster loading
                  />
                </a>
              </Link>
            </div>
            <div className="hidden sm:ml-12 sm:flex sm:items-center">
              <div className="space-x-6 text-sm font-medium">
                <Link href="/">Home</Link>
                <Link href="/about">Who I Am</Link>
                <Link href="/hireme">Hire Me</Link>
              </div>
            </div>
          </div>
          <ThemeSwitcher />
        </div>
      </div>

      <div
        className={`space-y-4 px-2 sm:hidden ${
          isMobileOpen ? "block" : "hidden"
        }`}
        id="mobile-menu"
      >
        <div>
          <Link href="/" onClick={toggleMobileMenu}>
            Home
          </Link>
        </div>
        <div>
          <Link href="/about" onClick={toggleMobileMenu}>
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
