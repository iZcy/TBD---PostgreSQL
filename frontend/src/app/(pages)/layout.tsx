"use client";
import React from "react";
import { GlobalProvider } from "@/components/GlobalContext";

export default function LayoutPages({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <GlobalProvider> {children}</GlobalProvider>
    </div>
  );
}
