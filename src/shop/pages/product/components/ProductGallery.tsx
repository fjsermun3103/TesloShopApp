// // import { useState } from "react"
// // import { cn } from "@/lib/utils"
// import { useParams } from "react-router";
// import { getProductAction } from "../../../actions/get-product.action";

// export const ProductGallery = () => {
//     // const [active, setActive] = useState(0)

//     const { idSlug = "" } = useParams();

//     const product = getProductAction(idSlug);
//     return (
//         <div className="flex flex-col gap-4">
//             <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-muted">
//                 <img
//                     src={product?.image}
//                     alt={product?.name}
//                     className="object-cover w-full h-full"
//                 />
//             </div>

//             {/* <div className="grid grid-cols-4 gap-4">
//                 {product?.image.map((image, index) => (
//                     <button
//                         key={image.src}
//                         onClick={() => setActive(index)}
//                         aria-label={`View ${image.alt}`}
//                         aria-current={active === index}
//                         className={cn(
//                             "relative aspect-square overflow-hidden rounded-sm bg-muted transition-opacity",
//                             active === index
//                                 ? "ring-1 ring-foreground"
//                                 : "opacity-60 hover:opacity-100",
//                         )}
//                     >
//                         <img
//                             src={image.src || "/placeholder.svg"}
//                             alt={image.alt}
//                             sizes="20vw"
//                             className="object-cover"
//                         />
//                     </button>
//                 ))}
//             </div> */}
//         </div>
//     )
// }