import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-screen items-center gap-6 max-w-5xl mx-auto">
      <h1 className="font-bold text-5xl">Invoicipedia</h1>
      <Button asChild>
        <Link href={"/dashboard"}>Sign in</Link>
      </Button>
    </main>
  );
}
