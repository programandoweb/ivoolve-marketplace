import ProductDescription from "@/components/products/description";
import { products } from "@/utils/data";
const name  =   "Store Offers";

const ProductDetail=(props:any)=>{
    const product:any = products.find(search=>search.slug===props.params.slug);
    return  <ProductDescription  product={product}/>
}
export default ProductDetail;

export async function generateMetadata(props:any) {
    const product:any = products.find(search=>search.slug===props.params.slug);
    return {
        title: product.name+" - "+process.env.NEXT_PUBLIC_NAME+' '+name,
        description: product.name+": "+product.excerpt,
        applicationName: process.env.NEXT_PUBLIC_NAME+' '+name,  
        openGraph:{
            title: product.name+" - "+process.env.NEXT_PUBLIC_NAME+' '+name,
            description: product.name+": "+product.excerpt,
            image:product.cover
        }
    }
}

