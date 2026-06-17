import { ProductStats } from "./components/ProductStats"
import { ProductGallery } from "./components/ProductGallery"
import { ProductInfo } from "./components/ProductInfo"
import { useParams } from "react-router"
import { getProductAction } from "../../actions/get-product.action"

export const ProductPage = () => {
    const { idSlug = "" } = useParams();

    const product = getProductAction(idSlug);

    return (
        <main className="min-h-screen bg-background text-foreground">

            {/* Product */}
            <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-12 lg:grid-cols-2 lg:gap-16">
                <ProductGallery />
                <ProductInfo />
            </section>

            {/* Stats */}
            <section className="mx-auto max-w-7xl px-6 py-8">
                <ProductStats />
            </section>

            {/* Full-bleed lifestyle */}
            <section className="relative mt-12 aspect-video w-full overflow-hidden bg-muted md:aspect-21/9">
                <img
                    src={product?.images}
                    alt={product?.name}
                    className="object-cover w-full"
                />
            </section>
        </main>
    )
}