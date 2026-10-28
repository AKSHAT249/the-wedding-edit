import { enquirySchema } from "@/lib/validations";

/**
 * Integration point for enquiry delivery.
 * Set ENQUIRY_WEBHOOK_URL to a service that accepts a JSON POST.
 * The form reports success only when that service accepts the message.
 */
export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "The enquiry could not be read. Please try again." },
      { status: 400 },
    );
  }

  const parsed = enquirySchema.safeParse(payload);
  if (!parsed.success) {
    return Response.json(
      { ok: false, error: "Please check the form and try again." },
      { status: 400 },
    );
  }

  const webhook = process.env.ENQUIRY_WEBHOOK_URL?.trim();
  if (!webhook) {
    return Response.json(
      {
        ok: false,
        code: "not_configured",
        error:
          "Enquiry delivery is not connected yet, so this message was not sent.",
      },
      { status: 503 },
    );
  }

  let endpoint: URL;
  try {
    endpoint = new URL(webhook);
  } catch {
    return Response.json(
      { ok: false, error: "The enquiry service address is not valid." },
      { status: 500 },
    );
  }

  if (endpoint.protocol !== "https:" && endpoint.protocol !== "http:") {
    return Response.json(
      { ok: false, error: "The enquiry service address is not valid." },
      { status: 500 },
    );
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "madhur-milan-website",
        ...parsed.data,
      }),
    });

    if (!upstream.ok) {
      return Response.json(
        {
          ok: false,
          error: "The enquiry could not be delivered. Please try again shortly.",
        },
        { status: 502 },
      );
    }
  } catch {
    return Response.json(
      {
        ok: false,
        error: "The enquiry could not be delivered. Please try again shortly.",
      },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
