import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import type { Product } from "@/interfaces/product.interface"
import { currencyFormatter } from "@/lib/currency-formatter";
import { PencilIcon } from "lucide-react";
import { Link } from "react-router";

interface Props {
    products: Product[];
}

export const CustomTable = ({ products }: Props) => {
    return (
        <Table className="bg-white p-10 shadow-xs border border-gray-200 mb-10">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-25">ID</TableHead>
                    <TableHead>Imagen</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Precio</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Inventario</TableHead>
                    <TableHead>Tallas</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    products.map((product, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">{product.id}</TableCell>
                            <TableCell>
                                <img
                                    src={product.images[0]}
                                    alt={product.title}
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                            </TableCell>
                            <TableCell>
                                <Link className="hover:text-blue-500 underline" to={`/admin/products/${product.id}`}>
                                    {product.title}
                                </Link>
                            </TableCell>
                            <TableCell>{currencyFormatter(product.price)}</TableCell>
                            <TableCell>{product.gender}</TableCell>
                            <TableCell>{product.stock} stock</TableCell>
                            <TableCell>{product.sizes.join(', ')}</TableCell>
                            <TableCell className="text-right">
                                <Link to={`/admin/products/${product.id}`}>
                                    <PencilIcon className="w-4 h-4 text-blue-500" />
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}