"use client";

import React from "react";
import NextError from "next/error";

const Error = ({ error }: { error: Error }) => {
  return <NextError statusCode={500} title={error.message} />;
};

export default Error;
