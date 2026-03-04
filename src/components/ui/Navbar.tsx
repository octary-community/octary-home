"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconBook,
  IconLayersLinked,
  IconBrandYoutube,
  IconBrandGithub,
  IconBrandInstagram
} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-gray-300" />,
      href: "/",
    },
    {
      title: "Courses",
      icon: <IconBook className="h-full w-full text-current" />,
      href: "/courses",
    },
    {
      title: "Showcase",
      icon: <IconLayersLinked className="h-full w-full text-current" />,
      href: "/showcase",
    },
    {
      title: "Profile Octary",
      icon: (
        <Image
          src="/octary-removebg-preview.png"
          className="w-20 h-10 object-contain"
          alt="Octary Logo"
          width={80}
          height={40}
        />
      ),
      href: "/profile",
    },
    {
      title: "Youtube Channel",
      icon: <IconBrandYoutube className="h-full w-full text-current" />,
      href: "https://www.youtube.com/@octarycommunity",
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-full w-full text-current" />,
      href: "https://www.instagram.com/_octary_",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-current" />,
      href: "#",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full h-25">
      <FloatingDock items={links} />
    </div>
  );
}
