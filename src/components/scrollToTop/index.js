"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
    const pathname = usePathname();

    useEffect(() => {
        // Scroll to top whenever the route changes
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    // No UI needed, this is just a logical component
    return null;
}
