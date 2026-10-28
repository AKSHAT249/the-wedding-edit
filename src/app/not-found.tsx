import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center bg-ivory px-6 pb-24 pt-40 text-center">
      <p className="text-[0.72rem] uppercase tracking-[0.32em] text-rose">404</p>
      <h1 className="mt-4 max-w-xl font-serif text-5xl leading-tight text-maroon sm:text-6xl">
        This page has wandered off.
      </h1>
      <p className="mt-4 max-w-md text-base leading-7 text-muted">
        The address may have changed. Return to the lawn, or send an enquiry about your celebration.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <PrimaryButton href="/">Back home</PrimaryButton>
        <SecondaryButton href="/contact">Plan your wedding</SecondaryButton>
      </div>
    </section>
  );
}
