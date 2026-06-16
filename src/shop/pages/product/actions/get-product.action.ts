import { products, type Product } from "@/mocks/products.mock"


export const getProductAction =  (id: string):Product | undefined=> {
    const product = products.find((product:Product) => product.id === id);

    return product;
}