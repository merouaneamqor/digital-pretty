// components/ui/Navbar.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown, Globe, User } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navigation = [
  {
    name: {
      fr: "Trouver un salon",
      ar: "ابحث عن صالون",
      en: "Find a Salon"
    },
    href: "/find"
  },
  {
    name: {
      fr: "Services",
      ar: "خدمات",
      en: "Services"
    },
    href: "/services",
    children: [
      { name: { fr: "Coiffure", ar: "تصفيف الشعر", en: "Hairdressing" }, href: "/services/hair" },
      { name: { fr: "Soins esthétiques", ar: "العناية بالجمال", en: "Beauty Care" }, href: "/services/beauty" },
      { name: { fr: "Massage", ar: "تدليك", en: "Massage" }, href: "/services/massage" },
      { name: { fr: "Manucure & Pédicure", ar: "العناية بالأظافر", en: "Nails" }, href: "/services/nails" },
    ]
  },
  {
    name: {
      fr: "Accès Pro",
      ar: "الوصول المهني",
      en: "Pro Access"
    },
    href: "/pro"
  }
]

const languages = [
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
  { code: "en", label: "English" }
]

interface NavbarProps {
  className?: string
}

export default function Navbar({ className }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState<"fr" | "ar" | "en">("fr")

  return (
    <nav className={cn("bg-white shadow-sm sticky top-0 z-50", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-600 to-gray-600 text-transparent bg-clip-text">
                BeautyBook
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              item.children ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-gray-900">
                    {item.name[currentLang]}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.href}>
                        <Link href={child.href} className="w-full">
                          {child.name[currentLang]}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item.name[currentLang]}
                </Link>
              )
            ))}

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setCurrentLang(lang.code as "fr" | "ar" | "en")}
                    className={cn(
                      currentLang === lang.code && "bg-accent",
                      lang.code === "ar" && "text-right"
                    )}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sign In Button */}
            <Button>
              <User className="mr-2 h-4 w-4" />
              {currentLang === "fr" ? "Se connecter" : currentLang === "ar" ? "تسجيل الدخول" : "Sign In"}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 px-0 mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t">
            {navigation.map((item) => (
              <div key={item.href} className="py-2">
                {item.children ? (
                  <>
                    <div className="text-gray-600 font-medium mb-2">
                      {item.name[currentLang]}
                    </div>
                    <div className="pl-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block text-gray-500 hover:text-gray-900"
                        >
                          {child.name[currentLang]}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-gray-600 hover:text-gray-900 font-medium"
                  >
                    {item.name[currentLang]}
                  </Link>
                )}
              </div>
            ))}
            <DropdownMenuSeparator />
            <div className="pt-4">
              <Button className="w-full">
                <User className="mr-2 h-4 w-4" />
                {currentLang === "fr" ? "Se connecter" : currentLang === "ar" ? "تسجيل الدخول" : "Sign In"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}