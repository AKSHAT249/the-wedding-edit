"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function currentYear() {
  return new Date().getFullYear();
}

export function CopyrightYear() {
  const year = useSyncExternalStore(subscribe, currentYear, () => 2026);
  return <span suppressHydrationWarning>{year}</span>;
}
