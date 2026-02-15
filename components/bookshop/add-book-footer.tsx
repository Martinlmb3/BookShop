import { BookOpen } from "lucide-react"
import Link from "next/link"

export function AddBookFooter() {
  return (
    <footer className="mt-12 border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-secondary">
            <BookOpen className="h-3 w-3 text-muted-foreground" />
          </div>
          <span className="text-sm font-medium text-muted-foreground">BookShop MS</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href="#"
            className="text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            Support
          </Link>
          <Link
            href="#"
            className="text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
          >
            API Docs
          </Link>
        </nav>
        <p className="text-xs text-muted-foreground">
          {"© 2024 BookShop Web Application. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
