"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TryPage = () => {
  return (
    <main className="flex flex-col h-screen gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between w-full items-center">
        <h1 className="font-semibold text-3xl">Create Invoice</h1>
      </div>
      <form>
        <div className="grid gap-4 max-w-xs">
          <Label className="block font-semibold text-sm">Email</Label>
          <Input name="name" type="email" />
          <Label className="block font-semibold text-sm">Password</Label>
          <Input name="password" type="password" />
          <Label className="block font-semibold text-sm">Retype Password</Label>
          <Input name="confirmPassword" type="password" />
          <Button>Submit</Button>
        </div>
      </form>
    </main>
  );
};

export default TryPage;
