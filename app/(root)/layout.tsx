import Link from "next/link";
import Image from "next/image";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="root-layout">
      <nav>
        <Link href={"/"} className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" height={48} width={36}></Image>
          <h2 className="text-primary-100">SpeakWise</h2>
        </Link>
      </nav>
      {children}
    </div>
  );
};
export default RootLayout;
