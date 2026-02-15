import { Navbar } from "@/components/bookshop/navbar"
import { AddBookForm } from "@/components/bookshop/add-book-form"
import { AddBookFooter } from "@/components/bookshop/add-book-footer"

export const metadata = {
  title: "Add New Book - BookShop",
  description: "Add a new book to your personal library collection",
}

export default function AddBookPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar variant="auth" />
      <main className="flex-1">
        <AddBookForm />
      </main>
      <AddBookFooter />
    </div>
  )
}
