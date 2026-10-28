import { z } from "zod";
import { eventTypes, venueSpaceOptions } from "@/data/celebrations";
import { isValidGuestCount, isValidPhone } from "@/lib/utils";

const eventTypeList: readonly string[] = eventTypes;
const venueSpaceList: readonly string[] = venueSpaceOptions;

export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Please use 80 characters or fewer."),
  phone: z
    .string()
    .trim()
    .min(1, "Please enter a phone number.")
    .refine(isValidPhone, "Please enter a valid phone number."),
  email: z.email("Please enter a valid email address."),
  eventType: z
    .string()
    .refine(
      (value) => eventTypeList.includes(value),
      "Please choose an event type.",
    ),
  preferredDate: z
    .string()
    .trim()
    .refine(
      (value) => value === "" || /^\d{4}-\d{2}-\d{2}$/.test(value),
      "Please choose a valid date.",
    ),
  guestCount: z
    .string()
    .trim()
    .refine(
      (value) => value === "" || isValidGuestCount(value),
      "Enter a whole number of guests.",
    ),
  venueSpace: z
    .string()
    .refine(
      (value) => value === "" || venueSpaceList.includes(value),
      "Please choose a venue space.",
    ),
  message: z
    .string()
    .trim()
    .max(2000, "Please keep your message under 2000 characters."),
});

export type EnquiryValues = z.infer<typeof enquirySchema>;
