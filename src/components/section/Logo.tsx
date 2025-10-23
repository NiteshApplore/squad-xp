"use client";
import { Code } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-3xl font-bold flex items-center">
      <span className="mr-1 text-[#3E75F4]">Squad</span>
      <span className="text-[#00BDD6]">XP</span>
      <Code className="h-5 w-5 ml-1 animate-pulse text-[#6A26D7]" />
    </Link>
  );
}
