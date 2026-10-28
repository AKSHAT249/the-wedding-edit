"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { celebrations, eventTypes, venueSpaceOptions } from "@/data/celebrations";
import { PrimaryButton } from "@/components/ui/Button";
import { enquirySchema, type EnquiryValues } from "@/lib/validations";
import { cn } from "@/lib/utils";
import type { EnquiryStatus } from "@/types";

const fieldClass =
  "w-full border border-gold/70 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-maroon";

export function EnquiryForm() {
  const params = useSearchParams();
  const requested = params.get("event");
  const matched = celebrations.find((item) => item.slug === requested);
  const [status, setStatus] = useState<EnquiryStatus | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      eventType: matched?.enquiryValue ?? "",
      preferredDate: "",
      guestCount: "",
      venueSpace: "",
      message: "",
    },
  });

  async function onSubmit(values: EnquiryValues) {
    setStatus(null);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json().catch(() => null)) as
        | { ok?: boolean; code?: string; error?: string }
        | null;

      if (response.ok && data?.ok) {
        setStatus({
          type: "success",
          message:
            "Your enquiry has been sent. Madhur Milan can use these details to reply. This does not confirm a booking.",
        });
        reset({
          fullName: "",
          phone: "",
          email: "",
          eventType: "",
          preferredDate: "",
          guestCount: "",
          venueSpace: "",
          message: "",
        });
        return;
      }

      if (data?.code === "not_configured") {
        setStatus({
          type: "pending",
          message:
            "Your details were checked, but this form is not connected to an enquiry inbox yet, so the message was not sent. Phone, email and WhatsApp will appear on this page once the venue publishes them.",
        });
        return;
      }

      setStatus({
        type: "error",
        message: data?.error || "The enquiry could not be sent. Please try again.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "The enquiry could not be sent. Please check your connection and try again.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <Field label="Full name" htmlFor="fullName" error={errors.fullName?.message} required>
        <input
          id="fullName"
          autoComplete="name"
          className={fieldClass}
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          {...register("fullName")}
        />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone number" htmlFor="phone" error={errors.phone?.message} required>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="Include your country code"
            className={fieldClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
        </Field>
        <Field label="Email address" htmlFor="email" error={errors.email?.message} required>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Event type" htmlFor="eventType" error={errors.eventType?.message} required>
          <select
            id="eventType"
            className={fieldClass}
            aria-invalid={Boolean(errors.eventType)}
            aria-describedby={errors.eventType ? "eventType-error" : undefined}
            {...register("eventType")}
          >
            <option value="">Select an event</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Preferred event date" htmlFor="preferredDate" error={errors.preferredDate?.message}>
          <input
            id="preferredDate"
            type="date"
            className={fieldClass}
            aria-invalid={Boolean(errors.preferredDate)}
            aria-describedby={errors.preferredDate ? "preferredDate-error" : undefined}
            {...register("preferredDate")}
          />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Approximate guest count" htmlFor="guestCount" error={errors.guestCount?.message}>
          <input
            id="guestCount"
            inputMode="numeric"
            className={fieldClass}
            aria-invalid={Boolean(errors.guestCount)}
            aria-describedby={errors.guestCount ? "guestCount-error" : undefined}
            {...register("guestCount")}
          />
        </Field>
        <Field label="Preferred venue space" htmlFor="venueSpace" error={errors.venueSpace?.message}>
          <select
            id="venueSpace"
            className={fieldClass}
            aria-invalid={Boolean(errors.venueSpace)}
            aria-describedby={errors.venueSpace ? "venueSpace-error" : undefined}
            {...register("venueSpace")}
          >
            <option value="">No preference yet</option>
            {venueSpaceOptions.map((space) => (
              <option key={space} value={space}>
                {space}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Additional requirements or message" htmlFor="message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          className={cn(fieldClass, "resize-y")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
      </Field>

      {status ? (
        <p
          role="status"
          className={cn(
            "border px-4 py-3 text-sm leading-6",
            status.type === "success" && "border-maroon bg-ivory text-maroon",
            status.type === "pending" && "border-gold bg-ivory text-ink",
            status.type === "error" && "border-rose bg-white text-rose",
          )}
        >
          {status.message}
        </p>
      ) : null}

      <p className="text-sm leading-6 text-muted">
        Sending this form shares your details so the venue can respond. It does not confirm a
        booking. Read the{" "}
        <Link href="/privacy-policy" className="text-maroon underline decoration-gold underline-offset-4">
          privacy policy
        </Link>
        .
      </p>

      <PrimaryButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send enquiry"}
      </PrimaryButton>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm text-maroon">
        {label}
        {required ? <span className="text-rose"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${htmlFor}-error`} className="mt-2 text-sm text-rose">
          {error}
        </p>
      ) : null}
    </div>
  );
}
