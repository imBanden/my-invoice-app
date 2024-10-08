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

const page = () => {
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
          <TableRow>
            <TableCell className="font-bold text-left">10/07/2024</TableCell>
            <TableCell className="text-left font-bold">
              <span className="font-bold">fry@planetexpress.com</span>
            </TableCell>
            <TableCell className="text-left">Philip J.Fry</TableCell>
            <TableCell className="text-center">
              <Badge className="rounded-full">Open</Badge>
            </TableCell>
            <TableCell className="text-right">
              <span className="font-bold">$250.00</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
};

export default page;
