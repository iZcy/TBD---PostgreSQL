import { Metadata } from "next";
import MainContent from "@/components/MainContents";

export const metadata: Metadata = {
  title: "iZcy in TBD",
  description: "Good Reading Bookstore's API (TBD Part B)"
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainContent />
    </main>
  );
}
