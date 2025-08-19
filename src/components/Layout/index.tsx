import { PropsWithChildren } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative flex flex-col max-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
