import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="max-w-5xl mx-auto flex justify-between items-center py-4">
      <p>
        <Link href={"/dashboard"}>Invoicipedia</Link>
      </p>
      <div className="bg-zinc-300 rounded-full w-10 h-10"></div>
    </div>
  );
};

export default Header;
