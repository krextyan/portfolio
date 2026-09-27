"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    const scrollToTop = () => window.scrollTo(0, 0);

    window.addEventListener("popstate", scrollToTop);
    window.addEventListener("pageshow", scrollToTop);
    scrollToTop();

    return () => {
      window.removeEventListener("popstate", scrollToTop);
      window.removeEventListener("pageshow", scrollToTop);
    };
  }, [pathname]);

  return null;
}