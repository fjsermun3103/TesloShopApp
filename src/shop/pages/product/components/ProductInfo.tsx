import { cn } from "@/lib/utils"
import { useParams } from "react-router"
import { getProductAction } from "../../../actions/get-product.action"


export const ProductInfo = () => {
    // const availableSizes = products.sizes.filter((s) => s.available)
    // const [selectedSize, setSelectedSize] = useState(
    //     availableSizes[0]?.value ?? "",
    // )

    // const inStock = products.active && product.stock > 0
    // const { idSlug = "" } = useParams();
    const { idSlug = "" } = useParams();


    const product = getProductAction(idSlug);
    let inStock = ''
    if (!product) {
        inStock = "Unavailable"
    } else {
        inStock = 'available'
    };


    return (
        <div className="flex flex-col">
            {/* State row */}
            <div className="mb-6 flex items-center gap-2">
                <span
                    className={cn(
                        "inline-flex items-center gap-1.5 text-xs font-light tracking-wide",
                        inStock ? "text-foreground" : "text-muted-foreground",
                    )}
                >
                    <span
                        className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            inStock ? "bg-foreground" : "bg-muted-foreground",
                        )}
                        aria-hidden
                    />
                    {inStock ? "Active" : "Unavailable"}
                </span>
                <span className="text-muted-foreground/40">·</span>
                <span className="text-xs font-light tracking-wide text-muted-foreground">
                    {inStock ? `${product?.category} in stock` : "Out of stock"}
                </span>
            </div>

            {/* Name */}
            <h1 className="text-pretty text-4xl font-light tracking-tight text-foreground md:text-5xl">
                {product?.name}
            </h1>

            {/* Price */}
            <p className="mt-6 text-2xl font-light text-foreground">
                {product?.price.toFixed(2)} $
            </p>

            {/* Description */}
            <p className="mt-6 max-w-prose text-pretty text-[15px] leading-relaxed text-muted-foreground">
                {product?.description}
            </p>

            {/* Sizes */}
            <div className="mt-10">
                <div className="mb-3 flex items-baseline justify-between">
                    <h2 className="text-sm font-light tracking-wide text-foreground">
                        Size
                    </h2>
                    <span className="text-xs font-light text-muted-foreground">
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {product?.sizes.map((size, index) => {

                        return (
                            <button
                                key={index}
                                disabled={!size}
                                // onClick={() => setSelectedSize(value)}
                                className="relative h-12 rounded-sm border text-sm font-light tracking-wide transition-colors border-foreground bg-foreground text-background"
                            >
                                {size}
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col gap-3">
                <button
                    disabled={!inStock}
                    className={cn(
                        "h-12 rounded-sm text-sm font-medium tracking-[0.15em] uppercase transition-opacity",
                        inStock
                            ? "bg-foreground text-background hover:opacity-90"
                            : "cursor-not-allowed bg-muted text-muted-foreground",
                    )}
                >
                    {inStock ? "Añadir al carrito" : "Sin stock"}
                </button>
                <button className="h-12 rounded-sm border border-border text-sm font-medium uppercase tracking-[0.15em] text-foreground transition-colors hover:border-foreground">
                    Guardar para después
                </button>
            </div>

            {/* Tags */}
            <div className="mt-10 border-t border-border pt-8">
                <h2 className="mb-4 text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
                    Colors
                </h2>
                <div className="flex gap-2">
                    {
                        product?.colors.map((color, index) => (
                            <span key={index} className="items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-light tracking-wide text-foreground">
                                {color}
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
