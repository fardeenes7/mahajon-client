import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"

export default function ProductSearch() {
  return (
    <form>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 size-4 text-geist-900" />
        <Input
          type="search"
          placeholder="Search products..."
          className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
        />
      </div>
    </form>
  )
}
