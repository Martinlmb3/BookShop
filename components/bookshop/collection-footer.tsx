import { BookOpen, HelpCircle, Settings } from "lucide-react"
import Link from "next/link"

export function CollectionFooter() {
  return (
    <footer className="mt-12 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <BookOpen className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">BookShop</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A robust book management platform built with Spring Boot, Security, and Modern
              Frontend practices.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Quick Navigation
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link
                  href="/collection"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Library Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/browse"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Global Search
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  API Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Security Settings
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              System Health
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-sm text-muted-foreground">
                  PostgreSQL Database: Online
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-sm text-muted-foreground">
                  Spring Security: Active
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2 rounded-lg bg-secondary px-3 py-2">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span className="font-mono text-xs text-muted-foreground">
                  BUILD V2.4.1-STABLE
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            {"© 2024 BookShop Platform. All rights reserved."}
          </p>
          <div className="flex items-center gap-3">
            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
              <HelpCircle className="h-4 w-4" />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground">
              <Settings className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
