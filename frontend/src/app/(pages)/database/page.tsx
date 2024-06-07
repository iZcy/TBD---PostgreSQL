import { Metadata } from "next";
import DatabaseContent from "@/components/DatabaseContents";

export const metadata: Metadata = {
  title: "Database | iZcy in TBD",
  description: "Good Reading Bookstore's API (TBD Part B)"
};

export default function DatabasePage() {
  return <DatabaseContent />;
}
