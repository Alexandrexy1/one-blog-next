import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer
      className={clsx(
        "fixed",
        "bottom-0",
        "w-full",
        "z-50",
        "border-t",
        "border-white/10",
        "bg-background/95",
        "backdrop-blur",
        "supports-[backdrop-filter]:bg-bacgkround/60"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-2">
          <Link href="/" className="flex items-center gap-4 mx-auto md:mx-0">
            <Image
              src="/logo.svg"
              alt="logo do projeto"
              width={52}
              height={40}
            />
            <p className="font-extrabold text-gray-300">One Blog</p>
          </Link>
          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-muted">
              Termos de uso
            </Link>
            <Link href="#" className="hover:text-muted">
              Politica de privacidade
            </Link>
            <Link href="#" className="hover:text-muted">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
