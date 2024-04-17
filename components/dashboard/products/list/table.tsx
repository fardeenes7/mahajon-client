import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import ActionButton from "@/components/dashboard/products/list/tableAction"

export default function ProductTable({
  slug,
  products,
}: {
  slug: string
  products: any[]
}) {
  return (
    <Table className="rounded-md border bg-secondary shadow">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell className="text-right">{product.price}</TableCell>
            <TableCell className="p-0 text-right">
              <ActionButton slug={slug} id={product.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}