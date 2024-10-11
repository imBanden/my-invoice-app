"use client";

import React from "react";
import { Button } from "./ui/button";
import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <Button className="relative font-semibold">
      <span className={pending ? "text-transparent" : ""}>Submit</span>
      {pending && (
        <span className="flex justify-center items-center absolute w-full h-full">
          <LoaderCircle className="animate-spin" />
        </span>
      )}
    </Button>
  );
};

export default SubmitButton;
