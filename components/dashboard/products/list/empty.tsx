import { Button } from "@/components/ui/button"

import CreateNewProduct from "../new"

export default async function Empty() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="font-cal text-2xl">You have no products</h3>
          <p className="text-geist-900 text-sm">
            You can start selling as soon as you add a product.
          </p>
          <CreateNewProduct />
        </div>
      </div>
    </main>
  )
}
