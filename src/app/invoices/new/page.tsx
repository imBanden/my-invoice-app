"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { createAction } from "@/app/actions";
import { SyntheticEvent, useState } from "react";

const page = () => {
  const [state, setState] = useState("ready");
  const handleOnSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (state === "pending") return;
    setState("pending");
    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);
    await createAction(formData);
    console.log("hey");
  };
  return (
    <main className="flex flex-col h-screen gap-6 max-w-5xl mx-auto my-12">
      <div className="flex justify-between w-full items-center">
        <h1 className="font-semibold text-3xl">Create Invoice</h1>
      </div>

      <form action={createAction} onSubmit={handleOnSubmit}>
        <div className="grid gap-4 max-w-xs">
          <Label htmlFor="name" className="block font-semibold text-sm">
            Billing Name
          </Label>
          <Input id="name" name="name" type="text" />
          <Label htmlFor="email" className="block font-semibold text-sm">
            Billing Email
          </Label>
          <Input id="email" name="email" type="email" />
          <Label htmlFor="value" className="block font-semibold text-sm">
            Value
          </Label>
          <Input id="value" name="value" type="text" />
          <Label htmlFor="description" className="block font-semibold text-sm">
            Description
          </Label>
          <Textarea id="description" name="description"></Textarea>
          <Button>Submit</Button>
        </div>
      </form>
    </main>
  );
};

export default page;
