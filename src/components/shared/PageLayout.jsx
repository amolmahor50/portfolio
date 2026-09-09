import React from "react";

import { cn } from "@/lib/utils";

export default function PageLayout({ children, className }) {
  return <section className={cn("md:max-w-7xl mx-auto", className)}>{children}</section>;
}
