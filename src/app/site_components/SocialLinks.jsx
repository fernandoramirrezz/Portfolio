import React from "react";
import { FloatingDock } from "@/components/ui/floating-links";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconBrandLinkedin,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconMail,
  IconFileDescription
} from "@tabler/icons-react";

export function SocialLinks() {
  const links = [
    
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:fernandoramirez.jr@outlook.com",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/fernandoramirezjr"
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/fernandoramirrezz",
    },
    {
        title: "Resume",
        icon: (
          <IconFileDescription className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.linkedin.com/in/fernandoramirezjr/overlay/1745541320394/single-media-viewer/?profileId=ACoAADPGQ6gB3GnbiOQpy3PR1l_KmlZpGqKw0qA",
      },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
    </div>
  );
}

 export default SocialLinks; 