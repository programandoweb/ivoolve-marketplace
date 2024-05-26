import React from "react";
import ProductsItem from "./RelatedItem";
import {products} from "../../utils/data";


const Products = () => {
    return (
        <div className="w-full mt-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">             
                {
                    products.map((product,key) => {
                        if(key>5)return;
                        return  <div className="col-span-3 md:col-span-1 mb-4" key={key}>
                                    <ProductsItem product={product} />
                                </div>
                        }
                    )
                }
            </div>
        </div>
    );
};

export default Products;
