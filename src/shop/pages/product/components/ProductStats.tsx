// import { getProductAction } from "../../../actions/get-product.action";
// import { useParams } from "react-router";

// export const ProductStats = () => {
//   const { idSlug = "" } = useParams();

//   const product = getProductAction(idSlug);


//   let inStock = ''
//   if (!product) {
//     inStock = "Unavailable"
//   } else {
//     inStock = 'Available'
//   };
//   const availableSizes = product?.sizes.filter((s) => s.split(','));

//   const stats = [
//     { label: "Status", value: inStock },
//     { label: "Stock", value: product?.sizes.length === undefined ? "Empty" : "Available" },
//     { label: "Images", value: String(product?.image.length) },
//     { label: "Sizes", value: String(availableSizes) },
//   ]

//   return (
//     <dl className="grid grid-cols-2 divide-x divide-y divide-border border-y border-border md:grid-cols-4 md:divide-y-0">
//       {stats.map((stat, index) => (
//         <div key={index} className="px-6 py-8 text-center">
//           <dt className="text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
//             {stat.label}
//           </dt>
//           <dd className="mt-2 text-lg font-light text-foreground">
//             {stat.value}
//           </dd>
//         </div>
//       ))}
//     </dl>
//   )
// }
