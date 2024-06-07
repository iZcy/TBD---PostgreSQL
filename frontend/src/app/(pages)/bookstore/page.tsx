import { Metadata } from "next";
import BookstoreContents from "@/components/BookstoreContents";

export const metadata: Metadata = {
  title: "Bookstore | iZcy in TBD",
  description: "Good Reading Bookstore's API (TBD Part B)"
};

export default function Bookstore() {
  return <BookstoreContents />;
}
