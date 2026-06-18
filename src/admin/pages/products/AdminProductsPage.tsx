import { AdminTitle } from "@/admin/components/AdminTitle"
import { CustomTable } from "@/admin/components/CustomTable"
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { Button } from "@/components/ui/button"
import { useProducts } from "@/shop/hooks/useProducts"
import { PlusIcon } from "lucide-react"
import { Link } from "react-router"

export const AdminProductsPage = () => {
    const { data, isLoading } = useProducts();
    
    if(isLoading) {
        return <CustomFullScreenLoading />
    }
    return (
        <>
            <div className="flex justify-between items-center">
                <AdminTitle
                    title="Productos"
                    subtitle="Aquí puedes ver y administrar tus productos"
                />
                <Link to="/admin/products/new">
                    <Button>
                        <PlusIcon />
                        Nuevo producto
                    </Button>
                </Link>
            </div>

            <CustomTable products={data?.products || []} />

            <CustomPagination totalPages={data?.pages || 0}/>
        </>
    )
}