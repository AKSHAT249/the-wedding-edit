import type { Metadata } from "next";
import { TermsContent } from "@/sections/legal/TermsContent";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Editable draft terms for Madhur Milan enquiries and visits. Booking policies are placeholders until the business approves them.",
};

export default function TermsPage() {
  return <TermsContent />;
}