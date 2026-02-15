import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 lg:px-8 lg:pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Spring Boot + Security Powered
              </span>
            </div>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground lg:text-6xl">
              Your Personal{" "}
              <span className="text-primary">Digital Library</span>.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Manage your books, track your reading progress, and secure your data with
              enterprise-grade Spring Security. A modern solution for book enthusiasts.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Build Your Library
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/80"
              >
                Documentation
              </Link>
            </div>
            <div className="mt-10 rounded-lg border border-border bg-card p-4">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  BookEntity.java
                </span>
              </div>
              <pre className="font-mono text-sm leading-relaxed">
                <code>
                  <span className="text-muted-foreground">{"12  "}</span>
                  <span className="text-primary">{"@Column"}</span>
                  <span className="text-foreground">{"(unique = "}</span>
                  <span className="text-emerald-400">{"true"}</span>
                  <span className="text-foreground">{")"}</span>
                  {"\n"}
                  <span className="text-muted-foreground">{"13  "}</span>
                  <span className="text-sky-400">{"String "}</span>
                  <span className="text-foreground">{"isbn;"}</span>
                  {"\n"}
                  <span className="text-muted-foreground">{"14  "}</span>
                  <span className="text-sky-400">{"String "}</span>
                  <span className="text-foreground">{"name;"}</span>
                  {"\n"}
                  <span className="text-muted-foreground">{"15  "}</span>
                  <span className="text-sky-400">{"Integer "}</span>
                  <span className="text-foreground">{"pages;"}</span>
                </code>
              </pre>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative flex items-start justify-center gap-4">
              <div className="relative z-10 -mt-4 w-48 rotate-[-5deg] overflow-hidden rounded-xl border border-border shadow-2xl">
                <Image
                  src="/images/book-spring.jpg"
                  alt="Clean Code book cover"
                  width={200}
                  height={280}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="relative z-20 w-48 overflow-hidden rounded-xl border border-border shadow-2xl">
                <div className="h-64 bg-sky-300" />
              </div>
              <div className="relative z-10 mt-4 w-44 rotate-[3deg] overflow-hidden rounded-xl border border-border shadow-2xl">
                <div className="h-60 bg-card" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8 z-30 flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <Users className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Active Users
                </p>
                <p className="text-xl font-bold text-foreground">12,402</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
