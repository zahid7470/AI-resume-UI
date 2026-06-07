import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-primary/10 rounded-3xl text-primary">
            <FileQuestion className="w-16 h-16" />
          </div>
        </div>
        <h1 className="text-7xl font-bold tracking-tight text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-4">Page not found</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Sorry, we couldn't find the page you're looking for. The link might be broken or the page may have been removed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="rounded-full shadow-lg">
            <Link href="/">Go back home</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full glass hover:bg-black/5 dark:hover:bg-white/5">
            <Link href="/contact">Contact support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
