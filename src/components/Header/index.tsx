import Link from "next/link";
import { Button } from "../ui/button";
import { ActiveLink } from "../ActiveLink";
import clsx from "clsx";

export function Header() {
  return (
    <header
      className={clsx(
        "fixed",
        "top-0",
        "z-50",
        "w-full",
        "border-b",
        "border-white/10",
        "bg-background/95",
        "backdrop-blur",
        "supports-[backdrop-filter]:bg-bacgkround/60"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="#">Logo</Link>
          <nav className="flex gap-6 items-center">
            <ActiveLink href="/">Início</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button variant="secondary" className="rounded-3xl" asChild>
              <Link href="/start">Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
