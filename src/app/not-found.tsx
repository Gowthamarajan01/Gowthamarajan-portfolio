import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignalTrace } from "@/components/shared/signal-trace";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <SignalTrace className="h-16 w-64 opacity-70" />
      <p className="mt-6 font-mono text-sm text-accent">404</p>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        This route doesn&apos;t resolve.
      </h1>
      <p className="mt-4 max-w-md text-sm text-muted-foreground">
        The page you&apos;re looking for moved, never existed, or the link is
        broken. Head back and try again.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </Button>
    </div>
  );
}
