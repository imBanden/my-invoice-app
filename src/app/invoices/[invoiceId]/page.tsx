import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { cn } from "@/lib/utils";
import { eq } from "drizzle-orm";

const InvoicePage = async ({ params }: { params: { invoiceId: string } }) => {
  const invoiceId = parseInt(params.invoiceId);
  if (isNaN(invoiceId)) {
    throw new Error("Invalid Invoice Id");
  }
  const [result] = await db
    .select()
    .from(Invoices)
    .where(eq(Invoices.id, invoiceId))
    .limit(1);

  if (!result) notFound();

  return (
    <main className="flex flex-col h-screen gap-6 max-w-5xl mx-auto my-12">
      <div className="flex w-full items-center gap-8">
        <h1 className="font-semibold text-3xl">Invoices {invoiceId}</h1>
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
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-semibold text-4xl">
          ${(result.value / 100).toFixed(2)}
        </p>
        <p>{result.description}</p>
      </div>

      <div className="flex flex-col">
        <p className="font-bold text-xl">Billing details</p>
        <div className="flex gap-4">
          <p>Invoice Id</p>
          <p>{result.id}</p>
        </div>
        <div className="flex gap-4">
          <p>Invoice Date</p>
          <p>{new Date(result.createTs).toLocaleDateString()}</p>
        </div>
        <div className="flex gap-4">
          <p>Billing Name</p>
          <p></p>
        </div>
        <div className="flex gap-4">
          <p>Billing Email</p>
          <p></p>
        </div>
      </div>
    </main>
  );
};

export default InvoicePage;
