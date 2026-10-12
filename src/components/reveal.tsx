"use client";
import { motion, useReducedMotion } from "framer-motion";
export function Reveal({
  children,
  delayMs = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const reduced = useReducedMotion(),
    Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 1, y: reduced ? 0 : 8 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reduced ? 0 : 0.3,
        delay: Math.min(delayMs, 160) / 1000,
        ease: "easeOut",
      }}
    >
      {children}
    </Tag>
  );
}
