import { Metadata } from "next";
import React from "react";
import ContextProviderHugger from "@/components/ContextProviderHugger";

export default function LayoutPages({
  children
}: {
  children: React.ReactNode;
}) {
  return <ContextProviderHugger>{children}</ContextProviderHugger>;
}
