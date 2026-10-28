import type { Metadata } from "next";
import { PrivacyPolicyContent } from "@/sections/legal/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Draft notice explaining how a Madhur Milan enquiry form may collect and use contact details. For review before publication.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
