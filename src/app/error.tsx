"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 px-6">
      <div className="w-full max-w-md rounded-xl border bg-background p-6 text-center shadow-lg">
        <h2 className="text-2xl font-semibold">
          Something went wrong
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          We couldn&apos;t complete your request. Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-5 rounded-lg bg-primary px-5 py-2 text-primary-foreground hover:opacity-90"
        >
          Try again
        </button>
      </div>
    </main>
  );
}