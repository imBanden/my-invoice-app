import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { cn } from "@/lib/utils";

const page = async () => {
  const results = await db.select().from(Invoices);
  console.log("results", results);
  return (
    <main className="flex flex-col h-screen items-center gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between w-full items-center">
        <h1 className="font-semibold text-3xl">Invoices</h1>
        <Button variant={"ghost"}>
          <Link
            className="inline-flex gap-2 items-center"
            href={"/invoices/new"}
          >
            <CirclePlus className="h-4 w-4" />
            Create Invoice
          </Link>
        </Button>
      </div>

      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.id}>
              <TableCell className="font-bold text-left p-0">
                <Link
                  href={`invoices/${result.id}`}
                  className="block font-semibold p-4"
                >
                  {new Date(result.createTs).toLocaleDateString()}
                </Link>
              </TableCell>
              <TableCell className="text-left p-0">
                <Link
                  href={`invoices/${result.id}`}
                  className="block font-semibold p-4"
                >
                  Philip J.Fry
                </Link>
              </TableCell>
              <TableCell className="text-left p-0">
                <Link href={`invoices/${result.id}`} className="block p-4">
                  fry@planetexpress.com
                </Link>
              </TableCell>
              <TableCell className="text-center p-0">
                <Link
                  href={`invoices/${result.id}`}
                  className="block font-semibold p-4"
                >
                  <Badge
                    className={cn(
                      "rounded-full capitalize",
                      result.status === "open" && "bg-blue-500",
                      result.status === "paid" && "bg-zinc-600",
                      result.status === "void" && "bg-green-700",
                      result.status === "uncollectible" && "bg-red-600"
                    )}
                  >
                    {result.status}
                  </Badge>
                </Link>
              </TableCell>
              <TableCell className="text-right p-0">
                <Link
                  href={`invoices/${result.id}`}
                  className="block font-semibold p-4"
                >
                  ${(result.value / 100).toFixed(2)}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
};

export default page;
