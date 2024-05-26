import BannerGroup from "@/components/banners/Group";
import Products from "@/components/products";
import React from "react";
import { products } from "@/utils/data";

const Tienda = () => {
    return (
        <>
            <BannerGroup />
            <Products dataset={products} title="Productos" />
        </>
    );
}

export default Tienda;
