import { Metadata } from "next";
import React from "react";
import ContextProviderHugger from "@/components/ContextProviderHugger";

export const metadata: Metadata = {
  title: "Database | iZcy in TBD",
  description: "Good Reading Bookstore's API (TBD Part B)"
};

export default function LayoutPages({
  children
}: {
  children: React.ReactNode;
}) {
  return <ContextProviderHugger>{children}</ContextProviderHugger>;
}
