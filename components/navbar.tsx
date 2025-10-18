import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-foreground bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="grid grid-cols-2 gap-1 w-6 h-6">
              <div className="bg-foreground" />
              <div className="bg-foreground" />
              <div className="bg-foreground" />
              <div className="bg-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              VERI-SIGN<sup className="text-xs">®</sup>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/create"
              className="text-sm font-mono uppercase tracking-widest hover:text-accent transition-colors"
            >
              Create
            </Link>
            <Link
              href="/verify"
              className="text-sm font-mono uppercase tracking-widest hover:text-accent transition-colors"
            >
              Verify
            </Link>
            <Link
              href="#docs"
              className="text-sm font-mono uppercase tracking-widest hover:text-accent transition-colors"
            >
              Docs
            </Link>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="border-2 border-foreground font-mono uppercase tracking-widest bg-transparent"
          >
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  )
}
